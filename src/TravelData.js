// It is assumed that this file will be placed inside the src folder
// Do not forget to first import the full path of all your images that is present in the Assets sub-directory as shown below
// import Place1Image1 from "./Assets/filename.extension" and similarly for the rest.
// You can use the images that I have provided or use your own
// I have provided a lorem ipsum content for description. Just use that. No need to spend time figuring out a description.

import TokyoImg1 from "./assets/TokyoImage1.jpg";
import TokyoImg2 from "./assets/TokyoImage2.jpg";
import TokyoImg3 from "./assets/TokyoImage3.jpg";
import LondonImg1 from "./assets/LondonImage1.jpg";
import LondonImg2 from "./assets/LondonImage2.jpg";
import LondonImg3 from "./assets/LondonImage3.jpg";
import SFImg1 from "./assets/SFImage1.jpg";
import SFImg2 from "./assets/SFImage2.jpg";
import SFImg3 from "./assets/SFImage3.jpg";

const data = [
  {
    id: 1,
    placeHeading: "Tokyo",
    placeImg1: TokyoImg1,
    placeImg2: TokyoImg2,
    placeImg3: TokyoImg3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 2,
    placeHeading: "London",
    placeImg1: LondonImg1,
    placeImg2: LondonImg2,
    placeImg3: LondonImg3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 3,
    placeHeading: "San Francisco",
    placeImg1: SFImg1,
    placeImg2: SFImg2,
    placeImg3: SFImg3,
    placeDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default data;
