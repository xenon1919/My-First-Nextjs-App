import styles from "../../styles/Rishi.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { rishi: data },
  };
};

const Rishi = ({ rishi }) => {
  console.log(rishi);

  return (
    <div>
      <h1>All Rishi</h1>
      {rishi.map((rishi) => (
        <Link
          href={"/rishi/" + rishi.id}
          key={rishi.id}
          className={styles.single}
        >
          <h3>{rishi.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Rishi;
