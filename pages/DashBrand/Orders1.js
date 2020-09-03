import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '@jhgkjhg', 'Elvis Presley', '400', '45%', 'Contratar'),
  createData(1, '@jhgkjhg', 'Paul McCartney', '543', '54', 'Contratar'),
  createData(2, '@jhgkjhg', 'Tom Scholz', '323', '46%', 'Contratar'),
  createData(3, '@jhgkjhg', 'Michael Jackson', '340', '78%', 'Contratar'),
  createData(4, '@jhgkjhg', 'Bruce Springsteen', '340', '87%', 'Contratar'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Influencers
      </Title>
      <Table size="small">
        <TableHead>
        <TableRow>
          <TableCell>Filtro</TableCell>
          <TableCell>Nombre</TableCell>
        </TableRow>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>DashPoints</TableCell>
            <TableCell>Afinidad</TableCell>
            <TableCell align="right"> Contratar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver más
        </Link>
      </div>
    </React.Fragment>
  );
}
