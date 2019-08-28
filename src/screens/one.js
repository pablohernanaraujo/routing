import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import {RoutesContext} from '../context/routing';

const One = props => {
  const {screens} = useContext(RoutesContext);
  const current = 'One';
  console.log('ONE');
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>SCREEN ONE</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default One;
