import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import Button from '../Button/Button';

import styles from './BookingForm.module.css';

const INITIAL_VALUES = {
  name: '',
  email: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, 'Please enter your name.')
    .required('Please enter your name.'),

  email: Yup.string()
    .trim()
    .email('Please enter a valid email.')
    .required('Please enter your email.'),
});

function BookingForm() {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log('Booking request:', values);

    toast.success('Booking request sent successfully!');
  
    resetForm();
    setSubmitting(false);
  };

  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Book your campervan now</h2>

      <p className={styles.description}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={styles.form} noValidate>
            <FieldGroup
              name="name"
              type="text"
              placeholder="Name*"
              autoComplete="name"
              hasError={touched.name && errors.name}
            />

            <FieldGroup
              name="email"
              type="email"
              placeholder="Email*"
              autoComplete="email"
              hasError={touched.email && errors.email}
            />

            <Button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

function FieldGroup({ name, type, placeholder, autoComplete, hasError }) {
  return (
    <div className={styles.field}>
      <Field
        className={`${styles.input} ${hasError ? styles.inputError : ''}`}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={Boolean(hasError)}
        aria-describedby={`${name}-error`}
      />

      <ErrorMessage name={name}>
        {(message) => (
          <p id={`${name}-error`} className={styles.error}>
            {message}
          </p>
        )}
      </ErrorMessage>
    </div>
  );
}

export default BookingForm;
