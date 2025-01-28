import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
import { selectUser } from "../../redux/auth/selectors";
import toast from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function RegistrationForm() {
  const dispatch = useDispatch();
  const users = useSelector(selectUser);

  const initialValues = { name: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    if (users && users.email === values.email) {
      return toast.error("A user with this email is already registered", {
        position: "bottom-center",
      });
    }

    dispatch(register(values)).then(() => {
      toast.success("Registration successful!", {
        position: "bottom-center",
      });
      resetForm();
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form>
          <label>
            Name:
            <Field name="name" placeholder="Enter your name" />
          </label>
          <ErrorMessage name="name" component="div" className="error-message" />

          <label>
            Email:
            <Field type="email" name="email" placeholder="Enter your email" />
          </label>
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />

          <label>
            Password:
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
