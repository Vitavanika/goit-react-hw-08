import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register as registerThunk } from '../../redux/auth/operations';
import { toast } from 'react-hot-toast';
import * as yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Minimum 7 characters')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(registerThunk(values)).unwrap();
      toast.success(`Registered as ${result.user.name}`);
      actions.resetForm();
    } catch (err) {
      toast.error(err.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
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
              label='Name'
              name='name'
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={<ErrorMessage name='name' />}
            />

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
              Register
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
