import React from "react";
const Button = ({ id, onClickNext }) => {
  if (id > 0 && id < 10)
    return (
      <div>
        <button
          type="button"
          className="btn btn-warning btn-md"
          onClick={() => onClickNext()}
        >
          Next
        </button>
      </div>
    );
  else if (id === 10)
    return (
      <div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => onClickNext()}
        >
          Submit
        </button>
      </div>
    );
};

export default Button;
