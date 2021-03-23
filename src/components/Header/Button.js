import React from "react";

export default function Button({handleButtonClick}) {
  return <button className="button" onClick={handleButtonClick}>Add</button>;
}
