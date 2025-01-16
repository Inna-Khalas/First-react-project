import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import toast, { Toaster } from "react-hot-toast";
import "../../../src/index.css";

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

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.items) || [];
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      toast.error("Такий контакт вже існує", {
        position: "bottom-center",
      });
      return;
    }

    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.name,
        number: values.number,
      })
    );

    toast.success("Контакт додано успішно!", {
      position: "bottom-center",
    });

    resetForm();
  };

  return (
    <>
      <Toaster />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <Form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name:</span>{" "}
                </label>
                <Field
                  type="text"
                  name="name"
                  className="input input-bordered"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  style={{ color: "red", fontSize: "12px" }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Number:</span>
                </label>
                <Field
                  type="text"
                  name="number"
                  placeholder="+38 (XXX) XX XXX XX"
                  className="input input-bordered"
                />

                <ErrorMessage
                  name="number"
                  component="div"
                  style={{ color: "red", fontSize: "12px" }}
                />
              </div>
              <button type="submit" className="btn btn-active btn-neutral">
                Add contact
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default ContactForm;
