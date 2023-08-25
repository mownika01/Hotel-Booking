import "./property.css"

const Property = () => {
    return (
      <div className="plist">
        <div className="plistitem">
            <img src="./image/hotels.jfif" alt="" className="plistimg" />
            <div className="plisttitle">
                <h1>Hotels</h1>
                <h2>245 hotels</h2>
            </div>
        </div>
        <div className="plistitem">
            <img src="./image/apartments" alt="" className="plistimg" />
            <div className="plisttitle">
                <h1>Apartments</h1>
                <h2>124 Apartments</h2>
            </div>
        </div>
        <div className="plistitem">
            <img src="./image/villas" alt="" className="plistimg" />
            <div className="plisttitle">
                <h1>Villas</h1>
                <h2>322 villas</h2>
            </div>
        </div>
        <div className="plistitem">
            <img src="./image/cabins.jfif" alt="" className="plistimg" />
            <div className="plisttitle">
                <h1>Cabins</h1>
                <h2>532 Cabins</h2>
            </div>
        </div>
        <div className="plistitem">
            <img src="./image/resort" alt="" className="plistimg" />
            <div className="plisttitle">
                <h1>Resorts</h1>
                <h2>432 resorts</h2>
            </div>
        </div>
      </div>
    )
}

export default Property