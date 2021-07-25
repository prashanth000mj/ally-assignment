const style = {
  margin: '5px',
  padding: '5px',
  border: '1px solid lightgray',
  borderRadius: '3px',
  display: 'inline-block',
}

const Filter = ({category, selected, toggleFilter}) => {
  return (
    <label style={style} onClick={() => toggleFilter(category)} className={selected ? 'filter-selected' : ''}>
      {category}
    </label>
  );
};

export default Filter;