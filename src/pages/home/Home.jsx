import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import Property from "../../components/property/Property";
import "./Home.css"
import Featureproperty from "../../components/featureproperty/Featureproperty";
import Maillist from "../../components/mailList/Maillist";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
       <div>
         <Navbar />
         <Header />
         <div className="homecontainer">
          <Featured />
          <h1 className="title">Browse by property type</h1>
          <Property />
          <h1 className="title">Homes guests love</h1>
          <Featureproperty />
          <Maillist />
          <Footer />
        </div>
      </div>
    )
}

export default Home