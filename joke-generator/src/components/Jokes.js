import React, { useEffect, useState } from "react";

const Jokes = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://api.icndb.com/jokes/random";
  const getJoke = () => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setJoke(data);
          setIsLoading(false);
        });
    }, 3000);
  };

  useEffect(() => {
    getJoke();
  }, []);

  const handleJoke = () => {
    getJoke();
  };
  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --card --bg-light">
        <h2>Randome Jokes Generator</h2>
        <div className="--line"></div>
        {isLoading ? (
          //   <div className="loader">Loading...</div>
          <div className="loader">Loading...</div>
        ) : (
          <>
            <h4>Joke id: {joke.value.id}</h4>
            <p>{joke.value.joke}</p>
          </>
        )}

        <button className="--btn --btn-primary --mt" onClick={handleJoke}>
          Generate Joke
        </button>
      </div>
    </section>
  );
};

export default Jokes;
