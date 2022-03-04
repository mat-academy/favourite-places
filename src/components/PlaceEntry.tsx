interface PlaceEntryProps {
  title: string;
  placeName: string;
  countryName: string;
  mainImage: string;
  imageDesc: string;
  mapLink: string;
  placeBio: string;
}

function PlaceEntry(props: PlaceEntryProps): JSX.Element {
  return (
    <main>
      {/* a title (text) */}
      <h2>{props.title}</h2>
      {/* a place name (text) */} {/* a country name (text) */}
      <h3>
        Location: {props.placeName} - {props.countryName}
      </h3>
      {/*  a main image (URL) */}
      <img src={props.mainImage} className="images" alt={props.imageDesc}/>
      <br />
      {/* a link to the rough location on google maps (or alternative) (URL) */}
      <a href={props.mapLink} className="links">See {props.placeName} in Google maps!</a> 
      {/* some text explaining why you like the place */}
      <h4>{props.placeBio}</h4>
    </main>
  );
}

export default PlaceEntry;
