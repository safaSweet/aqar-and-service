import {
  combineReducers,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  ADD_EMPLOYEE_TO_BRANCH,
  ADD_REGION_TO_BRANCH_,
  ADD_SESSION_TO_BRANCH,
  ADD_SESSION_TO_EMPLOYEE,
  CREATE_BRANCH,
  CREATE_EMPLOYEE,
  CREATE_MANAGER,
  CREATE_SESSION,
  DELETE_BRANCH,
  DELETE_EMPLOYEE,
  DELETE_MANAGER,
  DELETE_MANAGER_BRANCH,
  DELETE_SESSION,
  EDIT_BRANCH,
  EDIT_EMPLOYEE,
  EDIT_MANAGER_BRANCH,
  EDIT_SESSION,
  GET_ALL_BRANCHES,
  GET_ALL_EMPLOYEE,
  GET_ALL_MANAGERS,
  GET_ALL_SESSION,
} from "../services";

export const get_branches = createAsyncThunk("getBranches/get_branches", () => {
  return GET_ALL_BRANCHES();
});
export const get_employee = createAsyncThunk("getBranches/get_employee", () => {
  return GET_ALL_EMPLOYEE();
});
export const get_manager = createAsyncThunk("getManager/get_manager", () => {
  return GET_ALL_MANAGERS();
});
export const get_session = createAsyncThunk("getBranches/get_session", () => {
  return GET_ALL_SESSION();
});
export const delete_branches = createAsyncThunk(
  "getBranches/delete_branches",
  (id) => {
    return DELETE_BRANCH(id);
  }
);
export const delete_session = createAsyncThunk(
  "getBranches/delete_session",
  (id) => {
    return DELETE_SESSION(id);
  }
);
export const delete_employee = createAsyncThunk(
  "getBranches/delete_employee",
  (id) => {
    return DELETE_EMPLOYEE(id);
  }
);
// );
export const delete_manager = createAsyncThunk(
  "getManager/delete_manager",
  (id) => {
    return DELETE_MANAGER(id);
  }
);
export const delete_manager_branch = createAsyncThunk(
  "getManager/delete_manager_branch",
  (id) => {
    return DELETE_MANAGER_BRANCH(id);
  }
);
export const edit_manager_branch = createAsyncThunk(
  "getManager/edit_manager_branch",
  (id) => {
    return EDIT_MANAGER_BRANCH(id);
  }
);
export const createBranch = createAsyncThunk(
  "create_branch/createBranch",
  (data) => {
  return  CREATE_BRANCH(data);
  }
);
export const createSession = createAsyncThunk(
  "create_branch/createSession",
  (data) => {
  return  CREATE_SESSION(data);
  }
);
export const createEmployee = createAsyncThunk(
  "create_branch/createEmployee",
  (data) => {
   return CREATE_EMPLOYEE(data);
  }
);
export const createManager = createAsyncThunk(
  "create_branch/createManager",
  (data) => {
   return CREATE_MANAGER(data);
  }
);
export const editBranch = createAsyncThunk(
  "create_branch/editBranch",
  (data) => {
  return  EDIT_BRANCH(data);
  }
);
export const editSession = createAsyncThunk(
  "create_branch/editSession",
  (data) => {
   return EDIT_SESSION(data);
  }
);
export const editEmployee = createAsyncThunk(
  "create_branch/editEmployee",
  (data) => {
  return  EDIT_EMPLOYEE(data);
  }
);
export const addRegion2Branch = createAsyncThunk(
  "create_branch/addRegion2Branch",
  (data) => {
    ADD_REGION_TO_BRANCH_(data);
  }
);
export const addEmployee2Branch = createAsyncThunk(
  "create_branch/addEmployee2Branch",
  (data) => {
    ADD_EMPLOYEE_TO_BRANCH(data);
  }
);
export const addSession2Branch = createAsyncThunk(
  "create_branch/addSession2Branch",
  (data) => {
    ADD_SESSION_TO_BRANCH(data);
  }
);
export const addSession2Employee = createAsyncThunk(
  "create_branch/addSession2Employee",
  (data) => {
    ADD_SESSION_TO_EMPLOYEE(data);
  }
);

export const slice_branches = createSlice({
  name: "getBranches",
  initialState: {
    data: [],
    employees:[],
    sessions:[],
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
        label: "الاسم",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "regions",
        label: "المكان",
        _props: { scope: "col", className: " w-25" },
      },
      {
        key: "sessions",
        label: "الاقسام",
        _props: { scope: "col", className: " w-25" },
      },
      // {
      //   key: "manager",
      //   label: "المدير",
      //   _props: { scope: "col", className: " w-25" },
      // },
    ],
    columns_sessions: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col", className: " w-25" },
      },
      {
        key: "name",
        label: "الاسم",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "employees",
        label: "الموظفين",
        _props: { scope: "col", className: "  w-25" },
      },
    ],
    columns_employee: [
      {
        key: "action",
        label: "الاحداث",
        _props: { scope: "col", className: " w-25" },
      },
      {
        key: "full_name",
        label: "الاسم",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "phone",
        label: "الرقم",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "birth_date",
        label: "تاريخ الميلاد",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "email",
        label: "الايميل",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "role",
        label: "الصلاحيات",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "address",
        label: "العنوان",
        _props: { scope: "col", className: "  w-25" },
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
      .addCase(get_branches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_branches.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(get_branches.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(get_employee.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_employee.fulfilled, (state, action) => {
        state.employees = action.payload;
        state.loading = false;
      })
      .addCase(get_employee.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(get_session.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_session.fulfilled, (state, action) => {
        state.sessions = action.payload;
        state.loading = false;
      })
      .addCase(get_session.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});
export const slice_manager = createSlice({
  name: "getManager",
  initialState: {
    data: [],
    branches:{},
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
        key: "full_name",
        label: "الاسم",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "phone",
        label: "الرقم",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "branches",
        label: "الفرع",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "birth_date",
        label: "تاريخ الميلاد",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "email",
        label: "الايميل",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "role",
        label: "الصلاحيات",
        _props: { scope: "col", className: "  w-25" },
      },
      {
        key: "address",
        label: "العنوان",
        _props: { scope: "col", className: "  w-25" },
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
      .addCase(get_manager.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(get_manager.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(get_manager.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      
});
///////////////
export const slice_create_branch = createSlice({
  name: "create_branch",
  initialState: {
    data: [],
    msg: "",
    loading: false,
    error: false,
    formData: {
      first_name: "",
      name: "",
      region_id: "",
      employee_id:'',
      session_id:'',
      governorate_id:'',
      town_id:'',
      email:'',
      phone:'',
      birth_date:'',
      last_name:'',
      father_name:'',
      full_name:'',
      permissions:[],
      branch_id:'',
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createBranch.pending, (state) => {
        state.loading = true;
      })

      .addCase(createBranch.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg;
        console.log(' state.msg ', state.msg )
        state.loading = false;
        state.msg = action.payload;
      })

      .addCase(createBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.payload;
      })
      .addCase(createSession.pending, (state) => {
        state.loading = true;
      })

      .addCase(createSession.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg;
        console.log(' state.msg ', state.msg )
        state.loading = false;
        state.msg = action.payload;
      })

      .addCase(createSession.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.payload;
      })
      .addCase(editBranch.pending, (state) => {
        state.loading = true;
      })

      .addCase(editBranch.fulfilled, (state, action) => {
        state.data = action.payload;
        state.msg = action.payload.data.msg;
        console.log(' state.msg ', state.msg )
        state.loading = false;
        state.msg = action.payload;
      })

      .addCase(editBranch.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.payload;
      })
      .addCase(createEmployee.pending, (state) => {
        state.loading = true;
      })

      .addCase(createEmployee.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.msg = action.payload;
      })

      .addCase(createEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.payload;
      })
      .addCase(createManager.pending, (state) => {
        state.loading = true;
      })

      .addCase(createManager.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.msg = action.payload;
      })

      .addCase(createManager.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.msg = action.payload;
      }),
  reducers: {
    setData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetData: (state) => {
      state.formData = { name: "", region_id: "" };
    },
  },
});
// export const slice_create_manager = createSlice({
//   name: "create_manager",
//   initialState: {
//     data: [],
//     msg: "",
//     loading: false,
//     error: false,
//     formData: {
//       first_name: "",
//       name: "",
//       region_id: "",
//       employee_id:'',
//       session_id:'',
//       governorate_id:'',
//       town_id:'',
//       email:'',
//       phone:'',
//       birth_date:'',
//       last_name:'',
//       father_name:'',
//       full_name:'',
//       permissions:[],

//     },
//   },
//   extraReducers: (builder) =>
//     builder
//       .addCase(createBranch.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(createBranch.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.msg = action.payload.data.msg;
//         console.log(' state.msg ', state.msg )
//         state.loading = false;
//         state.msg = action.payload;
//       })

//       .addCase(createBranch.rejected, (state, action) => {
//         state.loading = false;
//         state.error = true;
//         state.msg = action.payload;
//       })

//       .addCase(editBranch.pending, (state) => {
//         state.loading = true;
//       })

//       .addCase(editBranch.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.msg = action.payload.data.msg;
//         console.log(' state.msg ', state.msg )
//         state.loading = false;
//         state.msg = action.payload;
//       })

//       .addCase(editBranch.rejected, (state, action) => {
//         state.loading = false;
//         state.error = true;
//         state.msg = action.payload;
//       })

//   reducers: {
//     setData: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     resetData: (state) => {
//       state.formData = { name: "", region_id: "" };
//     },
//   },
// });
export const { setData, resetData } = slice_create_branch.actions;

const rootBranhesReducer = combineReducers({
  branches: slice_branches.reducer,
  managers: slice_manager.reducer,
  create_branch: slice_create_branch.reducer,
});

export default rootBranhesReducer;
