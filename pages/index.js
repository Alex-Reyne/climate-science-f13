import Head from 'next/head';
import Question from '../components/Question';
import styles from '../styles/Home.module.css';

/* Emulate information coming from an API */
const q = {
	question: {
		text: `Which of the below statements about electricity is not true?`,
		answers: [
			{ text: 'Electricity is measured in units called watts', correct: false },
			{ text: 'Electricity flows at the speed of light', correct: false },
			{ text: 'Electricity is a primary energy source', correct: true },
		],
	},
};

export default function Home() {
	const { text, answers } = q.question;

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
				{/* Main animation component */}
				<Question question={text} answers={answers} />
			</main>
		</div>
	);
}
