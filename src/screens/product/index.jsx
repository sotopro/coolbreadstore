import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";

const Product = () => {
  const product = useSelector((state) => state.products.selected);

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>USD {product.price}</Text>
      <Text style={styles.weight}>weight: {product.weight}</Text>
    </View>
  );
};

export default Product;
