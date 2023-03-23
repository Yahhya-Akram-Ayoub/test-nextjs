import { login } from "../slices/UserSlice";

const DoLogin = () => async (dispatch) => {
   dispatch(login({ Email: "testEmial", Pass: "TRestPass" }));
};

export default DoLogin;
