import { dateToString } from "../../../utils";
import { IFinancaDto } from "../../../utils/dtos";

export interface FinancaApp {
  dateString: string;
  financas: IFinancaDto[];
}

export const financasToFinancasApp = (financas: IFinancaDto[]): FinancaApp[] => {
  const result: FinancaApp[] = [];
  financas.forEach(item => {
    const date = item.date;
    const dateString = dateToString(new Date(date));

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
