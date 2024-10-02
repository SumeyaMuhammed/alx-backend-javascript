export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve('Response from API');
    } else {
      reject(new Error('Error: Unable to get response from API'));
    }
  });
}
