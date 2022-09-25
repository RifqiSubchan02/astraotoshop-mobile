import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native'
import { Icon, Gap } from '@/Components'

type Props = {
  value?: string
  placeholder?: string
  onChangeText?: (value: string) => void
  onBlur?: (e: any) => void
  secureTextEntry?: boolean
  keyboardType?:
    | 'default'
    | 'number-pad'
    | 'decimal-pad'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'url'
  label?: string
  errorMessage?: string | false
}

const Input = ({
  value,
  placeholder,
  onChangeText,
  onBlur,
  secureTextEntry,
  keyboardType,
  label,
  errorMessage,
}: Props) => {
  const [secureText, setSecureText] = useState(secureTextEntry)

  return (
    <View>
      {label && (
        <>
          <Text>{label}</Text>
          <Gap height={10} />
        </>
      )}
      <View style={[styles.input]}>
        <TextInput
          style={{ flex: 1 }}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={secureText}
          value={value}
          keyboardType={keyboardType}
        />
        {secureTextEntry && (
          <Pressable onPress={() => setSecureText(!secureText)}>
            <Icon
              font="Ionicons"
              name={secureText ? 'eye-off-outline' : 'eye-outline'}
              size={30}
              color="#C2D5FF"
            />
          </Pressable>
        )}
      </View>
      <Gap height={5} />
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    borderColor: '#C2D5FF',
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  errorMessage: {
    color: 'red',
  },
})

Input.defaultProps = {
  value: '',
  placeholder: '',
  onChangeText: undefined,
  onBlur: undefined,
  secureTextEntry: false,
  keyboardType: 'default',
  label: '',
  errorMessage: '',
}

export default Input
