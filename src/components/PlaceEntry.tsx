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
      <p>
        Location: {props.placeName} - {props.countryName}
      </p>
      {/*  a main image (URL) */}
      <img src={props.mainImage} className="images" alt={props.imageDesc}/>
      {/* a link to the rough location on google maps (or alternative) (URL) */}
      <a href={props.mapLink}>see {props.placeName} in Google maps!</a>
      {/* some text explaining why you like the place */}
      <p>{props.placeBio}</p>
    </main>
  );
}

export default PlaceEntry;
