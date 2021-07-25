import React, { useState } from "react";
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import PropTypes from 'prop-types';
import './Filters.css';
import Filter from './Filter';



const Filters = ({filters, selectedFilters, toggleFilter}) => {
  const [expanded , setExpanded] = useState(true);
  return (
    <>
      {!expanded && 
        <ArrowRightOutlinedIcon 
          fontSize='small' 
          className="filter-arrow" 
          data-testid="filter-expand-icon"
          onClick={() => setExpanded(true)}
        />}
      {expanded && 
        <ArrowDropDownOutlinedIcon 
          fontSize='small' 
          data-testid="filter-colapse-icon"
          className='filter-arrow'
          onClick={() => setExpanded(false)}
        />}
      <h4 id="filters-title" onClick={() => setExpanded(!expanded)}>Filters</h4><br/>
      {expanded && filters.map(filter => 
        <Filter key={filter} category={filter} toggleFilter={toggleFilter} selected={selectedFilters.has(filter)}/>
      )}
    </>
  );
};

Filters.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedFilters: PropTypes.shape(),
  toggleFilter: PropTypes.func,
};

Filters.defaultProps = {
  selectedFilters: new Set(),
  toggleFilter: () => {},
};

export default Filters;