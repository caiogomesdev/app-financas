import { dateToString } from "../../../utils";

export interface Financas {
  isProfit: boolean;
  title: string;
  type: string;
  value: number;
  date: Date;
}

export interface FinancasApp {
  dateString: string;
  financas: Financas[];
}

export const financasToFinancasApp = (financas: Financas[]): FinancasApp[] => {
  const result: FinancasApp[] = [];
  financas.forEach(item => {
    const date = item.date;
    const dateString = dateToString(date);

    const indexFinancaApp = result.findIndex(itemFinancas => itemFinancas.dateString === dateString);
    if (indexFinancaApp >= 0) {
      result[indexFinancaApp].dateString = dateString;
      result[indexFinancaApp].financas.push(item);
    } else {
      result.push({ dateString, financas: [item] });
    }
  })

  return result.sort( (a, b ) => a.dateString > b.dateString ? -1 : 1 );
}
