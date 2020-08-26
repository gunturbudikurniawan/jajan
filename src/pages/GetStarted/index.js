import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo, Get_Started} from '../../assets';
import {Button} from '../../components';
import {fonts} from '../../utils';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={Get_Started} style={styles.page}>
      <View>
        <ILLogo width="100" height="100" />
        <Text style={styles.title}>Belanja Puas & Terhindar Corona</Text>
      </View>
      <View>
        <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 48,
    color: '#f39c12',
    marginTop: 80,
    fontFamily: fonts.primary[900],
  },
});
