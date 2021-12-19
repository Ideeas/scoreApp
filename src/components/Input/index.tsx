import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Input as ElementsInput, InputProps } from 'react-native-elements';

interface LeftIconProps {
  name: string;
  size: number;
  color: string;
}

type Props = LeftIconProps & InputProps;

export default function Input({ ...rest }: Props) {
  return (
    <ElementsInput leftIcon={<FontAwesome style={{ marginRight: 10 }} {...rest} />} {...rest} />
  );
}
