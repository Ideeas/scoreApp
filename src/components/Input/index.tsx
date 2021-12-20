import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { IconProps, Input as ElementsInput, InputProps } from 'react-native-elements';

type LeftIconProps = Partial<IconProps>;

type Props = LeftIconProps & InputProps;

export default function Input({ ...rest }: Props) {
  return (
    <ElementsInput leftIcon={<FontAwesome style={{ marginRight: 10 }} {...rest} />} {...rest} />
  );
}
