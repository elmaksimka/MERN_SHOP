import SignIn from "./SignIn"
import Homepage from "../pages/Homepage"

import { useSelector } from 'react-redux'

function Login() {
  const isLoggingIn = useSelector(state => state.authorizing.isLoggingIn);

  return (
    <>
      <Homepage />
      {isLoggingIn && <SignIn />}
    </>
  )
}

export default Login