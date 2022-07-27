import React from "react";

export default function Journey(props) {
  return (
    <div className="journey">
      <img className="journey--image" src={props.item.imageUrl} />
      <div className="journey--information">
        <div className="journey--location">
          <h4 className="journey--location_country">
            <img src="/src/images/pin.png" className="journey--pin" />
            {props.item.location}
          </h4>
          <p>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </p>
        </div>
        <h3 className="journey--title">{props.item.title}</h3>
        <p className="journey-time">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="journey-description">{props.item.description}</p>
      </div>
    </div>
  );
}
