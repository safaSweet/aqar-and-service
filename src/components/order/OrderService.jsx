import {
  CCardText,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import { useState } from "react";
import Order_service from "../../modules/Pages/orders/service/Order_service";
import Request_properties from "../../modules/Pages/orders/property/Request_properties";
import Clothing_request from "../../modules/Pages/orders/clothing/Clothing_request";
import Order_service_provider from "../../modules/Pages/orders/service/Order_service_provider";
import Request_obration from "../../modules/Pages/orders/property/Request_obration";

function OrderService() {
  const [activeTab, setActiveTab] = useState("عقارات");
  return (
    <>
      <div className="selling">
        <CDropdown>
          <CDropdownToggle style={{ backgroundColor: "#82E118" }}>
            نوع الطلب
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem onClick={() => setActiveTab("خدمات")}>
              الخدمات
            </CDropdownItem>
            <CDropdownItem onClick={() => setActiveTab("اكساء")}>
              الاكساء
            </CDropdownItem>
            <CDropdownItem onClick={() => setActiveTab("عقارات")}>
              العقارات
            </CDropdownItem>
            <CDropdownItem onClick={() => setActiveTab("مقدم_خدمة")}>
              مقدمين الخدمات
            </CDropdownItem>
            <CDropdownItem onClick={() => setActiveTab("شراء")}>
              شراء
            </CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CCardText className=" fs-4">الطلبات</CCardText>
      </div>

    <div className=' overflow-scroll'>
    {activeTab === "خدمات" && <Order_service />}
      {activeTab === "عقارات" && <Request_properties />}
      {activeTab === "اكساء" && <Clothing_request />}
      {activeTab === "شراء" && <Request_obration />}
      {activeTab === "مقدم_خدمة" && <Order_service_provider />}
    </div>
    </>
  );
}

export default OrderService;
