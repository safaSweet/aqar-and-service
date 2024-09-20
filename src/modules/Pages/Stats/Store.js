import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CHARTS, NUMBERS } from "./Service";


export const get_charts = createAsyncThunk(
    "charts/get_charts",
    (data) => {
     return CHARTS(data);
    }
  );
export const get_numbers = createAsyncThunk(
    "charts/get_numbers",
    () => {
     return NUMBERS();
    }
  );

export const slice_charts = createSlice({
    name: "charts",
    initialState: {
      data: [],
      numbers:[],
      type_statistics:'',
      loading: false,
      msg:'',
      error: null,
      formDataCharts: {
        object: "",
        type_publication: "",
        status: 0,
        start_date: "",
        end_date: "",
        governorateId: "",
        regionId: "",
        townId: "",
      },
    },
    reducers: {
      setDataCharts: (state, action) => {
        state.formDataCharts = { ...state.formDataCharts, ...action.payload };
      },
     
    },
  
    extraReducers: (builder) =>
      builder
        .addCase(get_charts.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(get_charts.fulfilled, (state, action) => {
          state.data = action.payload.data.statistics.statistics;
          state.msg = action.payload.data.msg
          state.type_statistics= action.payload.data.statistics.type_statistics
          console.log('5555555555',state.type_statistics)
          state.loading = false;
        })
        .addCase(get_charts.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(get_numbers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(get_numbers.fulfilled, (state, action) => {
          state.numbers = action.payload.data.statistics
          
                  // console.log('numbers: ',state.numbers)
          state.loading = false;
        })
        .addCase(get_numbers.rejected, (state) => {
          state.loading = false;
          state.error = true;
        }),
  });
  export const{setDataCharts}=slice_charts.actions;


  const rootReduceCharts=combineReducers({
    getCharts:slice_charts.reducer,
  });

  export default rootReduceCharts;