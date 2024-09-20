import React from 'react'
import PageTable from '../../../../../../components/table/PageTable'
import Floors_table from './Floors_table'
import { useParams } from 'react-router-dom';

function Index() {
  
  const { id } = useParams();
  return (
    <>
     <PageTable
        link_search=''
        link={"/create-floor/"+id}
        search=""
        add="إضافة طابق"
        title="الطوابق"
        table={<Floors_table />
        }
      /></>
  )
}

export default Index