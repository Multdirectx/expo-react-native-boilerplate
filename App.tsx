import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Foo from '@/components/Foo'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Foo!</Text>
      <StatusBar style="auto" />
      <Foo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
