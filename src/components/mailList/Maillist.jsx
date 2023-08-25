import "./maillist.css"

const Maillist = () =>{
    return(
        <div className="maillist">
            <h1 className="mailtitle">Save time, save money!</h1>
            <span className="desc">Sign up and we'll send the best deals to you</span>
            <div className="mailcontainer">
                <input type="text" placeholder="Your e-mail"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
       
}

export default Maillist