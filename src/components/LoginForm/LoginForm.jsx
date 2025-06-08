import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login as loginThunk } from '../../redux/auth/operations';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Minimum 7 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(loginThunk(values)).unwrap();
      toast.success(`Welcome back, ${result.user.name}!`);
      actions.resetForm();
    } catch (err) {
      toast.error(err.message || 'Invalid email or password');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values, touched, errors }) => (
        <Form autoComplete='on'>
          <Box
            display='flex'
            flexDirection='column'
            gap={2}
            width={300}
            mx='auto'
          >
            <TextField
              label='Email'
              name='email'
              type='email'
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={<ErrorMessage name='email' />}
            />

            <TextField
              label='Password'
              name='password'
              type='password'
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={<ErrorMessage name='password' />}
            />

            <Button type='submit' variant='contained' color='primary'>
              Log In
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
