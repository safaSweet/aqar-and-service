import { Link, useLocation } from "react-router-dom";
import { CSidebar, CSidebarHeader, CSidebarNav, CNavItem } from "@coreui/react";
import DropDown from "./Drop_down_sidebar";
import Cookie from "cookie-universal";

const Sidebar = () => {
  const location = useLocation();
  const style_Sidebar = {
    backgroundColor: "#1B4963",
    position: "fixed",
    height: "100%",
    width: "160px",
    zIndex: "1000",
    right: 0,
    top: 0,
    padding: "5px",
  };
  const cookie = Cookie();
  const role = cookie.get("role");
  const isActive = (itemLink) => {
    return itemLink === location.pathname;
  };

  const items = [
    {
      title: "لوحة التحكم",
      icon: "",
      link: "/",
      align: "end",
      can: true, // Replace with your authentication logic
    },
    {
      title: "الطلبات",
      icon: "",
      link: "/orders",
      align: "end",
      can: true, // Replace with your authentication logic
    },

    {
      title: "العقارات",
      icon: "",
      link: "/selling-property",
      align: "end",
      can: true,
    },

    {
      title: " الخدمات",
      icon: "",
      link: "/services",
      align: "end",
      can: true,
    },
    {
      title: "المشاريع ",
      icon: "",
      link: "/projects",
      align: "end",
      can: role === "Super_Admin",
    },
    {
      title: " الافرع",
      icon: "",
      link: "/branches",
      align: "end",
      can: role === "Super_Admin",
    },
    {
      title: "المدراء ",
      icon: "",
      link: "/managers",
      align: "end",
      can: role === "Super_Admin",
    },
  ];

  const computedItems = items.filter((item) => item.can);

  return (
    <>
      <CSidebar style={style_Sidebar}>
        <CSidebarHeader className="border-bottom mb-5">
          <img
            src={require("../../assets/AQAR&SERVICE-1.png")}
            alt=".."
            width="80%"
          />
        </CSidebarHeader>
        <CSidebarNav>
          {computedItems.map((item, index) => (
            <CNavItem
              key={index}
              className={
                isActive(item.link) ? "text-primary bg-grey-3" : " mb-3 mt-2"
              }
            >
              <p style={{ textAlign: item.align }}>
                <Link to={item.link}>
                  {item.icon && <i className={item.icon}></i>}
                  {item.title}
                </Link>
              </p>
            </CNavItem>
          ))}
          <DropDown
            title="الاعدادات"
            item1="تغيير كلمة السر"
            item2="تسجيل الخروج"
            // item3="اعدادات النظام"
            item3={role === "Super_Admin" ? "اعدادات النظام" : null}
            // item4=""
          />
        </CSidebarNav>
      </CSidebar>
    </>
  );
};

export default Sidebar;
