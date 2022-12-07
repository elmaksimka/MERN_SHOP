import SignUp from '../components/SignUp'
import Homepage from './Homepage'

import { useSelector } from 'react-redux'

function Register(props) {
  const isRegistering = useSelector(state => state.authorizing.isRegistering);

  return (
    <>
      <Homepage />
      {isRegistering && <SignUp onClose={props.onClose} />}
    </>
  )
}

export default Register