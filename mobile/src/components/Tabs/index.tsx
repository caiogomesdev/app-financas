import React, { useEffect, useState } from 'react';
import { FilterEnum } from '../../utils/enums';
import { Container, Tab, TabText } from './styles';

interface Tabs {
  actived: boolean;
  name: string;
  value: FilterEnum;
}

interface Params {
  setFilter: React.Dispatch<React.SetStateAction<FilterEnum>>
  filter: FilterEnum;
}

const App: React.FC<Params> = ({ filter, setFilter}) => {
  const [tabs, setTabs] = useState<Tabs[]>([
    { actived: true, name: 'Todos', value: FilterEnum.ALL },
    { actived: false, name: 'Ganhos', value: FilterEnum.LUCRO },
    { actived: false, name: 'Percas', value: FilterEnum.DEFIC }
  ])

  useEffect(() => {
    const newTabs = tabs.map(item => {
      return { ...item, actived: item.value === filter }
    })
    setTabs(newTabs);
  }, [filter])

  return (
    <Container>
      {tabs.map(item =>
        <Tab actived={item.actived}
          key={item.name}
          onPress={() => setFilter(item.value)}
        >
         <TabText>{item.name}</TabText>
        </Tab>
      )}
    </Container>
  )
}

export default App;
