import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Orientation from 'react-native-orientation-locker';

const Player = (props: {navigation: any}) => {
  useEffect(() => {
    Orientation.lockToLandscape();
    return () => {
      Orientation.lockToPortrait();
    };
  }, []);
  const videoPlayer = React.createRef();
  return (
    <>
      <VideoPlayer
        videoStyle={[styles.videoBackground]}
        navigator={props.navigation}
        ref={(ref: any) => (videoPlayer.current = ref)}
        onError={(data: any) => console.log('onError', data)}
        fullScreen={true}
        fullscreenOrientation={'landscape'}
        controls={false}
        onProgress={(data: any) => {
          console.log('onProgress', data);
        }}
        source={{
          uri: 'https://d1fn3d8tw2ahlq.cloudfront.net/out/v1/d6f16aaf66c84534b2855d578491e306/index.m3u8',
        }}
        disableSeekbar={true}
        disableVolume={true}
        disableTimer={true}
      />
      <View
        style={{
          marginTop: 8,
          alignSelf: 'flex-end',
          marginRight: 10,
          backgroundColor: 'red',
          borderRadius: 4,
          position: 'absolute',
          right: '7%',
          bottom: '10%',
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            paddingVertical: 2,
            paddingHorizontal: 6,
            fontSize: 11,
          }}>
          Live
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  videoBackground: {
    width: '100%',
  },
});

export default Player;
