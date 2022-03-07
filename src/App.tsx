import PageHeader from "./components/PageHeader";
import PlaceEntry from "./components/PlaceEntry";
import placeArr from "./data/PlacesData";
import PageFooter from "./components/PageFooter";

const places = placeArr.map(PlaceEntry);

function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      {places}
      <PageFooter />
    </>
  );
}
export default App;
