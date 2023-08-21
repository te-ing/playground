import { useState } from 'react';
import '../App.css';
import axios from 'axios';
import { useInfiniteQuery } from 'react-query';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

function InfinityScroll() {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(1);
  const [list, setList] = useState<ResponseContent>([]);
  const getPoint = async ({ pageParam = 1 }): Promise<Response> => {
    const { data } = await axios.post('point', {
      page: pageParam,
    });
    return data;
  };
  const { fetchNextPage } = useInfiniteQuery('projects', getPoint, {
    getNextPageParam: () => count,
    onSuccess: data => {
      setTotal(data.pages[0].totalCount);
      if (data.pages[0].totalCount > list.length + 8) setList(data.pages.map(v => v.contents).flat());
    },
  });

  const onIntersect: IntersectionObserverCallback = (entries, observer) => {
    const [{ isIntersecting }] = entries;
    if (isIntersecting) {
      observer.unobserve(entries[0].target);
      setCount(prev => prev + 1);
      fetchNextPage({ pageParam: count });
    }
  };
  const { setTarget } = useIntersectionObserver({ onIntersect, threshold: 0 });
  return (
    <>
      <h1>무한스크롤</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>page is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div style={{ border: '1px solid lightgray', height: '300px', overflow: 'auto' }}>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '12px' }}>
          {list?.map((v, i) => {
            return (
              <li key={i} style={{ border: '1px solid lightgray', height: '30px', listStyle: 'none' }}>
                {v?.title}
              </li>
            );
          })}
        </ul>
        {total > list.length + 8 && (
          <p ref={setTarget} className="read-the-docs">
            LOADING ...
          </p>
        )}
      </div>
    </>
  );
}

export default InfinityScroll;

type Response = {
  totalCount: number;
  pageSize: number;
  balance: number;
  contents: ResponseContent;
};
type ResponseContent = {
  amount: number;
  createdAt: string;
  category: string;
  title: string;
}[];
