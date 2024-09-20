import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  DELETE_PROVIDER_SERVICE,
  CREATE_PROVIDER_SERVICE,
  EDIT_PROVIDER_SERVICE,
  GET_PROVIDERS_CATEGORY_SERVICE,
  DISABLE_PROVIDER_SERVICE,
  LOCKED_PROVIDER_SERVICE,
  ADD_PHOTO_PROVIDER_SERVICE,
  DELETE_PHOTO_PROVIDER_SERVICE,
} from "../Service";
import { combineReducers } from "redux";

// export const slice_service_provider = createSlice({
//   name: "service_provider",
//   initialState: {
//     data: [],
//     msg: "",
//     loading: false,
//     error: false,
//     status: false,
//   },

//   extraReducers: (builder) =>
//     builder
//       .addCase(getProviderById.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(getProviderById.fulfilled, (state, action) => {
//         state.data = action.payload;

//         state.loading = false;
//       })

//       .addCase(getProviderById.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       }),
// });

export const slice_service_providers = createSlice({
  name: "service_provider",
  initialState: {
    data: [],
    is_req_id_docs: 0,
    msg: "",
    loading: false,
    error: false,
    status: false,
    visible: false,
    columns: [
      {
        key: "id",
        label: "#",
        _props: { scope: "col" },
      },
      {
        key: "name",
        label: "الاسم",
        _props: { scope: "col" },
      },
      {
        key: "email",
        label: "الايميل",
        _props: { scope: "col" },
      },
      {
        key: "address",
        label: "المحافظة",
        _props: { scope: "col" },
      },
      {
        key: "contact_information",
        label: "معلومات الاتصال",
        _props: { scope: "col" },
      },
      {
        key: "status",
        label: " الحالة",
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
      .addCase(getProvider.pending, (state) => {
        state.loading = true;
      })

      .addCase(getProvider.fulfilled, (state, action) => {
        state.data = action.payload;

        state.loading = false;
      })

      .addCase(getProvider.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
  reducers: {
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
  },
});
export const handle_Set_Visible = (isVisible) => (dispatch) => {
  dispatch(setVisible(isVisible));
};

export const slice_create_service_provider = createSlice({
  name: "create_service_provider",
  initialState: {
    data: [],
    msg: "",
    loading: false,
    error: false,
    formData: {
      name: "",
      email: "",
      category_service_id: "",
      mobile_number: 0,
      business: [],
      identyfie: [],
      description: "",
      governorate_id: "",
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createProvider.pending, (state) => {
        state.loading = true;
      })

      .addCase(createProvider.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.msg = action.payload.data.msg;
      })

      .addCase(createProvider.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.payload;
      }),
  reducers: {
    setData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetData: (state) => {
      state.formData = {
        name: "",
        email: "",
        category_service_id: "",
        mobile_number: 0,
        business: [],
        identyfie: [],
        description: "",
        governorate_id: "",
      };
    },
  },
});

export const slice_update_service_provider = createSlice({
  name: "update_service_provider",
  initialState: {
    data: [],
    msg: "",
    loading: false,
    error: false,
    formData: {
      name: "",
      email: "",
      category_service_id: 0,
      mobile_number: "",
      business: [],
      identyfie: [],
      description: "",
      governorate_id: "",
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(updateProvider.pending, (state) => {
        state.loading = true;
      })

      .addCase(updateProvider.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.msg = action.payload;
      })

      .addCase(updateProvider.rejected, (state, action) => {
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

export const updateProvider = createAsyncThunk(
  "update_service_provider/updateProvider",
  async (data) => {
    return EDIT_PROVIDER_SERVICE(data);
  }
);
export const getProvider = createAsyncThunk(
  "service_providers/getProvider",
  async (id) => {
    return GET_PROVIDERS_CATEGORY_SERVICE(id);
  }
);
// export const getProviderById = createAsyncThunk(
//   "service_provider/getProviderById",
//   async (id) => {
//     return GET_PROVIDER_SERVICE(id);
//   }
// );
export const deleteProvider = createAsyncThunk(
  "service_providers/deletePovider",
  (id) => {
    return DELETE_PROVIDER_SERVICE(id);
  }
);
export const disableProvider = createAsyncThunk(
  "service_providers/disableProvider",
  (id) => {
    return DISABLE_PROVIDER_SERVICE(id);
  }
);
export const lockedProvider = createAsyncThunk(
  "service_providers/lockedProvider",
  (id) => {
    return LOCKED_PROVIDER_SERVICE(id);
  }
);

export const createProvider = createAsyncThunk(
  "create_service_provider/createProvider",
  async (data) => {
    return CREATE_PROVIDER_SERVICE(data);
  }
);
export const addPhoto2Provider = createAsyncThunk(
  "create_service_provider/addPhoto2Provider",
  async (data) => {
    return ADD_PHOTO_PROVIDER_SERVICE(data);
  }
);
export const deletePhoto2Provider = createAsyncThunk(
  "create_service_provider/deletePhoto2Provider",
  async (data) => {
    return DELETE_PHOTO_PROVIDER_SERVICE(data);
  }
);
export const { setVisible } = slice_service_providers.actions;
export const { setData ,resetData} = slice_create_service_provider.actions;
export const { setDataForUpdate } = slice_update_service_provider.actions;

const rootReducerServiceProvider = combineReducers({
  get_services_providers: slice_service_providers.reducer,
  // get_services_provider: slice_service_provider.reducer,
  create_service_provider: slice_create_service_provider.reducer,
  update_service_provider: slice_update_service_provider.reducer,
});

export default rootReducerServiceProvider;
