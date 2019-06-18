import glamorous from 'glamorous'
import { teal, teal2 } from '../palette'

const FunButton = glamorous.button({
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
},
(styles) => ({ ...styles })
)

export default FunButton;