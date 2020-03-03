import { baseUrl } from "./constants/baseParams";

const getBaseUrl = () => `${baseUrl}`;
const getPageString = page => `page=${page}`;
const generateUrl = (method, page = 1) =>
  `${getBaseUrl()}/${method}?${getPageString(page)}`;

export { generateUrl };
