import './App.css'
import { getDocs, collection } from 'firebase/firestore'
import { firebaseDB } from './firebase_connection'
function App() {
  async function readData() {
    const collectionTest = collection(firebaseDB, 'test')
    const querySet = await getDocs(collectionTest);
    // console.log(querySet)
    for (const doc of querySet.docs) {

      console.log(doc.data())
    }
  }
  readData();
  return (
    <>
      <h1>Shaked</h1>
    </>
  )
}

export default App
