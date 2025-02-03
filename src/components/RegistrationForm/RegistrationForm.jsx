import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import * as Yup from "yup";
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

  const initialValues = { name: "", email: "", password: "" };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Успішна реєстрація");
        resetForm();
      })
      .catch((error) => {
        toast.error(error);
      });
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
              <span className="label-text"> Name:</span>
              <Field
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </label>
            <ErrorMessage
              name="name"
              component="div"
              className="text-error text-sm"
            />

            <label className="form-control">
              <span className="label-text">Email:</span>
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
              <span className="label-text">Password:</span>
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
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
