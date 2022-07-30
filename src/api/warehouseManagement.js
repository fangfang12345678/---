import request from "@/utils/request";
export function getWareHouse() {
  return request({
    url: "warehouse/list",
  });
}
export function getWareHousePage(params) {
  return request({
    url: "api/warehouse/page",
    params,
  });
}

export function getWareHouseDatial() {
  return request({
    url: "api/codeFactory/next/CK",
  });
}

export function addWare(data) {
  return request({
    method: "POST",
    url: "api/warehouse",
    data,
  });
}
export function getWareDetail(id) {
  return request({
    url: `api/warehouse/${id}`,
  });
}
