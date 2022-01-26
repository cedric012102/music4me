import * as React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MusicPlayer from './src/components/music-player';
import SearchScreen from './src/screens/search-screen';
import QuoteScreen from './src/screens/quote-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

const App = ({navigaton}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Quotes'}>
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Music 4 Me',
            headerLeft: null,
          }}
        />
        <Stack.Screen
          name="Player"
          component={MusicPlayer}
          options={{
            title: 'Music 4 Me',
          }}
        />
        <Stack.Screen
          name="Quotes"
          component={QuoteScreen}
          options={({navigation}) => ({
            title: 'Music 4 Me',
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Player')}
                />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
