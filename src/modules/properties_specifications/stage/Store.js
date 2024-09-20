import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {   GET_ALL_STAGE, CREATE_STAGE, EDIT_STAGE, DELETE_STAGE, CREATE_TYPE_STAGE, DELETE_TYPE_STAGE} from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_stage = createSlice({
  name: "get_stage",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
    id: "",
    name: "",
    description: "",
  },

  extraReducers: (builder) =>
    builder
      .addCase(getstage.pending, (state) => {
        state.loading = true;
      })

      .addCase(getstage.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getstage.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  reducers: {
    setStoreData: (state, action) => {
      const { id, name, description } = action.payload;
      state.id = id;
      state.name = name;
      state.description = description;
      console.log('oooooooooo', state.description); // للتأكد من القيم التي تم تعيينها
    },
    
  },
});
// export const handle_Set_Data = (id,type) => (dispatch) => {
//   dispatch(setStoreData(id,type));
// };
export const slice_create_stage = createSlice({
  name: "create_stage",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },
  setData: (state, action) => {
    state.formData = { ...state.formData, ...action.payload };
  },
  extraReducers: (builder) =>
    builder
      .addCase(getstage.pending, (state) => {
        state.loading = true;
      })

      .addCase(getstage.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getstage.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const { setData } = slice_create_stage.actions;
export const getstage = createAsyncThunk("get_stage/getstage", async () => {
  return GET_ALL_STAGE();
});
export const createstage = createAsyncThunk(
  "create_stage/createstage",
  async (data) => {
    return CREATE_STAGE(data);
  }
);
export const editstage = createAsyncThunk(
  "create_stage/editstage",
  //change here^
  async (data) => {
    return EDIT_STAGE(data);
  }
);
export const deletestage= createAsyncThunk(
  "get_stage/deletestage",
  async (id) => {
    return DELETE_STAGE(id);
  }
);


export const createTypestage = createAsyncThunk(
  "create_stage/createTypestage",
  async (data) => {
    return CREATE_TYPE_STAGE(data);
  }
);
export const deleteTypestage= createAsyncThunk(
  "get_stage/deleteTypestage",
  async (ids) => {
    return DELETE_TYPE_STAGE(ids);
  }
);

export const { setStoreData } = slice_get_all_stage.actions;

const rootReducerstage = combineReducers({
  get_stages: slice_get_all_stage.reducer,
  create_stage: slice_create_stage.reducer,
});

export default rootReducerstage;
