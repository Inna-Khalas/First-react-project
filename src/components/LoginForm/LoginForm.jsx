import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

function LoginForm() {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <label>
              Email:
              <Field type="email" name="email" placeholder="Enter your email" />
            </label>
            <label>
              Password:
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
            </label>
            <button type="submit"></button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
