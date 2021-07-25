import React, {useEffect, useState} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Objective from '../objective/Objective';
import Filters from '../filters/Filters';
import OKRDetails from '../dialog/OKRDetails';

const okrsAPI = 'https://okrcentral.github.io/sample-okrs/db.json';
const getFiltersAndOkrs = (data) => {
  const okrs = {};
  const filters = new Set();
  data.forEach(okr => {
    filters.add(okr.category);
    const parent = okr.parent_objective_id === '' ? 'objectives' : okr.parent_objective_id;
    if(!(parent in okrs)){
      okrs[parent] = [];
    }
    okrs[parent].push(okr);
  });
  return [okrs, Array.from(filters)];
};

const OKRs = () => {
  const [okrs, setOkrs] = useState({
    'objectives': []
  });
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [selectedOKR, setSelectedOKR] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchDataFromApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(okrsAPI);
      const {data} = await response.json();
      const [okrsFromAPI, filtersFromAPI] = getFiltersAndOkrs(data);
      setOkrs(okrsFromAPI);
      setFilters(filtersFromAPI);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const toggleFilter = (filter) => {
    const newSelectedFilters = new Set(selectedFilters);
    if(newSelectedFilters.has(filter)){
      newSelectedFilters.delete(filter);
    }else{
      newSelectedFilters.add(filter);
    }
    setSelectedFilters(newSelectedFilters);
  };

  const getFilteredObjectives = () => {
    let objectives = okrs.objectives;
    if(selectedFilters.size > 0){
      objectives = objectives.filter(okr => selectedFilters.has(okr.category));
    }
    return objectives.map((okr, index) => (
      <Objective 
        key={okr.id} 
        keyResults={okrs[okr.id]}
        okr={okr}
        index={index + 1}
        selectOKR={setSelectedOKR}
      />
    ))
  };

  return (<section>
    <h3>Objectives & Key Results</h3>
    {loading && <LinearProgress/>}
    {filters.length > 0 && <Filters filters={filters} toggleFilter={toggleFilter} selectedFilters={selectedFilters}/>}
    { okrs.objectives &&  getFilteredObjectives() }
    { error && <i>No data - {error}</i> }
    {selectedOKR && <OKRDetails okr={selectedOKR} onClose={() => setSelectedOKR()}/>}
  </section>);
}

export default OKRs;