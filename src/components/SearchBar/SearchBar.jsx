import { Field, Form, Formik } from "formik";

const SearchBar = ({ handleChange, query }) => {
  const onSubmit = (values) => {
    handleChange(values.query);
  };

  const initialValues = {
    query,
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Шукати</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
