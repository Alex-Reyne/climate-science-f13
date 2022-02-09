import Answer from './Answer';
import styles from './Question.module.css';

export default function Question({ question, answers }) {
	return (
		<div className={styles.fade}>
			<div className={styles.container}>
				<h3 className={styles.question}>{question}</h3>
				{/* Map through the answers that were passed in through
        props and return a new `Answer` component for each one. */}
				{answers.map(({ text, correct }) => {
					console.log(text, correct);
					return <Answer answer={text} correct={correct} />;
				})}
			</div>
		</div>
	);
}
