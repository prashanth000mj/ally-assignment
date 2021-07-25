import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import { useState } from 'react';
import KeyResult from './KeyResult';
import './Objective.css';

const svgMarker  = (
  <svg height="35%" className='objective-expansion-marker'>
    <line x1="1.87rem" y1="0" x2="1.87rem" y2="100%" className='marker'></line>
  </svg>
);

const Objective = ({okr, keyResults, index, selectOKR}) => {
  const [expanded, setExpanded] = useState(true);

  const keyResultElements = keyResults && 
    keyResults.map((keyResult , index) => (
      <KeyResult
        key={keyResult.id}
        index={index}
        okr={keyResult}
        selectOKR={selectOKR}
      />
  ));

  return (
    <>
      <div className='objective okr-item title-wrap'>
        {!expanded && 
          <ArrowRightOutlinedIcon 
            fontSize='small' 
            className="objective-arrow" 
            data-testid="expand-icon"
            onClick={() => setExpanded(true)}
          />}
        {expanded && 
          <ArrowDropDownOutlinedIcon 
            fontSize='small' 
            data-testid="colapse-icon"
            className='objective-arrow'
            onClick={() => setExpanded(false)}
          />}
        <AccountCircleOutlinedIcon fontSize='small' color='disabled'/>&emsp;
        <span className="okr-title" title={okr.title} onClick={() => selectOKR(okr)}>
          {index}.&nbsp;&nbsp;{okr.title}</span>
        {expanded && keyResults && svgMarker}
      </div>
      {expanded && keyResultElements}
    </>
  );
};

export default Objective;