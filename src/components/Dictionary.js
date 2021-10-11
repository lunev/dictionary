import React, { useEffect,  } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchDictionary } from "../redux/actions";
import { DictionaryItem } from "./DictionaryItem";
import { Loader } from "./Loader";

export const Dictionary = () => {
  const { hash } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);
  const dictionary = useSelector((state) => state.dictionary.fetchedDictionary);

  useEffect(() => {
    dispatch(fetchDictionary(hash));
    console.log(`hash: ${hash}`)
  }, [dispatch,hash]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {loading && <Loader />}

          {dictionary && dictionary.message}

          {dictionary &&
            Array.isArray(dictionary) &&
            dictionary.map((res, i) => {
              return <DictionaryItem dictionary={res} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};
