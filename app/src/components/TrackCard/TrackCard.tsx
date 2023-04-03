import React from "react";
import "./TrackCard.css";

function TrackCard(params: { track: any }) {
  console.log(params.track);

  const date = new Date(
    Date.UTC(0, 0, 0, 0, 0, 0, params.track["duration_ms"])
  );
  const time =
    date.getUTCMinutes().toString() + ":" + date.getUTCSeconds().toString();
  return (
    <div
      className="track-card flex-container flex-row"
      key={params.track["id"]}
    >
      <div className="flex-container flex-column margin padding">
        <h3>{params.track["name"]}</h3>
        <p>{params.track["artists"][0]["name"]}</p>
        <p>Duração: {time}</p>
        <audio controls>
          <source src={params.track["preview_url"]} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}

export default TrackCard;
