import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlert, fetchDictionary, cleanDictionary } from "../redux/actions";
import { Alert } from "./Alert";
import { Loader } from "./Loader";

export default (event) => {
  const input = useRef(null);
  const reset = useRef(null);

  const dispatch = useDispatch();
  const alert = useSelector((state) => state.app.alert);
  const loading = useSelector((state) => state.app.loading);
  const dictionary = useSelector((state) => state.dictionary.fetchedDictionary);

  console.log("dictionary: ", dictionary);

  const onSubmit = (event) => {
    event.preventDefault();
    let query = input.current.value;
    if (!query.trim()) {
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
        dictionary.map((re) => {
          const { word, origin } = re;
          return (
            <div className="res">
              <h2>{word}</h2>
              <p>{origin}</p>
              {re.phonetics.length &&
                re.phonetics.map((ph) => {
                  return (
                    <div>
                      <p>{ph.text}</p>
                      {ph.audio && (
                        <audio controls>
                          <source src={ph.audio} type="audio/mpeg" />
                        </audio>
                      )}
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};
