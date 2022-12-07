import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Modal from './UI/Modal'
import { authorizingActions } from '../app/isAuthorizing-slice'
import eye from '../img/eyes.svg'

function SignIn(props) {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  }

  let passwordInputType;
  showPassword ? passwordInputType = 'text' : passwordInputType = 'password';

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

    dispatch(authorizingActions.reset())
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  const moveToRegisterHandler = () => {
    dispatch(authorizingActions.registering())
  }

  return (
    <Modal onClose={props.onClose}>
      <div className='signinup__container'>
        <h3 className='signinup__title'>
          Sign in
        </h3>
        <p className="signinup__info">
          Sign in to your account using email and password provided during registration.
        </p>
        <form className='signinup__form' onSubmit={onSubmit}>
          <div className="signinup__control">
            <label htmlFor="email" className="signinup__label">
              Email
            </label>
            <input type='email' id="email" name="email" autoComplete="off" placeholder="Your working email" className="signinup__input" value={email} onChange={onChange} />
          </div>
          <div className="signinup__control">
            <label htmlFor="password" className="signinup__label">
              Password
            </label>
            <input type={passwordInputType} id='password'
              name='password' placeholder="* * * * * * * * * *" className="signinup__input" value={password} onChange={onChange} />
            <img src={eye} alt="show" onClick={showPasswordHandler} />
          </div>
          <div className="signinup__options">
            <input type="checkbox" />
            <label htmlFor="keepMeSignIn">
              Keep me signed in
            </label>
            <span>
              Forgot password?
            </span>
          </div>
          <button type="submit" className="signinup__button">
            Sign in
          </button>
        </form>
        <p>
          Don't have an account?
          <span className="signinup__goto" onClick={moveToRegisterHandler}>
            Sign up
          </span>
        </p>
        <div className='signinup__socials'>
          <p className="signinup__alternative">
            Or sign in with
          </p>
          <p>
            Google
          </p>
        </div>
      </div>
    </Modal>
  )
}

export default SignIn