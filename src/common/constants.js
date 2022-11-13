import moment from "moment";
export const BASE_API_URL =
  process.env.REACT_APP_BASE_API_URL || "https://admin.airclass.io/api";
export const LARAVEL_URL =
  process.env.REACT_APP_LARAVEL_API_URL || "http://103.195.237.18/api";
export const VCCLOUD_URL = process.env.REACT_APP_VCCLOUD_API_URL;

export const COMPONENT_STATUS = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const DIRECTION_SORT = {
  DESC: "DESC",
  ASC: "ASC",
};

export const FORMAT_EXPORT = ".xlsx";
export const DATATIME_FORMAT = "DD/MM/YYYY HH:mm";
export const USER_TYPE = {
  STUDENT: 2,
  TEACHER: 3,
};
export const TRANSACTION_STATUS = {};
export const renderDateTime = (time) => {
  return time ? moment(time).format(DATATIME_FORMAT) : "";
};
export const renderNumber = (number) => {
  return number ? number.toLocaleString() : "";
};

export const nonAccentVietnamese = (str) => {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
  str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
  str = str.replace(/đ/g, "d");
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return str;
};
export const DATA_TYPE = {
  TEXT: "InputText",
  SELECT: "ReactSelect",
  SEARCH: "SearchByKeyword",
  DATE: "DatePicker",
  NUMBER: "InputNumber",
  DATERANGE: "DateRangePicker",
};

export const MEDIA_TYPE_VCCLOUD = {
  IMAGE: 2,
  VIDEO: 3,
};
export const MAX_SIZE_VIDEO_UPLOAD = 200;
export const MAX_SIZE_IMAGE_UPLOAD = 5;
