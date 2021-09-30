import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert, fetchDictionary, cleanDictionary } from "../redux/actions";
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

  const onSubmit = (event) => {
    event.preventDefault();
    let query = input.current.value.trim();
    if (!query) {
      return dispatch(showAlert("The field is required"));
    }
    dispatch(fetchDictionary(query));
  };

  const onReset = (event) => {
    input.current.value = "";
    dispatch(cleanDictionary());
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" ref={input} />
        <button type="submit">Search</button>
        <button type="reset" onClick={onReset} ref={reset}>
          Clear
        </button>
      </form>

      {loading && <Loader />}

      {alert && <Alert text={alert} />}

      {dictionary && dictionary.message}

      {dictionary &&
        Array.isArray(dictionary) &&
        dictionary.map((res, i) => {
          // const { word, origin } = re;
          return <Listing res={res} key={i} />;
        })}
    </div>
  );
};
