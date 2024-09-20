import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LOGIN, CHANGE_PASSWORD, VERFY_PASSWORD, GET_INFO } from "./Service";
import { combineReducers } from 'redux';

//   login
export const slice_auth = createSlice({
  name: "Auth",
  initialState: {
    data: {},
    accessToken: localStorage.getItem("accessToken"),
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },
  reducers: {
    isLoggedIn: (state) => !!state.user,
    role: () => "admin",
    isAdmin: (state) => state.role === "admin",
    isEmployee: (state) => state.role === "employee",
  },
  extraReducers: (builder) =>
    builder
      .addCase(asyncLogin.pending, (state) => {
        state.loading = true;
      })
      
      .addCase(asyncLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(asyncLogin.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

//changePasswprd
export const slice_auth_password = createSlice({
  name: "change_Password",
  initialState: {
    data: {},
    status:'',
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(changePassword.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const slice_verify_password = createSlice({
  name: "verify_Password",
  initialState: {
    data: {},
    loading: false,
    error: false,
    status:''
  },

  extraReducers: (builder) =>
    builder
      .addCase(verifyPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyPassword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(verifyPassword.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const slice_user_info = createSlice({
  name: "user_info",
  initialState: {
    data: {},
    loading: false,
    error: false,
    status:''
  },

  extraReducers: (builder) =>
    builder
      .addCase(userInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(userInfo.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(userInfo.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const userInfo = createAsyncThunk(
  "user_info/userInfo",
  () => {
   return  GET_INFO();
  }
);

export const changePassword = createAsyncThunk(
  "change_Password/changePassword",
  (data) => {
   return CHANGE_PASSWORD(data);
  }
);

export const verifyPassword = createAsyncThunk(
  "verify_Password/verifyPassword",
  (data) => {
   return VERFY_PASSWORD(data);
  }
);

  export const asyncLogin = createAsyncThunk("Auth/asyncLogin", async (data) => {
    return LOGIN(data);
  });
  

  export const { isLoggedIn, role, isAdmin, isEmployee } = slice_auth.actions;
  
const rootReducer = combineReducers({
  auth: slice_auth.reducer,
  password: slice_auth_password.reducer,
  verify_password:slice_verify_password.reducer,
  user_info:slice_user_info.reducer,
});

export default rootReducer;