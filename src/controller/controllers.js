import { client } from "../api/client";

export const createControllers = async (controllerTypeId) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await client.post(
      `/admin/create-controller`,
      { controllerTypeId },
      config
    );
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const getDevicesByControllerId = async (controllerId) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await client.get(`/devices/${controllerId}`, config);
    console.log(data);

    return data.device;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};

export const downloadFile = async (controllerId) => {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await client.get(`/admin/downloads/${controllerId}`, config);
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
};
