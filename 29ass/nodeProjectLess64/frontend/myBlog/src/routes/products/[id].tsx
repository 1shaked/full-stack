import { Link, NavLink, useParams } from "react-router-dom";
import { z } from "zod";

export function ProductIdPage() {
  const params = useParams();
  const checkIfNumberZod = z.string().refine((value) => {
    return !isNaN(Number(value));
  });
  const res = checkIfNumberZod.safeParse(params.id);
  if (!res.success) return <h1>error params {String(res.error)}</h1>;
  const id = parseInt(res.data);
  // params = { id : 'number' -> number } '101' parseInt()
  return (
    <h1>
      <NavLink
        to={"/"}
        style={({ isActive }) =>
          isActive ? { backgroundColor: 'red',  color: 'green'} : {}
        }
      >
        home
      </NavLink>
      ProductIdPage {id}
    </h1>
  );
}
