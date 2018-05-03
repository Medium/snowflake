import * as React from 'react';
import Papa from 'papaparse';

console.log('pap', Papa)


class FileUpload extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  onChange = (e) => {
    const file = e.target.files[0];

    Papa.parse(file, {
      complete: results => {
        console.log('results', results)
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Upload a file</h2>
        <input type="file" onChange={this.onChange} />
      </div>
    )
  }
}

export default FileUpload;