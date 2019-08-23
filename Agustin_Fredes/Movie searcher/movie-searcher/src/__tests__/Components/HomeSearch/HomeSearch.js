import React from 'react';
import ReactDOM from 'react-dom';
import HomeSearch from "../../../components/HomeSearch"

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});