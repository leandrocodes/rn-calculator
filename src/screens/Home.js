import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants';
import Button from '../components/Button'
import Display from '../components/Display'

export default () => {
  const [displayValue, setDisplayValue] = useState(0)

  function addDigit(n) {
    setDisplayValue(n)
  }

  function clearMemory () {
    setDisplayValue(0)
  }

  function setOperation () {}

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label='AC' triple onClick={clearMemory} />
        <Button label='/' operation onClick={setOperation} />
        <Button label='7' onClick={addDigit} />
        <Button label='8' onClick={addDigit} />
        <Button label='9' onClick={addDigit} />
        <Button label='*' operation onClick={setOperation} />
        <Button label='4' onClick={addDigit} />
        <Button label='5' onClick={addDigit} />
        <Button label='6' onClick={addDigit} />
        <Button label='-' operation onClick={setOperation} />
        <Button label='1' onClick={addDigit} />
        <Button label='2' onClick={addDigit} />
        <Button label='3' onClick={addDigit} />
        <Button label='+' operation onClick={setOperation} />
        <Button label='0' double onClick={addDigit} />
        <Button label='.' onClick={addDigit}/>
        <Button label='=' operation onClick={setOperation} />
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
