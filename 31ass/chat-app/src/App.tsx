import './App.css'
import { QueryClientProvider } from '@tanstack/react-query'
// import { DisplayExample } from './components/displayExample'
// import { AddDataToExampleComponent } from './components/addDataToExample'
import { queryClient } from './query_client'
import { AuthExample } from './components/authExample'
import { MessagesOpenChat } from './components/messagesOpenChat'
import { useSetAtom } from 'jotai'
import { userAtom } from './userState'
import { useEffect } from 'react'
import { authFirebase } from './firebase_connection'


function App() {
  const setUser = useSetAtom(userAtom)

  useEffect(() => {
    setUser(authFirebase.currentUser)
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <AuthExample />
      {/* <DisplayExample />
      <AddDataToExampleComponent /> */}
      <MessagesOpenChat />
      </>
    </QueryClientProvider>
  )
}

export default App
