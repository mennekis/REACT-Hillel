import useFetch from "../hooks/useFetch";

const Posts = () => {
  const [data, error, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h3>Posts:</h3>
      {error && <h3>{error}</h3>}
      {loading && <h1>Loading...</h1>}
      <ul>
        {data.length > 0 && data.map((el) => <li key={el.id}>{el.title}</li>)}
      </ul>
    </div>
  );
};

export default Posts;
