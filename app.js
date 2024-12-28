const loadJoke = async () => {
  try {
    const chuckNorrisFetch = await fetch(
      "https://api.chuckNorris.io/jokes/random",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const jokeData = await chuckNorrisFetch.json();
    document.getElementById("loadingJoke").innerHTML = jokeData.value;
  } catch (error) {
    console.log(error);
  }
};

const btn = document.getElementById("loadJokeBtn");

btn.addEventListener("click", loadJoke);
