import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={1200}
          height={600}
          priority
        />
      </Link>
    </header>
  );
}
