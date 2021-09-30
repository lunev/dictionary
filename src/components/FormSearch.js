import React, { useRef, useState } from "react";

const fetchURL = (keyword) => {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });
};

export const FormSearch = (event) => {
  const [res, setRes] = useState([]);
  const [isLoading, SetIsLoading] = useState(false);
  const input = useRef(null);
  const reset = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    SetIsLoading(true);
    let query = input.current.value;
    query.length &&
      fetchURL(query).then((result) => {
        console.log(result);
        setRes(result);
        SetIsLoading(false);
      });
  };

  const onReset = (event) => {
    input.current.value = "";
    console.log(res);
    setRes([]);
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

      {isLoading && "Loading..."}
      
      {res &&
        res.map((re) => {
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