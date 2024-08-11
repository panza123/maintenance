import RepairImg from "./Reapirimg";
import Services from "../services/Services";
import Aboutus from "./Aboutus";
import { Aboutimg } from "./Aboutimg";
import Contact from "../contact/Contact";
import { ClientSay } from "./ClientSay";

const Home = () => {
  return (
    <div className="max-w-full h-full  ">
        <RepairImg />
        <Aboutus/>
        <Aboutimg/>
        <Services/>
        <ClientSay/>
        <Contact/>

    </div>
  );
}

export default Home;
