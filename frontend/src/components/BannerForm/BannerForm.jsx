import {
  Form,
  useNavigation,
  json,
  redirect
} from 'react-router-dom';
import { toast } from 'react-toastify';
import classes from "./BannerForm.module.css";

const BannerForm = () => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method='post' className="input-group">
      <div className={classes.control}>
        <label htmlFor="email">
          Email
        </label>
        <br />
        <input type="email" id="email" name="email" placeholder="Your working email" autoComplete='off' required />
      </div>
      <div className={classes.actions}>
        <button className={classes.submit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </button>
      </div>
    </Form>
  );
};

export default BannerForm

export async function action({ request }) {
  const data = await request.formData();
  const emailData = Object.fromEntries(data);

  const response = await fetch('http://localhost:5000/subsemails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  if (response.status === 422) {
    return toast.error('Email already exists!');
  }

  if (!response.ok) {
    throw json({ message: 'Could not save email.' }, { status: 500 });
  }
  
  toast.success('Successfully subscribed');
  return redirect('/');
}