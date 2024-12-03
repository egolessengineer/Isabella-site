import axios from "axios";

export const forwardFormdata = async (
  firstname: string,
  lastname: string,
  mail: string,
  message: string
) => {
  try {
    const forwardrequest = {
      firstname: firstname,
      lastname: lastname,
      mail: mail,
      message: message,
    };
    const res = await axios.post(
      "https://still-sheepdog-quiet.ngrok-free.app/api/v1/forward",
      forwardrequest
    );
    if (res.status === 200) {
      return res.data.message;
    } else {
      return res.data.message;
    }
  } catch (err) {}
};
