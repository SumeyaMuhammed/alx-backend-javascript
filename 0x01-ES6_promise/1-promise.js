function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Example usage
getFullResponseFromAPI(true)
  .then((response) => {
    console.log(response); // Output: { status: 200, body: 'Success' }
  })
  .catch((error) => {
    console.error(error); // Output: Error: The fake API is not working currently
  });
