import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { GET_NOTIFICATIONS, IS_READY, SEND_NOTIFICATION } from "./service";

export const get_notification = createAsyncThunk(
  "notification/get_notification",
  () => {
    return GET_NOTIFICATIONS();
  }
);

export const send_notification = createAsyncThunk(
  "notification/send_notification",
  (data) => {
    return SEND_NOTIFICATION(data);
  }
);
export const is_read = createAsyncThunk("notification/is_read", (id) => {
  return IS_READY(id);
});

export const slice_notifications = createSlice({
  name: "notification",
  initialState: {
    data: [],
    loading: false,
    msg: "",
    error: null,
    not_read: 0,
   
  },

  extraReducers: (builder) =>
    builder
      .addCase(get_notification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_notification.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.not_read = state.data.data.filter(
          (item) => item.is_read === 1
        ).length;
        console.log("not _ read", state.not_read);
        state.loading = false;
      })
      .addCase(get_notification.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const slice_send_notification = createSlice({
  name: "send_notification",
  initialState: {
    data: [],
    loading: false,
    msg: "",
    error: null,
    not_read: 0,
    formDataNotification: {
      title: "",
      type: "",
      description: "",
      data: {},
      user_ids: [],
    },
  },
  reducers: {
    setDataNotifications: (state, action) => {
      state.formDataNotification = {
        ...state.formDataNotification,
        ...action.payload,
      };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(send_notification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(send_notification.fulfilled, (state, action) => {
        state.data = action.payload.data;
        // state.not_read = state.data.data.filter(
        //   (item) => item.is_read === 1
        // ).length;
        // console.log("not _ read", state.not_read);
        state.loading = false;
      })
      .addCase(send_notification.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const { setDataNotifications } = slice_send_notification.actions;

const rootReduceNotifications = combineReducers({
  getNotifications: slice_notifications.reducer,
  sendNotifications: slice_send_notification.reducer,
});

export default rootReduceNotifications;
