import PageHeader from "./components/PageHeader";
import PlaceEntry from "./components/PlaceEntry";
import PageFooter from "./components/PageFooter";
import Sydney from "./images/Sydney_Australia";
import Marrakech from "./images/Marrakech_Morocco";
import Tamarama from "./images/TamaramaBay_Australia";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <PlaceEntry 
        title={"The best city in the Southern Hemisphere"}
        placeName={"Sydney"}
        countryName={"Australia"}
        mainImage={Sydney}
        mapLink={}
        placeBio={"Sydney is a great place!"}
      />
      <PlaceEntry 
        title={"jack"}
        placeName={"Marrakech"}
        countryName={"Morocco"}
        mainImage={Marrakech}
        mapLink={}
        placeBio={"Marrakech is a great place!"}
      />
      <PlaceEntry 
        title={"jack"}
        placeName={"Tamarama Bay"}
        countryName={"Australia"}
        mainImage={Tamarama}
        mapLink={}
        placeBio={"Tamarama Bay is a great beach!"}
      />
      <PageFooter />
    </>
  );
}

export default App;

// title: string;
// placeName: string;
// countryName: string;
// mainImage: string;
// mapLink: string;
// placeBio: string;