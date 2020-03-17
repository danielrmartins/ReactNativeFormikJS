import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Formik } from 'formik';

import {
  Container,
  Input,
  SubmitButton,
  View,
  List,
  User,
  Name,
  Bio,
  Age,
} from './styles';

export default function Main() {
  const [users, setUsers] = useState([
    { name: 'Daniel', email: 'daniel.martins@kbase.com.br', age: 33 },
    { name: 'Foca', email: 'foca@kbase.com.br', age: 10 },
  ]);

  const addUser = user => {
    setUsers(currentUsers => {
      return [user, ...currentUsers];
    });

    console.log(user);
  };

  return (
    <Container>
      {/*       <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#FFF" />
        </SubmitButton>
      </Form> */}

      <Formik
        initialValues={{ name: '', email: '', age: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Input
              onChangeText={handleChange('name')}
              placeholder="Name"
              onBlur={handleBlur('name')}
              value={values.name}
            />

            <Input
              onChangeText={handleChange('email')}
              placeholder="Email"
              onBlur={handleBlur('email')}
              value={values.email}
            />

            <Input
              onChangeText={handleChange('age')}
              placeholder="Age"
              onBlur={handleBlur('age')}
              value={values.age}
            />
            <SubmitButton onPress={handleSubmit} title="Submit">
              <Icon name="add" size={20} color="#FFF" />
            </SubmitButton>
          </View>
        )}
      </Formik>

      <List
        data={users}
        keyExtractor={user => user.email}
        renderItem={({ item }) => (
          <User>
            <Name>{item.name}</Name>
            <Bio>{item.email}</Bio>
            <Age>{item.age}</Age>
          </User>
        )}
      />
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
