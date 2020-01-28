import React, { useState, useEffect } from 'react';
import { ImageBackground, Clipboard, Button } from 'react-native';

import {  
  Text, 
  DownBarApp, 
  Header, 
  FeaturesBar, 
  BallsArea, 
  Buttono, 
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

import Post from '../../assets/fotoPerfil.jpg';

import Icon from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-gesture-handler';

export default function App(props) {
  const [ color, setColor ] = useState(true);
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ clipboard, setClipboard ] = useState('');
  const [ address, setAddress ] = useState();
  const [ photo, setPhoto ] = useState();

  function changeColorYellow() {
    setColor(false);
  }

  function changeColorGrey() {
    setColor(true);
  }

  function openModal() {
    setModalVisible(!modalVisible)
  }

  async function getPostLink() {
    var texto = await Clipboard.setString(address);
    setClipboard({clipboard: texto})
  }

 

  return (
    <>
    <TextInput placeholder="Link do post" style={{borderWidth: 1}}  onChangeText={(t)=> setAddress(t) } />
    <Button title="Carregar" onPress={()=> { setPhoto(address)}} />
    <ImageBackground source={{uri: `${photo}`}} style={{flex: 2}} />

    <ShareTag color={color}>
      <Icon name="retweet" size={18} color="#000" /> 
      <Icone style={{marginLeft: 0}} name="controller-record" size={20} color="#ddd" />
      <Text>laroapps</Text>
    </ShareTag>

    <DownBarApp>
      <Header>
        <FeaturesBar>
          <Buttono style={{backgroundColor: "#00a8ff"}}>
            <Icone name="browser" size={20} color="#fff" />
          </Buttono>
          <Buttono>
            <Icone name="browser" size={20} color="#ddd" />
          </Buttono>
          <Buttono>
            <Icone name="browser" size={20} color="#ddd" />
          </Buttono>
          <Buttono>
           <Icone name="browser" size={20} color="#ddd" />
          </Buttono>
          <Buttono>
            <Icone name="browser" size={20} color="#ddd" />
          </Buttono>
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
    <SocialMedia onPress={()=>{ getPostLink()}} underlayColor="#ddd">
      <Text style={{marginTop: 10, fontWeight: 'bold'}}>Copiar assinatura</Text>
    </SocialMedia>
    <SocialMediaCancel onPress={()=> openModal()} underlayColor="#ddd">
      <Text style={{marginTop: 10, fontWeight: 'bold'}}>Cancelar</Text>
    </SocialMediaCancel>
    </>
    }
    </>
  );
}