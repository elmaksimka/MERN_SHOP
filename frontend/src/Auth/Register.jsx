import SignUp from './SignUp'
import Homepage from '../pages/Homepage'

import { useSelector } from 'react-redux'

function Register() {
  const isRegistering = useSelector(state => state.authorizing.isRegistering);

  return (
    <>
      <Homepage />
      {isRegistering && <SignUp />}
    </>
  )
}

export default Register