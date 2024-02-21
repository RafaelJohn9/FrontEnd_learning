import React from "react";
import "./card.css";

export default function Card(data) {
    let [i, SetI] = React.useState(1);
    let [image, imageChanger] = React.useState(data.images.img_0);
    const ChangePicture = () => {
        SetI((PrevI) => (PrevI % 8 + 1))
        imageChanger(data.images["img_" + i]);
    }
    return(
        <div className="card">
            <h2>{data.place}</h2>
            <img src={image} alt={data.place} />
            <button className="btn" onClick={ChangePicture}>See next image</button>
            </div>
    )
}