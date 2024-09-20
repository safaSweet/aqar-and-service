import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  GET_ALL_TYPE_PLEDGE, CREATE_TYPE_PLEDGE, EDIT_TYPE_PLEDGE, DELETE_TYPE_PLEDGE} from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_pledge = createSlice({
  name: "get_pledge",
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
      .addCase(getpledge.pending, (state) => {
        state.loading = true;
      })

      .addCase(getpledge.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getpledge.rejected, (state) => {
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
export const slice_create_pledge = createSlice({
  name: "create_pledge",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getpledge.pending, (state) => {
        state.loading = true;
      })

      .addCase(getpledge.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getpledge.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getpledge = createAsyncThunk("get_pledge/getpledge", async () => {
  return GET_ALL_TYPE_PLEDGE();
});
export const createpledge = createAsyncThunk(
  "create_pledge/createpledge",
  async (data) => {
    return CREATE_TYPE_PLEDGE(data);
  }
);
export const editpledge = createAsyncThunk(
  "create_pledge/editpledge",
  //change here^
  async (data) => {
    return EDIT_TYPE_PLEDGE(data);
  }
);
export const deletepledge= createAsyncThunk(
  "get_pledge/deletepledge",
  async (id) => {
    return DELETE_TYPE_PLEDGE(id);
  }
);

export const { setStoreData } = slice_get_all_pledge.actions;

const rootReducerPledge = combineReducers({
  get_pledges: slice_get_all_pledge.reducer,
  create_pledge: slice_create_pledge.reducer,
});

export default rootReducerPledge;
