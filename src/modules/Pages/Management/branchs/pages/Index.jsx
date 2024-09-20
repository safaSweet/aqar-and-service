import React from "react";
import PageTable from "../../../../../components/table/PageTable";
import TableBranch from "./Table_branch";

function Index() {
  return (
    <>
      <PageTable
        link_search=""
        search=""
        link="/create-branch"
        add="إضافة فرع"
        title="الافرع"
        table={<TableBranch />}
      />
    </>
  );
}

export default Index;
