import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import sleep from "then-sleep";
import Head from "../../components/head";
import Layout from "../../components/layout";
import styles from "./contact.module.scss";

const debug = process.env.NODE_ENV !== "production";
const formActionUrl = new URL("https://post.zobzn.com/");

const initialValues = { name: "", email: "", message: "" };

const validate = (values) => {
  debug && console.log("validate", values);

  if (!(values.name || values.email || values.message)) {
    return { message: "Do you really want to send me nothing?" };
  }

  // const errors = {};
  // if (!values.email) {
  //   errors.email = "Required";
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
  //   errors.email = "Invalid email address";
  // }

  return {};
};

export default function Index() {
  const onSubmit = (values, { setSubmitting }) => {
    const onSent = () => {
      setSubmitting(false);
      alert("Thank you\nI'll get in touch with you as soon as I can");
    };

    if (debug) {
      sleep(500).then(onSent);
    } else {
      fetch(formActionUrl.toString(), {
        method: "POST",
        body: new URLSearchParams(values),
      }).then(onSent);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Contact Semyon</title>
      </Head>

      <div className="container">
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form}>
              <div className={styles.row}>
                <div className={styles.label} />
                <div className={styles.input}>
                  <h1>Contact Semyon</h1>
                </div>
              </div>
              <label className={styles.row}>
                <div className={styles.label}>Your name</div>
                <div className={styles.input}>
                  <Field type="text" name="name" disabled={isSubmitting} />
                  <ErrorMessage name="name" component="div" />
                </div>
              </label>
              <label className={styles.row}>
                <div className={styles.label}>Your email</div>
                <div className={styles.input}>
                  <Field type="email" name="email" disabled={isSubmitting} />
                  <ErrorMessage name="email" component="div" />
                </div>
              </label>
              <label className={styles.row}>
                <div className={styles.label}>What can I help you with?</div>
                <div className={styles.input}>
                  <Field
                    type="text"
                    name="message"
                    as="textarea"
                    disabled={isSubmitting}
                  />
                </div>
              </label>
              <div className={styles.row}>
                <div className={styles.label}></div>
                <div className={styles.buttons}>
                  <button
                    disabled={isSubmitting}
                    className="zbz-button mr-20"
                    type="submit"
                  >
                    Submit
                  </button>
                  <ErrorMessage name="message" component="span" />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
