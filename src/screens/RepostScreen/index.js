import React, { useState } from 'react';
import { ImageBackground } from 'react-native';

import {  
  Text, 
  DownBarApp, 
  Header, 
  FeaturesBar, 
  BallsArea, 
  Button, 
  BigButtonsArea, 
  BackButton, 
  RecicleButton, 
  ThreeDots, 
  IconButton, 
  ShareTag, 
  SocialMedia, 
  SocialMediaCancel
} 
from './styles';

import Icon from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/Entypo';

export default function App(props) {
  const [ color, setColor ] = useState(true);
  const [ modalVisible, setModalVisible ] = useState(false)

  function changeColorYellow() {
    setColor(false);
  }

  function changeColorGrey() {
    setColor(true);
  }

  function openModal() {
    setModalVisible(!modalVisible)
  }

  return (
    <>
    <ImageBackground source={require('../../assets/fotoPerfil.jpg')} style={{flex: 3}} />

    <ShareTag color={color}>
      <Icon name="retweet" size={18} color="#000" /> 
      <Icone style={{marginLeft: 0}} name="controller-record" size={20} color="#ddd" />
      <Text>laroapps</Text>
    </ShareTag>

    <DownBarApp>
      <Header>
        <FeaturesBar>
          <Button style={{backgroundColor: "#00a8ff"}}>
            <Icone name="browser" size={20} color="#fff" />
          </Button>
          <Button>
            <Icone name="browser" size={20} color="#ddd" />
          </Button>
          <Button>
            <Icone name="browser" size={20} color="#ddd" />
          </Button>
          <Button>
           <Icone name="browser" size={20} color="#ddd" />
          </Button>
          <Button>
            <Icone name="browser" size={20} color="#ddd" />
          </Button>
        </FeaturesBar>  

        <BallsArea>
          <IconButton onPress={()=> changeColorYellow()}>
            <Icone style={{marginLeft: 10}} name="circle" size={33} color="#ff0" />
          </IconButton>
          <IconButton onPress={()=> changeColorGrey()}>
            <Icone style={{marginLeft: 10}} name="controller-record" size={40} color="#aaa" />
          </IconButton>
        </BallsArea>  
      </Header>

      <BigButtonsArea>
        <BackButton onPress={() => props.navigation.goBack()}> 
          <Icon name="caretleft" size={20} color="#fff" /> 
        </BackButton>
        <RecicleButton> 
        <Icon name="retweet" size={20} color="#fff" /> 
        </RecicleButton>
        <ThreeDots onPress={() => openModal()}> 
        <Icon name="ellipsis1" size={20} color="#fff" /> 
        </ThreeDots>
      </BigButtonsArea>
    </DownBarApp>  

    {modalVisible && 
    <>
    <SocialMedia onPress={()=>{}} underlayColor="#ddd">
      <Text style={{marginTop: 10}}>Copiar assinatura</Text>
    </SocialMedia>
    <SocialMediaCancel onPress={()=> openModal()} underlayColor="#ddd">
    <Text style={{marginTop: 10}}>Cancelar</Text>
    </SocialMediaCancel>
    </>
    }
    </>
  );
}