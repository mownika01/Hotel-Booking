import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
            <div className="featureditem">
                <img src="./image/2.jpg" alt="" className="featuredimg"  />
                <div className="featuredtitle">
                  <h1>Dublin</h1>
                  <h2>123 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src="./image/hotel.jpg" alt="" className="featuredimg"  />
                <div className="featuredtitle">
                  <h1>Austin</h1>
                  <h2>430 properties</h2>
                </div>
            </div>
            <div className="featureditem">
                <img src="./image/3.jfif" alt="" className="featuredimg" />
                <div className="featuredtitle">
                  <h1>Reno</h1>
                  <h2>632 properties</h2>
                </div>
            </div>
        </div>
    );
 };

 export default Featured;