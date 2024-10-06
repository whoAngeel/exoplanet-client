import React from "react";
import Earth from "../../public/earth/Earth";
import Pegasi from "../../public/51PegasiB/Pegasi";
import Kepler452b from "../../public/kepler452b/Kepler452b";
import Corot7bfiery from "../../public/corot7bfiery/Corot7bfiery";
import Kepler186f from "../../public/kepler186f/Kepler186f";
import Kepler22b from "../../public/kepler22b/Kepler22b";
import Proxima from "../../public/proxima/Proxima";

export default function Exoplanets({ name }) {
  return <>{name == "Tierra" && <Earth/>}
  {name == "Pegasi" && <Pegasi/>}
  {name == "Kepler452b" && <Kepler452b/>}
  {name == "Corot7bfiery" && <Corot7bfiery/>}
  {name == "Kepler186f"  && <Kepler186f/>}
  {name == "Kepler22b" && <Kepler22b/>}
  {name == "Proxima" && <Proxima/>}</>;
}
