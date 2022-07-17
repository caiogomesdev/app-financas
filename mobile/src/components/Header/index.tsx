import React from "react";
import { Container, Group, Price } from "./styles";
import { Text } from "react-native";

const App: React.FC = () => {
  return (
    <Container>
      <Group>
        <Price>R$ 100,00</Price>
      </Group>

      <Group></Group>
    </Container>
  );
};

export default App;
