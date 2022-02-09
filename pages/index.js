import Head from 'next/head';
import Question from '../components/Question';
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
				<Question />
			</main>
		</div>
	);
}
