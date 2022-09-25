import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

type Props = {
  title?: string
  onPress?: (e: any) => void
  backgroundColor?: string
  disabled: boolean
}

const Button = ({ title, onPress, backgroundColor, disabled }: Props) => {
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: backgroundColor
            ? disabled
              ? 'gray'
              : backgroundColor
            : backgroundColor,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0033A0',
    padding: 10,
    borderRadius: 4,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})

Button.defaultProps = {
  title: '',
  onPress: () => {},
  backgroundColor: '#0033A0',
  disabled: false,
}
export default Button
