import styles from './Answer.module.css';

export default function Answer({ answer, correct }) {
	return (
		<div className={styles.scroll}>
			<div className={styles.container}>
				{/* If answer is correct, it's class is changed to 'correct'
        so that the `select` animation is applied to it */}
				<div className={correct ? styles.correct : styles.circle}></div>
				<h3 className={styles.text}>{answer}</h3>
			</div>
		</div>
	);
}
