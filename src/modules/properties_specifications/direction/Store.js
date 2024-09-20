import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_DIRECTION, GET_ALL_DIRECTIONS, EDIT_DIRECTION, DELETE_DIRECTION } from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_direction = createSlice({
  name: "get_Direction",
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
      .addCase(getDirection.pending, (state) => {
        state.loading = true;
      })

      .addCase(getDirection.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getDirection.rejected, (state) => {
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
export const slice_create_direction = createSlice({
  name: "create_direction",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getDirection.pending, (state) => {
        state.loading = true;
      })

      .addCase(getDirection.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getDirection.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getDirection = createAsyncThunk("get_direction/getDirection", async () => {
  return GET_ALL_DIRECTIONS();
});
export const createDirection = createAsyncThunk(
  "create_direction/createDirection",
  async (data) => {
    return CREATE_DIRECTION(data);
  }
);
export const editDirection = createAsyncThunk(
  "create_direction/editDirection",
  //change here^
  async (data) => {
    return EDIT_DIRECTION(data);
  }
);
export const deleteRoom= createAsyncThunk(
  "get_rooms/deleteRoom",
  async (id) => {
    return DELETE_DIRECTION(id);
  }
);

export const { setStoreData } = slice_get_all_direction.actions;

const rootReducerDirection = combineReducers({
  get_directions: slice_get_all_direction.reducer,
  create_direction: slice_create_direction.reducer,
});

export default rootReducerDirection;
