import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 40px;
  background: #fff;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 5px;
  padding: 5px 12px;
`;

export const View = styled.View`
  flex-direction: column;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Name = styled.Text`
  font-size: 25px;
  text-align: center;
`;
export const Bio = styled.Text`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;
export const Age = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const Text = styled.Text`
  font-size: 10px;
  color: #ff0000;
  text-align: left;
`;
