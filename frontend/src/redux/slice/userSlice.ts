import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  fullName: string | null;
  username: string | null;
  isUserAuthenticated: boolean;
  token: string | null;
  id: string | null;
  picture: string | null;
  vefified: boolean;
}

const initialState: initialStateProps = {
  fullName: null,
  username: null,
  isUserAuthenticated: false,
  token: null,
  id: null,
  picture: null,
  vefified: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LoggedIn: (state, action: PayloadAction<Iuser>) => {
      state.fullName = action.payload.fullName;
      state.isUserAuthenticated = true;
      state.picture = action.payload.picture;
      state.username = action.payload.username;
      state.id = action.payload._id;
      state.vefified = action.payload.signwithgoogle;
      if (action.payload.token) {
        localStorage.setItem("token", action.payload.token);
      }
    },

    LoggedOut: (state) => {
      state.fullName = null;
      state.id = null;
      state.picture = null;
      state.username = null;
      state.isUserAuthenticated = false;
      localStorage.removeItem("token");
      window.location.reload();
    },
  },
});

export const { LoggedIn, LoggedOut } = userSlice.actions;
export default userSlice.reducer;
