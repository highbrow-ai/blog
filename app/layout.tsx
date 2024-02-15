import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import './globals.css';
import styles from './layout.module.css';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Highbrow',
  description:
    'A blog by highbrow.ai on Machine Learning, Data Science, Reinforcement Learning, Neuromorphic Computing and more.',
  openGraph: {
    title: 'Highbrow',
    description:
      'A blog by highbrow.ai on Machine Learning, Data Science, Reinforcement Learning, Neuromorphic Computing and more',
    images: '/ogp_new.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });

  return (
    <html lang="en">
      <body>
        <div className={styles.headingContainer}>
          <Header />
          <Nav tags={tags.contents} />
        </div>
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
