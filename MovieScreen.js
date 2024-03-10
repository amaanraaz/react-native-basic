// src/screens/MoviesScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const MoviesScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <View>
      <Text>Movies Screen</Text>
      {movies.map((movie) => (
        <Text key={movie.id}>{movie.title}</Text>
      ))}
    </View>
  );
};

export default MoviesScreen;
