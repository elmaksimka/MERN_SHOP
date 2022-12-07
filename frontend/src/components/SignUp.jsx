import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Modal from './UI/Modal'
import { authorizingActions } from '../app/isAuthorizing-slice'
import eye from '../img/eyes.svg'

function SignUp(props) {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  }

  let passwordInputType;
  showPassword ? passwordInputType = 'text' : passwordInputType = 'password';

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
    } else if (!name.includes(' ')) {
      toast.error('Enter valid Full Name')
    } else {
      const userData = {
        name,
        email,
        password,
      }

      dispatch(register(userData))
      dispatch(authorizingActions.loggingIn())
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  const moveToLoginHandler = () => {
    dispatch(authorizingActions.loggingIn())
  }

  return (
    <Modal onClose={props.onClose}>
      <div className='signinup__container'>
        <h3 className='signinup__title'>
          Sign up
        </h3>
        <p className="signinup__info">
          Registration takes less than a minute but gives you full control over your orders.
        </p>
        <form className='signinup__form' onSubmit={onSubmit}>
          <div className="signinup__control">
            <label htmlFor="name" className="signinup__label">
              Full Name (e.g. John Cena) 
            </label>
            <input type="text" id="name" name="name" autoComplete="off" placeholder="Your full name" className="signinup__input" value={name} onChange={onChange} />
          </div>
          <div className="signinup__control">
            <label htmlFor="email" className="signinup__label">
              Email
            </label>
            <input type="email" id="email" name="email" autoComplete="off" placeholder="Your working email" className="signinup__input" value={email} onChange={onChange} />
          </div>
          <div className="signinup__control">
            <label htmlFor="password1" className="signinup__label">
              Password
            </label>
            <input type={passwordInputType} id='password'
              name='password' placeholder="* * * * * * * * * *" className="signinup__input" value={password} onChange={onChange} />
            <img src={eye} alt="show" onClick={showPasswordHandler} />
          </div>
          <div className="signinup__control">
            <label htmlFor="password2" className="signinup__label">
              Confirm Password
            </label>
            <input type={passwordInputType} id='password2'
              name='password2' placeholder="* * * * * * * * * *" className="signinup__input" value={password2} onChange={onChange} />
            <img src={eye} alt="show" onClick={showPasswordHandler} />
          </div>
          <div className="signinup__options">
            <input type="checkbox" />
            <label htmlFor="rememberMe">
              Remember me
            </label>
          </div>
          <button type="submit" className="signinup__button">
            Sign in
          </button>
        </form>
        <p>
          Already have an account?
          <span className="signinup__goto" onClick={moveToLoginHandler}>
            Sign in
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

export default SignUp
