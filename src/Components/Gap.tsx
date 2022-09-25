import React from 'react'
import { View } from 'react-native'

type Props = {
  height?: number | string
  width?: number | string
  backgroundColor?: string
}

const Gap = ({ width, height, backgroundColor }: Props) => {
  return <View style={{ width, height, backgroundColor }} />
}

Gap.defaultProps = {
  width: 'auto',
  height: 'auto',
  backgroundColor: 'transparent',
}

export default Gap
