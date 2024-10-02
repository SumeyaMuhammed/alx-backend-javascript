import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}
