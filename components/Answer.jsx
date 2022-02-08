import styles from './Answer.module.css';

export default function Answer(props) {
	return (
		<div className={styles.container}>
			<div className={styles.circle}></div>
			<h3 className={styles.text}>{props.text}</h3>
		</div>
	);
}
