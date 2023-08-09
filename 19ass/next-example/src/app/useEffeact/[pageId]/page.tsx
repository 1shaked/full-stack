
export default function Page({params}: {params: {pageId: number}}) {
    return <section>
        <h2>this is a dynamic page <b>{params.pageId}</b></h2>
    </section>
}