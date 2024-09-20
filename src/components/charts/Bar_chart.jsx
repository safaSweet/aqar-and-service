

import { useState } from "react";
import { CChart } from "@coreui/react-chartjs";
import ModalAdd from "../basics/Modal_add";
import * as icon from "@coreui/icons";
import { useSelector } from "react-redux";
import {
  CCol,
  CFormSelect,
  CRow,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CCard,
  CCardHeader,
  CCardBody
} from "@coreui/react";

function Bar_chart() {
  const { data, status_statistics, type_statistics } = useSelector(
    (state) => state.charts?.getCharts
  );
  const fake=
    [{name: "مستودع", count: 1, sum_Price: 463000000, avg_Price: 463000000, max_Price: 463000000,}]
  
  const [selectedMetric, setSelectedMetric] = useState("count");

  // const extractNames = (arr) => arr.map((item) => item.name).join(", ");

  const labels = data.map((item) => item.name);
  const countValues = data.map((item) => item.count);

  const shouldIncludeMinMaxProviders = !(status_statistics === 'Negative' && type_statistics === 'services');

  const otherValues = data.map((item) => {
    const metricValue = item[selectedMetric];
    
    if (!shouldIncludeMinMaxProviders && (selectedMetric === "max_three_providers" || selectedMetric === "min_three_providers")) {
      return 0;
    }

    if (metricValue && Array.isArray(metricValue) && (selectedMetric === "max_three_providers" || selectedMetric === "min_three_providers")) {
      return metricValue.length;
    } else {
      return metricValue || 0;
    }
  });

  // قائمة الألوان المختلفة لاستخدامها في المخططات
  const chartColors = [
     '#EEB51A', '#1B4963', '#82E118'
    , '#EEB63B', '#82E227','#82E216','#1B4948',
  ];

  return (
    <>
      <CRow className="mt-5 justify-content-around container mb-5">
        <CCol xs="7">
          <div className="d-flex justify-content-between">
            <ModalAdd
              title="اضافة البيانات"
              icons={icon.cilChart}
              type="charts"
            />

            <CFormSelect
              className="w-25"
              onChange={(e) => setSelectedMetric(e.target.value)}
              value={selectedMetric}
            >
              <option value="count">Count</option>
              {type_statistics === "services" ? (
                <>
                  <option value="sum_counter_call">sum counter call</option>
                  {shouldIncludeMinMaxProviders && (
                    <>
                      <option value="max_three_providers">max three providers</option>
                      <option value="min_three_providers">min three providers</option>
                    </>
                  )}
                </>
              ) : (
                <>
                  <option value="sum_Price">مجموع الأسعار</option>
                  <option value="avg_Price">متوسط الأسعار</option>
                  <option value="max_Price">أقصى سعر</option>
                  <option value="minn_Price">أقل سعر</option>
                  <option value="avgArea">متوسط المساحة</option>
                  <option value="max_Area">أكبر مساحة</option>
                  <option value="minn_Area">اصغر مساحة</option>
                </>
              )}
            </CFormSelect>
          </div>
          <CChart
            type="line"
            data={{
              labels: labels,
              datasets: [
                {
                  label: "Count",
                  backgroundColor: chartColors[0],
                  borderColor: chartColors[0],
                  data: countValues,
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "black",
                  },
                },
              },
              scales: {
                x: {
                  grid: {
                    color: "#1B4963",
                  },
                  ticks: {
                    color: "blue",
                  },
                },
                y: {
                  grid: {
                    color: "#1B4963",
                  },
                  ticks: {
                    color: "#1B4963",
                  },
                },
              },
            }}
          />
        </CCol>
        <CCol xs="4">
          {selectedMetric === "max_three_providers" || selectedMetric === "min_three_providers" ? (
            <CCard>
              <CCardHeader className="bg-primary text-white">
                {selectedMetric === "max_three_providers" ? "Top 3 Providers" : "Bottom 3 Providers"}
              </CCardHeader>
              <CCardBody>
                <CTable hover striped bordered>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Item Name</CTableHeaderCell>
                      <CTableHeaderCell>Providers</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {data.map((item, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>{item.name}</CTableDataCell>
                        <CTableDataCell>
                          {item[selectedMetric]
                            ? item[selectedMetric].map((provider) => provider.name).join(", ")
                            : "N/A"}
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          ) : (
            <CChart
              type="doughnut"
              data={{
                labels: labels,
                datasets: [
                  {
                    label:
                      selectedMetric === "sum_Price"
                        ? "Sum Price"
                        : selectedMetric === "avg_Price"
                        ? "Avg Price"
                        : selectedMetric === "max_Price"
                        ? "Max Price"
                        : selectedMetric === "minn_Price"
                        ? "Min Price"
                        : selectedMetric === "avgArea"
                        ? "Avg Area"
                        : selectedMetric === "sum_counter_call"
                        ? "sum counter call"
                        : selectedMetric === "max_Area"
                        ? "Max Area"
                        : "Min Area",
                    backgroundColor: chartColors, // استخدام الألوان المختلفة
                    data: otherValues,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      color: "black",
                    },
                  },
                },
              }}
            />
          )}
        </CCol>
      </CRow>
    </>
  );
}

export default Bar_chart;
// ظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظظ
// import { useState, useEffect } from "react";
// import { CChart } from "@coreui/react-chartjs";
// import ModalAdd from "../basics/Modal_add";
// import * as icon from "@coreui/icons";
// import { useSelector } from "react-redux";
// import {
//   CCol,
//   CFormSelect,
//   CRow,
//   CTable,
//   CTableHead,
//   CTableRow,
//   CTableHeaderCell,
//   CTableBody,
//   CTableDataCell,
//   CCard,
//   CCardHeader,
//   CCardBody
// } from "@coreui/react";

// function Bar_chart() {
//   const { data, status_statistics, type_statistics } = useSelector(
//     (state) => state.charts?.getCharts
//   );

//   const fakeData = [
//     { name: "مستودع", count: 1, sum_Price: 463000000, avg_Price: 463000000, max_Price: 463000000 }
//   ];

//   const [selectedMetric, setSelectedMetric] = useState("count");
//   const [chartData, setChartData] = useState(data.length ? data : fakeData);

//   useEffect(() => {
//     // Update chartData when data is available or changes
//     if (data && data.length > 0) {
//       setChartData(data);
//     } else {
//       setChartData(fakeData);
//     }
//   }, [data]);

//   const labels = chartData.map((item) => item.name);
//   const countValues = chartData.map((item) => item.count);

//   const shouldIncludeMinMaxProviders = !(status_statistics === 'Negative' && type_statistics === 'services');

//   const otherValues = chartData.map((item) => {
//     const metricValue = item[selectedMetric];
    
//     if (!shouldIncludeMinMaxProviders && (selectedMetric === "max_three_providers" || selectedMetric === "min_three_providers")) {
//       return 0;
//     }

//     if (metricValue && Array.isArray(metricValue) && (selectedMetric === "max_three_providers" || selectedMetric === "min_three_providers")) {
//       return metricValue.length;
//     } else {
//       return metricValue || 0;
//     }
//   });

//   const chartColors = [
//      '#EEB51A', '#1B4963', '#82E118',
//      '#EEB63B', '#82E227','#82E216','#1B4948',
//   ];

//   return (
//     <>
//       <CRow className="mt-5 justify-content-around container mb-5">
//         <CCol xs="7">
//           <div className="d-flex justify-content-between">
//             <ModalAdd
//               title="اضافة البيانات"
//               icons={icon.cilChart}
//               type="charts"
//             />

//             <CFormSelect
//               className="w-25"
//               onChange={(e) => setSelectedMetric(e.target.value)}
//               value={selectedMetric}
//             >
//               <option value="count">Count</option>
//               {type_statistics === "services" ? (
//                 <>
//                   <option value="sum_counter_call">sum counter call</option>
//                   {shouldIncludeMinMaxProviders && (
//                     <>
//                       <option value="max_three_providers">max three providers</option>
//                       <option value="min_three_providers">min three providers</option>
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <>
//                   <option value="sum_Price">مجموع الأسعار</option>
//                   <option value="avg_Price">متوسط الأسعار</option>
//                   <option value="max_Price">أقصى سعر</option>
//                   <option value="minn_Price">أقل سعر</option>
//                   <option value="avgArea">متوسط المساحة</option>
//                   <option value="max_Area">أكبر مساحة</option>
//                   <option value="minn_Area">اصغر مساحة</option>
//                 </>
//               )}
//             </CFormSelect>
//           </div>
//           <CChart
//             type="line"
//             data={{
//               labels: labels,
//               datasets: [
//                 {
//                   label: "Count",
//                   backgroundColor: chartColors[0],
//                   borderColor: chartColors[0],
//                   data: countValues,
//                 },
//               ],
//             }}
//             options={{
//               plugins: {
//                 legend: {
//                   labels: {
//                     color: "black",
//                   },
//                 },
//               },
//               scales: {
//                 x: {
//                   grid: {
//                     color: "#1B4963",
//                   },
//                   ticks: {
//                     color: "blue",
//                   },
//                 },
//                 y: {
//                   grid: {
//                     color: "#1B4963",
//                   },
//                   ticks: {
//                     color: "#1B4963",
//                   },
//                 },
//               },
//             }}
//           />
//         </CCol>
//         <CCol xs="4">
//           {selectedMetric === "max_three_providers" || selectedMetric === "min_three_providers" ? (
//             <CCard>
//               <CCardHeader className="bg-primary text-white">
//                 {selectedMetric === "max_three_providers" ? "Top 3 Providers" : "Bottom 3 Providers"}
//               </CCardHeader>
//               <CCardBody>
//                 <CTable hover striped bordered>
//                   <CTableHead>
//                     <CTableRow>
//                       <CTableHeaderCell>Item Name</CTableHeaderCell>
//                       <CTableHeaderCell>Providers</CTableHeaderCell>
//                     </CTableRow>
//                   </CTableHead>
//                   <CTableBody>
//                     {chartData.map((item, index) => (
//                       <CTableRow key={index}>
//                         <CTableDataCell>{item.name}</CTableDataCell>
//                         <CTableDataCell>
//                           {item[selectedMetric]
//                             ? item[selectedMetric].map((provider) => provider.name).join(", ")
//                             : "N/A"}
//                         </CTableDataCell>
//                       </CTableRow>
//                     ))}
//                   </CTableBody>
//                 </CTable>
//               </CCardBody>
//             </CCard>
//           ) : (
//             <CChart
//               type="doughnut"
//               data={{
//                 labels: labels,
//                 datasets: [
//                   {
//                     label:
//                       selectedMetric === "sum_Price"
//                         ? "Sum Price"
//                         : selectedMetric === "avg_Price"
//                         ? "Avg Price"
//                         : selectedMetric === "max_Price"
//                         ? "Max Price"
//                         : selectedMetric === "minn_Price"
//                         ? "Min Price"
//                         : selectedMetric === "avgArea"
//                         ? "Avg Area"
//                         : selectedMetric === "sum_counter_call"
//                         ? "sum counter call"
//                         : selectedMetric === "max_Area"
//                         ? "Max Area"
//                         : "Min Area",
//                     backgroundColor: chartColors, // استخدام الألوان المختلفة
//                     data: otherValues,
//                   },
//                 ],
//               }}
//               options={{
//                 plugins: {
//                   legend: {
//                     labels: {
//                       color: "black",
//                     },
//                   },
//                 },
//               }}
//             />
//           )}
//         </CCol>
//       </CRow>
//     </>
//   );
// }

// export default Bar_chart;
