import React from "react";
import "./card-icon.styles.scss";
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
      iconToReturn = <Icon0 className="icon" />;
      break;

    case "Icon1":
      iconToReturn = <Icon1 className="icon" />;
      break;

    case "Icon2":
      iconToReturn = <Icon2 className="icon" />;
      break;

    case "Icon3":
      iconToReturn = <Icon3 className="icon" />;
      break;

    case "Icon4":
      iconToReturn = <Icon4 className="icon" />;
      break;

    case "Icon5":
      iconToReturn = <Icon5 className="icon" />;
      break;

    case "Icon6":
      iconToReturn = <Icon6 className="icon" />;
      break;

    case "Icon7":
      iconToReturn = <Icon7 className="icon" />;
      break;

    case "Icon8":
      iconToReturn = <Icon8 className="icon" />;
      break;

    case "Icon9":
      iconToReturn = <Icon9 className="icon" />;
      break;

    case "Icon10":
      iconToReturn = <Icon10 className="icon" />;
      break;

    case "Icon11":
      iconToReturn = <Icon11 className="icon" />;
      break;

    case "Icon12":
      iconToReturn = <Icon12 className="icon" />;
      break;

    case "Icon13":
      iconToReturn = <Icon13 className="icon" />;
      break;

    case "Icon14":
      iconToReturn = <Icon14 className="icon" />;
      break;

    case "Icon15":
      iconToReturn = <Icon15 className="icon" />;
      break;

    case "Icon16":
      iconToReturn = <Icon16 className="icon" />;
      break;

    case "Icon17":
      iconToReturn = <Icon17 className="icon" />;
      break;
  }

  return <div className="icon">{iconToReturn}</div>;
};

export default CardIcon;
