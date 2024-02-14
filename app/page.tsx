import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants';
import Pagination from '@/components/Pagination';
import ArticleList from '@/components/ArticleList';
import styles from './layout.module.css';

export const revalidate = 0;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <div className={styles.listContainer}>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </div>
  );
}
