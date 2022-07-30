import request from "@/utils/request";
export function getLocationPageTwo(params) {
  return request({ url: "api/location/pageDetail", params });
}
