// 4-user-promise.js

export default function signUpUser(firstName, lastName) {
  // Return a resolved promise with the specified object
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}
