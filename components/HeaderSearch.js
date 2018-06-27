import React from 'react';
import { Menu, Input } from 'semantic-ui-react';
import { Link } from '../routes'; // use curly braces to import one possible item of an import

export default () => {
  return (
    <Menu style={{ marginTop: '25px' }} >
      <Link route="/">
        <a className="item">
        Coin Converter
        </a>
      </Link>

    </Menu>
  );
};
