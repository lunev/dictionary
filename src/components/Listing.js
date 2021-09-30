import React from "react";

export const Listing = ({ res }) => {
  const { meanings, word, phonetics } = res;

  const meaningsList =
    meanings.length &&
    meanings.map((meaning, i) => {
      return (
        <div key={i}>
          <i>{meaning.partOfSpeech}</i> <br />
          {meaning.definitions.map((definition, i) => {
            return (
              <div key={i}>
                {/* <strong>DEFINITION {i + 1}</strong> <br /> */}
                <strong>{definition.definition}</strong>{" "}
                <i>{definition.example}</i>
              </div>
            );
          })}
        </div>
      );
    });

  const phoneticsList =
    phonetics.length &&
    phonetics.map((phonetic, i) => {
      return (
        <div key={i}>
          <p>
            <strong>phonetic</strong>: {phonetic.text}
          </p>
          {phonetic.audio && (
            <audio controls>
              <source src={phonetic.audio} type="audio/mpeg" />
            </audio>
          )}
        </div>
      );
    });

  return (
    <div className="card">
      <h2>{word}</h2>
      {meaningsList}
      {phoneticsList}
    </div>
  );
};
