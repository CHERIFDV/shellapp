
import React ,{useRef,useEffect,useState}from 'react';
import { StyleSheet,BackHandler } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { WebView } from 'react-native-webview';
import { Camera } from 'expo-camera';
 


export default function Employees() {
  const webViewRef = useRef(null)
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);
  const backAction = () => {
  
      webViewRef.current.goBack();
    
    return true;
  };
  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (
      imagePermission.status !== 'granted' &&
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };
  permisionFunction()
  useEffect(() => {
    
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>
      BackHandler.removeEventListener("hardwareBackPress", backAction);
  }, []);

  return (
     <WebView style={{ marginTop:25}}
     allowInlineMediaPlayback={true}
     mediaPlaybackRequiresUserAction={false}
     ref={webViewRef} source={{ uri: 'http://acelens.me:3000/employe' }} 
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
