/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Image
                source={require('./li1.jpg')}
                style={{width: 200, height: 200}}
              />
              <Image
                source={require('./li2.jpg')}
                style={{width: 200, height: 200}}
              />
              <Image
                source={require('./li3.jpg')}
                style={{width: 200, height: 200}}
              />
              <Image
                source={require('./li4.jpg')}
                style={{width: 200, height: 200}}
              />
              <Image
                source={require('./li5.jpg')}
                style={{width: 200, height: 200}}
              />
              <Text style={styles.sectionTitle}>Memory leak test app</Text>
              <Text style={styles.sectionDescription}>
                Select the TextInput, add some text. Build in release, then cycle the app between
                background and foreground. Watch memory usage!
              </Text>
              <TextInput
                style={{
                  backgroundColor: 'gray',
                  borderColor: 'black',
                  color: 'black',
                  width: '100%',
                  fontSize: 32,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
