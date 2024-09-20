
import { useState, useEffect } from 'react';
import { CToast, CToastBody, CToastClose } from '@coreui/react';

function Toast({ text, color }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (text) {
      setVisible(true);
      // text=' ';
    }
  }, [text, visible]);
  

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      {visible && (
        <CToast autohide={true} visible={visible} color={color} className="text-white align-items-center position-absolute top-0 z-2">
          <div className="d-flex">
            <CToastBody>{text}</CToastBody>
            <CToastClose className="me-2 m-auto" onClick={toggleVisible} white />
          </div>
        </CToast>
      )}
    </>
  );
}

export default Toast;
