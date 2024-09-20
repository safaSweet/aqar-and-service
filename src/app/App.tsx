//material ui
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//
import '@coreui/coreui/dist/css/coreui.min.css'
import '../css/App.css';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router-dom';
import Index from '../modules/controle_panel/Index';
import IndexBranch from '../modules/Pages/Management/branchs/pages/Index';
import IndexSessions from '../modules/Pages/Management/sessions/pages/Index';

import IndexSelling from '../modules/Pages/properties/selling_rentting/pages/Index';
import IndexOrder from '../modules/Pages/orders/Index';
import IndexProject from '../modules/Pages/projects/pages/Index';
import RequireAuth from '../modules/Auth/RequireAuth';
import LoginAdmin from '../modules/Auth/pages/Login';
import CreateUpdateSelling from '../modules/Pages/properties/selling_rentting/pages/Create_update';
import Profie from '../modules/Auth/pages/Profie';
import IndexSpecifications from '../modules/properties_specifications/Index';
import IndexServices from '../modules/Pages/application_services/categories/pages/Index'
import CreateUpdateServices from '../modules/Pages/application_services/categories/pages/Create_update'
import UpdateServices from '../modules/Pages/application_services/categories/pages/Update'
import IndexServiceProviders from '../modules/Pages/application_services/service_providers/pages/Index'
import CreateServiceProvider from '../modules/Pages/application_services/service_providers/pages/Create'
import UpdateServiceProvider from '../modules/Pages/application_services/service_providers/pages/Update'
import SearchProperty from '../modules/Pages/properties/selling_rentting/pages/SearchProperty';
import Create_update_project from '../modules/Pages/projects/pages/Create_update';
import IndexTower from '../modules/Pages/projects/pages/tower/Index';
import CREATETower from '../modules/Pages/projects/pages/tower/Create_update';
import IndexFloor from '../modules/Pages/projects/pages/tower/floor/Index';
import CreateFloor from '../modules/Pages/projects/pages/tower/floor/Create_update';
import IndexFloorProperty from '../modules/Pages/projects/pages/tower/floor/property/Index';
import CreateFloorProperty from '../modules/Pages/projects/pages/tower/floor/property/Create_update';
import Search from '../modules/Pages/projects/pages/tower/floor/property/Search';
import Provider_Accepte from '../modules/Pages/application_services/service_providers/pages/Provider_Accepte';
import Create_update_branch from '../modules/Pages/Management/branchs/pages/Create_update';
import Create_update_session from '../modules/Pages/Management/sessions/pages/CreateUpdate';
import Create_update_employee from '../modules/Pages/Management/employees/pages/CreateUpdate';
import IndexEmployee from '../modules/Pages/Management/employees/pages/Index';
import IndexManager from '../modules/Pages/Management/manager/pages/Index';
import Create_update_manager from '../modules/Pages/Management/manager/pages/CreateUpdate';
import IndexSearch from '../modules/Pages/properties/selling_rentting/pages/IndexSearch';
// import InfoProvider from '../modules/Pages/orders/service/InfoProvider_add';
import InfoProvider_add from '../modules/Pages/orders/service/InfoProvider_add';
import InfoProvider_edit from '../modules/Pages/orders/service/InfoProvider_edit';
import Index_notification from '../modules/notifications/pages/Index';
import Create_update_notification from '../modules/notifications/pages/Create_update';
import Index_search from '../modules/Pages/orders/search/Index';
import Create_search from '../modules/Pages/orders/search/CreateSearch';

// import Create_update_session from '../modules/Pages/Management/sessions/pages/';

function App() {
  return (
    <>
      <Routes>

        <Route path='/login' element={<LoginAdmin />} />

        <Route element={<RequireAuth />}>

          <Route element={<HomePage />}>

            <Route path='/' element={<Index />} />

            {/* services category*/}
            <Route path='/services' element={<IndexServices />} />
            <Route path='/add-services' element={<CreateUpdateServices />} />
            <Route path='/edit-services/:id' element={<UpdateServices />} />

            {/* services provider*/}
            <Route path='/service-providers/:id' element={<IndexServiceProviders />} />
            <Route path='/service-providers-add-info/:id?' element={<InfoProvider_add />} />
            <Route path='/service-providers-edit-info/:id?' element={<InfoProvider_edit />} />
            <Route path='/service-provider-accepte' element={<Provider_Accepte />} />
            <Route path='/add-service-provider/:id/:idProvider?' element={<CreateServiceProvider />} />
            <Route path='/edit-services-provider/:id' element={<UpdateServiceProvider />} />

            {/* Selling */}
            <Route path='/selling-property' element={<IndexSelling />} />
            <Route path='/selling-property-search' element={<IndexSearch />} />
            <Route path='/create-selling-property/:id?' element={<CreateUpdateSelling />} />
            <Route path='/property-search' element={<SearchProperty />} />

            {/* orders */}
            <Route path='/orders' element={<IndexOrder />} />
            <Route path='/search-request' element={<Index_search />} />
            <Route path='/add-search-request' element={<Create_search />} />



            {/* projects */}
            <Route path='/projects' element={<IndexProject />} />
            <Route path='/create-project/:id?' element={<Create_update_project />} />
            <Route path='/towers/:id' element={<IndexTower />} />
            <Route path='/create-tower/:idProject/:idTower?' element={<CREATETower />} />
            <Route path='/floors/:id' element={<IndexFloor />} />
            <Route path='/create-floor/:idTower/:idFloor?' element={<CreateFloor />} />
            <Route path='/properties-floor-status' element={<Search />} />
            <Route path='/properties-floor/:idTower/:numberFloor' element={<IndexFloorProperty />} />
            <Route path='/create-property-floor/:idTower/:idProperty?' element={<CreateFloorProperty />} />


            {/* Management */}
            <Route path='/branches' element={<IndexBranch />} />
            <Route path='/create-branch/:id?' element={<Create_update_branch />} />
            <Route path='/create-session/:idBranch/:idSession?' element={<Create_update_session />} />
            <Route path='/create-employee/:idBranch/:idSession/:idEmployee?' element={<Create_update_employee />} />
            <Route path='/create-manager/:id?' element={<Create_update_manager />} />


            {/* notification */}
            <Route path='/notification-detail/:id' element={<Index_notification />} />
            <Route path='/create-notification' element={<Create_update_notification />} />

            <Route path='/sessions/:idBranch' element={<IndexSessions />} />
            <Route path='/employees/:idBranch/:idSession?' element={<IndexEmployee />} />
            <Route path='/managers' element={<IndexManager />} />

            {/* profile */}
            <Route path='/profile' element={<Profie />} />
            {/* cruds */}
            <Route path='/cruds' element={<IndexSpecifications />} />

          </Route>

        </Route>

      </Routes>
    </>
  );
}

export default App;
