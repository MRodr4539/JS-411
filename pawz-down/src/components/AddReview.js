import React, {Component} from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from "@material-ui/core";

class AddReview extends Component {
    state ={
        username:'auto fill-',
        comments: ''
    }
 render(){

    return(
        <Card className='add-review-card'>
            <CardContent>
                <Typography>
                    How is this park looking for you and your Pup?
                </Typography>
                <br></br>
                <CardActions>
                    <TextField
                        id='outlined-multiline-static'
                        multiline
                        rows='4'
                        variant='outlined'
                        placeholder="What's going on at this park?"
                        value=''
                        onChange=''
                    />  
                </CardActions>
                <CardActions>
                    <Button
                        variant='contained'
                        color='primary'
                    >
                        Submit Review
                    </Button>
                </CardActions>

                
            </CardContent>
        </Card>
    )
}
}

export default AddReview;