import { Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./screenheader.style";
import { icons } from "../../../constants";


const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  return (
   <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
    <Image 
    source={iconUrl}
      resizeMode="cover"
      style={styles.btnImg(dimension)}
    />
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn