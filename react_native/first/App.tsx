import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [count , setCount] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Shaked nf {count}</Text>
        <Button title='increment' onPress={() => setCount(count + 1)} />
        <Button title='decrement' onPress={() => setCount(count - 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',


  },
  textBold : {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black'
  }
});
