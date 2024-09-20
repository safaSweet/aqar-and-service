import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_OWNERSHIP, GET_ALL_OWNERSHIP, EDIT_OWNERSHIP, DELETE_OWNERSHIP} from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_ownership = createSlice({
  name: "get_ownership",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
    id: "",
    type: "",
  },

  extraReducers: (builder) =>
    builder
      .addCase(getOwnership.pending, (state) => {
        state.loading = true;
      })

      .addCase(getOwnership.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getOwnership.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  reducers: {
    setStoreData: (state, action) => {
      state.type = action.payload;
      console.log('ttttttttttttttt',state.type)
      state.id = action.payload;
    },
  },
});
// export const handle_Set_Data = (id,type) => (dispatch) => {
//   dispatch(setStoreData(id,type));
// };
export const slice_create_ownership = createSlice({
  name: "create_ownership",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getOwnership.pending, (state) => {
        state.loading = true;
      })

      .addCase(getOwnership.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getOwnership.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getOwnership = createAsyncThunk("get_ownership/getOwnership", async () => {
  return GET_ALL_OWNERSHIP();
});
export const createOwnership = createAsyncThunk(
  "create_ownership/createOwner",
  async (data) => {
    return CREATE_OWNERSHIP(data);
  }
);
export const editOwnership = createAsyncThunk(
  "create_ownership/editOwner",
  //change here^
  async (data) => {
    return EDIT_OWNERSHIP(data);
  }
);
export const deleteOwnership= createAsyncThunk(
  "get_Ownership/deleteOwnership",
  async (id) => {
    return DELETE_OWNERSHIP(id);
  }
);

export const { setStoreData } = slice_get_all_ownership.actions;

const rootReducerOwner = combineReducers({
  get_ownerships: slice_get_all_ownership.reducer,
  create_ownership: slice_create_ownership.reducer,
});

export default rootReducerOwner;
