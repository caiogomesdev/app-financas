import { AxiosRequestConfig } from "axios";
import { FilterEnum } from "../utils/enums";
import {
  getAllFinancas,
  getAllFinancasWithFilter,
  getAllPrices,
  me,
  signin
} from "./http";

class HttpService {
  token = '';

  changeAcessToken(token: string): void {
    this.token = token;
  }

  getConfig(): AxiosRequestConfig<any> {
    return {
      headers: { 'Authorization': `Bearer ${this.token}` }
    }
  }

  meRoute() {
    return me(this.getConfig());
  }

  signinRoute = signin

  getAllPricesRoute(): Promise<number> {
    return getAllPrices(this.getConfig());
  }

  getAllFinancasRoute() {
    return getAllFinancas(this.getConfig());
  }

  getAllFinancasFilterRoute(filter: FilterEnum) {
    return getAllFinancasWithFilter(filter ,this.getConfig());
  }
}


export const httpService = new HttpService();
