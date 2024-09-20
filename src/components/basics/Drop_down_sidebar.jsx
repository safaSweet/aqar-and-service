import {
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CDropdown,
} from "@coreui/react";
import { useState } from "react";
import ChangePassword from "../../modules/Auth/pages/Change_password";

import { LOGOUT } from "../../modules/Auth/Service";
import { useNavigate } from "react-router-dom";
function DropDown({ title, item1, item2, item3, item4, object }) {
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate();
  return (
    <>
      <CDropdown variant="btn-group">
        <CDropdownToggle
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          {title}
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={()=>{navigate('/cruds')}}>{item3}</CDropdownItem>
          <CDropdownItem onClick={() => setVisible(!visible)}>
            {item1}
          </CDropdownItem>
          <ChangePassword visible={visible} />
          <CDropdownItem
            onClick={() => {
              LOGOUT();
            }}
          >
            {item2}
          </CDropdownItem>
          <CDropdownDivider />
          <CDropdownItem> {item4}</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  );
}

export default DropDown;
