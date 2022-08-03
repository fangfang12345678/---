import request from "@/utils/request";
export function getLocationPageTwo(params) {
  return request({ url: "api/location/pageDetail", params });
}

export function getLocationCode() {
  return request({ url: "api/codeFactory/next/KW" });
}
export function getLocationList() {
  return request({ url: "api/location/list" });
}
export function matcheLocationList(params) {
  return request({ url: "api/location/pageDetail", params });
}
