export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((rishi) => {
    return {
      params: { id: rishi.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { rishi: data },
  };
};
const Details = ({ rishi }) => {
  return (
    <div>
      <h1>{rishi.name}</h1>
      <p>{rishi.email}</p>
      <p>{rishi.website}</p>
      <p>{rishi.address.city}</p>
    </div>
  );
};

export default Details;
