import React from "react";

export const Home = () => {
  return (
    <div className="row">
      <div className="col">
        <p className="text-center text-secondary fst-italic">
          <small>
            <a
              className="text-secondary text-decoration-none"
              href="https://github.com/meetDeveloper"
            >
              <i className="bi bi-github"></i> meetDeveloper,
            </a>{" "}
            thank you for providing{" "}
            <a
              className="text-secondary"
              href="https://github.com/meetDeveloper/freeDictionaryAPI"
            >
              free dictionary API
            </a>
          </small>
        </p>
      </div>
    </div>
  );
};
