import React from 'react';

import { Text, Button, TextInput } from 'react-native';

import { Container, Box, Header, Steps, StepText, ButtonArea } from './styles';

export default function InitialScreen(props) {
  return (
    <Container>
      <Box>
        <Header>
          <Text style={{fontSize: 23}}>Instruções</Text>
        </Header>
        <Steps>
          <StepText>1 - Abra o instagram</StepText>
          <StepText>2 - Toque nos três pontos</StepText>
          <StepText>3 - Selecione "copiar link"</StepText>
          <StepText>4 - Retorne ao app</StepText>
        </Steps>
        
      </Box>
      <ButtonArea>
       <Button title="Seguir" onPress={()=> props.navigation.navigate('RepostScreen')} />
       <TextInput placeholder="Ler cópia da assinatura" style={{borderWidth: 1}} />
      </ButtonArea>
    
    </Container>
  );
}