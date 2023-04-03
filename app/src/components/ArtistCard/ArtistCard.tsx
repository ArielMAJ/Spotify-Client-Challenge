import React from "react";
import "./ArtistCard.css";

function ArtistCard(props: { result: any}) {
  return (
    <div
        className="artist-card"
        key={props.result["uri"]}
      >
        <div className="flex-container flex-row">
          <div className="flex-container flex-column margin padding">
            <h3>{props.result["name"]}</h3>
            <p>Artista: {props.result["artists"][0]["name"]}</p>
            <p>Lançamento: {new Date(props.result["release_date"]).toLocaleDateString("pt-br")}</p>
          </div>
          <div className="margin padding">
            <img
              src={props.result["images"][2]["url"]}
              alt={props.result["name"]}
            />
          </div>
        </div>
      </div>
  );
}

export default ArtistCard;
