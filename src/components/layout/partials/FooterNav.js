import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="">Since 2004</Link>
        </li>
        <li>
          <Link to="">Application Development Company</Link>
        </li>
        <li>
          <Link to="">Winner of Choice Worlds 2015 & 2018</Link>
        </li>
        <li>
          <Link to="">Support 24/7</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;