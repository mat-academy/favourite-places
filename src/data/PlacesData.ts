interface PlaceDataProps {
    title: string;
    placeName: string;
    countryName: string;
    mainImage: string;
    imageDesc: string;
    mapLink: string;
    placeBio: string;
  }

  //template for places
//   const place1: PlaceDataProps = {
//     title: "title for place",
//     placeName= "place name",
//     countryName= "country",
//     mainImage= "image filepath",
//     imageDesc= "image alt text",
//     mapLink= "link to a googlemap",
//     placeBio= "supportin text"
//   }

const place1: PlaceDataProps = {
    title: "The best place to live in the world",
    placeName: "Sydney",
    countryName: "Australia",
    mainImage: "/images/Sydney_Australia.jpg",
    imageDesc: "Sydney portside",
    mapLink: "https://www.google.co.uk/maps/place/Sydney+NSW,+Australia/@-33.8473552,150.6511096,10z/data=!3m1!4b1!4m5!3m4!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955",
    placeBio: "Sydney is a great place to live - great weather, nearby beaches and outstanding food culture."
  }

const place2: PlaceDataProps = {
    title: "An amazing market in a bustling city",
    placeName: "Jemaa el-Fna, Marrakech",
    countryName: "Morocco",
    mainImage: "/images/Marrakech_Morocco.jpg",
    imageDesc: "Jemaa el-Fna Market",
    mapLink: "https://www.google.co.uk/maps/place/Jemaa+el-Fna,+Marrakesh+40000,+Morocco/@31.6257793,-7.9899295,18z/data=!3m1!4b1!4m5!3m4!1s0xdafee43ad1cec7d:0x91b033ce5d01bbb1!8m2!3d31.6259602!4d-7.9890901",
    placeBio: "The Medina in Marrakech is a lively with a sprawling market that runs out of the main square & through the city. Be careful not to get lost!"
  }

const place3: PlaceDataProps = {
    title: "Sleepy seaside city in Europe",
    placeName: "San Remo",
    countryName: "Italy",
    mainImage: "/images/SanRemo_Italia.jpg",
    imageDesc: "San Remo Harbour",
    mapLink: "https://www.google.com/maps/place/18038+Sanremo,+Province+of+Imperia,+Italy/@43.816383,7.7133023,12z/data=!3m1!4b1!4m5!3m4!1s0x12cdf5450348b727:0x3c017283ac41265d!8m2!3d43.8159671!4d7.7760567",
    placeBio: "San Remo is a short drive along the French Cote d'Azur and features beautiful views, a 12th-century cathedral and wonderful restaurants & cafes."
  }

const place4: PlaceDataProps = {
    title: "The best beach in Australia",
    placeName: "Tamarama Bay",
    countryName: "Australia",
    mainImage: "/images/TamaramaBay_Australia.jpg",
    imageDesc: "Tamarama surf life saving club",
    mapLink: "https://www.google.co.uk/maps/place/Tamarama+Beach/@-33.9005195,151.2682692,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ad866e85b7a1:0xd75c650f0c850eaf!8m2!3d-33.9004125!4d151.2704217",
    placeBio: "Tamarama is slightly south of Bondi Beach but cut off from the bay by the cliffs to the North - making access slightly harder but the beach is much quieter than the Bondi strech."
  }

  const placeArr = [place1, place2, place3, place4]
  export default placeArr

