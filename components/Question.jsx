import styles from './Question.module.css';

export default function Question() {
	return (
		<div className={styles.container}>
			<h3 className={styles.question}>
				Which of the below statements about electricity is not true?
			</h3>
		</div>
	);
}
