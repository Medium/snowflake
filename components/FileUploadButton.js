// @flow
import * as React from 'react';
import glamorous from 'glamorous';
import { teal, teal2 } from '../palette'

const HiddenFileInput = glamorous.input({
 	width: '100%',
	height: '100%',
	opacity: 0,
	overflow: 'hidden',
	position: 'absolute',
  left: 0,
  top: 0
})

const UploadLabel = glamorous.button({
  position: 'relative',
  backgroundColor: teal,
  padding: '10px 20px',
  borderRadius: '5px',
  fontWeight: 600,
  ':hover': {
    backgroundColor: teal2
  },
  transition: 'background-color 0.25s',
  margin: '0 auto',
  textAlign: 'center',
  width: '80px'
})

type FileUploadButtonProps = {
  onChange: () => void
}

const FileUploadButton = ({ onChange }: FileUploadButtonProps) => (
  <UploadLabel>
    Upload
    <HiddenFileInput type="file" onChange={onChange}/>
  </UploadLabel>
)

export default FileUploadButton;