import React, { useEffect, useState } from 'react';
import { financasToFinancasApp, FinancaApp  } from './helpers';
import { IFinancaDto } from '../../utils/dtos';
import HasRegister from './hasRegister';
import NoRegister from './noRegister';

interface Params {
  financas: IFinancaDto[]
}
const App: React.FC<Params> = ({ financas }) => {
  const [ financasApp, setFinancasApp ] = useState<FinancaApp[]>([]);

  useEffect(() => {
    setFinancasApp(financasToFinancasApp(financas));
  }, [financas])

  return financasApp.length ? <HasRegister financasApp={financasApp}/> : <NoRegister />
}

export default App;
