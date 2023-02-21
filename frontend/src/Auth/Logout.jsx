import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function LogoutPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <div className="signout__box">
      <div>Are you sure you wanna sign out?</div>
      <button className="signout__button" onClick={onLogout}>
        Yes
      </button>
    </div>
  )
}

export default LogoutPage