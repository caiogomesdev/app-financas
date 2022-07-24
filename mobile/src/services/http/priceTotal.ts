import { AxiosRequestConfig } from "axios";
import { ROUTES } from "../../utils/constants";
import { httpClient } from "../httpClient";

export const getAllPrices = async (config: AxiosRequestConfig): Promise<number> => {
  const result = await httpClient.get<number>(ROUTES.PRICE_TOTAL, config);
  return result.data;
}
