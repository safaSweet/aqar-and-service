import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  ACCESS_CATEGORY_SERVICE_PROVIDER_REQUEST,
  ACCESS_CATEGORY_SERVICE_REQUEST,
  CATEGORY_SERVICE_PROVIDER_REQUEST,
  CATEGORY_SERVICE_REQUEST,
  CHANGE_STATUS_CLOTHE_REQUEST,
  CHANGE_STATUS_OBRATION_REQUEST,
  CHANGE_STATUS_PROPERIES_REQUEST,
  CLOTHES_REQUEST,
  DELETE_CATEGORY_SERVICE_PROVIDER_REQUEST,
  DELETE_CATEGORY_SERVICE_REQUEST,
  OBRATION_REQUEST,
  PROPERTIES_REQUEST,
  SEARCH_REQUEST,
  TYPE_REQUEST,
  UNACCESS_CATEGORY_SERVICE_PROVIDER_REQUEST,
  UNACCESS_CATEGORY_SERVICE_REQUEST,
} from "./Service";
import { api } from "../../../boot/axios";

export const slice_order_service_category = createSlice({
  name: "order_category",
  initialState: {
    data: [],
    old_data: [],
    new_data: [],
    type: "",
    add_data: [],
    edit_data: [],
    loading: false,
    error: null,
    visible: false,

    columns: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col" },
      },
      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },

      {
        key: "category_name",
        label: " اسم الفئة",
        _props: { scope: "col" },
      },
      {
        key: "birth_date",
        label: "تاريخ الميلاد",
        _props: { scope: "col" },
      },
      {
        key: "phone",
        label: "الهاتف",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "email",
        label: "الايميل",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "full_name",
        label: "الاسم",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "serial_number",
        label: "الرقم التسلسلي",
        _props: { scope: "col" },
      },
    ],
    columns_provider_add: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col" },
      },

      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },
      {
        key: "type",
        label: " النوع",
        _props: { scope: "col" },
      },
      {
        key: "status",
        label: " الحالة",
        _props: { scope: "col" },
      },
      // {
      //   key: 'service_provider',
      //   label: 'اسم المقدم',
      //   _props: { scope: 'col' },
      // },
      {
        key: "serial_number",
        label: "الرقم التسلسلي",
        _props: { scope: "col" },
      },
    ],
    columns_provider_edit: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col" },
      },

      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },
      {
        key: "type",
        label: " النوع",
        _props: { scope: "col" },
      },
      {
        key: "status",
        label: " الحالة",
        _props: { scope: "col" },
      },
      {
        key: "serial_number",
        label: "الرقم التسلسلي",
        _props: { scope: "col" },
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
      .addCase(get_orders_category.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_orders_category.fulfilled, (state, action) => {
        state.data = action.payload;
        // state.is_admin = action.payload;
        state.loading = false;
      })
      .addCase(get_orders_category.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(get_orders_provider.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_orders_provider.fulfilled, (state, action) => {
        // state.data = action.payload;ظظظظظظظظظظظظ
        // state.type = action.payload.data?.Requests.type;
        // state.add_data = action.payload.data?.Requests.filter(
        //   (item) => item.type === "add"
        // );
        // state.edit_data = action.payload.data?.Requests.filter(
        //   (item) => item.type === "edit"
        // );
        state.add_data =
          action.payload.data?.Requests?.filter(
            (item) => item.type === "add"
          ) || [];
        state.edit_data =
          action.payload.data?.Requests?.filter(
            (item) => item.type === "edit"
          ) || [];

        state.loading = false;
      })
      .addCase(get_orders_provider.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const get_orders_category = createAsyncThunk(
  "order_category/get_orders_category",
  async () => {
    return CATEGORY_SERVICE_REQUEST();
  }
);
export const delete_orders_category = createAsyncThunk(
  "order_category/get_orders_category",
  async (id) => {
    return DELETE_CATEGORY_SERVICE_REQUEST(id);
  }
);
export const access_orders_category = createAsyncThunk(
  "order_category/get_orders_category",
  async (id) => {
    return ACCESS_CATEGORY_SERVICE_REQUEST(id);
  }
);
export const unaccess_orders_category = createAsyncThunk(
  "order_category/get_orders_category",
  async (id) => {
    return UNACCESS_CATEGORY_SERVICE_REQUEST(id);
  }
);
//PROVIDER
export const get_orders_provider = createAsyncThunk(
  "order_category/get_orders_provider",
  async () => {
    return CATEGORY_SERVICE_PROVIDER_REQUEST();
  }
);
export const delete_orders_provider = createAsyncThunk(
  "order_category/get_orders_provider",
  async (id) => {
    return DELETE_CATEGORY_SERVICE_PROVIDER_REQUEST(id);
  }
);
export const access_orders_provider = createAsyncThunk(
  "order_category/get_orders_provider",
  async (id) => {
    return ACCESS_CATEGORY_SERVICE_PROVIDER_REQUEST(id);
  }
);
export const unaccess_orders_provider = createAsyncThunk(
  "order_category/get_orders_provider",
  async (id) => {
    return UNACCESS_CATEGORY_SERVICE_PROVIDER_REQUEST(id);
  }
);
// export const handle_Set_Visible_property = (isVisible) => (dispatch) => {
//   dispatch(setVisibleProperties(isVisible));
// }
// properties request
export const slice_properties_request = createSlice({
  name: "properties_request",
  initialState: {
    data: [],
    data_obration: [],
    loading: false,
    error: null,
    visible: false,
    visible2: false,
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
        key: "position",
        label: " الموقع",
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
        key: "birth_date",
        label: "تاريخ الميلاد",
        _props: { scope: "col" },
      },
      {
        key: "phone",
        label: "الهاتف",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "email",
        label: "الايميل",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "full_name",
        label: "الاسم",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "serial_number",
        label: "الرقم ",
        _props: { scope: "col", className: " p-2" },
      },
    ],
    columns_obration: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col", className: " w-25" },
      },
      {
        key: `birth_date`,
        label: " تاريخ الميلاد ",
        _props: { scope: "col" },
      },

      {
        key: "phone_number",
        label: " الهاتف الرقم",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "email",
        label: "الايميل ",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "first_name",
        label: "الاسم ",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "father_name",
        label: "الاب ",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "last_name",
        label: " الكنية",
        _props: { scope: "col" },
      },
      {
        key: "price",
        label: "السعر ",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "area",
        label: "المساحة ",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "status",
        label: "الحالة ",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "type_publication",
        label: "نوع النشر ",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "serial_number",
        label: " الرقم",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "description",
        label: "الوصف ",
        _props: { scope: "col", className: " p-2" },
      },
    ],
  },
  reducers: {
    setVisibleProperties: (state, action) => {
      state.visible = action.payload;
    },
    setVisiblePropertiesChange: (state, action) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(get_properties_request.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_properties_request.fulfilled, (state, action) => {
        state.data = action.payload;
        state.pagination.current_page = action.payload.data.meta.current_page;
        state.pagination.last_page = action.payload.data.meta.last_page;
        state.pagination.total = action.payload.data.meta.total;
        console.log("oo", action.payload.data.meta);
        // state.is_admin = action.payload;
        state.loading = false;
      })
      .addCase(get_properties_request.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(get_obration_request.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_obration_request.fulfilled, (state, action) => {
        // state.data = action.payload;
        state.data_obration = action.payload;
        // state.is_admin = action.payload;
        state.loading = false;
      })
      .addCase(get_obration_request.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// SEARCH request

export const search_request = createAsyncThunk(
  "searchRequest/search_request",
  async (data) => {
    return SEARCH_REQUEST(data);
  }
);
export const type_request = createAsyncThunk(
  "searchRequest/type_request",
  async () => {
    return TYPE_REQUEST();
  }
);

export const slice_search_request = createSlice({
  name: "searchRequest",
  initialState: {
    data: [],
    dataSearch: [],
    loading: false,
    error: null,
    visible: false,

    formData: {
      number: "",
      type: "",
    },
    columns_propery: [
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
        key: "position",
        label: " الموقع",
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
      // {
      //   key: "birth_date",
      //   label: "تاريخ الميلاد",
      //   _props: { scope: "col" },
      // },
      // {
      //   key: "phone",
      //   label: "الهاتف",
      //   _props: { scope: "col", className: "  w-25" },
      // },
      // {
      //   key: "email",
      //   label: "الايميل",
      //   _props: { scope: "col", className: "  w-25" },
      // },
      // {
      //   key: "full_name",
      //   label: "الاسم",
      //   _props: { scope: "col", className: "  w-25" },
      // },
      {
        key: "serial_number",
        label: "الرقم ",
        _props: { scope: "col", className: " p-2" },
      },
    ],
    columns_provider: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col" },
      },

      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },
      {
        key: "type",
        label: " النوع",
        _props: { scope: "col" },
      },
      {
        key: "status",
        label: " الحالة",
        _props: { scope: "col" },
      },
      {
        key: "serial_number",
        label: "الرقم التسلسلي",
        _props: { scope: "col" },
      },
    ],
  },
  reducers: {
    setDataForSearch: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(search_request.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(search_request.fulfilled, (state, action) => {
        state.data = action.payload.data; //.data;
        console.log("search data", state.data);
        state.loading = false;
      })
      .addCase(search_request.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      // ///// ////// //////// ////// ///////
      .addCase(type_request.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(type_request.fulfilled, (state, action) => {
        state.dataSearch = action.payload.data; //.data;
        console.log("search data", state.dataSearch);
        state.loading = false;
      })
      .addCase(type_request.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const { setDataForSearch } = slice_search_request.actions;

export const slice_clothes_request = createSlice({
  name: "clothes_request",
  initialState: {
    data: [],
    loading: false,
    error: null,
    visible: false,
    visible2: false,
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
        key: `categoryType`,
        label: " الفئة ",
        _props: { scope: "col" },
      },

      {
        key: "type_owner",
        label: " الملكية",
        _props: { scope: "col" },
      },

      {
        key: "pledge_type",
        label: "نوع الاكساء",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "phone",
        label: "الرقم",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "address",
        label: "العنوان",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "email",
        label: "الايميل ",
        _props: { scope: "col", className: " p-2" },
      },
      {
        key: "full_name",
        label: "الاسم ",
        _props: { scope: "col", className: " p-2" },
      },
    ],
  },
  reducers: {
    setVisibleClothes: (state, action) => {
      state.visible = action.payload;
    },
    setVisibleClothesChange: (state, action) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(get_clothes_request.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_clothes_request.fulfilled, (state, action) => {
        state.data = action.payload;
        // state.pagination.current_page=action.payload.data.meta.current_page
        // state.pagination.last_page=action.payload.data.meta.last_page
        // state.pagination.total=action.payload.data.meta.total
        // console.log('oo',action.payload.data.meta)
        // state.is_admin = action.payload;
        state.loading = false;
      })
      .addCase(get_clothes_request.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const handle_Set_Visible_request = (isVisible) => (dispatch) => {
  dispatch(setVisible(isVisible));
};
export const handle_Set_Visible_change = (isVisible) => (dispatch) => {
  dispatch(setVisible(isVisible));
};
export const get_properties_request = createAsyncThunk(
  "properties_request/get_properties_request",
  async (params) => {
    return PROPERTIES_REQUEST(params);
  }
);
export const get_obration_request = createAsyncThunk(
  "properties_request/get_obration_request",
  async (params) => {
    return OBRATION_REQUEST(params);
  }
);
export const get_clothes_request = createAsyncThunk(
  "clothes_request/get_clothes_request",
  async (params) => {
    return CLOTHES_REQUEST(params);
  }
);
export const change_status_properties_request = createAsyncThunk(
  "properties_request/change_status_properties_request",
  async (data) => {
    return CHANGE_STATUS_PROPERIES_REQUEST(data);
  }
);
export const change_status_obration_request = createAsyncThunk(
  "properties_request/change_status_obration_request",
  async (data) => {
    return CHANGE_STATUS_OBRATION_REQUEST(data);
  }
);
export const change_status_clothes_request = createAsyncThunk(
  "clothes_request/change_status_clothes_request",
  async (data) => {
    return CHANGE_STATUS_CLOTHE_REQUEST(data);
  }
);

const rootReducerServiceRequest = combineReducers({
  order_category: slice_order_service_category.reducer,
  request_properties: slice_properties_request.reducer,
  request_clothes: slice_clothes_request.reducer,
  search_request: slice_search_request.reducer,
});

export const { setVisible } = slice_order_service_category.actions;
export const { setVisibleProperties, setVisiblePropertiesChange } =
  slice_properties_request.actions;
export default rootReducerServiceRequest;
