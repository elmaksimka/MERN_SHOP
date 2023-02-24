import messages from '../img/messages.svg'
import Button from './Button'
import { useState } from 'react'
import { Form, json, redirect } from 'react-router-dom'
import { toast } from 'react-toastify'

function Subscribe() {

    // const [email, setEmail] = useState()

    // const emailUpdate = (event) => {
    //     setEmail(event.target.value)
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const postURL = "http://localhost:5000/emails/"
    //     fetch(postURL, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             email: email,
    //         })
    //     })
    //         .then(() => {
    //             if (email.length > 0) {
    //                 alert('You have been added to the system!');
    //             } else {
    //                 alert('Enter valid email!')
    //             }
    //         })
    // }
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
                    <Form method='post' className="subscribe__form">
                        <label htmlFor="email" className="subscribe__text2">
                            Email
                        </label>
                        <br />
                        <input className="subscribe__input" type="email" name="email" placeholder="Your working email" autoComplete='off' required />
                        <button className="subscribe__button" type='submit' disabled>
                            Subscribe
                        </button>
                        <div className="subscribe__receive-communications subscribe__text2">
                            <input type="checkbox" name="checkbox" />
                            <span>
                                I agree to receive communications from Createx Store.
                            </span>
                        </div>
                    </Form>
                </div>
                <div className="subscribe__messages">
                    <img src={messages} alt="messages" />
                </div>
            </div>
        </div>
    )
}

export default Subscribe

// export async function action({ request }) {
//     const data = await request.formData();
//     const emailData = {
//         email: data.get('email'),
//         checkbox: data.get('checkbox'),
//     }

//     const response = await fetch('http://localhost:5000/subsemailswithcats', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(emailData),
//     });

//     if (response.status === 422) {
//         return toast.error('Email already exists!');
//     }

//     if (!response.ok) {
//         throw json({ message: 'Could not save email.' }, { status: 500 });
//     }

//     toast.success('Successfully subscribed with categories!');
//     return redirect('/');
// }
