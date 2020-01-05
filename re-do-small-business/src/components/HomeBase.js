import React from 'react'
import {Link} from 'react-router-dom'
import {Container, CardActions, Card, Typography, CardContent} from '@material-ui/core'


const HomeBase = () => {
    return(
        <Container fixed>
            <div>
                <Card variant='outlined'>
                    <CardContent className='see-listings'>
                        <Typography variant='h5'>See Listings</Typography>
                    </CardContent>
                    <CardActions style={{color: 'green'}}>
                        <Link to={'/public'}>Public Listings</Link>
                    </CardActions>
                </Card>
              <Card variant='outlined'>
                  <CardContent className='login'>
                      <Typography variant='h5'>Want to add listing? Login</Typography>
                  </CardContent>
                  <CardActions style={{color: 'green'}}>
                      <Link to={'/login'}>Login</Link>
                  </CardActions>
              </Card>

            </div>
        </Container>
    )
}

export default HomeBase