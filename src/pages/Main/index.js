import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Formik } from 'formik';
import * as yup from 'yup';

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
  Text,
} from './styles';

const userValidation = yup.object({
  name: yup
    .string()
    .required('Nome deve ser preenchido')
    .min(4, 'Mínimo de 4 letras'),
  email: yup
    .string()
    .email('Email inválido')
    .required('Email deve ser preenchido'),
  age: yup
    .number()
    .required('Idade deve ser preenchida')
    .min(1)
    .max(130),
});

export default function Main() {
  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers(currentUsers => {
      return [user, ...currentUsers];
    });
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', age: '' }}
        validationSchema={userValidation}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addUser(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
            <View>
              <Input
                onChangeText={handleChange('name')}
                placeholder="Name"
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <Text>{touched.name && errors.name}</Text>

              <Input
                onChangeText={handleChange('email')}
                placeholder="Email"
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>{touched.email && errors.email}</Text>

              <Input
                onChangeText={handleChange('age')}
                placeholder="Age"
                onBlur={handleBlur('age')}
                value={values.age}
              />

              <Text>{touched.age && errors.age}</Text>

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
