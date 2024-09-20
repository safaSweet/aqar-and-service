import React from "react";
import PageTable from "../../../../../components/table/PageTable";
import TableBranch from "./Table_sessions";
import { useParams } from "react-router-dom";

function Index() {
  const {idBranch}=useParams()
  return (
    <>
      <PageTable
        link_search=''
        search=''
        link={"/create-session/"+idBranch}
        add="إضافة قسم"
        title="الاقسام"
        table={<TableBranch />}
      />
    </>
  );
}

export default Index;
