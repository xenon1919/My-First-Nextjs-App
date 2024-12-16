import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rishi List | Home</title>
        <meta name="keywords" content="rishi" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className={styles.text}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className={styles.text}>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <Link className={styles.btn} href="/rishi">
          See Rishi Listing
        </Link>
      </div>
    </>
  );
}
