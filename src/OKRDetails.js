import {
  Dialog, DialogTitle, DialogActions, Button, DialogContent
} from '@material-ui/core';
import PropTypes from 'prop-types';

const OKRDetails = ({okr, onClose}) => {
  return (
    <Dialog open onClose={onClose} aria-labelledby="customized-dialog-title">
      <DialogTitle id="customized-dialog-title" onClose={onClose}>
          {okr.parentObjective ? 'Key Result' : 'Objective'}
      </DialogTitle>
      <DialogContent dividers>
        <div><b>Title</b> : <i>{okr.title}</i></div>
        {okr.parentObjective && <div><b>Objective</b> : <i>{okr.parentObjective}</i></div> }
        <div><b>Category</b> : <i>{okr.category}</i></div>
        <div><b>Metric Name</b> : <i>{okr.metric_name}</i></div>
        <div><b>Metric Start</b> : <i>{okr.metric_start}</i></div>
        <div><b>Metric End</b> : <i>{okr.metric_end}</i></div>
      </DialogContent>
      <DialogActions>
          <Button onClick={onClose} >
            Close
          </Button>
        </DialogActions>
    </Dialog>
  );
};

OKRDetails.propTypes = {
  okr: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    metric_name: PropTypes.string,
    metric_start: PropTypes.string,
    metric_end: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func,
};

OKRDetails.defaultProps = {
  onClose: () => {},
};

export default OKRDetails;