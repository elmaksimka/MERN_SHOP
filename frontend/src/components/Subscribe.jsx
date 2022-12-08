import messages from '../img/messages.svg'
import Button from './Button'
import { useState } from 'react'

function Subscribe() {

    const [email, setEmail] = useState()

    const emailUpdate = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const postURL = "http://localhost:5000/emails/"
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
            })
        })
            .then(() => {
                if (email.length > 0) {
                    alert('You have been added to the system!');
                } else {
                    alert('Enter valid email!')
                }
            })
    }
    return (
        <div className="subscribe">
            <div className="subscribe__content">
                <div className="subscribe__for-updates">
                    <h1 className="subscribe__title">
                        Subscribe for updates
                    </h1>
                    <div className="subscribe__text1">
                        Subscribe for exclusive early sale access and new arrivals.
                    </div>
                    <div className="subscribe__checkboxes">
                        <Button buttonText="Women" />
                        <Button buttonText="Men" />
                        <Button buttonText="Girls" />
                        <Button buttonText="Boys" />
                    </div>
                    <form className="subscribe__form" onSubmit={handleSubmit}>
                        <label htmlFor="email" className="subscribe__text2">
                            Email
                        </label>
                        <br />
                        <input className="subscribe__input" type="text" placeholder="Your working email" autoComplete='off' onChange={emailUpdate} />
                        <button className="subscribe__button" type='submit'>
                            Subscribe
                        </button>
                    </form>
                    <div className="subscribe__receive-communications subscribe__text2">
                        <input type="checkbox" name="checkbox" />
                        <span>
                            I agree to receive communications from Createx Store.
                        </span>
                    </div>
                </div>
                <div className="subscribe__messages">
                    <img src={messages} alt="messages" />
                </div>
            </div>
        </div>
    )
}

export default Subscribe