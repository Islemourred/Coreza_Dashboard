import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import { CurrentLocation, MarkerMap } from '../../../Constant';
import HeadingCommon from '../../../Common/Component/HeadingCommon';

const containerStyle = {
    height: '500px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const MarkerMapComp = (props) => {

    const [location, setlocation] = useState({
        address: false,
        mapPosition: {
            lat: 18.5204, lng: 73.8567
        },
        markerPosition: {
            lat: 18.5204, lng: 73.8567
        }
    });

    const showinfowindow = () => {
        setlocation({ ...location, address: true });
    };

    return (
        <Fragment>
            <Col lg="6" md="12">
                <Card>
                    <HeadingCommon Heading={MarkerMap}/>
                    <CardBody>
                        <div className="map-js-height">
                            <div id="gmap-simple" className="map-block">
                                <LoadScript
                                    googleMapsApiKey="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkNaAGLEVq0YLQMi-PYEMabFeREadYe1Q&v=3.exp&libraries=geometry,drawing,places"
                                >
                                    <GoogleMap
                                        mapContainerStyle={containerStyle}
                                        center={center}
                                        zoom={10}
                                    >
                                        <Marker google={props.google}
                                            name={'Dolores park'}
                                            draggable={true}
                                            onClick={showinfowindow}
                                            position={{ lat: location.markerPosition.lat, lng: location.markerPosition.lng }}
                                        />
                                        <Marker />
                                        {location.address ?
                                            <InfoWindow
                                                position={{ lat: (location.markerPosition.lat + 0.0018), lng: location.markerPosition.lng }}
                                            >
                                                <div>
                                                    <span style={{ padding: 0, margin: 0 }}>{CurrentLocation}</span>
                                                </div>
                                            </InfoWindow>
                                            : ''};
                                    </GoogleMap>
                                </LoadScript>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    );
};
export default MarkerMapComp;