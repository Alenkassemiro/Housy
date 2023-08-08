import { FC } from 'react';
import GoogleMapReact from 'google-map-react';
import { HiMapPin } from 'react-icons/hi2';

interface Props {
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  zoomLevel: number;
}

interface LocationPinProps {
  text: string;
  lat: number;
  lng: number;
}

const LocationPin = ({ text, lat, lng }: LocationPinProps) => (
  <div >
    <HiMapPin />
    <p>{text}</p>
  </div>
);

const Map: FC<Props> = ({ location, zoomLevel }: Props) => {
  return (
    <div >
      <h2 >Come Visit Us At Our Campus</h2>

      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
