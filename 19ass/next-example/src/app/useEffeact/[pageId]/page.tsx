
interface PageParams {
    params: {
        pageId: number;
    }
}
export default function Page(pageData: PageParams) {

    return <section>
        <h2>this is a dynamic page <b>{pageData.params.pageId}</b></h2>
    </section>
}