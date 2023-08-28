import { useState } from "react";
import { trpc } from "../utils/trpc";

export default function CallFromTrpc() {
  const [count, setCount] = useState(0);
  
  const userQuery = trpc.filmById.useQuery(count);
  
  // trpc.filmById.
  return (
    <div>
      <h2>wow</h2>

      {userQuery.data?.map((item) => (
        <div key={item.film_id}>
            id = {item.film_id}
            <br />
            title = {item.title}
            </div>
      ))}
      <hr />
      {count}
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}
