import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>BRAND: Nike</Title>
      <Typography component="p" variant="h4">
        ROI $700,024 COP
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 1 SEP, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver Historial
        </Link>
      </div>
    </React.Fragment>
  );
}
