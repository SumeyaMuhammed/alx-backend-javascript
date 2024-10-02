import uploadPhoto from "./5-photo-reject";
import createUser from "./4-user-promise";

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto("photo.jpg");
    const user = await createUser("Guillaume", "Salva");

    return {
      photo: photo,
      user: user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
