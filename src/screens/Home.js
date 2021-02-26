import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default () => {
  const [state, setState] = useState({ ...initialState })

  function addDigit(n) {
    if (n === '.' && state.displayValue.includes('.')) {
      return
    }

    const clearDisplay = state.displayValue === '0' || state.clearDisplay

    const currentValue = clearDisplay ? '' : state.displayValue

    const displayValue = currentValue + n

    setState((prevState) => ({
      ...prevState,
      displayValue,
      clearDisplay: false
    }))

    if (n !== '.') {
      const newN = parseFloat(displayValue)
      const values = [...state.values]
      values[state.current] = newN
      setState((prevState) => ({ ...prevState, values }))
    }
  }

  function clearMemory() {
    setState(initialState)
  }

  function setOperation(operation) {
    if (state.current === 0) {
      setState((prevState) => ({
        ...prevState,
        operation,
        current: 1,
        clearDisplay: true
      }))
    } else {
      const equals = operation === '='
      const values = [...state.values]

      try {
        values[0] = eval(`${values[0]} ${state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = state.values[0]
      }

      values[1] = 0

      setState((state) => ({
        ...state,
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      }))
    }
  }

  return (
    <View style={styles.container}>
      <Display value={state.displayValue} />
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
        <Button label='.' onClick={addDigit} />
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
