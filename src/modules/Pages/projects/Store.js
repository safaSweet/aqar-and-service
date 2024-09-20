import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  ADD_PHOTO_PROJECT,
  CREATE_TOWER,
  CREATE_PROJECT,
  CREATE_SPECIFICETION,
  DELETE_PHOTO_PROJECT,
  EDIT_PROJECT,
  GET_ALL_PROJECT,
  GET_ALL_SPECIFICETION_TYPE,
  GET_TOWER_CLASSIFICATION,
  EDIT_TOWER,
  DELETE_TOWER,
  ADD_PHOTO_TOWER,
  DELETE_PHOTO_TOWER,
  GET_TOWER,
  GET_FLOOR,
  CREATE_FLOOR,
  EDIT_FLOOR,
  DELETE_FLOOR,
  DELETE_PROJECT,
  GET_CONFIG,
  GET_FLOORS_PROPERTY,
  CREATE_FLOOR_PROPERTY,
  EDIT_FLOOR_PROPERTY,
  DELETE_FLOOR_PROPERTY,
  ADD_PHOTO_TOWER_PROPERTY,
  DELETE_PHOTO_TOWER_PROPERTY,
  ADD_ROOM_TOWER_PROPERTY,
  DELETE_ROOM_TOWER_PROPERTY,
  ADD_PERIOD_TOWER_PROPERTY,
  DELETE_PERIOD_TOWER_PROPERTY,
  GET_FLOORS_PROPERTY_STATUS,
} from "./Service";

export const slice_project = createSlice({
  name: "get_projects",
  initialState: {
    data: [],
    loading: false,
    error: null,
    visible: false,
    photo_type: [],
    classifications: [],
    services: [],
    type_specifications: [],
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
        key: "name",
        label: "اسم المشروع",
        _props: { scope: "col" },
      },
      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },
      {
        key: "tower",
        label: "الأبراج",
        _props: { scope: "col" },
      },
      {
        key: "position",
        label: "الخريطة",
        _props: { scope: "col" },
      },
      {
        key: "images",
        label: "الصور",
        _props: { scope: "col" },
      },
      {
        key: "specification",
        label: "المميزات",
        _props: { scope: "col" },
      },

      {
        key: "area",
        label: "المساحة",
        _props: { scope: "col", className: " p-2" },
      },
    ],
  },
  reducers: {
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_project.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_project.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        const { photo_type, classifications, services, type_specifications } =
          action.payload; //.msg;
        // state.data = action.payload;
        state.photo_type = photo_type;
        state.classifications = classifications;
        state.type_specifications = type_specifications;
        state.services = services;
        state.loading = false;
      })
      .addCase(get_project.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
    // .addCase(deleteTower.fulfilled, (state, action) => {
    //   const deletedTowerId = action.payload;
    //   state.data = Array.isArray(state.data) ? state.data.map(project => ({
    //     ...project,
    //     towers: Array.isArray(project.towers) ? project.towers.filter(tower => tower.id !== deletedTowerId) : []
    //   })) : [];
    // });
  },
});
export const get_project = createAsyncThunk("get_projects/get_project", () => {
  return GET_ALL_PROJECT();
});
export const slice_project_specification = createSlice({
  name: "project_specification",
  initialState: {
    data: [],
    loading: false,
    error: null,
    formData: {
      type_id: "",
      number: "",
    },
  },
  reducers: {
    setData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(ProjectSpecification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ProjectSpecification.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(ProjectSpecification.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const slice_tower_classification = createSlice({
  name: "tower_classification",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  // reducers: {
  //   setData: (state, action) => {
  //     state.formData = { ...state.formData, ...action.payload };
  //   },
  // },

  extraReducers: (builder) =>
    builder
      .addCase(towerClassification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(towerClassification.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(towerClassification.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const ProjectSpecification = createAsyncThunk(
  "project_specification/ProjectSpecification",
  () => {
    return GET_ALL_SPECIFICETION_TYPE();
  }
);
export const towerClassification = createAsyncThunk(
  "tower_classification/towerClassification",
  () => {
    return GET_TOWER_CLASSIFICATION();
  }
);

export const slice_create_project = createSlice({
  name: "create_project",
  initialState: {
    data: [],
    loading: false,
    msg:'',
    error: null,
    formData: {
      area: "",
      name: "",
      region_id: "",
      town_id: "",
      governorate_id: "",
    },
    formDataPhoto: {
      type: "",
      photos: [],
    },
  },
  reducers: {
    setData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setDataPhoto: (state, action) => {
      state.formDataPhoto = { ...state.formDataPhoto, ...action.payload };
    },
    resetData: (state) => {
      state.formData = {
        name: "",
        area: "",
      };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(createProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg
        state.loading = false;
      })
      .addCase(createProject.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const slice_create_project_specification = createSlice({
  name: "create_project_specification",
  initialState: {
    data: [],
    loading: false,
    error: null,
    formData: {
      type_id: "",
      number: "",
    },
  },
  reducers: {
    setDataSpecification: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(createProjectSpecification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProjectSpecification.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(createProjectSpecification.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// tower

export const slice_tower = createSlice({
  name: "get_towers",
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
    columns: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col", className: " w-25" },
      },
      {
        key: "name",
        label: "اسم المشروع",
        _props: { scope: "col" },
      },
      {
        key: "floor",
        label: "الطوابق",
        _props: { scope: "col" },
      },
      {
        key: "image",
        label: "الصور",
        _props: { scope: "col" },
      },
      {
        key: "position",
        label: "الخريطة",
        _props: { scope: "col" },
      },
      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },
      {
        key: "classification",
        label: "التوصيف",
        _props: { scope: "col" },
      },

      {
        key: "area",
        label: "المساحة",
        _props: { scope: "col", className: " p-2" },
      },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_tower.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_tower.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(get_tower.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const slice_create_tower = createSlice({
  name: "create_tower",
  initialState: {
    data: [],
    loading: false,
    msg:'',
    error: null,
    formDataTower: {
      residential_complex_id: "",
      classification_id: "",
      area: "",
      name: "",
      number_of_floors: "",
      description: "",
    },
  },
  reducers: {
    setDataTower: (state, action) => {
      state.formDataTower = { ...state.formDataTower, ...action.payload };
    },
    resetDataTower: (state) => {
      state.formDataTower = {
        name: "",
        area: "",
      };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(createTower.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTower.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg;
        state.loading = false;
        // console.log('msg,',state.msg)
      })
      .addCase(createTower.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// floor
export const slice_floor = createSlice({
  name: "get_floors",
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
    columns: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col", className: " w-25" },
      },
      {
        key: "number_of_flat",
        label: " رقم الشقة",
        _props: { scope: "col" },
      },
      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },
      {
        key: "property",
        label: "العقارات",
        _props: { scope: "col" },
      },
      // {
      //   key: "image",
      //   label: "الصور",
      //   _props: { scope: "col" },
      // },
      // {
      //   key: "position",
      //   label: "الخريطة",
      //   _props: { scope: "col" },
      // },
      {
        key: "floor_number",
        label: "رقم الطابق",
        _props: { scope: "col" },
      },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_floor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_floor.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(get_floor.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const slice_create_floor = createSlice({
  name: "create_floor",
  initialState: {
    data: [],
    loading: false,
    msg:'',
    error: null,
    formDataFloor: {
      floor_number: "",
      number_of_flat: "",
      description: "",
    },
  },
  reducers: {
    setDataFloor: (state, action) => {
      state.formDataFloor = { ...state.formDataFloor, ...action.payload };
    },
    resetDataFloor: (state) => {
      state.formDataFloor = {
        floor_number: "",
        number_of_flat: "",
        description: "",
      };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(createFloor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createFloor.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg;
        console.log('msggggg',state.msg)
        state.loading = false;
      })
      .addCase(createFloor.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

// property


export const slice_floor_property = createSlice({
  name: "get_floor_properties",
  initialState: {
    data: [],
    data_status:[],
    loading: false,
    error: null,
    visible: false,
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
        key: "serial_number",
        label: "رقم البيع",
        _props: { scope: "col" },
      },
      {
        key: "periods",
        label: " فترة التاجير",
        _props: { scope: "col" },
      },
      {
        key: "room",
        label: "  الغرف",
        _props: { scope: "col" },
      },
      {
        key: "description",
        label: "الوصف",
        _props: { scope: "col" },
      },
      {
        key: "image",
        label: "الصور",
        _props: { scope: "col" },
      },
      {
        key: "area",
        label: "المساحة ",
        _props: { scope: "col" },
      },
      {
        key: "price",
        label: "السعر ",
        _props: { scope: "col" },
      },
      {
        key: "property_type",
        label: "العقار ",
        _props: { scope: "col" },
      },
      {
        key: "type_owner",
        label: "الملكية ",
        _props: { scope: "col" },
      },
      {
        key: "status",
        label: " الحالة",
        _props: { scope: "col" },
      },
      {
        key: "cladding_level",
        label: " مستوى الاكساء",
        _props: { scope: "col" },
      },
      {
        key: "direction",
        label: " الاتجاهات",
        _props: { scope: "col" },
      },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_property.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_property.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(get_property.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(GetFloorProperty_status.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetFloorProperty_status.fulfilled, (state, action) => {
        state.data_status = action.payload;
        state.loading = false;
      })
      .addCase(GetFloorProperty_status.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export const slice_create_floor_property = createSlice({
  name: "create_floor_property",
  initialState: {
    data: [],
    loading: false,
    msg:'',
    error: null,
    formDataFloorProperty: {
      floor_number:'',
      status_id: "",
      cladding_level_id: "",
      type_publication_id: "",
      category_real_estate_type_id: "",
      type_owner_id: "",
      status: "",
      cladding_level: "",
      type_publication: "",
      category_real_estate_type: "",
      type_owner: "",
      price: "",
      area: "",
      property_type:'',
      description: "",
      direction: [],
    },
  },
  reducers: {
    setDataFloorProperty: (state, action) => {
      state.formDataFloorProperty = { ...state.formDataFloorProperty, ...action.payload };
    },
    resetDataFloorProperty: (state) => {
      state.formDataFloorProperty = {
      floor_number:'',
      status_id: "",
      cladding_level_id: "",
      type_publication_id: "",
      category_real_estate_type_id: "",
      type_owner_id: "",
      status: "",
      cladding_level: "",
      type_publication: "",
      category_real_estate_type: "",
      type_owner: "",
      price: "",
      area: "",
      property_type:'',
      description: "",
      direction: [],
      };
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(createFloorProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createFloorProperty.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg;
        state.loading = false;
      })
      .addCase(createFloorProperty.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
//functions




export const get_tower = createAsyncThunk("get_towers/get_tower", (id) => {
  return GET_TOWER(id);
});
export const get_floor = createAsyncThunk("get_floors/get_floor", (id) => {
  return GET_FLOOR(id);
});
export const get_property = createAsyncThunk("get_floor_properties/get_property", (id) => {
  return GET_FLOORS_PROPERTY(id);
});

export const getConfig = createAsyncThunk(
  "get_projects/getConfig",
  async () => {
    const response = await GET_CONFIG();
    return response.data; // Assuming response.data contains the needed data
  }
);

export const createFloor = createAsyncThunk(
  "create_floor/createFloor",
  (data) => {
   return CREATE_FLOOR(data);
  }
);
export const createFloorProperty = createAsyncThunk(
  "create_floor_property/createFloorProperty",
  (data) => {
   return CREATE_FLOOR_PROPERTY(data);
  }
);
export const updateFloor = createAsyncThunk(
  "create_floor/updateFloor",
  (data) => {
    EDIT_FLOOR(data);
  }
);
export const updateFloorProperty = createAsyncThunk(
  "create_floor_property/updateFloorProperty",
  (data) => {
    EDIT_FLOOR_PROPERTY(data);
  }
);
export const deleteFloor = createAsyncThunk(
  "get_floors/deleteFloor",
  (data) => {
    DELETE_FLOOR(data);
  }
);
export const deleteFloorProperty = createAsyncThunk(
  "get_floor_properties/deleteFloorProperty",
  (data) => {
    DELETE_FLOOR_PROPERTY(data);
  }
);
export const GetFloorProperty_status = createAsyncThunk(
  "get_floor_properties/GetFloorProperty_status",
  (data) => {
   return GET_FLOORS_PROPERTY_STATUS(data);
  }
);
export const createProject = createAsyncThunk(
  "create_project/createProject",
  (data) => {
   return CREATE_PROJECT(data);
  }
);
export const createTower = createAsyncThunk(
  "create_tower/createTower",
  (data) => {
    return CREATE_TOWER(data);
  }
);
export const updateProject = createAsyncThunk(
  "create_project/updateProject",
  (data) => {
    EDIT_PROJECT(data);
  }
);
export const deleteProject = createAsyncThunk(
  "get_projects/deleteProject",
  (data) => {
    DELETE_PROJECT(data);
  }
);
export const updateTower = createAsyncThunk(
  "create_tower/updateTower",
  (data) => {
    EDIT_TOWER(data);
  }
);
export const deleteTower = createAsyncThunk("get_towers/deleteTower", (id) => {
  DELETE_TOWER(id);
});
export const createProjectSpecification = createAsyncThunk(
  "create_project_specification/createProjectSpecification",
  (data) => {
    return CREATE_SPECIFICETION(data);
  }
);
export const add_photo = createAsyncThunk(
  "create_project/add_photo",
  (data) => {
    return ADD_PHOTO_PROJECT(data);
  }
);
export const delete_photo = createAsyncThunk(
  "create_project/delete_photo",
  (data) => {
    return DELETE_PHOTO_PROJECT(data);
  }
);
export const add_photo_tower = createAsyncThunk(
  "create_tower/add_photo_tower",
  (data) => {
    return ADD_PHOTO_TOWER(data);
  }
);
export const delete_photo_tower = createAsyncThunk(
  "create_tower/delete_photo_tower",
  (data) => {
    return DELETE_PHOTO_TOWER(data);
  }
);
export const add_photo_tower_property = createAsyncThunk(
  "create_floor_property/add_photo_tower_property",
  (data) => {
    return ADD_PHOTO_TOWER_PROPERTY(data);
  }
);
export const delete_photo_tower_property = createAsyncThunk(
  "create_floor_property/delete_photo_tower_property",
  (data) => {
    return DELETE_PHOTO_TOWER_PROPERTY(data);
  }
);
export const add_room_tower_property = createAsyncThunk(
  "create_floor_property/add_room_tower_property",
  (data) => {
    return ADD_ROOM_TOWER_PROPERTY(data);
  }
);
export const delete_room_tower_property = createAsyncThunk(
  "create_floor_property/delete_room_tower_property",
  (data) => {
    return DELETE_ROOM_TOWER_PROPERTY(data);
  }
);
export const add_rentalPeriod_tower_property = createAsyncThunk(
  "create_floor_property/add_rentalPeriod_tower_property",
  (data) => {
    return ADD_PERIOD_TOWER_PROPERTY(data);
  }
);
export const delete_rentalPeriod_tower_property = createAsyncThunk(
  "create_floor_property/delete_room_rentalPeriod_property",
  (data) => {
    return DELETE_PERIOD_TOWER_PROPERTY(data);
  }
);

export const { setData, resetData, setDataPhoto } =
  slice_create_project.actions;
export const { setDataSpecification } =
  slice_create_project_specification.actions;
export const { setDataTower, resetDataTower } = slice_create_tower.actions;
export const { setDataFloor, resetDataFloor } = slice_create_floor.actions;
export const { setDataFloorProperty, resetDataFloorProperty } = slice_create_floor_property.actions;

const rootReducerProject = combineReducers({
  get_projects: slice_project.reducer,
  create_project: slice_create_project.reducer,
  project_specification: slice_project_specification.reducer,
  create_project_specification: slice_create_project_specification.reducer,
  get_tower: slice_tower.reducer,
  create_tower: slice_create_tower.reducer,
  tower_classification: slice_tower_classification.reducer,
  get_floor: slice_floor.reducer,
  create_floor: slice_create_floor.reducer,
  get_property:slice_floor_property.reducer,
  create_property:slice_create_floor_property.reducer,
});
export default rootReducerProject;
