import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ArrowRightOutlinedIcon from '@material-ui/icons/ArrowRightOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import KeyResult from '../keyResult/KeyResult';
import './Objective.css';

// svg lines for tree kind marking
const svgMarker = (
  <svg height="35%" className="objective-expansion-marker">
    <line x1="1.87rem" y1="0" x2="1.87rem" y2="100%" className="marker" />
  </svg>
);

const Objective = ({
  okr, keyResults, index, selectOKR,
}) => {
  const [expanded, setExpanded] = useState(true);

  const onKeyResultSelect = (selectedOKR) => {
    selectOKR({
      ...selectedOKR,
      parentObjective: okr.title,
    });
  };
  const keyResultElements = keyResults
    && keyResults.map((keyResult, keyIndex) => (
      <KeyResult
        key={keyResult.id}
        index={keyIndex}
        okr={keyResult}
        selectOKR={onKeyResultSelect}
      />
    ));

  return (
    <>
      <div className="objective okr-item title-wrap">
        {!expanded
          && (
          <ArrowRightOutlinedIcon
            fontSize="small"
            className="objective-arrow"
            data-testid="expand-icon"
            onClick={() => setExpanded(true)}
          />
          )}
        {expanded
          && (
          <ArrowDropDownOutlinedIcon
            fontSize="small"
            data-testid="colapse-icon"
            className="objective-arrow"
            onClick={() => setExpanded(false)}
          />
          )}
        <AccountCircleOutlinedIcon fontSize="small" color="disabled" />
          &emsp;
        <span
          className="okr-title"
          title={okr.title}
          onClick={() => selectOKR(okr)}
        >
          {index}
          .&nbsp;&nbsp;
          {okr.title}

        </span>
        {expanded && keyResults && svgMarker}
      </div>
      {expanded && keyResultElements}
    </>
  );
};

Objective.propTypes = {
  okr: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  keyResults: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  index: PropTypes.number,
  selectOKR: PropTypes.func,
};

Objective.defaultProps = {
  keyResults: [],
  index: 0,
  selectOKR: () => {},
};

export default Objective;
