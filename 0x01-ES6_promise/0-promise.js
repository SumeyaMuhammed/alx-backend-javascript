function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Response from API");
      } else {
        reject(new Error("something went wrong"));
      }
    }, 1000);
  });
}
