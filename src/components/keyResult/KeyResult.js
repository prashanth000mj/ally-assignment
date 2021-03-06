import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import React from 'react';
import PropTypes from 'prop-types';
import './KeyResult.css';

// svg lines for tree kind marking
const svgMarker = (
  <svg height="100%" width="5rem" className="key-result-marker">
    <line x1="1.87rem" y1="0" x2="1.87rem" y2="100%" className="marker" />
    <line x1="1.87rem" y1="47%" x2="2.75rem" y2="47%" className="marker" />
  </svg>
);

// for alphabets indexing
const charCodeStart = 97;
const alphabetsCount = 26;

const KeyResult = ({ okr, index, selectOKR }) => {
  // calculating the index fro key result. It goes as a,b,...z,1a,1b,...1z,2a,...
  const charCode = charCodeStart + (index % alphabetsCount);
  const prefixNumber = Math.floor(index / alphabetsCount);
  const indexCharacter = `${prefixNumber > 0 ? prefixNumber : ''}${String.fromCharCode(charCode)}`;

  return (
    <div className="okr-item">
      <div className="key-result title-wrap">
        <AccountCircleOutlinedIcon fontSize="small" color="disabled" />
&emsp;
        <span className="okr-title" title={okr.title} onClick={() => selectOKR(okr)}>
          {indexCharacter}
          .&nbsp;&nbsp;
          {okr.title}

        </span>
      </div>
      {svgMarker}
    </div>
  );
};

KeyResult.propTypes = {
  okr: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
  selectOKR: PropTypes.func,
};

KeyResult.defaultProps = {
  index: 0,
  selectOKR: () => {},
};

export default KeyResult;
