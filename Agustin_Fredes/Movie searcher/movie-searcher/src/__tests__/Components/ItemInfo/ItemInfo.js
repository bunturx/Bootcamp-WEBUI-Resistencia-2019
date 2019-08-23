import React from 'react';
import ReactDOM from 'react-dom';
import ItemInfo from "./../../../components/ItemInfo"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ItemInfo match={{params : ""}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});