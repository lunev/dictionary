import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchDictionary } from "../redux/actions";
import { Listing } from "./Listing";
import { Loader } from "./Loader";

export default () => {
  let { slug } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.app.loading);
  const dictionary = useSelector((state) => state.dictionary.fetchedDictionary);

  useEffect(() => {
    dispatch(fetchDictionary(slug));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {loading && <Loader />}
          {dictionary && dictionary.message}
          {dictionary &&
            Array.isArray(dictionary) &&
            dictionary.map((res, i) => {
              return <Listing res={res} key={i} />;
            })}
        </div>
      </div>
    </div>
  );
};
