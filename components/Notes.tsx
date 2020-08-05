import React from 'react'
import { Tracks } from '../types/definitions'

type Props = {
    notes: string | undefined,
    setNotesFn: (string) => void,
}
  
class Notes extends React.Component<Props> {
    render() {
        return <div className="notes">
            <style jsx>{`
                div.notes {
                    margin: 0 0 20px 0;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #ccc;
                }
                h2 {
                    margin: 0 0 10px 0;
                }        
                textarea {
                    width: 100%;
                    height: 4em;
                }
                `}</style>
            <h2>Notes</h2>
            <textarea value={this.props.notes} />
        </div>
    }
}

export default Notes
