import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Alexander Reyne - Climate Science F13</title>
				<meta
					name='description'
					content='Alexander Reyne - Climate Science F13 Assigment'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1>Hello</h1>
			</main>
		</div>
	);
}
