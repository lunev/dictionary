import React from "react";
import { Collapse } from "./Collapse";

export const DictionaryItem = (props) => {
  const { meanings, word, phonetics } = props.dictionary;
  const meaningsLength = meanings.length || 0;

  const meaningsList =
    meanings.length > 0 &&
    meanings.map((meaning, i) => {
      return (
        <div className="meanings mb-3" key={i}>
          <span className="badge bg-danger mb-2 d-inline-block text-uppercase">
            {meaning.partOfSpeech}
          </span>
          {meaning.definitions.map((definition, k) => {
            const { antonyms, synonyms, example, definition: def } = definition;

            return (
              <div className="mb-3" key={k}>
                <p>
                  <strong>
                    <span className="text-danger">
                      {i + 1}.{k + 1}
                    </span>{" "}
                    {def}
                  </strong>
                  : <br />
                  <i>{example}</i>
                </p>
                {synonyms.length > 0 && (
                  <Collapse list={synonyms} button="Synonyms" />
                )}
                {antonyms.length > 0 && (
                  <Collapse list={antonyms} button="Antonyms" />
                )}
              </div>
            );
          })}
        </div>
      );
    });

  const phoneticsList =
    phonetics.length > 0 &&
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
        <h2 className="card-title fs-1 text-danger">{word}</h2>
        <p className="text-uppercase">
          <strong className="text-decoration-underline">meanings</strong>{" "}
          {meaningsLength}
        </p>
        {phoneticsList}
        {meaningsList}
      </div>
    </div>
  );
};
