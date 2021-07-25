import React from 'react';
import PropTypes from 'prop-types';
import './OKRDetails.css';

const OKRDetails = ({ okr, onClose }) => (
  <div id="okr-details" onClick={onClose}>
    <section id="okr-details-dialog" onClick={(event) => event.stopPropagation()}>
      <header>
        <b>{okr.parentObjective ? 'Key Result' : 'Objective'}</b>
      </header>
      <hr />
      <div>
        <div>
          <b>Title</b>
          {' '}
          :
          {' '}
          <i>{okr.title}</i>
        </div>
        {okr.parentObjective && (
        <div>
          <b>Objective</b>
          {' '}
          :
          {' '}
          <i>{okr.parentObjective}</i>
        </div>
        ) }
        <div>
          <b>Category</b>
          {' '}
          :
          {' '}
          <i>{okr.category}</i>
        </div>
        <div>
          <b>Metric Name</b>
          {' '}
          :
          {' '}
          <i>{okr.metric_name}</i>
        </div>
        <div>
          <b>Metric Start</b>
          {' '}
          :
          {' '}
          <i>{okr.metric_start}</i>
        </div>
        <div>
          <b>Metric End</b>
          {' '}
          :
          {' '}
          <i>{okr.metric_end}</i>
        </div>
      </div>
      <hr />
      <footer>
        <input type="button" onClick={onClose} value="Close" />
      </footer>
    </section>
  </div>
);

OKRDetails.propTypes = {
  okr: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    metric_name: PropTypes.string,
    metric_start: PropTypes.string,
    metric_end: PropTypes.string,
    parentObjective: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func,
};

OKRDetails.defaultProps = {
  onClose: () => {},
};

export default OKRDetails;
