import request from "@/utils/request";
export function getOutlocationState(id) {
  return request({ url: "api/area/overview/{id}" });
}
