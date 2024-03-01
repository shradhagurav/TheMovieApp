import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const List = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black' }}>
      <Image
        source={{ uri: movie.Poster }}
        style={{
          width: 300,
          height: 400,
          resizeMode: 'cover',
          borderRadius: 10,
        }}
      />
      <Text style={{ color: "white", margin: 10 , fontWeight:'bold',fontSize:18 }}>{movie.title}</Text>
      <Text style={{ color: "white", margin: 5 }}>
        Released: {movie.release_date} | Rating: {movie.vote_average}
      </Text>
      <TouchableOpacity style={{ backgroundColor: 'red', padding: 10, paddingRight: 120, paddingLeft: 120, borderRadius: 5, flexDirection: 'row', alignItems: 'center' }}>
        <Icon name="play" size={20} color="white" style={{ marginRight: 5 }} />
        <Text style={{ color: 'white', fontSize:18 }}>Play</Text>
      </TouchableOpacity>
      <Text style={{ color: "white", margin: 10 }}>{movie.overview}</Text>
     
    </View>
  )
}

export default List;



//https://dummyapi.online/api/movies
//https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies
