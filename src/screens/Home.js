import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Button from '../components/Button'

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default () => (
  <View style={styles.buttons}>
    <Button label="AC"></Button>
    <Button label="/"></Button>
    <Button label="7"></Button>
    <Button label="8"></Button>
    <Button label="9"></Button>
    <Button label="*"></Button>
    <Button label="4"></Button>
    <Button label="5"></Button>
    <Button label="6"></Button>
    <Button label="-"></Button>
    <Button label="1"></Button>
    <Button label="2"></Button>
    <Button label="3"></Button>
    <Button label="+"></Button>
    <Button label="0"></Button>
    <Button label="."></Button>
    <Button label="="></Button>
  </View>
)
