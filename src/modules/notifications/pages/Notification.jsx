import {
  CBadge,
  CListGroup,
  CListGroupItem,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CTable,
} from "@coreui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_notification, is_read } from "../store";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useNavigate } from "react-router-dom";
function Notification() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { not_read } = useSelector(
    (state) => state.notifications.getNotifications
  );
  const { data } = useSelector(
    (state) => state.notifications.getNotifications.data
  );

  useEffect(() => {
    dispatch(get_notification());
  }, []);

  return (
    <>
      <>
        <CIcon
          icon={icon.cilBell}
          size="xl"
          style={{ marginLeft: "-350%" }}
          onClick={() => setVisible(true)}
        />
        <CBadge className=" bg-black">{not_read}</CBadge>

        <CModal visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader onClose={() => setVisible(false)}>
            <CModalTitle>عرض الإشعارات</CModalTitle>
            <CIcon
              className=" ms-3"
              icon={icon.cilPlus}
              size="xl"
              // onClick={() => setVisible(true)}
              onClick={()=>{navigate('/create-notification') ;  setVisible(false);}}
            />
          </CModalHeader>
          {data ? (
            <CModalBody>
              {data.map((item) => (
                <CListGroup>
                  <CListGroupItem
                    onClick={() => {
                      navigate(`/notification-detail/${item.id}`);
                      dispatch(is_read({notification_id:item.id}))
                      setVisible(false);
                    }}
                  >
                    <span>{item.title}</span>
                    <div className=" text-black-50">{item.description}</div>
                  </CListGroupItem>
                </CListGroup>
              ))}
            </CModalBody>
          ) : (
            <p>لا يوجد اشعارات</p>
          )}
        </CModal>
      </>
    </>
  );
}

export default Notification;

{
  /* <CTable
    className=" text center"
    columns={columns}
    items={data.map((item) => ({
      ...item,
      data: item.data[0].value,
      is_read: <CIcon icon={icon.cilStar} size="xl" color="yellow" />,
    }))}
  /> */
}
