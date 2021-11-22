import React, { Fragment, useState } from "react";

export const Collapse = (props) => {
  const [showList, setShowList] = useState(false);
  const { list, button } = props;

  return (
    <Fragment>
      <button
        className="btn btn-light w-100 d-flex justify-content-between fw-bold text-danger"
        onClick={() => setShowList(!showList)}
      >
        {<span>{button}</span>}
        <span>{showList ? "-" : "+"}</span>
      </button>

      <ul className="row">
        {showList &&
          list.length > 0 &&
          list.map((syn, i) => {
            return (
              <li className="col-6 col-sm-6 col-md-4 mt-2" key={i}>
                {syn}
              </li>
            );
          })}
      </ul>
    </Fragment>
  );
};
