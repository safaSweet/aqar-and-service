import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CREATE_ROOMS, GET_ALL_ROOMS, EDIT_ROOMS, DELETE_ROOMS } from "../Service";
import { combineReducers } from "redux";

export const slice_get_all_room = createSlice({
  name: "get_rooms",
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
      .addCase(getRooms.pending, (state) => {
        state.loading = true;
      })

      .addCase(getRooms.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getRooms.rejected, (state) => {
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
export const slice_create_room = createSlice({
  name: "create_rooms",
  initialState: {
    data: [],
    error_num: 0,
    msg: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(getRooms.pending, (state) => {
        state.loading = true;
      })

      .addCase(getRooms.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })

      .addCase(getRooms.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const getRooms = createAsyncThunk("get_rooms/getRooms", async () => {
  return GET_ALL_ROOMS();
});
export const createRooms = createAsyncThunk(
  "create_rooms/createRooms",
  async (data) => {
    return CREATE_ROOMS(data);
  }
);
export const editRooms = createAsyncThunk(
  "create_rooms/editRooms",
  //change here^
  async (data) => {
    return EDIT_ROOMS(data);
  }
);
export const deleteRoom= createAsyncThunk(
  "get_rooms/deleteRoom",
  async (id) => {
    return DELETE_ROOMS(id);
  }
);

export const { setStoreData } = slice_get_all_room.actions;

const rootReducerRoom = combineReducers({
  get_rooms: slice_get_all_room.reducer,
  create_room: slice_create_room.reducer,
});

export default rootReducerRoom;
