import {TaskListComponent} from '@/components/taskList'
import {TaskForm} from '@/components/taskForm'

export default function Home() {
  return (
    <main>
        <TaskListComponent />
        <TaskForm /> 
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