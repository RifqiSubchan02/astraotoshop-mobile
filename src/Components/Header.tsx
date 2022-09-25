import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Icon from '@/Components/Icon'

type Props = {
  title?: string
}

const Header = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={{}} onPress={() => {}}>
        <Icon font="Feather" name="arrow-left" size={30} color="white" />
      </Pressable>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'green',
        }}
      >
        <Text
          style={{
            color: 'white',
            fontSize: 18,
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#0033A0',
    paddingVertical: 15,
  },
})

Header.defaultProps = {
  title: 'Title',
}

export default Header
