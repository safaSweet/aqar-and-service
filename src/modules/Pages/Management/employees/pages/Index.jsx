import React from "react";
import PageTable from "../../../../../components/table/PageTable";
import TableBranch from "./Table_employess";
import Table_employees from "./Table_employess";
import { useParams } from "react-router-dom";

function Index() {
  const {idBranch,idSession}=useParams()
  return (
    <>
      <PageTable
        link_search=''
        search=''
        link={"/create-employee/"+idBranch+'/'+idSession}
        add="إضافة موظف"
        title="الموظفين"
        table={<Table_employees/>}
      />
    </>
  );
}

export default Index;
