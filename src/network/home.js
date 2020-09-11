import { request, request2 } from "./request";

export function getHomeMultiData() {
  return request({
    url: "/home/multidata"
  });
}
export function getHomeMultiData2() {
  return request2({
    url: "/home/multidata"
  });
}

export function getHomeGoods(type, page) {
  return request2({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}
