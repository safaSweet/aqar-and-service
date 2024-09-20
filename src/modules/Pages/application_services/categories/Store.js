import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GET_ALL_CATEGORY_SERVICE,
  CREATE_CATEGORY_SERVICE,
  GET_PROVIDERS_CATEGORY_SERVICE,
  GET_CATEGORY_SERVICE_BY_ID,
  EDIT_CATEGORY_SERVICE,
  DELETE_CATEGORY_SERVICE,
} from "../Service";
import { combineReducers } from "redux";

export const slice_service_category = createSlice({
  name: "service_category",
  initialState: {
    data: [],
    msg: "",
    loading: false,
    error: false,
    status: false,
    columns: [
      {
        key: "id",
        label: "#",
        _props: { scope: "col" },
      },
      {
        key: "name",
        label: "الخدمات",
        _props: { scope: "col" },
      },
      {
        key: "action",
        label: "الأحداث",
        _props: { scope: "col" },
      },
    ],
  },

  extraReducers: (builder) =>
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        // state.is_req_id_docs= action.payload.data.is_req_id_docs;
        state.loading = false; 
        
      })

      .addCase(getCategory.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const slice_service_category_byId = createSlice({
  name: "service_category_byId",
  initialState: {
    data: [],
    loading: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getCategoryById.pending, (state) => {
        state.loading = true;
      })

      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getCategoryById.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const slice_create_service_category = createSlice({
  name: "create_service_category",
  initialState: {
    data: [],
    msg: "",
    loading: false,
    error: false,
    formData: {
      name: "",
      is_req_id_docs: 0,
      icon:null
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })

      .addCase(createCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.msg = action.payload;
      })

      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.payload;
      }),
  reducers: {
    setData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const slice_update_service_category = createSlice({
  name: "update_service_category",
  initialState: {
    data: [],
    msg: "",
    loading: false,
    error: false,
    formData: {
      name: "",
      is_req_id_docs: 0,
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateCategory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.msg = action.payload;
      })

      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.payload;
      }),
  reducers: {
    setDataForUpdate: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const updateCategory = createAsyncThunk(
  "update_service_category/updateCategory",
  async (data) => {
    return EDIT_CATEGORY_SERVICE(data);
  }
);
export const getCategory = createAsyncThunk(
  "service_category/getCategory",
  async () => {
    return GET_ALL_CATEGORY_SERVICE();
  }
);
export const getCategoryById = createAsyncThunk(
  "service_category/getCategoryById",
  async (id) => {
    return GET_CATEGORY_SERVICE_BY_ID(id);
  }
);

export const createCategory = createAsyncThunk(
  "create_service_category/createCategory",
  async (data) => {
    return CREATE_CATEGORY_SERVICE(data);
  }
);

export const deleteCategory = createAsyncThunk(
  "service_category/deleteCategory",
  async (id) => {
    return DELETE_CATEGORY_SERVICE(id);
  }
);

export const { setData } = slice_create_service_category.actions;
export const { setDataForUpdate } = slice_update_service_category.actions;

const rootReducerServiceCategory = combineReducers({
  get_services_category: slice_service_category.reducer,
  get_service_category_byId: slice_service_category_byId.reducer,
  create_service_category: slice_create_service_category.reducer,
  update_service_category: slice_update_service_category.reducer,
});

export default rootReducerServiceCategory;
