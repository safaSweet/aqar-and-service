import React from "react";
import PageTable from "../../../../../components/table/PageTable";
import Table_employees from "./Table_employess";
// import { useParams } from "react-router-dom";

function Index() {
  // const {idBranch,idSession}=useParams()
  return (
    <>
      <PageTable
        link_search=''
        search=''
        link="/create-manager"
        add="إضافة مدير"
        title="المدراء"
        table={<Table_employees/>}
      />
    </>
  );
}

export default Index;
