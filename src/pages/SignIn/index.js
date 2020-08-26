import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Button, Gap} from '../../components';
import {colors, fonts, useForm} from '../../utils';
import moment from 'moment';
import {ScrollView} from 'react-native-gesture-handler';
import {Firebase} from '../../config';
import {Loading} from '../../components/molecules';

export default function SignIn({navigation}) {
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });
  const user = moment().format('mmhhDDMMYY');
  const pass = moment().format('YYMMDDHHmm');
  const [loading, setLoading] = useState(false);
  console.log('username', user);
  console.log(pass);
  const onContinue = () => {
    if (form.username !== user && form.password !== pass) {
      console.log('Tidak sama');
    } else {
      setLoading(true);
      Firebase.auth()
        .signInAnonymously()
        .then((success) => {
          setLoading(false);
          console.log('SignIn Success', success);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoading(false);
          console.log('Error SignIn', errorMessage);
        });
    }
    navigation.navigate('Splash');
  };
  return (
    <>
      <View style={styles.pages}>
        <ScrollView>
          <ILLogo width="100" height="100" />
          <Gap height={24} />
          <Text style={styles.title}>Masuk dan mulai berbelanja</Text>
          <Gap height={24} />
          <Input
            label="Username"
            value={form.username}
            onChangeText={(value) => setForm('username', value)}
          />
          <Gap height={24} />
          <Input
            label="Password"
            value={form.password}
            // onChangeText={(value) => setPassword(value)}
            onChangeText={(value) => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={16} />
          <Gap height={40} />
          <Button title="Login" onPress={onContinue} />
          <Gap height={30} />
        </ScrollView>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  pages: {padding: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
});
