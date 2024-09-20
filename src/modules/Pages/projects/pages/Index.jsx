import { useParams } from "react-router-dom";
import PageTable from "../../../../components/table/PageTable";
import ProjectTable from "./Project_table";
function Index() {
  const { id } = useParams();
  return (
    <>
      <PageTable
        link_search=''
        link="/create-project"
        search=""
        add="إضافة مشروع"
        title=" المشاريع والعروض"
        table={<ProjectTable />}
      />
    </>
  );
}

export default Index;
