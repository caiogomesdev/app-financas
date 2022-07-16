import React from 'react';
import { TextInputProps } from 'react-native';
import { Input } from './styled';

const App: React.FC<TextInputProps> = ({...props}: TextInputProps) => {
  return(
    <Input {...props} />
  )
}

export default App;
