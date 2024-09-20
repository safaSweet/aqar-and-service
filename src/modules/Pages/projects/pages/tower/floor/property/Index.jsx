
import { useParams } from 'react-router-dom';
import Properties_table from './Properties_table';
import PageTable from '../../../../../../../components/table/PageTable';

function Index() {
  const { idTower } = useParams();
  return (
     <PageTable
        link={"/create-property-floor/"+idTower}
        search=""
        link_search=''
        add="إضافة عقار"
        title="العقارات"
        table={<Properties_table />
        }
      />
  )
}
export default Index