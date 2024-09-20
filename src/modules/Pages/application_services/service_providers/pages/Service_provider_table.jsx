import { CContainer, CTable, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProvider,
  deleteProvider,
  setVisible,
  lockedProvider,
  disableProvider,
} from "../Store";
import { useNavigate, useParams } from "react-router-dom";
import Images from "../../../../../components/basics/Images";
import DeleteImages from "../../../../../components/basics/DeleteImage";
import ModalAdd from "../../../../../components/basics/Modal_add";

function Service_table() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(
    (state) =>
      state.service_provider.get_services_providers.data?.data
        ?.Service_Providers
  );
  const { columns } = useSelector(
    (state) => state.service_provider.get_services_providers
  );
  const loading = useSelector(
    (state) => state.service_provider.get_services_providers.loading
  );
  console.log("data", data);
  useEffect(() => {
    dispatch(getProvider({ id: id }));
  }, []);

  return (
    <>
      {loading ? (
        <CContainer className="text-center fs-4 fw-bold">
          يتم التحميل ...
        </CContainer>
      ) : (
        <>
          {data ? (
            <CTable
              className="text-center "
              hover
              columns={columns}
              items={data.map((item, index) => ({
                ...item,
                action: (
                  <div className="d-flex justify-content-around">
                    <CTooltip content="قفل" placement="bottom">
                      <CIcon
                        icon={icon.cilLockLocked}
                        size="xl"
                        onClick={() =>
                          dispatch(lockedProvider({ id: item.id })).then(() => {
                            dispatch(getProvider({ id: id }));
                          })
                        }
                      />
                    </CTooltip>

                    <DeleteImages
                      photos={item.business}
                      id0={id}
                      id={item.id}
                      type="service_Identyfie_paper"
                    />
                    <ModalAdd
                      title="اضافة صور"
                      icons={icon.cilImagePlus}
                      type="image_service"
                      id={item.id}
                    />
                    <DeleteImages
                      photos={item.Identyfie_paper}
                      id0={id}
                      id={item.id}
                      type="service_business"
                    />
                    <CTooltip content="حظر" placement="bottom">
                      <CIcon
                        icon={icon.cilXCircle}
                        size="xl"
                        onClick={() =>
                          dispatch(disableProvider({ id: item.id })).then(
                            () => {
                              dispatch(getProvider({ id: id }));
                            }
                          )
                        }
                      />
                    </CTooltip>
                    <CTooltip content="حذف" placement="bottom">
                      <CIcon
                        icon={icon.cilTrash}
                        size="xl"
                        onClick={() =>
                          dispatch(deleteProvider({ id: item.id })).then(() => {
                            dispatch(getProvider({ id: id }));
                          })
                        }
                      />
                    </CTooltip>
                    <CTooltip content="تعديل" placement="bottom">
                      <CIcon
                        icon={icon.cilPencil}
                        size="xl"
                        onClick={() =>
                          navigate(`/add-service-provider/${id}/${item.id}`, {
                            replace: true,
                          })
                        }
                      />
                    </CTooltip>

                    <Images photos={item.business} type="service" />
                  </div>
                ),
                contact_information: item.contact_information.map(
                  (n, i) => n.mobile_number
                ),
                address: item.address
                  .map((addr) =>
                    addr && addr.value && addr.value.name
                      ? addr.value.name
                      : "Unknown"
                  )
                  .join("-"),
                status: item.status.type,
              }))}
            />
          ) : (
            <CContainer className="text-center fs-4 fw-bold">
              لا يوجد مقدمين خدمات
            </CContainer>
          )}
        </>
      )}
    </>
  );
}

export default Service_table;
