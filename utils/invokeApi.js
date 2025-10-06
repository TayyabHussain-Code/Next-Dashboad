import { baseUrl } from "@/config/config";
import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
export async function InvokeApi({
  path,
  method = "GET",
  headers = {},
  queryParams = {},
  postData = {},
}) {
  const reqObj = {
    method,
    url: baseUrl + path,
    headers,
  };
  console.log("API Request", reqObj);

  reqObj.params = queryParams;

  if (method === "POST") {
    reqObj.data = postData;
  }
  if (method === "PUT") {
    reqObj.data = postData;
  }
  if (method === "DELETE") {
    reqObj.data = postData;
  }
  if (method === "PATCH") {
    reqObj.data = postData;
  }

  let results;

  try {
    results = await axios(reqObj);
    console.log("API Response", results);
    return results.data;
  } catch (error) {
    console.log("API Error", error);
    if (error?.response?.status === 401) {
    }
    return {
      code: error?.response?.status,
      message: error?.response?.data?.message
        ? error?.response?.data?.message
        : "",
    };
  }
}
