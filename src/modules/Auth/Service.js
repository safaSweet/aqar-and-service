
import { messaging, getToken } from "../../firebase";
import * as ep from "./End_point";
import { api } from "../../boot/axios";
import Cookie from "cookie-universal";

const cookie = Cookie();

export const LOGIN = async (data) => {
  try {
    // تسجيل الـ Service Worker قبل طلب الإذن للحصول على الإشعارات
    const registration = await navigator.serviceWorker.ready;
    console.log("Service Worker is ready:", registration);

    // طلب صلاحية الإشعارات والحصول على الـ Device Token
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const currentToken = await getToken(messaging, {
        vapidKey:
          "BAZ7rcWC_Z3YhVdcNH_570scSmwRku21XSIdNFabHb3UyKjVfJt9RzOnFc6WqQJaXgdHhePNq-mZ2RZgaK9r5CA",
        serviceWorkerRegistration: registration,
      });
      if (currentToken) {
        console.log("Device Token:", currentToken);
        try {
          const loginData = {
            ...data,
            device_token: currentToken,
          };
          const res = await api.post(ep.LOGNIN, loginData);
          const { user } = res.data;
          const { token , permissions } = user;
          cookie.set("device_token", currentToken);
          cookie.set("accessToken", token);
          // cookie.set("permissions", permissions);
          cookie.set("user", user.email);
          api.defaults.headers.Authorization = "Bearer " + token;
          
          console.log("auth:",res.data.user.role[0].name );
          cookie.set("role", res.data.user.role[0].name);

          window.location.pathname = "/";
          return user;
        } catch (error) {
          console.error(
            "Failed to send device token to the backend:",
            error.response || error.message
          );
          throw error;
        }
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        throw new Error("Failed to get device token");
      }
    } else {
      console.log("Unable to get permission to notify.");
      throw new Error("Permission to notify denied");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const CHANGE_PASSWORD = async (data) => {
  const res = await api.post(ep.CHANGE_PASSWORD, data);
  return res;
};

export const VERFY_PASSWORD = async (data) => {
  const res = await api.post(ep.VERFY_PASSWORD, data);
  return res;
};

export const LOGOUT = async () => {
  await api.get(ep.LOGOUT);
  cookie.remove("accessToken");
  window.location.reload();
  window.location.pathname = "/login";
};

export const GET_INFO = async () => {
  const response = await api.get(ep.USER_INFO);
  return response.data;
};

// SvD2t1y63UXTn7KL6uhbW_jPBItJDlHKPdyB6itVdiY #privet key
