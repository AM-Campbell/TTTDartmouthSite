import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Nav from "../components/nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TAMID Tech Track @ Dartmouth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <div className={styles.contentcontainer}>
          <h1 className={styles.title}>
            TAMID Tech Track @ <em className={styles.dartmouth}>Dartmouth</em>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error autem ducimus numquam, architecto aliquid laboriosam mollitia
            neque inventore id atque quam minima recusandae obcaecati quia!
            Eveniet suscipit recusandae eum?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            error autem ducimus numquam, architecto aliquid laboriosam mollitia
            neque inventore id atque quam minima recusandae obcaecati quia!
            Eveniet suscipit recusandae eum?
          </p>
          <Link href="students">
            <h4 className={styles.cta}>For Students, join our team.</h4>
          </Link>
          <Link href="businesses">
            <h4 className={styles.cta}>For Businesses, work with us.</h4>
          </Link>
        </div>
      </main>
    </div>
  );
}
