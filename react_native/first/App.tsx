import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Image } from 'react-native';
import { Todo } from './components/Todo';

export default function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState<string[]>(['A', 'B', 'C', 'D', 'E', 'F',])
  const [newTodo, setNewTodo] = useState('');

  const [images, setImages] = useState<string[]>([
    'https://image.lexica.art/full_webp/54ea9d47-3dc2-40a9-905f-c0ae51359479',
    'https://image.lexica.art/full_webp/b70a8641-e62d-49b6-b765-7680cdfb93c9'
  ])
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
      <Image
        style={{
          width: 100,
          height: 100,
        }}
        source={{ uri: 'https://image.lexica.art/full_webp/54ea9d47-3dc2-40a9-905f-c0ae51359479' }} />
      {/* {todos.map((todo, index) => <Text key={index}>
          {todo}

      

         
        </Text>)} */}
      <FlatList showsVerticalScrollIndicator={false} data={todos}
        numColumns={4}
        renderItem={(item) => <View>
          <Todo title={item.item} onDelete={() => {
            setTodos((prev) => {
              return prev.filter((todo, index) => index !== item.index)
            })
          }} />
          {/* <Text> {item.item}</Text>
          <Button title='delete' onPress={() => {
            // setTodos(todos.filter((todo, index) => index !== item.index))
            setTodos((prev) => {
              return prev.filter((todo, index) => index !== item.index)
            })
          }} /> */}
        </View>} />
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
  textBold: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black'
  }
});
