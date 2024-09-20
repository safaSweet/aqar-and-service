import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  get_session,
  setData,
} from "../../modules/Pages/Management/branchs/Store";
import { CFormSelect } from "@coreui/react";
const Select_session = () => {
  const dispatch = useDispatch();

  const employees = useSelector(
    (state) => state.branches.branches.sessions.data?.sessions || []
  );
  console.log("sess", employees);
  // const regions =
  //    address.regions?.data?.Regions || []

  useEffect(() => {
    dispatch(get_session());
  }, [dispatch]);

  const handleRegionChange = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };

    const employeesOptions = employees.map((region) => ({
      label: region.name,
      value: region.id,
    }));

  return (
    <>
      {/* <CFormSelect
          options={employeesOptions}
          name="session_id"
          onChange={handleRegionChange}
          required
        /> */}
        <CFormSelect name="session_id" onChange={handleRegionChange} required>
      <option value="" >
        اختر ما يناسبك
      </option>
      {employees.map((region) => (
        <option key={region.id} value={region.id}>
          {region.name}
        </option>
      ))}
    </CFormSelect>
    </>
  );
};

export default Select_session;
