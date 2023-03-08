// import React, { useState } from 'react';
// import Paper from '@mui/material/Paper';
// import {
//   Grid,
//   Table,
//   TableHeaderRow,
//   ColumnChooser,
//   TableColumnVisibility,
//   Toolbar,
// } from '@devexpress/dx-react-grid-material-ui';

// import { generateRows } from './Data';
// export default () => {
//   const [columns] = useState([
//     { name: 'name', title: 'Name' },
//     { name: 'gender', title: 'Gender' },
//     { name: 'city', title: 'City' },
//     { name: 'car', title: 'Car' },
//      { name: 'position',title:'position'},
//   ]);
//   const [rows] = useState(generateRows({ length: 100 }));
//   const [defaultHiddenColumnNames] = useState(['name', 'city']);

//   return (
//     <Paper>
//       <Grid
//         rows={rows}
//         columns={columns}
//       >
//         <Table />
//         <TableHeaderRow />
//         <TableColumnVisibility
//           defaultHiddenColumnNames={defaultHiddenColumnNames}
//         />
//         <Toolbar />
//         <ColumnChooser />
//       </Grid>
//     </Paper>
//   );
// };
