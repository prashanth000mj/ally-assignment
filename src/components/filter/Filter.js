import React from 'react';
import PropTypes from 'prop-types';

const style = {
  margin: '5px',
  padding: '5px',
  border: '1px solid lightgray',
  borderRadius: '3px',
  display: 'inline-block',
  cursor: 'pointer',
};

const Filter = ({ category, selected, toggleFilter }) => (
  <label style={style} onClick={() => toggleFilter(category)} className={selected ? 'filter-selected' : ''}>
    {category}
  </label>
);

Filter.propTypes = {
  category: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  toggleFilter: PropTypes.func,
};

Filter.defaultProps = {
  selected: false,
  toggleFilter: () => {},
};

export default Filter;
