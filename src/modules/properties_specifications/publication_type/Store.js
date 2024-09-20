import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  GET_ALL_PUBLICATIONS, CREATE_PUBLICATION, EDIT_PUBLICATION,DELETE_PUBLICATION } from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_publication = createSlice({
  name: "get_publication",
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
      .addCase(getPublications.pending, (state) => {
        state.loading = true;
      })

      .addCase(getPublications.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getPublications.rejected, (state) => {
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
export const slice_create_publication = createSlice({
  name: "create_publication",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(createPublication.pending, (state) => {
        state.loading = true;
      })

      .addCase(createPublication.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(createPublication.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getPublications = createAsyncThunk("get_publications/getPublications", async () => {
  return GET_ALL_PUBLICATIONS();
});
export const createPublication = createAsyncThunk(
  "create_publication/createPublication",
  async (data) => {
    return CREATE_PUBLICATION(data);
  }
);
export const editPublication = createAsyncThunk(
  "create_publication/editPublication",
  //change here^
  async (data) => {
    return EDIT_PUBLICATION(data);
  }
);
export const deletePublication= createAsyncThunk(
  "get_publications/deletePublication",
  async (id) => {
    return DELETE_PUBLICATION(id);
  }
);

export const { setStoreData } = slice_get_all_publication.actions;

const rootReducerPublication = combineReducers({
  get_publications: slice_get_all_publication.reducer,
  create_publication: slice_create_publication.reducer,
});

export default rootReducerPublication;
