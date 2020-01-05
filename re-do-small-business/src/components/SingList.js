import React from 'react';
import Card from '@material-ui/core/Card';
import GoogleMapReact from 'google-map-react';
import { CardContent } from '@material-ui/core';


const AnyReactComponent = ({ text }) => <div>{ text }</div>

const SingList = (props) => {
  const id = props.match.params.id
  const listing = props.listings.find(line => line.id == id)

const defaultProps = {
 
  center: {
        lat: Number(listing.latitude),
        lng: Number(listing.longitude),
  },
  zoom: 13
};


  return (
    <Card className = 'listing-Card'>
      <CardContent>
      <h2>Name: {listing.name}</h2>
       <h4>Address: {listing.address}</h4>
       <h4>Hours: {listing.hours}</h4>
          <p>Description: {listing.description}</p>
      </CardContent>
       
       <Card style={{ height: '400px', width: '450px'}}>
         
         <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY}}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}>
            <AnyReactComponent lat={listing.latitude} lng={listing.longitude} text={listing.name}/>
          </GoogleMapReact>
       </Card>
    </Card>
  )
}



export default SingList;