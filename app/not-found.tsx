import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>404</dt>
        <dd className={styles.text}>What you are looking for doesn't exist!</dd>
      </dl>
    </div>
  );
}
