import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';

import {RoutesContext} from '../context/routing';

const Two = props => {
  const {screens} = useContext(RoutesContext);
  const current = 'Two';

  return (
    <View>
      <Text style={{textAlign: 'center'}}>SCREEN TWO</Text>
      <Button
        onPress={() => {
          const next = screens.indexOf(current) + 1;
          console.log('CURRENT INDEX', next);
          props.navigation.navigate(screens[next]);
        }}
        title="next screen"
      />
    </View>
  );
};

export default Two;
