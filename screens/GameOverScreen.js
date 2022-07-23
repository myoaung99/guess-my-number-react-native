import React from "react";
import {View, Text, StyleSheet, Image, Dimensions, useWindowDimensions, ScrollView} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Color from "../constants/Colors";
import image from "react-native-web/dist/exports/Image";

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const GameOverScreen = ({ onNewGame, pickNumber, guesses }) => {
  const {width: deviceWidth, height: deviceHeight} = useWindowDimensions();

  //  potriate
  let imageSize = 300;

  // small screen size
  if(deviceWidth < 380){
    imageSize = 150;
  }

  // landscape screen size mode
  if(deviceHeight < 380){
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize/2,
  }


  const screenSpacing = {
    paddingTop: deviceHeight < 400 ? 20 : 60,
  }

  return (
      <ScrollView>
        <View style={[styles.screen, screenSpacing]}>

          <Title>Game Over</Title>
          <View style={[styles.imageContainer, imageStyle]}>
            <Image
                style={styles.image}
                resizeMode="contain"
                source={require("../assets/images/success.png")}
            />
          </View>

          <Text style={styles.summaryText}>
            Your phone needed <Text style={styles.highLightText}>{guesses}</Text>{" "}
            rounds to guess the number{" "}
            <Text style={styles.highLightText}>{pickNumber}</Text>.
          </Text>
          <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>

        </View>
      </ScrollView>

  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: "center",
  },

  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    alignItems: "center",
    margin: deviceWidth < 350 ? 20 : 30,

    borderWidth: 3,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 200,
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: deviceWidth < 350 ? 18 : 20,
    textAlign: "center",
    marginBottom: deviceWidth < 350 ? 15 : 30,
  },
  highLightText: {
    fontFamily: "open-sans-bold",
    color: Color.primary500,
  },
  landscapeImageContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignItems: "center",
  }
});
