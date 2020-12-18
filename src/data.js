import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [

    {
      name: "Under the City Stars",
      cover:
        "https://cdn.musicvine.com/images/Fugu-Vibes_Avatar_6956998663453825.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://cdn.musicvine.com/audio-output/431/5705/main-version/streaming-previews/STREAMING-simulate-fugu-vibes-main-version-01-46-16573.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Chilerino",
      cover:
        "https://cdn.musicvine.com/images/Fugu-Vibes_Avatar_6956998663453825.jpg",
      artist: "Ingo, Yo",
      audio: "https://cdn.musicvine.com/audio-output/303/4063/main-version/streaming-previews/STREAMING-laundromat-mountaineer-main-version-02-01-10965.mp3",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default chillHop;
