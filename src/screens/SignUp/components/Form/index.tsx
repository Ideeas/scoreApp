import React from 'react';
import { View } from 'react-native';
import { Button, ButtonProps, Card } from 'react-native-elements';

interface FormProps extends ButtonProps {
  title: string;
  children: React.ReactNode;
}

export default function Form({ title, children, ...rest }: FormProps) {
  return (
    <View>
      <Card>
        <Card.Title>{title}</Card.Title>
        {children}
        <Button title="Sign up" type="outline" {...rest} />
      </Card>
    </View>
  );
}
