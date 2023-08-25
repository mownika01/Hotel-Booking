import { faCalendarDays } from "@fortawesome/free-regular-svg-icons"
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
    const[destination,setdestination] = useState(""); 
    const[opendate,setopendate] = useState(false); 
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const[openoption,setopenoption]=useState(false);
      const [option, setoption] = useState({
           adult:1,
           children:0,
           room:1,
      });

      const navigate=useNavigate();

      const handleoption=(name,operation) => {
        setoption(prev=>{return {
            ...prev,
            [name]:operation ==="i"?option[name] +1 : option[name] - 1 ,
           };
         });
      };

      const handlesearch=()=>{
        navigate("/hotels", { state: { destination, date, option}});
      };
            
    return(
        <div className="header">
            <div className={type === "list" ? "headerContainer listmode" : "headerContainer"}>
                <div className="headerlist">
                    <div className="headerlistitems active">
                      <FontAwesomeIcon icon={faBed} />
                      <span>Stays</span>
                    </div>
                    <div className="headerlistitems">
                      <FontAwesomeIcon icon={faPlane} />
                      <span>Flights</span>
                    </div>
                    <div className="headerlistitems">
                      <FontAwesomeIcon icon={faCar} />
                      <span>Cars</span>
                    </div>
                    <div className="headerlistitems">
                      <FontAwesomeIcon icon={faBed} />
                      <span>Attractions</span>
                    </div>
                    <div className="headerlistitems">
                      <FontAwesomeIcon icon={faTaxi} />
                      <span>Hotel taxis</span>
                    </div>
                </div>
                { type !== "list" &&
                    <>
                <h1 className="headersec">A lifetime of discounts? It's Genious.</h1>
                <p className="headerdesc">Get rewarded for your travels - unlock instant savings of 10% or more free Booking account</p>
                <button className="buttondesc">Sign in / Register</button>
                <div className="headersearch">
                    <div className="headersearchitem">
                        <FontAwesomeIcon icon={faBed}  className="headericon" />
                        <input type="text" placeholder="where are you going?" className="headersearchinput" onChange={e=>setdestination(e.target.value)}/>
                    </div>
                    <div className="headersearchitem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headericon" />
                        <span onClick ={() =>setopendate(!opendate)} className="headersearchtext">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate ,"MM/dd/yyyy")}`}</span>
                        {opendate && <DateRange
                          editableDateInputs={true}
                          onChange={item => setDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          className="date"
                        />}
                    </div>
                    <div className="headersearchitem">
                        <FontAwesomeIcon icon={faPerson} className="headericon" />
                        <span onClick={()=>setopenoption(!openoption)}  className="headersearchtext">{`${option.adult} adult - ${option.children} children - ${option.room} room`}</span>
                        {openoption && <div className="options">
                            <div className="optionitem">
                                <span className="optiontext">Adult</span>
                                <div className="optioncount">
                                <button  disabled={option.adult <= 1}className="optionbutn" onClick={()=>handleoption("adult","d")}>-</button>
                                <span className="optioncount">{option.adult}</span>
                                <button className="optionbutn" onClick={()=>handleoption("adult","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionitem">
                                <span className="optiontext">Children</span>
                                <div className="optioncount">
                                <button disabled={option.children <= 0} className="optionbutn" onClick={()=>handleoption("children","d")}>-</button>
                                <span className="optioncount">{option.children}</span>
                                <button className="optionbutn" onClick={()=>handleoption("children","i")}>+</button>
                                </div>
                            </div>
                            <div className="optionitem"> 
                                <span className="optiontext">Room</span>
                                <div className="optioncount">
                                <button  disabled={option.room <= 1}className="optionbutn" onClick={()=>handleoption("room","d")}>-</button>
                                <span className="optioncount">{option.room}</span>
                                <button className="optionbutn" onClick={()=>handleoption("room","i")}>+</button>
                                </div>
                            </div>
                        </div>}
                     </div>  
                     <div className="headersearchitem">
                        <button className="headerbutn" onClick={handlesearch}>Search</button>
                     </div>
                </div>
                </>}
            </div>
        </div>
    );
    
};

export default Header