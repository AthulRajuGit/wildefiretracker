import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from  './LocationMarker'
import LocationInfoBox from './LocationInfoBox'

const Map = ({eventData, center, zoom}) => {
   const [locationInfo , setLocationInfo]= useState( null )

   const markers = eventData.map(ev => {
       if(ev.categories[0].id === 8) {
        return  <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
        onClick={ () => setLocationInfo({ id:ev.id ,title: ev.title })} />
       }
       return null
   })

    return (
        <div className="map">
            <GoogleMapReact
                    bootstrapURLKeys={{ Key:
                    'AIzaSyDsUFK1o20YLujfMKfFMzN67Hc0CEWcfgs'}}
                    defaultCenter={center}
                    defaultZoom={zoom}
            >
                      
                    {markers}
            </GoogleMapReact>  
            {locationInfo && <LocationInfoBox  info ={locationInfo} />}      

        </div>
    )
}
Map.defaultProps ={
    center: {
        lat:11.29193270252765,
        lng: 76.24648264312506
    },
    zoom: 6
}



export default Map