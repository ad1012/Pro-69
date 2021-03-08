import React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component { 
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal',
        }
    }
    getCameraPermissions = async () =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({
            /*status === "granted" is true when user has granted permission
            status === "granted" is false when user has not granted the permission
            */
           hasCameraPermissions: status === "granted"
        });
    }
    render() { 
        return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
        <Text> Transaction Screen </Text> 
        <TouchableOpacity>
        <Text> Scan QR Code </Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress = {this.getCameraPermissions}
            style = {styles.scanButton}
            title = "Bar Code Scanner">
            <Text style = {styles.buttonText}> Scan QR Code </Text>
        </TouchableOpacity> 
        </View> 
        ); 
    }
 }

 const styles = StyleSheet.create({
     container: {
         flex:1,
         justifyContent: 'center',
         alignItems: 'center',
     },
     displayText: {
       fontSize: 15,
       textDecorationLine: 'underline',  
     },
     scanButton: {
         backgroundColor: 'lightblue',
         padding: 10,
         margin: 10,
     }, 
 })