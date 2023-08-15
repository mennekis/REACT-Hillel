import useFetch from "../hooks/useFetch";

const Users = () => {
  const [data, error, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h3>Users:</h3>
      {error && <h3>{error}</h3>}
      {loading && <h1>Loading...</h1>}
      <ul>
        {data.length > 0 && data.map((el) => <li key={el.id}>{el.name}</li>)}
      </ul>
    </div>
  );
};

export default Users;
