import React from "react";
import { ReactComponent as Icon1 } from "../assets/001-arc de triomphe.svg";
import { ReactComponent as Icon2 } from "../assets/004-big-ben.svg";
import { ReactComponent as Icon3 } from "../assets/012-Colosseum.svg";
import { ReactComponent as Icon4 } from "../assets/042-taj-mahal.svg";
import { ReactComponent as Icon5 } from "../assets/040-stonehenge.svg";
import { ReactComponent as Icon6 } from "../assets/039-sphinx.svg";
import { ReactComponent as Icon7 } from "../assets/036-pyramid.svg";
import { ReactComponent as Icon8 } from "../assets/035-pisa-tower.svg";
import { ReactComponent as Icon9 } from "../assets/033-parthenon.svg";
import { ReactComponent as Icon10 } from "../assets/026-louvre-pyramid.svg";
import { ReactComponent as Icon11 } from "../assets/024-london-eye.svg";
import { ReactComponent as Icon12 } from "../assets/023-statue-of-liberty.svg";
import { ReactComponent as Icon13 } from "../assets/019-great-wall-of-china.svg";
import { ReactComponent as Icon14 } from "../assets/014-empire-state-building.svg";
import { ReactComponent as Icon15 } from "../assets/008-brandenburg-gate.svg";
import { ReactComponent as Icon16 } from "../assets/045-tian-tan-buddha.svg";
import { ReactComponent as Icon17 } from "../assets/018-golden gate.svg";
import { ReactComponent as Icon0 } from "../assets/013-eiffel-tower.svg";

const CardIcon = ({ iconName }: { iconName: string }) => {
  let iconToReturn;
  switch (iconName) {
    case "Icon0":
      iconToReturn = <Icon0 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon1":
      iconToReturn = <Icon1 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon2":
      iconToReturn = <Icon2 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon3":
      iconToReturn = <Icon3 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon4":
      iconToReturn = <Icon4 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon5":
      iconToReturn = <Icon5 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon6":
      iconToReturn = <Icon6 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon7":
      iconToReturn = <Icon7 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon8":
      iconToReturn = <Icon8 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon9":
      iconToReturn = <Icon9 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon10":
      iconToReturn = <Icon10 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon11":
      iconToReturn = <Icon11 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon12":
      iconToReturn = <Icon12 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon13":
      iconToReturn = <Icon13 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon14":
      iconToReturn = <Icon14 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon15":
      iconToReturn = <Icon15 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon16":
      iconToReturn = <Icon16 style={{ width: "100%", height: "100%" }} />;
      break;

    case "Icon17":
      iconToReturn = <Icon17 style={{ width: "100%", height: "100%" }} />;
      break;
  }

  return <div>{iconToReturn}</div>;
};

export default CardIcon;
