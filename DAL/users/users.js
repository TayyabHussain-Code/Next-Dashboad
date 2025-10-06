import { InvokeApi } from "@/utils/invokeApi";

export const UserList = async (page, rowsPerPage, search) => {
  const reqObj = {
    path: `/user/?filter=${search}&limit=${rowsPerPage}&page=${page}`,
    method: "GET",
    headers: {
      "app-version": "2.4.0",
      "app-platform": "ios",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  return InvokeApi(reqObj);
};
