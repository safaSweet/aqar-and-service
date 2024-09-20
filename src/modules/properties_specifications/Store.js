// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { GET_CONFIG } from "./Service";

// export const slice_properties = createSlice({
//   name: "properties",
//   initialState: {
//     activeTab: "",
//     visible: false,
//     create_update: false,
//     data: [],
//     Status: [],
//     publicationType: [],
//     serviceAndVirtues: [],
//     ownershipType: [],
//     claddingLevel: [],
//     roomType: [],
//     CategoryRealEstate: [],
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(getConfig.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getConfig.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.CategoryRealEstate = action.payload;
//         state.Status = action.payload;
//         state.claddingLevel = action.payload;
//         state.ownershipType = action.payload;
//         state.roomType = action.payload;
//         state.serviceAndVirtues = action.payload;
//         state.publicationType = action.payload;
//         state.loading = false;
//       })
//       .addCase(getConfig.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       }),
//   reducers: {
//     setActiveTab: (state, action) => {
//       state.activeTab = action.payload;
//     },
//     setVisible: (state, action) => {
//       state.visible = action.payload;
//     },
//     setCreateUpdate: (state, action) => {
//       state.create_update = action.payload;
//     },
//   },
// });

// export const getConfig = createAsyncThunk("properties/getConfig", () => {  
//   GET_CONFIG();
// });
// export const handle_Set_Visible = (isVisible) => (dispatch) => {
//   dispatch(setVisible(isVisible));
// };
// export const handle_Set_CreateUpdate = (isVisible) => (dispatch) => {
//   dispatch(setCreateUpdate(isVisible));
// };
// export const handle_Set_Active = (activetab) => (dispatch) => {
//   dispatch(setActiveTab(activetab));
// };
// export const { setActiveTab, setVisible, setCreateUpdate } =
//   slice_properties.actions;

// export default slice_properties.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GET_CONFIG } from "./Service";

export const getConfig = createAsyncThunk("properties/getConfig", async () => {
  const response = await GET_CONFIG();
  return response.data;  // Assuming response.data contains the needed data
});

export const slice_properties = createSlice({
  name: "properties",
  initialState: {
    activeTab: "",
    visible: false,
    create_update: false,
    // data: [],
    Status: [],
    publicationType: [],
    serviceAndVirtues: [],
    ownershipType: [],
    claddingLevel: [],
    roomType: [],
    CategoryRealEstate: [],
    rentalPeriod:[],
    direction: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getConfig.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getConfig.fulfilled, (state, action) => {
        const { Status, publicationType, serviceAndVirtues, ownershipType, claddingLevel, roomType, CategoryRealEstate,direction,rentalPeriod } = action.payload.msg;//action.payload;
        // state.data = action.payload;
        state.CategoryRealEstate = CategoryRealEstate;
        state.Status = Status
        state.claddingLevel = claddingLevel;
        state.ownershipType = ownershipType;
        state.roomType = roomType;
        state.serviceAndVirtues = serviceAndVirtues;
        state.publicationType = publicationType;
        state.direction = direction;
        state.rentalPeriod = rentalPeriod;
        state.loading = false;
      })
      .addCase(getConfig.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
    setCreateUpdate: (state, action) => {
      state.create_update = action.payload;
    },
  },
});

export const { setActiveTab, setVisible, setCreateUpdate } = slice_properties.actions;

export default slice_properties.reducer;

export const handle_Set_Visible = (isVisible) => (dispatch) => {
  dispatch(setVisible(isVisible));
};
export const handle_Set_CreateUpdate = (isVisible) => (dispatch) => {
  dispatch(setCreateUpdate(isVisible));
};
export const handle_Set_Active = (activetab) => (dispatch) => {
  dispatch(setActiveTab(activetab));
};
