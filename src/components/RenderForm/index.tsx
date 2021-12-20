import React from 'react';
import { Control, FieldErrors, FieldValues } from 'react-hook-form';
import { TextInputProps, View } from 'react-native';
import { Text } from 'react-native-elements';

import Input from '../../components/Input';

interface FormFieldTypes {
  placeholder: string;
  type: string;
  name: string;
  value: string;
}

type RenderField = { field: TextInputProps };

export default function RenderForm(
  Controller: Function,
  control: Control<FieldValues, object>,
  errors: FieldErrors<FieldValues>,
  array: FormFieldTypes[]
) {
  const renderForm = () =>
    array.map(({ name, placeholder, type }, index) => (
      <View key={index}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }: RenderField) =>
            renderInput({ placeholder, onChange, onBlur, value, name, size: 28 })
          }
          name={placeholder}
        />
        {showErrors(errors, type)}
      </View>
    ));

  const showErrors = (error: FieldValues, type: string) =>
    error[type] && <Text>{error[type]} is required.</Text>;

  const renderInput = ({ ...rest }) => <Input {...rest} />;

  return renderForm();
}
