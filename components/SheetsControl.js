// @flow

import type { Milestone, MilestoneMap, NoteMap } from '../constants'
import { trackIds, tracks } from '../constants'

import React from 'react'

declare var gapi: any

const API_KEY = 'AIzaSyCPZccI1B543VHblD__af_JvV2b8Z5-Lis'
const CLIENT_ID = '124466069863-0uic3ahingc9bst2oc95h29nvu30lrnu.apps.googleusercontent.com'

const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
const SCOPES = "https://www.googleapis.com/auth/spreadsheets"

const RANGE = `B1:C${trackIds.length+3}`

const DOCS_URL_REGEX = /^https:\/\/docs.google.com\/spreadsheets\/d\/([0-9a-zA-Z_\-]+)/

type Props = {
  name: string,
  title: string,
  onImport: (name: string, title: string, milestones: Milestone[], notes: string[]) => void,
  milestoneByTrack: MilestoneMap,
  notesByTrack: NoteMap
}

type State = {
  isSignedIn: boolean,
  sheetId: string
}

export default class SheetsControl extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isSignedIn: false,
      sheetId: '',
    }
  }

  componentDidMount() {
    window.sheetsControl = this
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.isSignedIn && !prevState.isSignedIn) {
      this.importSheet()
    }
  }

  componentWillUnmount() {
    delete window.sheetsControl
  }

  initClient() {
    console.log('initing')
    gapi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
    }).then(() => {
      console.log('promise resolved')
      // Listen for sign-in state changes.
      gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus.bind(this))

      // Handle the initial sign-in state.
      this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get())
    }).catch(error => {
      console.log('init failed', error)
    })
  }

  updateSigninStatus(isSignedIn: boolean) {
    console.log('signed in', isSignedIn)
    this.setState({ isSignedIn })
  }

  render() {
    const style = <style jsx>{`
        button,input {
          font-size: 20px;
          line-height: 20px;
          margin-bottom: 20px;
          margin-left: 3px;
          min-width: 100px;
        }
        button {
          border: 1;
          background: #eee;
          border-radius: 0px;
        }
      `}</style>

    if (!this.state.isSignedIn) {
      return (
        <div>
          {style}
          <button onClick={this.handleAuthClick.bind(this)}>Authorize</button>
        </div>
      )
    } else {
      return (
        <div>
          {style}
          <div>
            <input
                type="text"
                value={this.state.sheetId}
                onChange={this.handleSheetChange.bind(this)}
                placeholder="Sheet ID"
                />
          </div>
          {this.state.sheetId &&
            <div>
              <a href={`https://docs.google.com/spreadsheets/d/${this.state.sheetId}/edit`} target="_blank">View Sheet</a>
            </div>}
          <button onClick={this.importSheet.bind(this)} disabled={!this.state.sheetId}>Import</button>
          {this.state.sheetId
            ? <button onClick={this.handleSaveClick.bind(this)}>Save</button>
            : <button onClick={this.handleCreateClick.bind(this)}>Create</button>}
          <button onClick={this.handleSignOutClick.bind(this)}>Sign Out</button>
        </div>
      )
    }
  }

  handleSheetChange(e: SyntheticEvent<HTMLButtonElement>) {
    const val = e.currentTarget.value
    const match = val.match(DOCS_URL_REGEX)
    if (match) {
      // URL pasted in
      this.setState({ sheetId: match[1] })
    } else {
      this.setState({ sheetId: val })
    }
  }

  handleAuthClick() {
    gapi.auth2.getAuthInstance().signIn()
  }

  importSheet() {
    if (!this.state.sheetId) {
      return
    }
    console.log('importing sheet', this.state.sheetId)
    // Get stuff from sheet
    gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: this.state.sheetId,
      range: RANGE,
      majorDimension: 'COLUMNS'
    }).then(response => {
      console.log('imported sheet')
      const range = response.result
      if (range.values.length > 0) {
        // Special-case the first two rows
        const name = range.values[0][0]
        const title = range.values[1][0]
        // Skip the third as they're just constant headers
        const milestones = range.values[0].slice(3).map(val => parseInt(val[0]))
        const notes = range.values[1].slice(3)
        this.props.onImport(name, title, milestones, notes)
      } else {
        console.log('no values found')
      }
    })
  }

  handleSignOutClick() {
    gapi.auth2.getAuthInstance().signOut()
  }

  handleCreateClick() {
    const rowValue = (val, bold) => ({
      userEnteredValue: {
        [typeof val === 'number' ? 'numberValue' : 'stringValue']: val
      },
      textFormatRuns: bold ? [
        {
          startIndex: 0,
          format: { bold: true }
        }
      ] : undefined
    })
    const rows = trackIds.map(trackId => [
      tracks[trackId].displayName,
      this.props.milestoneByTrack[trackId],
      this.props.notesByTrack[trackId]
    ])
    rows.unshift([
      'Track',
      'Milestone',
      'Notes'
    ])
    rows.unshift([
      'Title',
      this.props.title
    ])
    rows.unshift([
      'Name',
      this.props.name
    ])
    const data = rows.map((row, i) => ({
      startRow: i,
      rowData: {
        values: row.map((val, j) => rowValue(val, i === 2 || j === 0))
      }
    }))
    gapi.client.sheets.spreadsheets.create({
      properties: {
        title: `${this.props.name}'s Snowflake`
      },
      sheets: [ { data } ]
    }).then(response => {
      this.setState({ sheetId: response.result.spreadsheetId })
    })
  }

  handleSaveClick() {
    const headers = [
      [this.props.name],
      [this.props.title],
      ['Milestone', 'Notes']
    ]
    const values = trackIds.map(trackId => [
      this.props.milestoneByTrack[trackId],
      this.props.notesByTrack[trackId]
    ])
    gapi.client.sheets.spreadsheets.values.update({
      spreadsheetId: this.state.sheetId,
      range: RANGE,
      valueInputOption: 'USER_ENTERED',
      resource: {
        majorDimension: 'ROWS',
        values: headers.concat(values)
      }
    }).then(() => {
      console.log('saved')
    }).catch(() => {
      console.log('error saving')
    })
  }
}
