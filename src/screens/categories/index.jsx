import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./styles";
import CategoryItem from "../../components/category-item";

const Categories = ({ navigation }) => {
  const categories = useSelector((state) => state.categories.data);
  const onSelected = (item) => {
    navigation.navigate("Products", {
      categoryId: item.id,
      name: item.name,
      color: item.color,
    });
  };

  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;

  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Categories;
