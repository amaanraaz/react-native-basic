import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.cards,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.cards,styles.cardTwo]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.cards,styles.cardThree]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.cards,styles.cardOne]}>
            <Text>Red</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 30
    },
    container:{
        flex:1,
        flexDirection: 'row',
        // justifyContent: 'space-between'
        gap:10,
        padding:8
    },
    cards: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width:100,
        height:100,
        borderRadius:10
    },
    cardOne:{
        backgroundColor: 'red'
    },
    cardTwo:{
        backgroundColor: 'yellow'
    },
    cardThree:{
        backgroundColor: 'green'
    }

})