import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

 class DataTable extends Component {

   render() {
    const github_data = this.props.github_data.map((item) => {
      return <TableCell>{item}</TableCell>;
    });

    const headers = this.props.github_data.map((item) => {
      return <TableCell>HEADER</TableCell>;
    });

    return (
      <React.Fragment>
        <Table>
          <TableBody>
              <TableRow>
                <TableCell>ITEM</TableCell>
              </TableRow>
              <TableRow>
              {github_data}
              </TableRow>
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

 export default DataTable;