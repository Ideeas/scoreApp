import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { COLORS } from '../../global/styles/Colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    backgroundColor: COLORS.transparent,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.white} size={32} />
    </View>
  );
}
