import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "../Contact/Contact.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Поле вводу обов'язкове"),
  number: Yup.string()
    .matches(/^[0-9]+$/, "Введіть номер такого формату +38 XXX-XXX-XX-XX")
    .required("Поле вводу обов'язкове"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onRegister }) => {
  const handleSubmit = (values, { resetForm }) => {
    onRegister(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={s.contactForm}>
          <div className={s.formBlock}>
            <label className={s.formLabel}>
              Name:
              <Field type="text" name="name" className={s.formInput} />
            </label>
            <ErrorMessage
              name="name"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
              className={s.formError}
            />
          </div>
          <div className={s.formBlock}>
            <label className={s.formLabel}>
              Number:
              <Field
                type="text"
                name="number"
                placeholder="+38 (XXX) XX XXX XX"
                className={s.formInput}
              />
            </label>
            <ErrorMessage
              name="number"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
              className={s.formError}
            />
          </div>
          <button type="submit" className={s.formButton}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
