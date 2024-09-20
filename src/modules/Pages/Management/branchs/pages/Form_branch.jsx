import Button from "../../../../../components/basics/Button";
import { createBranch, editBranch, resetData, setData } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import { CCol, CForm, CFormInput, CRow } from "@coreui/react";
import Select_region from "../../../../../components/selects_input/Select_region";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Toast from "../../../../../messages/Toast";
import { useState } from "react";

function Form_branch() {
  const {id}=useParams()
  const id_parse = parseInt(id, 10);
  const navigate=useNavigate()
  const [toastVisible, setToastVisible] = useState(false);
  const branches = useSelector(
    (state) => state.branches.branches.data?.data?.branches.find(branch=>branch.id===id_parse)
  );
  const { formData,loading } = useSelector((state) => state.branches.create_branch);
  const {msg,status}= useSelector((state) => state.branches.create_branch.data.data||'');
   
  const dispatch = useDispatch()
  const handler_change = (e) => {
    dispatch(setData({ [e.target.name]: e.target.value }));
  };
  console.log('mmmmm',msg)
  
  useEffect(() => {
    if (id_parse && branches) {
      dispatch(setData(branches));
    } else {
      dispatch(resetData());
    }
  }, [id_parse, branches, dispatch]);
  console.log('99999',branches);

  const handlerSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("region_id", formData.region_id);
    if(id_parse)
     { data.append("id",id);
      dispatch(editBranch(data));}
      else
      dispatch(createBranch(data))
      setToastVisible(true);

      setTimeout(() => {
        // status==='true'&&
         navigate("/branches");
      }, 3000);
  };

  return (
    <>
      <CForm onSubmit={handlerSubmit}>
        <CRow>
          <CCol xs="6">
            <CFormInput
              type="text"
              placeholder="الاسم"
              name="name"
              onChange={handler_change}
              required={!id}
              value={formData.name||[]}
            />
          </CCol>
          <CCol xs="6">
            <Select_region id={id} />
          </CCol>
        </CRow>
        <Button name="حفظ" type="submit" load={loading} />
        {toastVisible && msg !== undefined && (
          <Toast text={msg} color='secondary' />
        )}
      </CForm>
    </>
  );
  // {status.status ? "success" : "danger"}
}

export default Form_branch;
