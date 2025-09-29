import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Items from "../../component/RecipeItem";

export default function Details() {
  const { id } = useParams();
  const [pending, setPending] = useState(false);
  const [err, setErr] = useState(false);
  const [data, setData] = useState(null);

  async function fetching() {
    try {
      setPending(true);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/get?rId=${id}`
      );
      const infos = await res.json();
      console.log(infos.recipe);
      setData(infos.recipe);
    } catch (e) {
      setErr(e);
    } finally {
      setPending(false);
    }
  }

  useEffect(() => {
    fetching();
  }, [id]);

  return (
    <div>
      {pending ? (
        "Loading..."
      ) : data ? (
        <Items item={data} />
      ) : (
        `${err}Has Occured`
      )}
    </div>
  );
}
