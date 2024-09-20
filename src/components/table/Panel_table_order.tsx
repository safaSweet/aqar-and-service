
// import { CBadge, CContainer, CForm, CFormInput } from '@coreui/react'
// import Order_table from './Order_table'
// import * as icon from "@coreui/icons";
// import CIcon from "@coreui/icons-react";
// import Order_service from '../../modules/Pages/orders/service/Order_service';
// import Index from '../../modules/Pages/orders/Index';
import OrderService from '../order/OrderService';

function Panel_table_order() {

  return (
    <div className=' p-2'>
      <OrderService/>
    </div>)
}

export default Panel_table_order
