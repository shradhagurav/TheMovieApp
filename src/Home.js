import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://192.168.43.31:3000/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const renderFirstItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('List', { movie: item })}>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{ uri: item.Poster }}
          style={{
            width: "90%",
            height: 400,
            resizeMode: "cover",
            borderRadius: 10,
          }}
        />
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={{ alignItems: "center" }}>
      <Image
        source={{ uri: item.Poster }}
        style={{
          width: "80%",
          height: 100,
          resizeMode: "cover",
          borderRadius: 10,
        }}
      />

      {item.title && (
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 13,
            marginTop: 5,
            color: "white",
          }}
        >
          {item.title}
        </Text>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <Text
        style={{ fontWeight: "bold", fontSize: 18, margin: 20, color: "white" }}
      >
        Trending Movies
      </Text>
      <Carousel
        layout="default"
        data={movies}
        renderItem={renderFirstItem}
        sliderWidth={Dimensions.get("window").width}
        itemWidth={Dimensions.get("window").width * 0.9}
      />

      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            margin: 10,
            color: "white",
          }}
        >
          Picked for Today
        </Text>
        <Carousel
          layout="default"
          data={movies}
          renderItem={renderItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width / 3}
        />
      </View>
      {/* <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            marginTop: 0,
            marginLeft: 5,
            color: "white",
          }}
        >
          Matched to You
        </Text>
        <Carousel
          layout="default"
          data={movies}
          renderItem={renderItem}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width / 3}
        />
      </View> */}
    </View>
  );
};

export default Home;
