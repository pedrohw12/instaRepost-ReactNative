import styled from 'styled-components/native';

export const Image = styled.Image`
  width: 20px;
  height: 20px;
`;

export const Text = styled.Text`

`;

export const DownBarApp = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  margin: 5px;
  padding: 10px;
  background: #fff;
  flex-direction: row;
  align-items: center;
`;

export const FeaturesBar = styled.View`
  background: #fff;
  flex: 2;
  flex-direction: row;
`;

export const BallsArea = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 4px;
  border-width: 1px;
  border-color: #aaa;
  flex: 1;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const BigButtonsArea = styled.View`
  flex: 1;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
  background: #fff;
`;

export const BackButton = styled.TouchableOpacity`
  margin: 5px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: #00a8ff;
`;

export const RecicleButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: #00a8ff;
`;

export const ThreeDots = styled.TouchableOpacity`
  margin: 5px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background: #00a8ff;
`;

export const IconButton = styled.TouchableOpacity``;

export const ShareTag = styled.View`
  flex-direction: row;
  background: ${props=>props.color?"#aaa":"#ff0"};
  width: 100px;
  border-radius: 4px;
`;

export const SocialMedia = styled.TouchableHighlight`
  z-index: 5;
  border-radius: 4px;
  align-items: center;
  width: 80%;
  margin-top: 115%;
  margin-left: 10%;
  background: #ddd;
  position: absolute;
`;

export const SocialMediaCancel = styled.TouchableHighlight`
  z-index: 5;
  border-radius: 4px;
  align-items: center;
  width: 80%;
  margin-top: 135%;
  margin-left: 10%;
  background: #ddd;
  position: absolute;
`;