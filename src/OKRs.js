import {useEffect, useState} from 'react';
import Objective  from './Objective';

const okrsAPI = 'https://okrcentral.github.io/sample-okrs/db.json';
const groupOKRs = (data) => {
  const okrs = {};
  data.forEach(okr => {
    const parent = okr.parent_objective_id === '' ? 'objectives' : okr.parent_objective_id;
    if(!(parent in okrs)){
      okrs[parent] = [];
    }
    okrs[parent].push(okr);
  });
  return okrs;
};

const OKRs = () => {
  const [okrs, setOkrs] = useState({
    'objectives': []
  });
  const [error, setError] = useState();
  useEffect(() => {
    fetch(okrsAPI)
    .then(response => response.json())
    .then(({data}) => setOkrs(groupOKRs(data)))
    .catch(error => {
      setError(error.message)
    });
  }, []);
  return (<section>
    <h2>Objectives & Key Results</h2>
    {
      okrs.objectives.map((okr, index) => (
        <Objective 
          key={okr.id} 
          keyResults={okrs[okr.id]}
          title={okr.title}
          index={index + 1} 
        />
      ))
    }
    {
      error &&
      <i>No data - {error}</i>
    }
  </section>);
}

export default OKRs;