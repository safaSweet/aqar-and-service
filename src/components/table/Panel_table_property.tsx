import React, { useState } from 'react';
import Selling_table from '../../modules/Pages/properties/selling_rentting/pages/Selling_table';
import Rent_table from './Rent_table';
import { CButton, CCard, CCol, CContainer, CRow } from '@coreui/react';
import Project_table from '../../modules/Pages/projects/pages/Project_table';
import Service_table from '../../modules/Pages/application_services/categories/pages/Service_table';
import Clothing_table from './Clothing_table';
import Table_branch from '../../modules/Pages/Management/branchs/pages/Table_branch';

function Panel_table() {
  const [showSelling, setShowSelling] = useState(false);

  const handleShowSelling = () => {
    setShowSelling(true);
  };

  const handleShowRent = () => {
    setShowSelling(false);
  };
  const [activeTab, setActiveTab] = useState('بيع');
  return (
    <>

      <CContainer className=' bg-white'>
        <div className='d-flex p-2 justify-content-around'>
          <CButton color="secondary" variant="ghost" onClick={() => setActiveTab('بيع')}>عقارات</CButton>
          <CButton color="secondary" variant="ghost" onClick={() => setActiveTab('ايجار')}>الافرع</CButton>
          <CButton color="secondary" variant="ghost" onClick={() => setActiveTab('مشاريع')}>مشاريع</CButton>
          <CButton color="secondary" variant="ghost" onClick={() => setActiveTab('خدمات')}>خدمات</CButton>
          {/* <CButton color="secondary" variant="ghost" onClick={() => setActiveTab('اكساء')}>اكساء</CButton> */}
        </div>
        <div className=' overflow-scroll'>
          {activeTab === 'بيع' && <Selling_table />}
          {activeTab === 'ايجار' && <Table_branch />}
          {activeTab === 'مشاريع' && <Project_table />}
          {activeTab === 'خدمات' && <Service_table />}
          {/* {activeTab === 'اكساء' && <Clothing_table />} */}
        </div>
      </CContainer>
    </>
  )
}

export default Panel_table