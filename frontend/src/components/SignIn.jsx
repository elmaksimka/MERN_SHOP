import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='signinup-container'>
        <div className='signinup-container__content'>
            <h3>
                Sign in
            </h3>
            <p>
                Sign in to your account using email and password provided during registration.
            </p>
            <form className='signinup-container__content__form' onSubmit={onSubmit}>
                <label htmlFor="label">
                    Email
                </label>
                <input type="email" id="email" name="email" placeholder="Your working email" value={email} onChange={onChange} />
                <label htmlFor="label">
                    Password
                </label>
                <input type="password" id='password'
              name='password' placeholder="************" value={password} onChange={onChange} />
              <div>
                <input type="checkbox" />Keep me signed in
                <span>Forgot password?</span>
              </div>
                <button type="submit">Sign in</button>
            </form>
            <p>
                Don't have an account? 
                <span style={{color: '#17696A'}}>
                <Link to='/register'>
                    Sign up
                </Link>
                </span>
            </p>
            <div className='signinup-container__content__socials'>
                <p>
                    Or sign in with
                </p>
                <p>
                    Google
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignIn