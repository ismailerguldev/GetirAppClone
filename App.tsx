import { StyleSheet, View } from 'react-native';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import RootNavigator, { RootTabParams } from './src/Navigation/Root/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './src/ReduxSystem/store';
import * as Linking from 'expo-linking'
const prefix = Linking.createURL('/')
export default function App() {
  const linking: LinkingOptions<RootTabParams> = {
    prefixes: [prefix],
    config:{
      screens:{
        HomePage:{
          screens:{
            CartScreen: {
              path:"CartScreen/:message",
              parse:{
                message:(message:string) => `mesaj: ${message}`
              }
            }
          }
        },
      }
    }
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer linking={linking}>
          <RootNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
