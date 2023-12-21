'use client'
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();
    function changePage() {
        router.push('/about/post');
    }
    return <main>
        <h1>about page </h1>
        <Link href='/example'>example page</Link>
        <br />
        <Link href='/about/post'>post page</Link>
        <hr />
        <button onClick={changePage}>go to post page</button>
    </main>
}