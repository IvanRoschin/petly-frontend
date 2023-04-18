import { Formik } from 'formik';
import {
  Input,
  Button,
  Form,
  InputField,
  Title,
  BackgroundContainer,
} from './Auth.styled';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { restorePassword } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router';
import { useState } from 'react';

export default function PasswordRecoveryForm() {
  const dispatch = useDispatch();
  const [submittingForm, setSubmittingForm] = useState(false);

  const notifyFailOptions = {
    showOnlyTheLastOne: true,
    timeout: 2000,
  };

  const notifySuccessOptions = {
    showOnlyTheLastOne: true,
    timeout: 10000,
  };

  const initialValue = {
    email: '',
  };

  const recoveryValidation = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
  });

  if (submittingForm) {
    return <Navigate to="/login" />;
  }

  return (
    <BackgroundContainer>
      <Formik
        initialValues={initialValue}
        validationSchema={recoveryValidation}
        onSubmit={values => {
          dispatch(restorePassword(values));
          setSubmittingForm(true);
          toast.success(
            'An email with a new password has been sent to your email',
            notifySuccessOptions
          );
        }}
      >
        {props => (
          <Form>
            <Title>Enter email</Title>
            <InputField>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                onBlur={props.handleBlur}
                onChange={props.handleChange}
                value={props.values.email}
              />
            </InputField>
            {props.isSubmitting && props.errors.email
              ? toast.failure(props.errors.email, notifyFailOptions)
              : null}
            <Button type="submit" onClick={props.handleSubmit}>
              Сhange password
            </Button>
          </Form>
        )}
      </Formik>
    </BackgroundContainer>
  );
}
