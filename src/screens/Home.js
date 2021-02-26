import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import Button from '../components/Button'
import Display from '../components/Display'

export default () => {
  const [displayValue, setDisplayValue] = useState(0)
  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label='AC'></Button>
        <Button label='/'></Button>
        <Button label='7'></Button>
        <Button label='8'></Button>
        <Button label='9'></Button>
        <Button label='*'></Button>
        <Button label='4'></Button>
        <Button label='5'></Button>
        <Button label='6'></Button>
        <Button label='-'></Button>
        <Button label='1'></Button>
        <Button label='2'></Button>
        <Button label='3'></Button>
        <Button label='+'></Button>
        <Button label='0'></Button>
        <Button label='.'></Button>
        <Button label='='></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
})
