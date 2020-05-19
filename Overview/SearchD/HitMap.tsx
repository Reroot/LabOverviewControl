import * as React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';


//USe tsrcfull full
//USE tsx becuase that's what we defined in control, jsx, and tsx
//https://www.npmjs.com/package/react-google-places-autocomplete
//npm i react-google-places-autocomplete
//<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places"></script>
//npm i @react-google-maps/api

//THIS TRANSLATES THE GOOGLE API, nice find
// we need this to transalte the google api npm install --save @types/googlemaps from jsx to ts
export interface IInputs {
  Attribute: ComponentFramework.PropertyTypes.Property;
  controlValue: ComponentFramework.PropertyTypes.StringProperty;
  google:any;
  zoom?: any;
  position: {
    lat: number;
    lng: number; };
}
export interface IOutputs { //ts TYPES interfacing
  //this will be exported as state
  stores: any;
}
//The difrrence with ts and react is we only need to export
//pass in inputs to ts
export class HitMap extends React.Component<IInputs, IOutputs> {
  constructor(props: IInputs) {
    super(props);
    //dont use state when we dont need it
    this.state = { //sample markers
      stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
              {latitude: 47.359423, longitude: -122.021071},
              {latitude: 47.2052192687988, longitude: -121.988426208496},
              {latitude: 47.6307081, longitude: -122.1434325},
              {latitude: 47.3084488, longitude: -122.2140121},
              {latitude: 47.5524695, longitude: -122.0425407}]
    }
    //make sure to bind
    //this.runApi = this.runApi.bind(this);
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} ref={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  

  public render() {
    //efine params and types with type script
    return (
      <Map
        //google={this.props.google}
        google={this.props.google}
        zoom={8}//crl space for ts commands
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      >
        {this.displayMarkers()}
        {/* <Marker mapCenter={{ lat: 48.00, lng: -122.00}} /> */}
        </Map>
  );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCS02GPaOUIyRe8s4q0H-S2XTN2OJEaDkU'
})

const mapStyles = {
  width: '100%',
  height: '100%',
};
// tsrcc→	class component skeleton
// tsrcfull→	class component skeleton with Props, State, and constructor
// tsrcjc→	class component skeleton without import and default export lines
// tsrpcc→	class purecomponent skeleton
// tsrpcjc→	class purecomponent without import and default export lines
// tsrpfc	pure function component skeleton
// tsdrpfc	stateless functional component with default export
// tsrsfc	stateless functional component
// conc→	class default constructor with props and context
// cwm→	componentWillMount method
// ren→	render method
// cdm→	componentDidMount method
// cwrp→	componentWillReceiveProps method
// scu→	shouldComponentUpdate method
// cwu→	componentWillUpdate method
// cdu→	componentDidUpdate method
// cwum→	componentWillUnmount method
// gdsfp→	getDerivedStateFromProps method
// gsbu	getSnapshotBeforeUpdate method
// sst→	this.setState with object as parameter
// bnd→	binds the this of method inside the constructor
// met→	simple method
// tscntr→	react redux container skeleton
// imt	create a import