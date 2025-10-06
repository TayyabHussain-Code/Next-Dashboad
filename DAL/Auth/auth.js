import { InvokeApi } from "@/utils/invokeApi";

export const HandleLogin = async (data) => {
  const reqObj = {
    path: "/admin/auth",
    method: "POST",
    headers: {
      "app-version": "2.4.0",
      "app-platform": "ios",
    },
    postData: data,
  };
  return InvokeApi(reqObj);
};
