import "./searchitem.css"
import { useNavigate } from "react-router-dom"

const SearchItem=()=>{
    const navigate = useNavigate();

    const handleClick =()=>{
       navigate("/hotel")
    }
    return (
        <div className="searchitem">
            <img src="./image/search.jfif" alt="" className="siimg" />
            <div className="sidesc">
             <h1 className="sititle">Tower Street Apartments</h1>
             <span className="sidis">500m from center</span>
             <span className="sitaxioption">Free airport taxi</span>
             <span className="sisub">
                Studio Apartments with Air conditioning
             </span>
             <span className="sifeature"> Entire studio - 1 bathroom - 21m<sup>2</sup> 1 full bed</span>
             <span className="sicanceloption">Free cancellation</span>
             <span className="sicancelsub">You can cancel, so lock in this great price today!</span>
            </div>
            <div className="sidetails">
                <div className="sirating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="sidetaitext">
                  <span className="siprice">120</span>
                  <span className="sitax">Include taxes and fees</span>
                  <button className="sidetbutton" onClick={handleClick}>See availability</button>
                </div>
            </div>
        </div>
    )        
}

export default SearchItem;