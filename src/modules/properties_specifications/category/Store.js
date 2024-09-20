import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_CATEGORY, GET_ALL_CATEGORY, EDIT_CATEGORY, DELETE_CATEGORY} from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_category = createSlice({
  name: "get_category",
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
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getCategory.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  reducers: {
    setStoreData: (state, action) => {
      state.type = action.payload;
      state.id = action.payload;
    },
  },
});

export const slice_create_category = createSlice({
  name: "create_category",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })

      .addCase(createCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(createCategory.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getCategory = createAsyncThunk("get_category/getCategory", async () => {
  return GET_ALL_CATEGORY();
});
export const createCategory = createAsyncThunk(
  "create_category/createCategory",
  async (data) => {
    return CREATE_CATEGORY(data);
  }
);
export const editCategory = createAsyncThunk(
  "create_category/editCategory",
  //change here^
  async (data) => {
    return EDIT_CATEGORY(data);
  }
);
export const deleteCategory= createAsyncThunk(
  "get_category/deleteCategory",
  async (id) => {
    return DELETE_CATEGORY(id);
  }
);

export const { setStoreData } = slice_get_all_category.actions;

const rootReducerCategory = combineReducers({
  get_categorys: slice_get_all_category.reducer,
  create_category: slice_create_category.reducer,
});

export default rootReducerCategory;
