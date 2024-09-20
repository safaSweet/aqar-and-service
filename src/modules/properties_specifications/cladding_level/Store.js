import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_CLADDING_LEVEL, GET_ALL_CLADDING_LEVEL, EDIT_CLADDING_LEVEL, DELETE_CLADDING_LEVEL, GET_ALL_CLADDING, CREATE_CLADDING, EDIT_CLADDING, DELETE_CLADDING} from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_cladding_level = createSlice({
  name: "get_cladding_level",
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
      .addCase(getCladding_level.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCladding_level.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getCladding_level.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  reducers: {
    setStoreData: (state, action) => {
      state.data_store = action.payload;
    },
  },
});
export const slice_create_cladding_level = createSlice({
  name: "create_cladding_level",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(createCladding_level.pending, (state) => {
        state.loading = true;
      })

      .addCase(createCladding_level.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(createCladding_level.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getCladding_level = createAsyncThunk("get_cladding_level/getcladding_level", async () => {
  return GET_ALL_CLADDING();
});
export const createCladding_level = createAsyncThunk(
  "create_cladding_level/createCladding_level",
  async (data) => {
    return CREATE_CLADDING(data);
  }
);
export const editCladding_level = createAsyncThunk(
  "create_cladding_level/editCladding_level",
  //change here^
  async (data) => {
    return EDIT_CLADDING(data);
  }
);
export const deleteCladding_level= createAsyncThunk(
  "get_cladding_level/deletecladding_level",
  async (id) => {
    return DELETE_CLADDING(id);
  }
);

export const { setStoreData } = slice_get_all_cladding_level.actions;

const rootReducerCladding = combineReducers({
  get_cladding_levels: slice_get_all_cladding_level.reducer,
  create_cladding_level: slice_create_cladding_level.reducer,
});

export default rootReducerCladding;
