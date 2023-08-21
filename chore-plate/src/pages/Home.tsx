import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to={'/scroll'}>Infinity Scroll</Link>
    </>
  );
}

export default Home;
