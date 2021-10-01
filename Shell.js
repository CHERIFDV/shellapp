
import React ,{useRef,useEffect}from 'react';
import { StyleSheet,BackHandler } from 'react-native';

import { WebView } from 'react-native-webview';


export default function Test() {
  const webViewRef = useRef(null)
  
  
  const backAction = () => {
  
      webViewRef.current.goBack();
    
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
     <WebView style={{ marginTop:25}} ref={webViewRef} source={{ uri: 'http://acelens.me:3000' }} 
    javaScriptEnabled={true}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
