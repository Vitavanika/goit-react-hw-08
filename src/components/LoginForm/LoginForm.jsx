import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login as loginThunk } from '../../redux/auth/operations';
import { toast } from 'react-hot-toast';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(loginThunk(values));
      if (loginThunk.fulfilled.match(result)) {
        toast.success(`Welcome back, ${result.payload.user.name}!`);
      } else {
        throw new Error(result.payload || 'Login failed');
      }
    } catch (err) {
      toast.error(err.message);
    }
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Form autoComplete="off" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <label>
          Email
          <Field type="email" name="email" required />
        </label>
        <label>
          Password
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
