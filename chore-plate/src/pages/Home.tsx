import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h1>Home</h1>
      <Link to={'/scroll'}>Infinity Scroll</Link>
      <Link to={'/fromEntries'}>FromEntries</Link>
    </div>
  );
}

export default Home;
