import React, { useState } from 'react';
import { Container, Tab, TabText } from './styles';

interface Tabs {
  actived: boolean;
  name: string;
}

const App: React.FC = () => {
  const [tabs, _setTabs] = useState<Tabs[]>([
    { actived: true, name: 'Todos' },
    { actived: false, name: 'Ganhos' },
    { actived: false, name: 'Percas' }
  ])

  return (
    <Container>
      {tabs.map(item =>
      <Tab actived={item.actived} key={item.name}>
         <TabText>{item.name}</TabText>
        </Tab>
      )}
    </Container>
  )
}


export default App;
