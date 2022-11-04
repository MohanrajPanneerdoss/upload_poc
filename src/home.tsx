import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import LinearGradient from 'react-native-linear-gradient';

const Home = props => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text
            style={{marginLeft: 20, fontWeight: 'bold', marginVertical: 20}}>
            Live Streaming
          </Text>
          {/* <ImageBackground
             source={require('./assets/download.png')}
             style={{
               width: '80%',
               height: 200,
               borderRadius: 16,
               alignSelf: 'center',
               borderWidth: 0.5,
               borderColor: 'grey',
             }}>
 
           </ImageBackground> */}
          <View style={{width: '90%', alignSelf: 'center'}}>
            <Pressable onPress={() => props.navigation.navigate('Player')}>
              <Image
                source={require('./assets/download.png')}
                style={{
                  width: '100%',
                  height: 200,
                  borderRadius: 16,
                  alignSelf: 'center',
                  borderWidth: 0.5,
                  borderColor: 'grey',
                }}
              />
              <View
                style={{
                  marginTop: 8,
                  alignSelf: 'flex-end',
                  marginRight: 10,
                  backgroundColor: 'red',
                  borderRadius: 4,
                  position: 'absolute',
                  right: 12,
                  top: 12,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    paddingVertical: 2,
                    paddingHorizontal: 6,
                    fontSize: 9,
                  }}>
                  Live
                </Text>
              </View>
              <LinearGradient
                colors={['#00000000', '#000000']}
                style={{
                  height: '30%',
                  width: '100%',
                  position: 'absolute',
                  bottom: 0,
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 8,
                  }}>
                  <Image
                    source={require('./assets/play_icon.png')}
                    style={{tintColor: 'white', width: 25, height: 25}}
                  />
                  <Text style={{color: 'white'}}>
                    New york yankees vs braves
                  </Text>
                </View>
              </LinearGradient>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Home;
