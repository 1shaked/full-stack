
import { NextApiRequest, NextApiResponse } from 'next'
import {supabase} from '../../lib/supabase'

  export default async (req: NextApiRequest, res: NextApiResponse) => {
    const allOnlineUsers = await supabase.from('tasks').select('*')
    res.status(200).json(allOnlineUsers)
  }