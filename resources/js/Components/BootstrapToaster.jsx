import React, { useEffect, useRef, useState } from "react";

const BootstrapToaster = ({ type, message, title }) => {
  const toastRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show && toastRef.current) {
      const toast = new window.bootstrap.Toast(toastRef.current);
      toast.show();
    }
  }, [show]);

  useEffect(() => {
    if (message) {
      setShow(true);
    }
  }, [message]);

  const closeToast = () => setShow(false);

  return (
    <div className={`toast-container position-fixed top-0 end-0 p-3`}>
      <div
        ref={toastRef}
        className={`toast fade ${show ? "show" : "hide"}`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className={`toast-header ${type === "success" ? "bg-success" : type === "error" ? "bg-danger" : "bg-warning"} text-white`}>
          <strong className="me-auto">{title}</strong>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="toast"
            aria-label="Close"
            onClick={closeToast}
          ></button>
        </div>
        <div className="toast-body">{message}</div>
      </div>
    </div>
  );
};

export default BootstrapToaster;
