import PageHeader from "./components/PageHeader";
import PlaceEntry from "./components/PlaceEntry";
import PageFooter from "./components/PageFooter";
// import Sydney from "./images/Sydney_Australia.jpg";
// import Marrakech from "./images/Marrakech_Morocco.jpg";
// import Tamarama from "./images/TamaramaBay_Australia.jpg";


function App(): JSX.Element {
  return (
    <>
      <PageHeader />
      <PlaceEntry
        title={"The best city in the Southern Hemisphere"}
        placeName={"Sydney"}
        countryName={"Australia"}
       // <img > ./images/Sydney_Australia.jpg </img>
        // mainImage={Sydney}
        // mapLink={
        //   <a href="https://www.google.co.uk/maps/place/Sydney+NSW,+Australia/@-33.8473552,150.6511096,10z/data=!3m1!4b1!4m5!3m4!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955">
        //     See Syndey on a map!</a> }
        placeBio={"Sydney is a great place!"}
      />
      <PlaceEntry
        title={"The best marketplace in the world!"}
        placeName={"Jemaa el-Fna, Marrakech"}
        countryName={"Morocco"}
        // mainImage={Marrakech}
        // mapLink={
        //   "https://www.google.co.uk/maps/place/Jemaa+el-Fna,+Marrakesh+40000,+Morocco/@31.6257793,-7.9899295,18z/data=!3m1!4b1!4m5!3m4!1s0xdafee43ad1cec7d:0x91b033ce5d01bbb1!8m2!3d31.6259602!4d-7.9890901"
        // }
        placeBio={"Marrakech is a great place!"}
      />
      <PlaceEntry
        title={"The best beach in the Southern Hemisphere"}
        placeName={"Tamarama Bay"}
        countryName={"Australia"}
        // mainImage={Tamarama}
        // mapLink={
        //   "https://www.google.co.uk/maps/place/Tamarama+Beach/@-33.9005195,151.2682692,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ad866e85b7a1:0xd75c650f0c850eaf!8m2!3d-33.9004125!4d151.2704217"
        // }
        placeBio={"Tamarama Bay is a great beach!"}
      />
      <PageFooter />
    </>
  );
}

export default App;