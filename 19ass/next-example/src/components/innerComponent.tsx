'use client'
import { useSearchParams } from 'next/navigation'

 
export default function InnerComponent( ) {
    const router = useSearchParams();
    console.log(router.get('blogId'))
    return <p>Post: </p>
  }