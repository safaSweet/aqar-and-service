// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import {  GET_ALL_roleS, CREATE_role, EDIT_role,DELETE_role } from "../Service";
// import { combineReducers } from "redux";

// export const slice_get_all_role = createSlice({
//   name: "get_role",
//   initialState: {
//     data: [],
//     error_num: 0,
//     msg: "",
//     loading: false,
//     error: false,
//     id: "",
//     type: "",
//   },

//   extraReducers: (builder) =>
//     builder
//       .addCase(getroles.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(getroles.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.loading = false;
//       })

//       .addCase(getroles.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       }),
//   reducers: {
//     setStoreData: (state, action) => {
//       state.type = action.payload;
//       console.log('ttttttttttttttt',state.type)
//       state.id = action.payload;
//     },
//   },
// });
// // export const handle_Set_Data = (id,type) => (dispatch) => {
// //   dispatch(setStoreData(id,type));
// // };
// export const slice_create_role = createSlice({
//   name: "create_role",
//   initialState: {
//     data: [],
//     error_num: 0,
//     msg: "",
//     loading: false,
//     error: false,
//   },

//   extraReducers: (builder) =>
//     builder
//       .addCase(createrole.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(createrole.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.loading = false;
//       })

//       .addCase(createrole.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       }),
// });

// export const getroles = createAsyncThunk("get_roles/getroles", async () => {
//   return GET_ALL_roleS();
// });
// export const createrole = createAsyncThunk(
//   "create_role/createrole",
//   async (data) => {
//     return CREATE_role(data);
//   }
// );
// export const editrole = createAsyncThunk(
//   "create_role/editrole",
//   //change here^
//   async (data) => {
//     return EDIT_role(data);
//   }
// );
// export const deleterole= createAsyncThunk(
//   "get_roles/deleterole",
//   async (id) => {
//     return DELETE_role(id);
//   }
// );

// export const { setStoreData } = slice_get_all_role.actions;

// const rootReducerrole = combineReducers({
//   get_roles: slice_get_all_role.reducer,
//   create_role: slice_create_role.reducer,
// });

// export default rootReducerrole;
