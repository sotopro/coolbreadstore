import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { PRODUCTS } from "../../constants";

const Product = ({ route }) => {
  const { productId } = route.params;

  const product = PRODUCTS.find((product) => product.id === productId);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>USD {product.price}</Text>
      <Text style={styles.weight}>weight: {product.weight}</Text>
    </View>
  );
};

export default Product;
