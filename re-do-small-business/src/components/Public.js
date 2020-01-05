import React, {Component} from 'react'
import {Link} from  'react-router-dom'
import {TableContainer, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const PublicTable = (props) => {


    let loginStat = props.user.loggedIn

    console.log(loginStat)
        console.log(props.user.loggedIn)
        // console.log(this.props)
        return(
            <TableContainer>
            <Table className='listing-table' aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align='right'>ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Business Hours</TableCell>
                  <TableCell align="right">Address</TableCell>
                    {props.user.loggedIn && (
                        <TableCell align="right">Delete</TableCell>
                    )}


                </TableRow>
              </TableHead>
              <TableBody>
                {props.listings.map((listing, index) => (
                  <TableRow key={listing.id}>
                   
                    <TableCell component="th" scope="row">
                      {listing.id}
                    </TableCell>

                    <TableCell align="right">
                        <Link to={`/listing/${listing.id}`}>{listing['name']}</Link>
                    </TableCell>

                    <TableCell align="right">
                        {listing['description']}
                    </TableCell>

                    <TableCell align="right">
                        {listing['address']}
                    </TableCell>

                    <TableCell align="right">
                        {listing['hours']}
                    </TableCell>
                    {props.user.loggedIn && (
                        <TableCell>
                            <DeleteOutlinedIcon
                             onClick={() => props.deleteListing(index)}
                             className='icon text-red'/>
                        </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
      }
        
    

export default PublicTable