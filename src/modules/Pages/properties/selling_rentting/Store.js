import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  CHANGE_PROPERTY_PUBLICATION,
  CHANGE_PROPERTY_STATUS,
  CREATE_PROPERTIES,
  DELETE_PROPERTIES,
  GET_PROPERTIES,
  SEARCH_PROPERTY,
  UPDATE_PROPERTIES,
} from "./Service";

export const slice_properties = createSlice({
  name: "get_properties",
  initialState: {
    data: [],
    dataSearch: [],
    loading: false,
    error: null,
    visible: false,
    // position:{},
    pagination: {
      current_page: "",
      totalPages: "",
      last_page: "",
      per_page: 5,
    },
    columns: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col", className: " w-25" },
      },
      {
        key: "direction",
        label: "الاتجاهات",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "serial_number",
        label: "رقم البيع",
        _props: { scope: "col", className: "  w-25" },
      },
      // {
      //   key: "property_images",
      //   label: " صور العقار ",
      //   _props: { scope: "col" },
      // },
      {
        key: "service_and_virtues",
        label: " الخدمات الاضافية",
        _props: { scope: "col", className: " w-25" },
      },
      {
        key: "room",
        label: " الغرف",
        _props: { scope: "col" },
      },
      {
        key: "cladding_level",
        label: " الاكساء",
        _props: { scope: "col " },
      },
      {
        key: "type_publication",
        label: " النشر",
        _props: { scope: "col" },
      },
      {
        key: `category_real_estate_type`,
        label: " الفئة ",
        _props: { scope: "col" },
      },

      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },
      {
        key: "type_owner",
        label: " الملكية",
        _props: { scope: "col" },
      },
      {
        key: "address",
        label: "العنوان",
        _props: { scope: "col" },
      },
      // {
      //   key: "position",
      //   label: "الموقع",
      //   _props: { scope: "col" },
      // },
      {
        key: "price",
        label: "السعر",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "area",
        label: "المساحة",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "id",
        label: "الرقم ",
        _props: { scope: "col", className: " p-2" },
      },
    ],
  },
  reducers: {
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(get_properties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_properties.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.pagination.current_page = action.payload.data.meta.current_page;
        state.pagination.last_page = action.payload.data.meta.last_page;
        state.pagination.total = action.payload.data.meta.total;
        // console.log('oo',action.payload.data.meta)
      })
      .addCase(get_properties.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// searching

export const slice_search_property = createSlice({
  name: "SearchProperty",
  initialState: {
    data: [],
    loading: false,
    error: null,
    visible: false,
    pagination: {
      current_page: "",
      totalPages: "",
      last_page: "",
      per_page: 5,
    },
    formData: {
      maxPrice: "",
      minPrice: "",
      maxArea: "",
      minArea: "",
      regionId: "",
      governorateId: "",
      publicationId: [],
      townId: "",
      typeOwnerIds: [],
      propertyCategoryId: [],
      claddingLevel: [],
      service_and_virtues: [],
      direction: [],
      minNumberOfRoom: "",
      maxNumberOfRoom: "",
    },
  },
  reducers: {
    setDataForSearch: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(search_property.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(search_property.fulfilled, (state, action) => {
        state.data = action.payload.data.data;
        console.log("search data", state.data);
        state.loading = false;
      })
      .addCase(search_property.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const slice_create_selling = createSlice({
  name: "create_selling",
  initialState: {
    data: [],
    msg: "",
    status: "",
    loading: false,
    error: null,
    formData: {
      status_id: "",
      // cladding_level_id: "",
      // type_publication_id: "",
      // type_owner_id: "",
      cladding_level: "",
      type_publication: "",
      type_owner: "",
      category_real_estate_type: "",
      price: "",
      area: "",
      period_id:'',
      count_level: "",
      description: "",
      room: [{ type_id: "", number: "" }],
      owner_photos: [],
      property_photos: [],
      service_and_virtues: [],
      direction: [],
      region_id: "",
      governorate_id: "",
      town: "",
    },
  },
  reducers: {
    setData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetData: (state) => {
      state.formData = {
        status_id: "",
      cladding_level_id: "",
      type_publication_id: "",
      category_real_estate_type_id: "",
      type_owner_id: "",
      price: "",
      period_id:'',
      area: "",
      // position: {},//'{"latitude": 40.7128, "longitude": -74.0060}',
      cladding_level: "",
      type_publication: "",
      type_owner: "",
      count_level: "",
      description: "",
      room: [{ type_id: "", number: "" }],
      owner_photos: [],
      property_photos: [],
      service_and_virtues: [],
      direction: [],
      region_id: "",
      governorate_id: "",
      town: "",
      };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(createSelling.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSelling.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg;
        console.log("mmmmsg", state.msg);
        state.loading = false;
      })
      .addCase(createSelling.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(edit_properties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(edit_properties.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg;
        console.log("mmmmsg", state.msg);
        state.loading = false;
      })
      .addCase(edit_properties.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const search_property = createAsyncThunk(
  "SearchProperty/search_property",
  async (data) => {
    return SEARCH_PROPERTY(data);
  }
);

export const get_properties = createAsyncThunk(
  "get_properties/get_properties",
  async (id) => {
    return GET_PROPERTIES(id);
  }
);
export const delete_properties = createAsyncThunk(
  "get_properties/delete_properties",
  async (id) => {
    return DELETE_PROPERTIES(id);
  }
);
export const edit_properties = createAsyncThunk(
  "create_selling/edit_properties",
  async (data) => {
    return UPDATE_PROPERTIES(data);
  }
);
export const change_status_properties = createAsyncThunk(
  "get_properties/change_status_properties",
  async (data) => {
    return CHANGE_PROPERTY_STATUS(data);
  }
);
export const change_publication_properties = createAsyncThunk(
  "get_properties/change_publication_properties",
  async (data) => {
    return CHANGE_PROPERTY_PUBLICATION(data);
  }
);
export const createSelling = createAsyncThunk(
  "create_selling/createSelling",
  (data) => {
    return CREATE_PROPERTIES(data);
  }
);
export const handle_Set_Visible_property = (isVisible) => (dispatch) => {
  dispatch(setVisible(isVisible));
};
export const { setData ,resetData} = slice_create_selling.actions;
export const { setDataForSearch } = slice_search_property.actions;

export const { setVisible } = slice_properties.actions;
const rootReducerProperties = combineReducers({
  create_properties: slice_create_selling.reducer,
  get_properties: slice_properties.reducer,
  search_properties: slice_search_property.reducer,
});
export default rootReducerProperties;
