import request from "@/utils/request";
export function getLocationPage(params) {
  return request({
    url: "api/area/pageDetail",
    params,
  });
}
