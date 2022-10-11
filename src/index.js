import React from "react";
import ReactDOM from "react-dom";

const Alert = () => {
  const colorClasses = {
    color: "orange",
    text4Red: "OMG! Something really bad has happended!",
    text4Orange: "Well, it is not that bad after all!",
  };
  //your component here
  console.log(colorClasses.color);

  //for red color

  //for red color
  return colorClasses.color === "red" ? (
    <div className="alert alert-danger" role="alert">
      ({colorClasses.text4Red})
    </div>
  ) : (
    //for yellow color
    <div className="alert alert-warning" role="alert">
      {colorClasses.text4Orange}
    </div>
  );
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(<Alert />, document.getElementById("root"));
