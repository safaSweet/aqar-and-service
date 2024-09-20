// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {  GET_GOVERNORATES, GET_REGION_GOVERNORATES} from "./Service";
// import { combineReducers } from "redux";

// export const slice_address = createSlice({
//   name: "get_address",
//   initialState: {
//     data: [],
//     dataRegion:[],
//     error_num: 0,
//     msg: "",
//     loading: false,
//     error: false,
//   },

//   extraReducers: (builder) =>
//     builder
//       .addCase(getGovernorate.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(getGovernorate.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.loading = false;
//       })
//       .addCase(getRegionForGovernorate.fulfilled, (state, action) => {
//         state.dataRegion = action.payload;
//         state.loading = false;
//       })

//       .addCase(getGovernorate.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       }),
//   reducers: {
//     setStoreData: (state, action) => {
//       state.data_store = action.payload;
//     },
//   },
// });


// export const getGovernorate = createAsyncThunk("get_address/getGovernorate", async () => {
//   return GET_GOVERNORATES();
// });
// export const getRegionForGovernorate = createAsyncThunk("get_address/getRegionForGovernorate", async (id) => {
//   return GET_REGION_GOVERNORATES(id);
// });

// export const { setStoreData } = slice_address.actions;

// const rootReducerAddress = combineReducers({
//   get_governorate: slice_address.reducer,
// });

// export default rootReducerAddress;
// ظظظظظظظظظظظظظظظظظظظ
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_GOVERNORATES, GET_REGIONS, GET_REGION_GOVERNORATES, GET_TOWN_REGION } from "./Service";
import { combineReducers } from "redux";

export const getGovernorate = createAsyncThunk("address/getGovernorate", async () => {
  return GET_GOVERNORATES();
});
export const getRegions = createAsyncThunk("address/getRegions", async () => {
  return GET_REGIONS();
});

export const getRegionForGovernorate = createAsyncThunk("address/getRegionForGovernorate", async (id) => {
  return GET_REGION_GOVERNORATES(id);
});
export const getTwonForRegion = createAsyncThunk("address/getTwonForRegion", async (id) => {
  return GET_TOWN_REGION(id);
});

const addressSlice = createSlice({
  name: "address",
  initialState: {
    governorates: [],
    regions: [],
    town:[],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGovernorate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGovernorate.fulfilled, (state, action) => {
        console.log('Governorates Data:', action.payload);
        state.governorates = action.payload//.Governorates || [];
        state.loading = false;
      })
      .addCase(getGovernorate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getRegions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRegions.fulfilled, (state, action) => {
        console.log('getRegions Data:', action.payload);
        state.regions = action.payload//.Governorates || [];
        state.loading = false;
      })
      .addCase(getRegions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getRegionForGovernorate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRegionForGovernorate.fulfilled, (state, action) => {
        console.log('Regions Data:', action.payload);
        state.regions = action.payload//.Regions || action.payload || [];
        state.loading = false;
      })
      .addCase(getRegionForGovernorate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getTwonForRegion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTwonForRegion.fulfilled, (state, action) => {
        console.log('Regions Data:', action.payload);
        state.town = action.payload//.Regions || action.payload || [];
        state.loading = false;
      })
      .addCase(getTwonForRegion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
//region


// const regionSlice = createSlice({
//   name: "regions",
//   initialState: {
//     governorates: [],
//     regions: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
     
//       .addCase(getRegionForGovernorate.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getRegionForGovernorate.fulfilled, (state, action) => {
//         console.log('Regions Data:', action.payload);
//         state.regions = action.payload//.Regions || action.payload || [];
//         state.loading = false;
//       })
//       .addCase(getRegionForGovernorate.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

const rootReducerAddress = combineReducers({
  get_governorate: addressSlice.reducer,
  // get_region: regionSlice.reducer,
});

export default rootReducerAddress;
