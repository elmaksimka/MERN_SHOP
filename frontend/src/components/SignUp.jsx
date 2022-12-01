import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { Link } from 'react-router-dom'

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='signinup-container'>
      <div className='signinup-container__content'>
        <h3>
          Sign up
        </h3>
        <p>
          Registration takes less than a minute but gives you full control over your orders.
        </p>
        <form className='signinup-container__content__form' onSubmit={onSubmit}>
          <label htmlFor="label">
            Full Name
          </label>
          <input type="text" id="name" name="name" placeholder="Your full name" value={name} onChange={onChange} />
          <label htmlFor="label">
            Email
          </label>
          <input type="email" id="email" name="email" placeholder="Your working email" value={email} onChange={onChange} />
          <label htmlFor="label">
            Password
          </label>
          <input type="password" id='password'
            name='password' placeholder="************" value={password} onChange={onChange} />
          <label htmlFor="label">
            Confirm Password
          </label>
          <input type="password" id='password2'
            name='password2' placeholder="************" value={password2} onChange={onChange} />
          <div>
            <input type="checkbox" />Remember me
          </div>
          <button type="submit">Sign in</button>
        </form>
        <p>
          Already have an account?
          <span style={{ color: '#17696A' }}>
            <Link to='/login'>
              Sign in
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

export default SignUp
