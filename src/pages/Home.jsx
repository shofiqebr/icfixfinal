import {useContext} from "react";
import {GroupsContext, ItemContext, WebContext} from "../App";
import HeroBanner from "../components/home/HeroBanner";
import Card from "../components/home/Card";
import Fixit from "../components/home/Fixit";
import ProfessionalRepair from "../components/home/ProfessionalRepair";
import VedioPart from "../components/home/VedioPart";
import MobileRepair from "../components/home/MobileRepair";
import Tab1 from "../components/home/Tab1";
import MostDisCounted from "../components/home/MostDisCounted";
import BestFeature from "../components/home/BestFeature";
import HowWorks from "../components/home/HowWorks";
import WhycChoose from "../components/home/WhycChoose";
import Title from "../components/title/Title";

const Home = () => {
  const grpData = useContext(GroupsContext);
  const webItmData = useContext(WebContext);
  const itemData = useContext(ItemContext);

  return (
    <div>
      <Title title="Home" />
      <HeroBanner />
      <Card grpData={grpData} />
      <Fixit />
      <ProfessionalRepair />
      <VedioPart />
      <MobileRepair />
      <Tab1 grpData={grpData} webItmData={webItmData} itemData={itemData} />
      <MostDisCounted grpData={grpData} webItmData={webItmData} itemData={itemData} />
      <BestFeature />
      <HowWorks />
      <WhycChoose />
    </div>
  );
};

export default Home;
