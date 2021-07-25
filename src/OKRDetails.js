import {
  Dialog, DialogTitle, DialogActions, Button, DialogContent
} from '@material-ui/core';

const OKRDetails = ({okr, onClose}) => {
  return (
    <Dialog open onClose={onClose} aria-labelledby="customized-dialog-title">
      <DialogTitle id="customized-dialog-title" onClose={onClose}>
          {okr.title}
      </DialogTitle>
      <DialogContent dividers>
        <div>Category : {okr.category}</div>
        <div>Metric Name : {okr.metric_name}</div>
        <div>Metric Start : {okr.metric_start}</div>
        <div>Metric End : {okr.metric_end}</div>
      </DialogContent>
      <DialogActions>
          <Button onClick={onClose} >
            Close
          </Button>
        </DialogActions>
    </Dialog>
  );
};

export default OKRDetails;