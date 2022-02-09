import Answer from './Answer';
import styles from './Question.module.css';

export default function Question({ text }) {
	return (
		<div className={styles.fade}>
			<div className={styles.container}>
				<h3 className={styles.question}>{text}</h3>
				<Answer text={`Electricity is measured in units called watts`} />
				<Answer text={`Electricity flows at the speed of light`} />
				<Answer text={`Electricity is a primary energy source`} correct />
			</div>
		</div>
	);
}
