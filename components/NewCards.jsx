import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import api_key from '../constants/constants'

export default function NewCards() {
    const [movies,setMovies] = useState();
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=cb9b6453107e2a61fac51478c3ff9fc3")
        .then(res=>res.json())
        .then(res=>setMovies(res.results));
    },[])
    console.log(movies);
  return (
    <View>
      <Text style={styles.headingText}>Movies</Text>
      <ScrollView style={styles.container}>
        {
            movies && (
                movies.map((movie,index)=>(
                    <View style={styles.movieContainer}>
                        <Image style={styles.img} source={{uri:`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}}/>
                        <Text style={styles.headingText}>{movie.title}</Text>
                        <Text style={styles.paragraphText}>{movie.overview}</Text>
                        <Text style={styles.headingText}>Popularity-{movie.popularity}</Text>
                    </View>
                ))
            )
        }
        <View style={[styles.cards,styles.cardThree]}>
            <Text>Red</Text>
        </View>
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 20
    },
    paragraphText:{
        fontSize:10
    },
    container:{
        flex:1,
        flexDirection: 'column',
        gap:10,
        padding:8
    },
    img:{
        width:200,
        height: 200
    },
    movieContainer:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
        padding: 5,
        marginVertical: 10,
        backgroundColor:'orange'
    },
    // cards: {
    //     flex:1,
    //     flexWrap:'wrap',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width:100,
    //     height:100,
    //     borderRadius:10
    // },
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