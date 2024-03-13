import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

import { useNavigation, CommonActions } from '@react-navigation/core'

import splashjson from "../../../assets/splash.json";

import styled from "styled-components";

export { Splash };


 const Splash = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index: 0,
                routes: [{name: 'Home'}]
            }))
        }, 4000);
    }, [])
  return (
    <View style={styled.comtainer}>
      <LottieView source={splashjson}  autoPlay loop resizeMode='contain' />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})
