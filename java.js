// Fetch data from the nekos.best API for the "neko" category
fetch('https://nekos.best/api/v2/neko')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Extract the URL of the first image from the results
    const imageUrl = data.results[0].url;
    // Set the src attribute of the img element with id "image-container" to the extracted URL
    document.getElementById('image-container').src = imageUrl;
  })
  .catch(error => console.error('Error:', error)); // Log any errors to the console
