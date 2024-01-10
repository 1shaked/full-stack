import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';

export default function App() {
  const [count , setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>([ 'A', 'B', 'C', 'D', 'E', 'F',])
  const [newTodo, setNewTodo] = useState('')
  return (
    <View style={styles.container}>
      <Text style={styles.textBold}>Shaked nf {count}</Text>
        <Button title='increment' onPress={() => {
          setCount(count + 1);
          setTodos((prev) => {
            return [...prev, count.toString()]
          })
        }} />
        <Button title='decrement' onPress={() => setCount(count - 1)} />

        <TextInput style={{
          height: 40,
          borderColor: '#ccc',
          borderWidth: 1,
          width: 150
        }} placeholder='placeholder'
        onChangeText={(e) => setNewTodo(e)} />
        <Text>{newTodo}</Text>
        <Button title='add todo' onPress={() => {
          setTodos((prev) => {
            return [...prev, newTodo]
          })
        }}></Button>
        {/* {todos.map((todo, index) => <Text key={index}>
          {todo}

         
        </Text>)} */}
          <FlatList showsVerticalScrollIndicator={false} data={todos} 
            renderItem={(item) => <Text> {item.item}</Text>}/>
        {/* <ScrollView>
        </ScrollView> */}
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
