
// import { Database } from '@/types/supabase'
import supabase from '@/utils/supabaseConnection'
// import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
// import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function ServerActionDelete({country} : {country: {name: string, id: number}}) {
  const deleteCountry = async () => {
    'use server'
    //   const supabase = createServerActionClient<Database>({ cookies })
      await supabase.from('countries').delete().eq('id', country.id)
      revalidatePath('/countriesExampleA')
    
  }

  return (
    <form action={deleteCountry}>
    <h2>{country.name}</h2>
    <p>{country.id}</p>
    <button type="submit">DELETE</button>
    <hr />
</form>
  )
}
