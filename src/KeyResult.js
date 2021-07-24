import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import './KeyResult.css';

const svgMarker = (
  <svg height="100%" className='key-result-marker'>
    <line x1="1.87rem" y1="0" x2="1.87rem" y2="100%" className='marker'></line>
    <line x1="1.87rem" y1="47%" x2="2.75rem" y2="47%" className='marker'></line>
  </svg>
);

const charCodeStart = 97;
const alphabetsCount = 26;

const KeyResult = ({title, index}) => {
  const charCode = charCodeStart + (index % alphabetsCount);
  const prefixNumber = Math.floor(index/alphabetsCount);
  const indexCharacter = `${prefixNumber > 0 ? prefixNumber : ''}${String.fromCharCode(charCode)}`;

  return (
    <div className='okr-item'>
      <div className='key-result title-wrap'>
        <AccountCircleOutlinedIcon fontSize='small' color='disabled'/>&emsp;
        <span className='okr-title' title={title}>{indexCharacter}.&nbsp;&nbsp;{title}</span>
      </div>
      {svgMarker}    
    </div>
  );
};

export default KeyResult;