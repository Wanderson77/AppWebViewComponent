import React from 'react';
import { WebView, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function components() {
  return (  
    /** blog.parse.com */
    /** Here
     *  Here Mobile
     */
    <WebView style={Styles.webview}
      source={{uri:'https://github.com/facebook/react-native'}}></WebView>    
  );
}

const Styles = StyleSheet.create({
    webview:{
        flex:1,
        borderColor: 'blue',
        marginTop: 20
    }
})
