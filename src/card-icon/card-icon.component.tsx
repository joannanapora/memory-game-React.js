import React from "react";
import { ReactComponent as Icon1 } from "../assets/001-arc de triomphe.svg";
import { ReactComponent as Icon18 } from "../assets/002-azadi.svg";
import { ReactComponent as Icon19 } from "../assets/003-bayterek.svg";
import { ReactComponent as Icon2 } from "../assets/004-big-ben.svg";
import { ReactComponent as Icon21 } from "../assets/005-black star.svg";
import { ReactComponent as Icon20 } from "../assets/006-blue mosque.svg";
import { ReactComponent as Icon22 } from "../assets/007-borobudur.svg";
import { ReactComponent as Icon15 } from "../assets/008-brandenburg-gate.svg";
import { ReactComponent as Icon23 } from "../assets/009-burj al arab.svg";
import { ReactComponent as Icon24 } from "../assets/010-cairo citadel.svg";
import { ReactComponent as Icon25 } from "../assets/011-cathedral of saint basil.svg";
import { ReactComponent as Icon3 } from "../assets/012-Colosseum.svg";
import { ReactComponent as Icon0 } from "../assets/013-eiffel-tower.svg";
import { ReactComponent as Icon14 } from "../assets/014-empire-state-building.svg";
import { ReactComponent as Icon26 } from "../assets/015-forbidden city.svg";
import { ReactComponent as Icon27 } from "../assets/016-fuji mountain.svg";
import { ReactComponent as Icon28 } from "../assets/017-gateway arch.svg";
import { ReactComponent as Icon17 } from "../assets/018-golden gate.svg";
import { ReactComponent as Icon13 } from "../assets/019-great-wall-of-china.svg";
import { ReactComponent as Icon29 } from "../assets/020-kaaba.svg";
import { ReactComponent as Icon30 } from "../assets/021-kaminarimon gate.svg";
import { ReactComponent as Icon31 } from "../assets/022-kinderdijk windmills.svg";
import { ReactComponent as Icon12 } from "../assets/023-statue-of-liberty.svg";
import { ReactComponent as Icon11 } from "../assets/024-london-eye.svg";
import { ReactComponent as Icon32 } from "../assets/025-lotus temple.svg";
import { ReactComponent as Icon10 } from "../assets/026-louvre-pyramid.svg";
import { ReactComponent as Icon33 } from "../assets/027-maya pyramid.svg";
import { ReactComponent as Icon35 } from "../assets/028-moai.svg";
import { ReactComponent as Icon36 } from "../assets/029-monas tower.svg";
import { ReactComponent as Icon37 } from "../assets/030-obelisk of buenos aires.svg";
import { ReactComponent as Icon38 } from "../assets/031-oriental pearl tower.svg";
import { ReactComponent as Icon39 } from "../assets/032-pagoda.svg";
import { ReactComponent as Icon9 } from "../assets/033-parthenon.svg";
import { ReactComponent as Icon40 } from "../assets/034-petronas twin tower.svg";
import { ReactComponent as Icon8 } from "../assets/035-pisa-tower.svg";
import { ReactComponent as Icon7 } from "../assets/036-pyramid.svg";
import { ReactComponent as Icon41 } from "../assets/037-slavin memorial bratislava.svg";
import { ReactComponent as Icon42 } from "../assets/038-space-needle.svg";
import { ReactComponent as Icon6 } from "../assets/039-sphinx.svg";
import { ReactComponent as Icon5 } from "../assets/040-stonehenge.svg";
import { ReactComponent as Icon34 } from "../assets/041-taipei 101.svg";
import { ReactComponent as Icon4 } from "../assets/042-taj-mahal.svg";
import { ReactComponent as Icon16 } from "../assets/043-temple of hatshepsut.svg";
import { ReactComponent as Icon47 } from "../assets/044-the gherkin.svg";
import { ReactComponent as Icon43 } from "../assets/048-white house.svg";
import { ReactComponent as Icon46 } from "../assets/045-tian-tan-buddha.svg";
import { ReactComponent as Icon45 } from "../assets/046-torii gate.svg";
import { ReactComponent as Icon44 } from "../assets/047-turning torso.svg";
import "./card-icon.styles.scss";

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

    case "Icon18":
      iconToReturn = <Icon18 className="icon" />;
      break;

    case "Icon19":
      iconToReturn = <Icon19 className="icon" />;
      break;

    case "Icon20":
      iconToReturn = <Icon20 className="icon" />;
      break;

    case "Icon21":
      iconToReturn = <Icon21 className="icon" />;
      break;

    case "Icon22":
      iconToReturn = <Icon22 className="icon" />;
      break;

    case "Icon23":
      iconToReturn = <Icon23 className="icon" />;
      break;

    case "Icon24":
      iconToReturn = <Icon24 className="icon" />;
      break;

    case "Icon25":
      iconToReturn = <Icon25 className="icon" />;
      break;

    case "Icon26":
      iconToReturn = <Icon26 className="icon" />;
      break;

    case "Icon27":
      iconToReturn = <Icon27 className="icon" />;
      break;

    case "Icon28":
      iconToReturn = <Icon28 className="icon" />;
      break;

    case "Icon29":
      iconToReturn = <Icon29 className="icon" />;
      break;

    case "Icon30":
      iconToReturn = <Icon30 className="icon" />;
      break;

    case "Icon31":
      iconToReturn = <Icon31 className="icon" />;
      break;

    case "Icon32":
      iconToReturn = <Icon32 className="icon" />;
      break;

    case "Icon33":
      iconToReturn = <Icon33 className="icon" />;
      break;

    case "Icon34":
      iconToReturn = <Icon34 className="icon" />;
      break;

    case "Icon35":
      iconToReturn = <Icon35 className="icon" />;
      break;

    case "Icon36":
      iconToReturn = <Icon36 className="icon" />;
      break;

    case "Icon37":
      iconToReturn = <Icon37 className="icon" />;
      break;

    case "Icon38":
      iconToReturn = <Icon38 className="icon" />;
      break;

    case "Icon39":
      iconToReturn = <Icon39 className="icon" />;
      break;

    case "Icon40":
      iconToReturn = <Icon40 className="icon" />;
      break;

    case "Icon41":
      iconToReturn = <Icon41 className="icon" />;
      break;

    case "Icon42":
      iconToReturn = <Icon42 className="icon" />;
      break;

    case "Icon43":
      iconToReturn = <Icon43 className="icon" />;
      break;

    case "Icon44":
      iconToReturn = <Icon44 className="icon" />;
      break;

    case "Icon45":
      iconToReturn = <Icon45 className="icon" />;
      break;

    case "Icon46":
      iconToReturn = <Icon46 className="icon" />;
      break;

    case "Icon47":
      iconToReturn = <Icon47 className="icon" />;
      break;
  }

  return (
    <div data-testid="icon" className="icon">
      {iconToReturn}
    </div>
  );
};

export default CardIcon;
