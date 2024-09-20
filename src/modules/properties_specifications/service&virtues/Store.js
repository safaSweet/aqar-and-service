import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_SERVICE_VIRTUES, GET_ALL_SERVICE_VIRTUES, EDIT_SERVICE_VIRTUES, DELETE_SERVICE_VIRTUES} from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_service_virture = createSlice({
  name: "get_service_virtures",
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
      .addCase(getService_virture.pending, (state) => {
        state.loading = true;
      })

      .addCase(getService_virture.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getService_virture.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  reducers: {
    setStoreData: (state, action) => {
      state.data_store = action.payload;
    },
  },
});
export const slice_create_service_virture = createSlice({
  name: "create_service_virture",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(createService_virture.pending, (state) => {
        state.loading = true;
      })

      .addCase(createService_virture.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(createService_virture.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getService_virture = createAsyncThunk("get_service_virtures/getService_virture", async () => {
  return GET_ALL_SERVICE_VIRTUES();
});
export const createService_virture = createAsyncThunk(
  "create_service_virture/createService_virture",
  async (data) => {
    return CREATE_SERVICE_VIRTUES(data);
  }
);
export const editService_virture = createAsyncThunk(
  "create_service_virture/editService_virture",
  //change here^
  async (data) => {
    return EDIT_SERVICE_VIRTUES(data);
  }
);
export const deleteService_virture= createAsyncThunk(
  "get_service_virtures/deleteService_virture",
  async (id) => {
    return DELETE_SERVICE_VIRTUES(id);
  }
);

export const { setStoreData } = slice_get_all_service_virture.actions;

const rootReducerservice_virture = combineReducers({
  get_service_virtures: slice_get_all_service_virture.reducer,
  create_service_virture: slice_create_service_virture.reducer,
});

export default rootReducerservice_virture;
