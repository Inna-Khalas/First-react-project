import { Formik, Form, Field } from "formik";
import s from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  return (
    <div className={s.searchContainer}>
      {" "}
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.query);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <Field
              name="query"
              type="text"
              placeholder="Search images and photos"
              autoComplete="off"
              autoFocus
              className={s.input}
            />
            <button type="submit" className={s.button}>
              Search
            </button>
            {errors.query && touched.query && (
              <div className={s.error}>{errors.query}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SearchBar;
