import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/layout'
import PageTitle from '../../components/page-title'
import FormInput from '../../components/form-input'
import Textarea from '../../components/textarea'
import Button from '../../components/button'
import styles from './contact.module.css'
import { Formik } from 'formik'
import * as Yup from 'yup';
function ContactPage() {
  const [loading, setLoading] = useState(false)
  return (
    <Layout extra={false}>
      <Head>
        <title>Contact us - EduSolutions</title>
      </Head>
      <PageTitle title="Contact us" borderBottom={false} ></PageTitle>
      <p className={styles.text}>
      If you have any questions or interested in our community don't hesitate to
      send us message, we will make sure to respond!
      </p>
      
      <Formik
        initialValues={{ name: '', email: '', msg: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Name is missing.')
            .max(30, 'Name cannot be longer than 30 characters.')
            .min(10, 'Name must be at least 10 characters.'),
          email: Yup.string()
            .required('Email is missing.')
            .email('Email must contain @'),
          msg: Yup.string()
            .required('Message is missing')
            .min(20, 'Message must be at least 20 characters.')
            .max(3000, 'Message cannot be longer than 3000 characters.')
        })}
      >
        {({
          values,
          errors,
          touched,
          status,
          handleChange,
          setFieldValue,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.container}>
              <FormInput
                label="Name"
                inputInfo=""
                name="name"
                type="text"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.name && errors.name}
                errorMessage={errors.name && errors.name}
              />
              <FormInput
                label="Email"
                inputInfo=""
                name="email"
                type="email"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.email && errors.email}
                errorMessage={errors.email && errors.email}
              />
              <Textarea
                label="Message"
                inputInfo=""
                name="msg"
                autoComplete="off"
                value={values.msg}
                onChange={handleChange}
                onBlur={handleBlur}
                hasError={touched.msg && errors.msg}
                errorMessage={errors.msg && errors.msg}
              />
            </div>
            <div className={styles.buttonContainer}>
              <p className={styles.status}>{status}</p>
              <div>
                <Button
                  type="submit"
                  primary
                  isLoading={loading}
                  disabled={isSubmitting}
                >
                  Send your message
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Layout>
  )
}

export default ContactPage
