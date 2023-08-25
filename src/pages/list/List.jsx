import "./list.css"
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import {useState} from 'react'
import { format, setDate } from "date-fns";
import { DateRange } from "react-date-range";
import Searchitem from "../../components/Searchitem/SearchItem";

const List = () => {

    const location = useLocation();
    const[destination,setdestination] = useState(location.state.destination)
    const[date,setdate] = useState(location.state.date)
    const[opendate,setopendate] = useState(false)
    const[option,setoption] = useState(location.state.option)
    
    return (
        <div>
        <Navbar />
        <Header type="list"/>
         <div className="listcontainer">
            <div className="listwrapper">
                <div className="listsearch">
                    <h1 className="lstitle">Search</h1>
                    <div className="lstitem">
                        <label>Destination</label>
                        <input placeholder={destination} type="text" />
                    </div>
                    <div className="lstitem">
                        <label>Check-in Date</label>
                        <span onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to 
                           ${format(date[0].endDate ,"MM/dd/yyyy")}`}
                        </span>
                       {opendate && (
                         <DateRange 
                           onChange={item=>setDate([item.selection])}
                           ranges={date}                  
                         />
                       )}
                    </div>
                    <div className="lstitem">
                        <label>Options</label>
                        <div className="lscon">
                        <div className="lstoptions">
                            <span className="lstoptiontext">Min price <small>per night</small>
                            </span>
                            <input type="number" className="lstoptioninput"/>
                        </div>
                        <div className="lstoptions">
                            <span className="lstoptiontext">Max price <small>per night</small>
                            </span>
                            <input type="number" className="lstoptioninput"/>
                        </div>
                        <div className="lstoptions">
                            <span className="lstoptiontext" >Adult 
                            </span>
                            <input type="number" min={1} className="lstoptioninput" placeholder={option.adult}/>
                        </div>
                        <div className="lstoptions">
                            <span className="lstoptiontext">Children
                            </span>
                            <input type="number" min={0} className="lstoptioninput"  placeholder={option.children}/>
                        </div>
                        <div className="lstoptions">
                            <span className="lstoptiontext" >Room
                            </span>
                            <input type="number"min={1} className="lstoptioninput"  placeholder={option.room}/>
                        </div>
                    </div>
                  </div>
                  <button>Search</button>
                </div>
                <div className="listresult">
                    <Searchitem />
                    <Searchitem />
                    <Searchitem />
                    <Searchitem />
                    <Searchitem />
                    <Searchitem />
                    <Searchitem />
                    <Searchitem />
                    <Searchitem />
                    <Searchitem />
                </div>
            </div> 
         </div>
        </div>
    )
}

export default List