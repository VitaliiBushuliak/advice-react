import {Link} from 'react-router-dom';

export const Nav = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/random">Random</Link></li>
      </ul>
    </nav>
  );
};
