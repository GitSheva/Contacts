import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ViewIcon from "@material-ui/icons/Visibility";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  actionsCell: {
    textAlign: "center"
  }
});

const ContactTable3 = props => {
  const { classes, rows } = props;

  const handleEditClick = (event, id) => {
    alert("Update row with id: " + id);
  };

  const handleDeleteClick = (event, id) => {
    alert("Delete row with id: " + id);
  };

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Website</TableCell>
            <TableCell className={classes.actionsCell}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row._id} hover>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.email}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.phone}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.website}
                </TableCell>
                <TableCell
                  className={classes.actionsCell}
                  component="th"
                  scope="row"
                >
                  <IconButton
                    aria-label="Edit"
                    component={Link}
                    to={`/AddContact/${row._id}`}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="Delete"
                    onClick={event => handleDeleteClick(event, row._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

ContactTable3.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactTable3);
