import superAgent from "superagent";
import superAgentUse from "superagent-use";

import { convertToSnakeCase } from "./utils";


export function request() {
  const r = superAgentUse(superAgent);
  return r;
}

export async function requestBuilder(
  requestType,
  url,
  { headers = {}, params = {} },
) {
  switch (requestType) {
    case "GET":
      return request()
        .get(url)
        .set(headers)
        .ok(res => res.status);
    case "POST":
      return request()
        .post(url)
        .set(headers)
        .send(convertToSnakeCase(params))
        .ok(res => res.status);
    case "PATCH":
      return request()
        .patch(url)
        .set(headers)
        .send(convertToSnakeCase(params))
        .ok(res => res.status);
    case "PUT":
      return request()
        .put(url)
        .set(headers)
        .send(convertToSnakeCase(params))
        .ok(res => res.status);
    case "DELETE":
      return request()
        .delete(url)
        .set(headers)
        .send(convertToSnakeCase(params))
        .ok(res => res.status);
  }
}
