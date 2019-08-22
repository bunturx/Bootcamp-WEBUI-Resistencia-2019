import React from 'react';
import './styles.css';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [state, setState] = React.useState({
    year: true,
    type: true,
    movie: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox
        checked={state.year}
        onChange={handleChange('year')}
        value="year"

        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
      <Checkbox
        checked={state.type}
        onChange={handleChange('checkedB')}
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox',
        }}
      />
      <Checkbox
       checked={state.movie}
        value="checkedC"
        inputProps={{
          'aria-label': 'terciary-checkbox',
        }}
      />
      />
    </div>
  );
}
