import { AxiosRequestConfig } from "axios";
import { getAllPrices, meRoute, signinRoute } from "./http";

class HttpService {
  token = ''

  changeAcessToken(token: string): void {
    this.token = token;
  }

  getConfig(): AxiosRequestConfig<any> {
    return {
      headers: { 'Authorization': `Bearer ${this.token}` }
    }
  }

  meRoute() {
    return meRoute(this.getConfig())
  }

  signinRoute = signinRoute

  getAllPricesRoute(): Promise<number> {
    return getAllPrices(this.getConfig())
  }
}


export const httpService = new HttpService();
