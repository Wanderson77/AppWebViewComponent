import React from 'react';
import { View, WebView, StyleSheet } from 'react-native';

// import { Container } from './styles';

export default function components() {
  return (    
    <WebView style={Styles.webview}></WebView>    
  );
}

const Styles = StyleSheet.create({
    webview:{
        flex:1,
        borderColor: 'blue'
    }
})
