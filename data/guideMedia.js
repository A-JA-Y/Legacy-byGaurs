// Imagery and film for the buyer-guide pages. Every still is a render from the
// official brochure (all marked "Artistic Impression" there), re-encoded as
// high-quality WebP at 2400w and 960w so <GuidePicture> can serve a srcset —
// the site is a static export, so Next does not resize images for us.
import legacyVillasLg from "@/assets/guides/legacy-villas-2400.webp";
import legacyVillasSm from "@/assets/guides/legacy-villas-960.webp";
import towerGolfLg from "@/assets/guides/tower-golf-2400.webp";
import towerGolfSm from "@/assets/guides/tower-golf-960.webp";
import towerLakeLg from "@/assets/guides/tower-lake-2400.webp";
import towerLakeSm from "@/assets/guides/tower-lake-960.webp";
import towerPariChowkLg from "@/assets/guides/tower-pari-chowk-2400.webp";
import towerPariChowkSm from "@/assets/guides/tower-pari-chowk-960.webp";
import houseOfRoyalsLg from "@/assets/guides/house-of-royals-2400.webp";
import houseOfRoyalsSm from "@/assets/guides/house-of-royals-960.webp";
import clubLobbyLg from "@/assets/guides/club-lobby-2400.webp";
import clubLobbySm from "@/assets/guides/club-lobby-960.webp";
import indoorPoolLg from "@/assets/guides/indoor-pool-2400.webp";
import indoorPoolSm from "@/assets/guides/indoor-pool-960.webp";
import lobbyViewLg from "@/assets/guides/lobby-view-2400.webp";
import lobbyViewSm from "@/assets/guides/lobby-view-960.webp";
import livingAreaLg from "@/assets/guides/living-area-2400.webp";
import livingAreaSm from "@/assets/guides/living-area-960.webp";
import masterBedroomLg from "@/assets/guides/master-bedroom-2400.webp";
import masterBedroomSm from "@/assets/guides/master-bedroom-960.webp";
import balconyViewLg from "@/assets/guides/balcony-view-2400.webp";
import balconyViewSm from "@/assets/guides/balcony-view-960.webp";
import golfGreensLg from "@/assets/guides/golf-greens-2400.webp";
import golfGreensSm from "@/assets/guides/golf-greens-960.webp";

const pic = (sm, lg, alt) => ({ sm, lg, alt });

export const guideMedia = {
  legacyVillas: pic(
    legacyVillasSm,
    legacyVillasLg,
    "The Legacy Villas at dusk: a row of multi-level villas with terraces at Legacy by Gaurs, Jaypee Greens (artistic impression)"
  ),
  towerGolf: pic(
    towerGolfSm,
    towerGolfLg,
    "A Legacy by Gaurs condominium tower rising beside the Jaypee Greens golf course (artistic impression)"
  ),
  towerLake: pic(
    towerLakeSm,
    towerLakeLg,
    "Legacy by Gaurs tower seen across a lake on the golf course at sunset (artistic impression)"
  ),
  towerPariChowk: pic(
    towerPariChowkSm,
    towerPariChowkLg,
    "Legacy by Gaurs tower at dusk on the Pari Chowk side, Greater Noida (artistic impression)"
  ),
  houseOfRoyals: pic(
    houseOfRoyalsSm,
    houseOfRoyalsLg,
    "House of Royals clubhouse on the lawns at Legacy by Gaurs (artistic impression)"
  ),
  clubLobby: pic(
    clubLobbySm,
    clubLobbyLg,
    "The grand club lobby and staircase of the House of Royals clubhouse (artistic impression)"
  ),
  indoorPool: pic(
    indoorPoolSm,
    indoorPoolLg,
    "Indoor heated pool at the House of Royals clubhouse, Legacy by Gaurs (artistic impression)"
  ),
  lobbyView: pic(
    lobbyViewSm,
    lobbyViewLg,
    "Tower lobby at Legacy by Gaurs, part of the shared common area (artistic impression)"
  ),
  livingArea: pic(
    livingAreaSm,
    livingAreaLg,
    "Furnished living and dining area of a Legacy by Gaurs 4 BHK show home (artistic impression; homes are handed over as a raw structure)"
  ),
  masterBedroom: pic(
    masterBedroomSm,
    masterBedroomLg,
    "Master bedroom of a Legacy by Gaurs 4 BHK show home with golf views (artistic impression)"
  ),
  balconyView: pic(
    balconyViewSm,
    balconyViewLg,
    "Balcony of a Legacy by Gaurs condominium overlooking the golf course (artistic impression)"
  ),
  golfGreens: pic(
    golfGreensSm,
    golfGreensLg,
    "The 18-hole golf course at Jaypee Greens, Greater Noida"
  ),
};

// Ambient hero loops cut from the same renders (public/videos).
export const heroFilms = {
  villaVsFlat: {
    webm: "/videos/villa-vs-flat-hero.webm",
    mp4: "/videos/villa-vs-flat-hero.mp4",
  },
  carpetArea: {
    webm: "/videos/carpet-area-hero.webm",
    mp4: "/videos/carpet-area-hero.mp4",
  },
};

// YouTube films, each checked against YouTube's oEmbed record for its channel.
export const guideVideos = {
  officialWalkthrough: {
    id: "932ekLFn36I",
    title: "Legacy by Gaurs | Walkthrough of Timeless Luxury Crafted for Generations",
    channel: "Gaurs | Luxury",
    official: true,
  },
  gaursGroupFilm: {
    id: "3aTEo-oypjo",
    title: "Gaurs Group | Crafting Landmarks, Redefining Luxury",
    channel: "Gaurs Group",
    official: true,
  },
  areaExplainer: {
    id: "R3fKEhecdPw",
    title: "Carpet area vs Built-up area vs Super Built-up area",
    channel: "MBTV by Magicbricks",
    official: false,
    language: "Hindi",
  },
};
