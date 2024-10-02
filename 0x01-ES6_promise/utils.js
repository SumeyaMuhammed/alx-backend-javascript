export function uploadPhoto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        body: "photo-profile-1",
      });
    }, 1000);
  });
}

export function createUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        firstName: "Guillaume",
        lastName: "Salva",
      });
    }, 1000);
  });
}
