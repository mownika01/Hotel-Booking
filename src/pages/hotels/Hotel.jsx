import "./hotel.css"
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Maillist from "../../components/mailList/Maillist";
import Footer from "../../components/footer/Footer";
import {useState} from 'react'

const Hotel=()=>{

    const[slideno,setslideno]=useState(0);
    const[open,setOpen]=useState(false);

    const photos=[
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0Lh9MgXu5nwcK6YPk-45rU9OoK1PsUCCJQ&usqp=CAU",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYa648QQCUwmfSxIRwKEsdlupGpHxMKyznLw&usqp=CAU",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZ57Q8b0CjvITLVNUgw-erWEMx1KmsUiAgw&usqp=CAU",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP04A_X_RYrLsi2xB8nwxxtbKptF7k_2KXnw&usqp=CAU",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbM4iNSNxq4d_i7VTD9FSNs34jlaHYmH5jRQ&usqp=CAU",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNXwK0woZ3jdv4mkp06_08f-oflLjmku9Ng&usqp=CAU",
        },
    ];

   const handleopen=(i)=>{
    setslideno(i);
    setOpen(true);
   } 

   const handlemove=(direction)=>{
    let newslideno;

    if(direction ==="l"){
        newslideno = slideno === 0 ? 5: slideno-1
    }else{
        newslideno = slideno === 5 ? 0 : slideno+1

    }
    setslideno(newslideno)
   };
    return (
        <div>
            <Navbar />
            <Header type="list"/>
            <div className="hotelcontainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handlemove("l")} />
                    <div className="sliderwrapper">
                        <img src={photos[slideno].src} alt="" className="sliderimg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handlemove("r")}/>
                </div>}
                <div className="hotelwrapper">
                    <button className="booknow">Reserve or Book Now!</button>
                    <h1 className="hoteltitle">Tower Street Apartments</h1>
                    <div className="hoteladd">
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>Elton St 125 New york</span>
                    </div>
                    <span className="hoteldistance">
                        Excellent location - 500m from center
                    </span>
                    <span className="hotelpricehighlight">
                        Book a stay over $123 at this property and get a free airport taxi
                    </span>
                    <div className="hotelimages">
                        {photos.map((photo,i)=>(
                            <div className="hotelimgwrapper">
                                <img onClick={()=>handleopen(i)} src={photo.src} alt="" className="hotelimg" />
                            </div>
                        ))}
                    </div>
                    <div className="hoteldetails">
                        <div className="detailstext">
                            <h1 className="hoteltitle">Stay in the heart of krakow</h1>
                            <p className="hoteldesc">
                                Located a 5-minutes walk from St. Florian's Gate in Krakow, Tower Street
                                Apartments has accommodations with air conditioning and free wifi. The units come with 
                                hardwood floors and feature a fully equipped kitchnette with a microwave, a flat-screen 
                                TV, and a private bathroom with shower and hairdryer. A fridge is also offerder, 
                                as well as an electric tea pot and a coffee machine. Popular points of intersets near the apartment 
                                include Cloth Hall, Main Market Square and Town hall Tower. The nearest airport is John Paul II 
                                International Krakow-Balice, 16.1 km from Tower Street Apartments, and the property offers a 
                                paid airport shuttle service.
                            </p>
                        </div>
                        <div className="detailprice">
                            <h1>Perfect for a 9-nights stay!</h1>
                            <span>
                                Located in the real heart of krakow, this propert has an 
                                excellent location score of 9.8!
                            </span>
                            <h2>
                                <b>$945</b>(9 nights)
                            </h2>
                            <button>Reserve or Book Now!</button>
                        </div>
                    </div>
                </div>
                <Maillist />
                <Footer />
            </div>
        </div>
    );
};

export default Hotel;