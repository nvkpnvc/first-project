import { GoogleMap } from "react-google-maps";
export default function Map() {
  return (
    <>
      <GoogleMap
        defaultZoom={5}
        defaultCenter={{ lat: 43.8419559, lng: 19.8907629 }}
      />
    </>
  );
}
