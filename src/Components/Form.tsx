import React, { useMemo, Fragment } from 'react'
import { View, Button } from 'react-native'
import { Formik } from 'formik'

import { Input, Gap } from '@/Components'

type Props = {
  fields: object[]
  onSubmit: () => void
  validationSchema: object
  innerRef: () => void
}

const Form = ({ fields, onSubmit, validationSchema, innerRef }: Props) => {
  const initialValues = useMemo(() => {
    const res = {}
    fields.forEach(v => Object.assign(res, { [v.name]: '' }))
    return res
  }, [fields, innerRef])

  return (
    <Formik
      innerRef={innerRef}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
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
          {fields.map((field: object, index: number) => {
            return (
              <Fragment key={index}>
                <Input
                  value={values[field.name]}
                  onChangeText={handleChange(field.name)}
                  onBlur={handleBlur(field.name)}
                  secureTextEntry={field.secureTextEntry}
                  label={field.label}
                  errorMessage={touched[field.name] && errors[field.name]}
                />
                <Gap height={15} />
              </Fragment>
            )
          })}
          <Button
            onPress={handleSubmit}
            title="Submit"
            color={dirty && isValid ? 'blue' : 'gray'}
          />
        </View>
      )}
    </Formik>
  )
}

export default Form
