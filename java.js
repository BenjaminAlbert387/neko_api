fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json())
  .then(json => console.log(json.results[0].url))

// https://nekos.best/api/v2/neko/xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.png
