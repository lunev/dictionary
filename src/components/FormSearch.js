import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  showAlert,
  fetchDictionary,
  cleanDictionary,
  setQuery,
} from "../redux/actions";
import { Alert } from "./Alert";
import { Loader } from "./Loader";
import { Listing } from "./Listing";

export default () => {
  const input = useRef(null);
  const reset = useRef(null);

  const dispatch = useDispatch();
  const alert = useSelector((state) => state.app.alert);
  const loading = useSelector((state) => state.app.loading);
  const dictionary = useSelector((state) => state.dictionary.fetchedDictionary);

  useEffect(() => {
    input.current.focus();
  });

  const onSubmit = (event) => {
    event.preventDefault();
    let query = input.current.value.trim();
    if (!query) {
      return dispatch(showAlert("The field is required"));
    }
    dispatch(fetchDictionary(query));
    dispatch(setQuery(query));
    input.current.value = "";
  };

  const onReset = (event) => {
    input.current.value = "";
    dispatch(cleanDictionary());
  };

  return (
    <div>
      <form className="form-search" onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <input
            className="form-control form-control-lg"
            type="text"
            ref={input}
            placeholder="Search English Dictionary"
            aria-label="English Dictionary"
            aria-describedby="button-search"
          />
          <button
            type="submit"
            className="btn btn-lg btn-secondary"
            id="button-search"
          >
            <i className="bi bi-search"></i>
          </button>
          {/* <button type="reset" onClick={onReset} ref={reset}>
            <i class="bi bi-x"></i>
          </button> */}
        </div>
      </form>

      {loading && <Loader />}

      {alert && <Alert text={alert} />}

      {dictionary && dictionary.message}

      {dictionary &&
        Array.isArray(dictionary) &&
        dictionary.map((res, i) => {
          return <Listing res={res} key={i} />;
        })}
    </div>
  );
};
