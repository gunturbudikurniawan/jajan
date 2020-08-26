import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {fonts} from '../../utils';
import {ILLogo} from '../../assets';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ILLogo width="100" height="100" />
      <Text style={styles.font}>Jajan Yuk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    marginTop: 20,
    fontSize: 30,
    fontFamily: fonts.primary[900],
    color: '#0bcad4',
  },
});
