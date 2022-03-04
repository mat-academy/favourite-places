interface PlaceEntryProps {
  title: string;
  placeName: string;
  countryName: string;
  // mainImage: string;
  // mapLink: string;
  placeBio: string;
}

function PlaceEntry(props: PlaceEntryProps): JSX.Element {
  return (
    <section>
      {/* a title (text) */}
      <h2>{props.title}</h2>
      {/* a place name (text) */} {/* a country name (text) */}
      <p>
        Location: {props.placeName} - {props.countryName}
      </p>
      {/*  a main image (URL) */}
      {/* <p>{props.mainImage}</p> */}
      {/* a link to the rough location on google maps (or alternative) (URL) */}
      {/* <p>{props.mapLink}</p> */}
      {/* some text explaining why you like the place */}
      <p>{props.placeBio}</p>
    </section>
  );
}

export default PlaceEntry;
