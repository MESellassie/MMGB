import React from "react";

function MoodRow(props) {
  return (
      <div className="moodRow col-sm-12">
        {props.children}
      </div>
  );
}

export default MoodRow;
