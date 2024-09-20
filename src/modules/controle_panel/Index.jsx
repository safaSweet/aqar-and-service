// import { CCard, CCol, CRow } from "@coreui/react";
// import BoxTop from "../../components/basics/BoxTop";
// import * as icon from "@coreui/icons";
// import Bar_chart from "../../components/charts/Bar_chart";
// import Panel_table from "../../components/table/Panel_table_property";
// import Panel_table_order from "../../components/table/Panel_table_order";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { get_numbers } from "../Pages/Stats/Store";
// import Cookie from "cookie-universal";


// function Index() {
//   const cookie = Cookie();
//   const role = cookie.get("role");
//   // console.log("device", s);

//   const {
//     user_count,
//     services_count,
//     manager_count,
//     employee_count,
//     branch_count,
//   } = useSelector((state) => state.charts?.getCharts.numbers);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(get_numbers());
//   }, []);
//   return (
//     <>
//       <CCard className=" controlPanel " style={{ backgroundColor: "#fdfdfd" }}>
//         <CRow className=" justify-content-around">
        
//           <CCol xs="2">
//             <BoxTop
//               name="المستخدمين"
//               add=""
//               number={user_count}
//               icons={icon.cilPeople}
//               color="#F895CA"
//               link=""
//               addLink=""
//             />
//           </CCol>
//           <CCol xs="2">
//             <BoxTop
//               name="الخدمات"
//               add="اضافة خدمة"
//               number={services_count}
//               icons={icon.cilSettings}
//               color="#EEB51A"
//               link="/services"
//               addLink="/add-services"
//             />
//           </CCol>
         
//           <CCol xs="2">
//             <BoxTop
//               name="الافرع"
//               add="اضافة فرع"
//               number={branch_count}
//               icons={icon.cilBank}
//               color="#1B4963"
//               link="/branches"
//               addLink="/create-branch"
//             />
//           </CCol>
//           <CCol xs="2">
//             <BoxTop
//               name="المدراء"
//               add="اضافة مدير"
//               number={manager_count}
//               icons={icon.cilPeople}
//               color="#EEB51A"
//               link="/managers"
//               addLink="/create-manager"
//             />
//           </CCol>
//           <CCol xs="2">
          
//             <BoxTop
//               name="الموظفين"
//               add=""
//               number={employee_count}
//               icons={icon.cilPeople}
//               color="#82E118"
//               link=""
//               addLink=""
//             />
//           </CCol>
//         </CRow>
        
//         <Bar_chart />
       
//         <Panel_table />
        
//         <Panel_table_order />
       
//       </CCard>
//     </>
//   );
// }

// export default Index;
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظ

import { CCard, CCol, CRow } from "@coreui/react";
import BoxTop from "../../components/basics/BoxTop";
import * as icon from "@coreui/icons";
import Bar_chart from "../../components/charts/Bar_chart";
import Panel_table from "../../components/table/Panel_table_property";
import Panel_table_order from "../../components/table/Panel_table_order";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_numbers } from "../Pages/Stats/Store";
import Cookie from "cookie-universal";


function Index() {
  const cookie = Cookie();
  const role = cookie.get("role");

  const {
    user_count,
    services_count,
    manager_count,
    employee_count,
    branch_count,
  } = useSelector((state) => state.charts?.getCharts.numbers);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(get_numbers());
  }, [dispatch]);

  const boxes = [
    {
      name: "المستخدمين",
      add: "",
      number: user_count,
      icons: icon.cilPeople,
      color: "#F895CA",
      link: "",
      addLink: "",
      canShow: role === "Super_Admin" || role === "Manager",
    },
    {
      name: "الخدمات",
      add: "اضافة خدمة",
      number: services_count,
      icons: icon.cilSettings,
      color: "#EEB51A",
      link: "/services",
      addLink: "/add-services",
      canShow: role === "Super_Admin" || role === "Manager",
    },
    {
      name: "الافرع",
      add: "اضافة فرع",
      number: branch_count,
      icons: icon.cilBank,
      color: "#1B4963",
      link: "/branches",
      addLink: "/create-branch",
      canShow: role === "Super_Admin",
    },
    {
      name: "المدراء",
      add: "اضافة مدير",
      number: manager_count,
      icons: icon.cilPeople,
      color: "#EEB51A",
      link: "/managers",
      addLink: "/create-manager",
      canShow: role === "Super_Admin",
    },
    {
      name: "الموظفين",
      add: "",
      number: employee_count,
      icons: icon.cilPeople,
      color: "#82E118",
      link: "",
      addLink: "",
      canShow: role === "Super_Admin",
    },
  ];

  return (
    <>
      <CCard className=" controlPanel " style={{ backgroundColor: "#fdfdfd" }}>
        <CRow className=" justify-content-around">
          {boxes.map((box, index) => (
            box.canShow && (
              <CCol xs="2" key={index}>
                <BoxTop
                  name={box.name}
                  add={box.add}
                  number={box.number}
                  icons={box.icons}
                  color={box.color}
                  link={box.link}
                  addLink={box.addLink}
                />
              </CCol>
            )
          ))}
        </CRow>
        
        <Bar_chart />
       
        <Panel_table />
        
        <Panel_table_order />
       
      </CCard>
    </>
  );
}

export default Index;
