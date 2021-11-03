import React, { useRef, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchDictionary, setQuery } from "../redux/actions";

export const FormSearch = () => {
  const input = useRef(null);
  let history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    input.current.focus();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    let query = input.current.value.trim();
    if (history.location.pathname.replace("/", "") !== query) {
      dispatch(fetchDictionary(query));
      dispatch(setQuery(query));
      history.push(`${query}`);
    }
    input.current.value = "";
  };

  return (
    <Fragment>
      <form className="form-search" onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            ref={input}
            placeholder="Search English Dictionary"
            aria-label="English Dictionary"
            aria-describedby="button-search"
            required
          />
          <button
            type="submit"
            className="btn btn-lg btn-danger"
            id="button-search"
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
    </Fragment>
  );
};
