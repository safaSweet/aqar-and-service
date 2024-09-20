import {
    combineReducers,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import { GET_ALL_PERMISSION, GET_ALL_ROLES, GET_ALL_ROLES_USERS, PERMISSIONS2ROLE, ROLE2USER} from "./service";
  
  export const get_role_user = createAsyncThunk(
    "role_user/get_role_user",
    () => {
      return GET_ALL_ROLES_USERS();
    }
  );
  export const get_roles = createAsyncThunk(
    "role_user/get_roles",
    () => {
      return GET_ALL_ROLES();
    }
  );
  export const get_permissions = createAsyncThunk(
    "role_user/get_permissions",
    () => {
      return GET_ALL_PERMISSION();
    }
  );
  export const role2permission = createAsyncThunk(
    "role_user/role2permission",
    (data) => {
      return PERMISSIONS2ROLE(data);
    }
  );
  export const user2role = createAsyncThunk(
    "role_user/user2role",
    (data) => {
      return ROLE2USER(data);
    }
  );
  export const slice_role_users = createSlice({
    name: "role_user",
    initialState: {
      data: [],
      data2role:[],
      data2permission:[],
      loading: false,
      msg: "",
      error: null,
      not_read: 0,
      formData:{
        user_id:'',
        role_id:'',
        permissions:[]
      }
    },
    reducers: {
      setDataRole: (state, action) => {
        state.formData = { ...state.formData, ...action.payload };
      },
    },
    extraReducers: (builder) =>
      builder
        .addCase(get_role_user.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(get_role_user.fulfilled, (state, action) => {
          state.data = action.payload.data;
          state.loading = false;
        })
        .addCase(get_role_user.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(get_permissions.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(get_permissions.fulfilled, (state, action) => {
          state.data2permission = action.payload.data;
          state.loading = false;
        })
        .addCase(get_permissions.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(get_roles.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(get_roles.fulfilled, (state, action) => {
          state.data2role = action.payload.data;
          state.loading = false;
        })
        .addCase(get_roles.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(user2role.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(user2role.fulfilled, (state, action) => {
          // state.data = action.payload.data;
          state.loading = false;
        })
        .addCase(user2role.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(role2permission.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(role2permission.fulfilled, (state, action) => {
          // state.data = action.payload.data;
          state.loading = false;
        })
        .addCase(role2permission.rejected, (state) => {
          state.loading = false;
          state.error = true;
        }),
  });
  export const { setDataRole } = slice_role_users.actions;

  const rootReduceRole_users = combineReducers({
    getrole_users: slice_role_users.reducer,
    // sendrole_users: slice_send_role_user.reducer,
  });
  
  export default rootReduceRole_users;
  