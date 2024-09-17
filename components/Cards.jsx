import "./cards.css"

function Cards(props){
    return(
        <div>
        <div className="card">
            <img src={props.item.imageUrl} alt="img" className="card-img" />
            <div className="description">
                <div className="card-location">
                    <img src="./location.png" alt="location" className="location-logo" />
                    <h3 className="card-state">{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl} target="_blank">View in Google Maps</a>
                </div>
                <h1 className="card-place">{props.item.title}</h1>
                <p className="card-date">Best time to visit: {props.item.bestTimeToVisit}</p>
                <p className="card-info">{props.item.description}</p>
            </div>
        </div>
        {/* <hr /> */}
        </div>
    )
}

export default Cards