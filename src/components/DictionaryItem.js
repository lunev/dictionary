import React from "react";

export const DictionaryItem = ({ dictionary }) => {
  const { meanings, word, phonetics } = dictionary;

  const meaningsList =
    meanings.length &&
    meanings.map((meaning, i) => {
      return (
        <div className="meanings mb-3" key={i}>
          <span className="badge bg-secondary mb-3">
            {meaning.partOfSpeech}
          </span>{" "}
          <br />
          {meaning.definitions.map((definition, i) => {
            return (
              <p key={i}>
                <strong>{definition.definition}</strong>:{" "}
                <i>{definition.example}</i>
              </p>
            );
          })}
        </div>
      );
    });

  const phoneticsList =
    phonetics.length &&
    phonetics.map((phonetic, i) => {
      const audioURL = phonetic.audio;
      const audio = new Audio(audioURL);

      return (
        <div className="phonetics" key={i}>
          {audioURL && (
            <button onClick={() => audio.play()} className="btn btn-outline">
              <i className="bi bi-volume-up-fill"></i>
            </button>
          )}
          {phonetic.text && `/${phonetic.text}/`}
        </div>
      );
    });

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">{word}</h2>
        {phoneticsList}
        {meaningsList}
      </div>
    </div>
  );
};
