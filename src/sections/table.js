import React, { Component } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

 class DataTable extends Component {

   render() {
    return (
      <React.Fragment>
        <Table>
          <TableBody>
              <TableRow>
                <TableCell>ITEM</TableCell>
              </TableRow>
              <TableRow>
                {this.props.github_data.map((data) => {
                  <TableCell>{data}</TableCell>
                })}
              </TableRow>
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

 export default DataTable;