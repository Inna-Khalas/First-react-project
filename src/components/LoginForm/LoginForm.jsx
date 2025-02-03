import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginForm() {
  const dispatch = useDispatch();
  const initialValues = { email: "", password: "" };

  const handleSubmit = (values) => {
    dispatch(logIn(values));
  };

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-xl p-6 mx-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form className="flex flex-col gap-4">
            <label className="form-control">
              Email:
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </label>
            <ErrorMessage
              name="email"
              component="div"
              className="text-error text-sm"
            />
            <label className="form-control">
              Password:
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
              />
            </label>
            <ErrorMessage
              name="password"
              component="div"
              className="text-error text-sm"
            />
            <button type="submit" className="btn btn-primary">
              LogIn
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LoginForm;
