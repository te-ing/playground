import { Button } from '@/shad/ui/button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Link to="login">
        <Button>login</Button>
      </Link>
      <Link to="test">
        <Button>test</Button>
      </Link>
    </div>
  );
}
