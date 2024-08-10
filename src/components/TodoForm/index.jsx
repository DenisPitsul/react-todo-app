import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { TODO_VALIDATION_SCHEMA } from "../../utils/validationSchemas";
import { createTodo } from "../../store/slices/todoSlice";
import styles from "./TodoForm.module.sass";

function TodoForm({ createTodoItem }) {
  const initialValues = { value: "", deadline: "" };

  const submitHandler = (values, { resetForm }) => {
    createTodoItem(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={TODO_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        const getInputClassNames = (field) => {
          return classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors[field] && formikProps.touched[field],
            [styles.invalid]:
              formikProps.errors[field] && formikProps.touched[field],
          });
        };

        const valueClassName = getInputClassNames("value");
        const deadlineClassName = getInputClassNames("deadline");

        return (
          <Form className={styles.form}>
            <label className={styles.label}>
              <span className={styles.caption}>Value:</span>
              <Field className={valueClassName} name="value" type="text" />
              <ErrorMessage
                className={styles.error}
                name="value"
                component="div"
              />
            </label>
            <label className={styles.label}>
              <span className={styles.caption}>Deadline:</span>
              <Field
                className={deadlineClassName}
                name="deadline"
                type="date"
                autoFocus
              />
              <ErrorMessage
                className={styles.error}
                name="deadline"
                component="div"
              />
            </label>
            <button className={styles.submitBtn} type="submit">
              Create
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createTodoItem: (data) => dispatch(createTodo(data)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
