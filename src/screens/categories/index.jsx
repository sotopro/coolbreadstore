import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";

import { styles } from "./styles";
import CategoryItem from "../../components/category-item";
import { CATEGORIES } from "../../constants";

const Categories = ({ navigation }) => {
  const onSelected = (item) => {
    console.warn("item", item);
  };

  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Categories;
