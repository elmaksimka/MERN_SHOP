import { useRef, useState } from 'react';
import classes from "./BannerForm.module.css";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');

export const BannerForm = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    email: true,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmitted(false);
    const enteredEmail = emailInputRef.current.value;

    if (!isNotEmpty(enteredEmail)) {
      setIsSubmitted(false);
      setFormInputsValidity(false);
      return;
    } else if (!isEmail(enteredEmail)) {
      setIsSubmitted(false);
      emailInputRef.current.value = '';
      setFormInputsValidity(false);
      return;
    }

    setFormInputsValidity({
      email: enteredEmail,
    });

    props.onSubmit({
      email: enteredEmail,
    });

    setIsSubmitted(true);
    emailInputRef.current.value = '';
  };


  const emailControlClasses = `${classes.control} ${formInputsValidity.email ? "" : classes.invalid
    }`;

  return (
    <form className="input-group" onSubmit={submitHandler}>
      <div className={emailControlClasses}>
        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id="email" placeholder="Your working email" autoComplete='off' ref={emailInputRef} />
        {/* {!formInputsValidity.email && <p className={classes.error}>Enter valid email!</p>} */}
        {/* {isSubmitted && <p className={classes.success}>Success</p>} */}
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Subscribe</button>
      </div>
    </form>
  );
};
