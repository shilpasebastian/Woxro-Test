/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [director, setDirector] = useState('');
  const [movie, setMovie] = useState('');

  const getDirector = text => {
    setDirector(text);
  };
  const getMovie = text => {
    setMovie(text);
  };

  const getData = () => {};

  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 10}}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          alignSelf: 'center',
          paddingTop: 25,
        }}>
        Director and Movies
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <TextField />
        <TextField />
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: 50,
            height: 45,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, marginTop: 10}}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const TextField = () => {
  return (
    <TextInput
      placeholder="Director Name"
      placeholderTextColor={'grey'}
      style={{
        width: 160,
        height: 45,
        backgroundColor: 'lightgrey',
      }}
    />
  );
};
export default App;
