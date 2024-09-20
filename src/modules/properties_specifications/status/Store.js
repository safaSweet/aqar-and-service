import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_STATUS, GET_ALL_STATUS, EDIT_STATUS, DELETE_STATUS} from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_status = createSlice({
  name: "get_status",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
    data_store:[],
  },

  extraReducers: (builder) =>
    builder
      .addCase(getStatus.pending, (state) => {
        state.loading = true;
      })

      .addCase(getStatus.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getStatus.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  reducers: {
    setStoreData: (state, action) => {
      state.data_store = action.payload;
    },
  },
});
export const slice_create_status = createSlice({
  name: "create_status",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(createStatus.pending, (state) => {
        state.loading = true;
      })

      .addCase(createStatus.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(createStatus.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getStatus = createAsyncThunk("get_status/getStatus", async () => {
  return GET_ALL_STATUS();
});
export const createStatus = createAsyncThunk(
  "create_Status/createStatus",
  async (data) => {
    return CREATE_STATUS(data);
  }
);
export const editStatus = createAsyncThunk(
  "create_status/editStatus",
  //change here^
  async (data) => {
    return EDIT_STATUS(data);
  }
);
export const deleteStatus= createAsyncThunk(
  "get_status/deleteStatus",
  async (id) => {
    return DELETE_STATUS(id);
  }
);

export const { setStoreData } = slice_get_all_status.actions;

const rootReducerStatus= combineReducers({
  get_status: slice_get_all_status.reducer,
  create_status: slice_create_status.reducer,
});

export default rootReducerStatus;
