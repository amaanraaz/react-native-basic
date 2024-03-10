import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import FlatCard from "./components/FlatCard";
import NewCards from "./components/NewCards";

export default function App(){
  return(
      <View style={styles.container}>
        <ScrollView>
            <NewCards/>
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin: 20
  }
})