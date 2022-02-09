import styles from './Answer.module.css';

export default function Answer(props) {
	return (
		<div className={styles.scroll}>
			<div className={styles.container}>
				<div className={props.correct ? styles.correct : styles.circle}></div>
				<h3 className={styles.text}>{props.text}</h3>
			</div>
		</div>
	);
}
