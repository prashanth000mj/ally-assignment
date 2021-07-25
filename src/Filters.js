import React, { useState } from "react";
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import './Filters.css';
import Filter from './Filter';



const Filters = ({filters, selectedFilters, toggleFilter}) => {
  const [expanded , setExpanded] = useState(true);
  return (
    <React.Fragment key={filters.length}>
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
    </React.Fragment>
  );
};

export default Filters;