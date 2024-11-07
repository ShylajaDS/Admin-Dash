import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableComponent = () => {
  const rows = [
    { id: 6015,  creator: 'SHSURYA',platform:'Global', status: 'Distributed' },
    { id: 6014,  creator: 'SHSURYA',platform:'Global', status: 'Distributed' },
    { id: 6013, creator: 'SHSURYA', platform:'Global',status: 'Deletion_failed' },
    { id: 6012, creator: 'SHSURYA', platform:'Global',status: 'Deletion_failed' },
  ];

  const getStatusStyle = (status) => {
    return status === 'Distributed' ? { color: 'green' } : { color: 'orange' };
  };

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 449, marginLeft: '31px', border: '1px solid whitesmoke '}}>
      <Table size="medium">
        <TableHead>
          <TableRow sx={{ backgroundColor: 'whitesmoke',fontFamily:'Poppins' }}>
            <TableCell>ID</TableCell>
            <TableCell>Creator</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}> 
              <TableCell>{row.id}</TableCell>
              <TableCell >{row.creator}</TableCell>
              <TableCell >{row.platform}</TableCell>
              <TableCell style={getStatusStyle(row.status)}>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
