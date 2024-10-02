function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call with setTimeout
    setTimeout(() => {
      const success = true; // Simulate success condition
      if (success) {
        resolve("Response from API");
      } else {
        reject("Error: Failed to fetch data from API");
      }
    }, 1000); // Delay of 1 second
  });
}

// Example usage
getResponseFromAPI()
  .then((response) => {
    console.log(response); // Output: "Response from API"
  })
  .catch((error) => {
    console.error(error);
  });
