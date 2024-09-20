import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CFormSelect } from "@coreui/react";
import { get_branches, setData } from "../../modules/Pages/Management/branchs/Store";

const Select_branch = () => {
  const dispatch = useDispatch();

  const branches = useSelector(
    (state) =>state.branches.branches.data?.data?.branches||[]
  );console.log('emp',branches)
  
  useEffect(() => {
    dispatch(get_branches());
  }, [dispatch]);


  const handleBranchChange = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };
 
  const branchesOptions = branches.map((branch) => ({
    label: branch.name,
    value: branch.id,
  }));

  return (
    <>
        <CFormSelect
          options={branchesOptions}
          name="branch_id"
          onChange={handleBranchChange}
          required
        />
      
    
    </>
  );
};

export default Select_branch;
