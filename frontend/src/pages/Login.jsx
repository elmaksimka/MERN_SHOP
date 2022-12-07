import SignIn from "../components/SignIn"
import Homepage from "./Homepage"

import { useSelector } from 'react-redux'

function Login(props) {
  const isLoggingIn = useSelector(state => state.authorizing.isLoggingIn);

  return (
    <>
      <Homepage />
      {isLoggingIn && <SignIn onClose={props.onClose} />}
    </>
  )
}

export default Login