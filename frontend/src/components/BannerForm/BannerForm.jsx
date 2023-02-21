import {
  Form,
  useNavigation,
  useActionData,
  json
} from 'react-router-dom';
import classes from "./BannerForm.module.css";

const BannerForm = () => {
  const data = useActionData();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method='POST' className="input-group">
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className={classes.control}>
        <label htmlFor="email">
          Email
        </label>
        <br />
        <input type="text" id="email" name="email" placeholder="Your working email" autoComplete='off' required />
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

  const emailData = {
    email: data.get('email'),
  };

  console.log(emailData);

  const response = await fetch('http://localhost:5000/subsemails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: 'Could not save email.' }, { status: 500 });
  }
}
