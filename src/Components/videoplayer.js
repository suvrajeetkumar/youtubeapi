import React from "react";
import '../App.css'


const Videoplayer = (props) => {
  if (!props.vedioId) {
    return (
      <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}>
        Search for a video
      </p>
    );
  }
//    const sr = `https://www.youtube.com/embed/${props.videoId}`;
   
  return (
    
    <div className="framediv">
      <iframe
        title={props.vedioId}
        className="frame"
        src={`https://www.youtube.com/embed/${props.vedioId}`}
      />
        
    </div>
  );
};

export default Videoplayer;