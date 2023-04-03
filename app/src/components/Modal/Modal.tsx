import React from "react";
import ReactDOM from "react-dom/client";
import "./Modal.css";
import TrackCard from "../TrackCard/TrackCard";
import token from "../../assets/.secrets.json";
import ArtistCard from "../ArtistCard/ArtistCard";

function Modal(props) {
  function handleOpenEvent() {
    const headers = new Headers();
    headers.append("Authorization", `Bearer ${token["token"]}`);

    fetch(props.result["href"], {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        const tracks = data["tracks"]["items"];
        const content = document.getElementById("modal-content");
        tracks.map((track) => {
          const container = document.createElement("a");
          if (content) content.appendChild(container);
          container.href = track["external_urls"]["spotify"];
          container.target = "_blank";
          ReactDOM.createRoot(container as HTMLElement).render(
            <TrackCard track={track} />
          );
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  const body = document.getElementById("body");
  if (body) body.style.overflow = "hidden";
  handleOpenEvent();
  
  function esc(event) {
    if (event.key === "Escape") props.handleCloseModal();
  }
  setTimeout(function () {
    document.addEventListener("keydown", esc);
  }, 500);

  return (
    <div className="modal flex-container flex-column">
      <a href={props.result["external_urls"]["spotify"]} target="_blank">
        <ArtistCard result={props.result} />
      </a>
      <button className="modal-close" onClick={props.handleCloseModal}>
        ✖️
      </button>
      <div id="modal-content"></div>
    </div>
  );
}

export default Modal;
