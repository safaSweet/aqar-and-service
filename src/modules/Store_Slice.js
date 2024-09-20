import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../features/theme/ThemeSlice";
import Selling from "./Pages/properties/selling_rentting/Store";
import Order from "./Pages/orders/Store";
import slice_auth from "./Auth/Store";
import slice_auth_password from "./Auth/Store";
import slice_verify_password from "./Auth/Store";
import slice_user_info from "./Auth/Store";
import slice_properties from "./properties_specifications/Store";
import slice_get_all_room from "./properties_specifications/room_type/Store";
import rootReducerDirection from "./properties_specifications/direction/Store";
import rootReducerPublication from "./properties_specifications/publication_type/Store";
import rootReducerOwner from "./properties_specifications/owner_type/Store";
import rootReducerCladding from "./properties_specifications/cladding_level/Store";
import rootReducerCategory from "./properties_specifications/category/Store";
import rootReducerStatus from "./properties_specifications/status/Store";
import rootReducerservice_virture from "./properties_specifications/service&virtues/Store";
import rootReducerServiceCategory from "./Pages/application_services/categories/Store";
import rootReducerServiceProvider from "./Pages/application_services/service_providers/Store";
import rootReducerAddress from "./address/Store";
import rootReducerServiceRequest from "./Pages/orders/Store";
import rootReducerProperties from "./Pages/properties/selling_rentting/Store";
import rootReducerProject from "./Pages/projects/Store";
import rootBranhesReducer from "./Pages/Management/branchs/Store";
import rootReduceCharts from "./Pages/Stats/Store";
import rootReduceNotifications from "./notifications/store";
import rootReducerPledge from "./properties_specifications/pledge/Store";
import rootReducerstage from "./properties_specifications/stage/Store";
import rootReduceRole_users from "./permissions_roles/store";
export const Store = configureStore({
  reducer: {
    // managment
    branches: rootBranhesReducer,
    darkTheme: ThemeSlice,
    Auth: slice_auth,
    ChangePassword: slice_auth_password,
    VerifyPassword: slice_verify_password,
    //propertieis sp
    Selling: Selling,
    Order: Order,
    user_info: slice_user_info,
    Properties: slice_properties,
    get_room: slice_get_all_room,
    direction: rootReducerDirection,
    publication: rootReducerPublication,
    ownership: rootReducerOwner,
    cladding: rootReducerCladding,
    category: rootReducerCategory,
    status: rootReducerStatus,
    service_virture: rootReducerservice_virture,
    pledge:rootReducerPledge,
    stage:rootReducerstage,
    //address
    governorates: rootReducerAddress,

    //service category
    service_category: rootReducerServiceCategory,

    service_provider: rootReducerServiceProvider,

    //orders
    order_category_service: rootReducerServiceRequest,

    //properties
    properties: rootReducerProperties,

    // projects
    projects: rootReducerProject,

    // charts
    charts: rootReduceCharts,
    
    // notification
    notifications:rootReduceNotifications,
    role_users:rootReduceRole_users
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof Store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof Store.dispatch
