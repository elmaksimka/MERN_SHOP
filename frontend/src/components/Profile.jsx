import { useState } from 'react';
import { useSelector } from 'react-redux'

import eye from '../img/eyes.svg'
import dropdown from '../img/down-chevron.svg'

function Profile() {
    const [showPassword, setShowPassword] = useState(false);

    const showPasswordHandler = () => {
      setShowPassword(!showPassword);
    }
  
    let passwordInputType;
    showPassword ? passwordInputType = 'text' : passwordInputType = 'password';

    const saveChangesHandler = (event) => {
        event.preventDefault();
    }
    
    const { user } = useSelector((state) => state.auth);

    return (
        <div className="profile__form">
            <form>
                <div className="profile__form__row">
                    <div className="profile__form__control">
                        <label htmlFor="firstname">
                            First name
                        </label>
                        <input type="text" value={user.name.split(' ')[0]} readOnly />
                    </div>
                    <div className="profile__form__control">
                        <label htmlFor="lastname">
                            Last name
                        </label>
                        <input type="text" value={user.name.split(' ')[1]} readOnly />
                    </div>
                </div>
                <div className="profile__form__row">
                    <div className="profile__form__control">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" value={user.email} readOnly />
                    </div>
                    <div className="profile__form__control">
                        <label htmlFor="phone">
                            Phone
                        </label>
                        <input type="tel" />
                    </div>
                </div>
                <div className="profile__form__row">
                    <div className="profile__form__control">
                        <label htmlFor="new-password">
                            New password
                        </label>
                        <input type={passwordInputType} />
                        <img src={eye} alt="show" onClick={showPasswordHandler} />
                    </div>
                    <div className="profile__form__control">
                        <label htmlFor="confirm-password">
                            Confirm password
                        </label>
                        <input type={passwordInputType} />
                        <img src={eye} alt="show" onClick={showPasswordHandler} />
                    </div>
                </div>
                <div className="profile__form__row">
                    <div className="profile__form__control">
                        <label htmlFor="country">
                            Country
                        </label>
                        <input type="text" />
                        <img src={dropdown} alt='dropdown' />
                    </div>
                    <div className="profile__form__control">
                        <label htmlFor="City">
                            City
                        </label>
                        <input type="text" />
                        <img src={dropdown} alt='dropdown' />
                    </div>
                </div>
                <div className="profile__form__row">
                    <div className="profile__form__control">
                        <label htmlFor="address">
                            Adress
                        </label>
                        <input type="text" />
                    </div>
                    <div className="profile__form__control">
                        <label htmlFor="zip-code">
                            ZIP Code
                        </label>
                        <input type="number" />
                    </div>
                </div>
                <button class="profile__form__button" onClick={saveChangesHandler}>
                    Save changes
                </button>
            </form>
        </div>
    )
}

export default Profile;
