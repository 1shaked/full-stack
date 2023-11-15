import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase_connection";
import { useQuery } from "@tanstack/react-query";

async function readData() {
    const collectionTest = collection(firebaseDB, 'test')
    const querySet = await getDocs(collectionTest);
    // console.log(querySet)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const obj: { [key: string]: any } = {};
    for (const item of querySet.docs) {
        const id = item.id
        obj[id] = item.data()
        console.log(item.data())
    }
    return obj;
}

  
export function DisplayExample() {
    const query = useQuery({
        queryKey: ['test'],
        queryFn: readData
    });
    if (query.isLoading) return <div>Loading...</div>
    return <main>
        display data
        <pre>
            {Object.values(query.data ?? {}).map((item, index) => <pre key={index}>
                {JSON.stringify(item, null , 2)}
                <hr />
            </pre>)}
        </pre>
    </main>
}