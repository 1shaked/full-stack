import { useParams, useSearchParams } from "react-router-dom"


export function ProductIdPage() {
    const params = useParams();
    return <h1>
        ProductIdPage {JSON.stringify(params)}
    </h1>
}