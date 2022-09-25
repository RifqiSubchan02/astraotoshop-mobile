import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Formik } from 'formik'
import { Header, Input, Gap, Button } from '@/Components'

import * as yup from 'yup'

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <View style={styles.form}>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={schema}
            onSubmit={values => console.log(values)}
          >
            {({
              values,
              errors,
              touched,
              dirty,
              isValid,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <View>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  secureTextEntry={false}
                  label="Email"
                  errorMessage={touched.email && errors.email}
                />
                <Gap height={15} />
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={false}
                  label="Password"
                  errorMessage={touched.password && errors.password}
                />
                <Gap height={15} />
                <Button
                  title="Login"
                  onPress={handleSubmit}
                  disabled={!(isValid && dirty)}
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  form: {
    padding: 15,
  },
})

export default Login
