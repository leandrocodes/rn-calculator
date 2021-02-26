import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Home from './src/screens/Home'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }
})
