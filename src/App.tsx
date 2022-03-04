import PageHeader from "./components/PageHeader";
//import PlaceEntry from "./components/PlaceEntry";
import placeArr from "./data/PlacesData";
import PageFooter from "./components/PageFooter";

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      {placeArr} 
      <PageFooter />
    </>
  );
}

export default App;
