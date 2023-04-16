import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {checkUser} from '@/lib/getUser'
import {TaskListComponent} from '@/components/taskList'
import {TaskForm} from '@/components/taskForm'
import { useSelector } from "react-redux";
import type { AppState } from "../store/store";

export default function Home() {
  const dispatch = useDispatch();
  const authState = useSelector((state: AppState) => state.auth);
  useEffect(() => {
      // This function will run when the component mounts
      console.log('Component mounted');
      checkUser(dispatch);
  }, []); // The empty array as second parameter indicates that this effect only needs to run once (when the component mounts)
  return (
    <main>
      {authState.authState ? <>
        <TaskListComponent />
        <TaskForm />
        </> : <h1>Not Logged In</h1>}
    </main>
  )
}

// async function getData() {
//   const res = await fetch('/api/ex')
//   const data = await res.json()
//   console.log(data)
// }

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const allOnlineUsers = await supabase.from('users').select('*').eq('status', 'ONLINE')
//   res.status(200).json(allOnlineUsers)
// }