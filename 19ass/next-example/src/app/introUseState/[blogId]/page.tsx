
import Link from 'next/link'

export default function Page({params} : any ) {
  // const router = useRouter()
  return <p>Post: {params.blogId}
    <span>
      <Link href="/">Home</Link>
    </span>
  </p>
}