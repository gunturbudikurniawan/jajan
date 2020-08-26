import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IcBack, IcBackLight} from '../../../assets/icon';

export default function IconOnly({onPress, icon}) {
  const Icon = () => {
    if (icon === 'dark-back') {
      return <IcBack />;
    }
    if (icon === 'back-light') {
      return <IcBackLight />;
    }
    return <IcBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
}
