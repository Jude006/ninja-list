import Link from "next/link";
import localFont from "next/font/local";
import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div >
        
      <h1 className={styles.title}> Hello world</h1>
      <p className={styles.text}>
        If you want to handle multiple roles, you can simply extend the check.
        For example, if you want both admin and manager to have access:
      </p>
      <Link href="/ninjas">
        <p className={styles.btn}>See ninjas linting</p>
      </Link>
    
    </div>
    </>
  );
}
