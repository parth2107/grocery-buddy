
//important imports
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'; // importing components

export default function PaymentMethodScreen() {
    return(
        <View style={styles.container}>
        <Text>You are on the Payment Method</Text>
      </View>
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