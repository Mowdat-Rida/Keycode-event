const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)//generateJoke is passed without parentheses, meaning the function itself is passed, not the result of calling it.

generateJoke()

// USING ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: { //An object specifying HTTP headers for the request.
      Accept: 'application/json', //Accept header tells the server what content type the client expects.
      //'application/json' indicates that the client expects JSON data in response.
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)//fetch is a built-in function that makes HTTP requests.

  const data = await res.json()//Allows the use of await within the function, enabling synchronous-like code for handling asynchronous operations (like fetching data).
//res.json() is a method that parses the response body as JSON.
  jokeEl.innerHTML = data.joke
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke
//     })
// }