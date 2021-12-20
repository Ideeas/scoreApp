import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { styles } from './style';
import { UserData } from './Container';
import { useForm, Controller } from 'react-hook-form';

import Form from './components/Form';
import Loading from '../../components/Loading';
import RenderForm from '../../components/RenderForm';
interface Props {
  handleSignUp: (user: UserData) => () => Promise<void>;
  handleSignIn: (user: UserData) => () => Promise<void>;
  loading: boolean;
}

const arrayTest = [
  {
    value: '',
    placeholder: 'Nome',
    type: 'nome',
    name: 'user-o',
  },

  {
    value: '',
    placeholder: 'Email',
    type: 'email',
    name: 'envelope-o',
  },
];

export default function SignUpView({ handleSignUp, handleSignIn, loading }: Props) {
  if (loading) return <Loading />;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.container}>
      <Text h1>Score App</Text>

      <Form title="Register" onPress={() => handleSignUp}>
        {RenderForm(Controller, control, errors, arrayTest)}
      </Form>
    </View>
  );
}
