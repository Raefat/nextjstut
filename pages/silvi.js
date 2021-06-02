import styles from "../styles/Home.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
export default function Home({ data }) {
  return (
    <div>
      <h1>SILVI PAGE HERE </h1>
      {data.map((user) => {
        return (
          <div key={user.id} className={styles.card}>
            <h2>{user.name}</h2>
            <Link href={`details/${user.id}`}>
              <a>Learn More...</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
