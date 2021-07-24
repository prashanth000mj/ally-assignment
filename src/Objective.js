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

const Objective = ({title, keyResults, index}) => {
  const [expanded, setExpanded] = useState(false);

  const keyResultElements = keyResults && 
    keyResults.map((keyResult , index) => (
      <KeyResult
        key={keyResult.id}
        index={index}
        title={keyResult.title}
      />
  ));

  return (
    <>
      <div className='objective okr-item title-wrap'>
        {!expanded && 
          <ArrowRightOutlinedIcon 
            fontSize='small' 
            className="objective-arrow" 
            onClick={() => setExpanded(true)}
          />}
        {expanded && 
          <ArrowDropDownOutlinedIcon 
            fontSize='small' 
            className='objective-arrow'
            onClick={() => setExpanded(false)}
          />}
        <AccountCircleOutlinedIcon fontSize='small' color='disabled'/>&emsp;
        <span className="okr-title" title={title}>{index}.&nbsp;&nbsp;{title}</span>
        {expanded && keyResults && svgMarker}
      </div>
      {expanded && keyResultElements}
    </>
  );
};

export default Objective;