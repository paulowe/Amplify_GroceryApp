import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { connect, useDispatch } from "react-redux";
import { loadProducts } from "../src/redux/actions/product";
import store from "../src/redux/store";
import { grey } from "../utils/colors";
import { DataStore } from "@aws-amplify/datastore";
import { Product } from "../src/models";

const categories = [
  { name: "Fruits", img: "food-apple" },
  { name: "Veggies", img: "leaf" },
  { name: "Dairy", img: "cup" },
  { name: "Meat", img: "cow" },
  { name: "Frozen", img: "cube-outline" },
  { name: "Baking/Snacks", img: "muffin" },
  { name: "Drinks", img: "glass-cocktail" },
  { name: "Condiments", img: "food-variant" },
];

const ProductCategory = (props) => {
  const dispatch = useDispatch();
  const groceryListID = props.route.params.groceryList.id;
  const { products } = store.getState();
  useEffect(() => {
    fetchProducts();
    // const subscription = DataStore.observe(Product).subscribe((msg) => {
    //   console.log(msg.model, msg.opType, msg.element);
    //   fetchProducts();
    // });
    // return () => subscription.unsubscribe();
  }, []);

  async function fetchProducts() {
    try {
      const data = (await DataStore.query(Product)).filter(
        (c) => c.groceryList.id === groceryListID
      );
      data ? dispatch(loadProducts(data)) : dispatch(loadProducts([]));
      console.log("products retrieved successfully!");
    } catch (error) {
      console.log("Error retrieving products", error);
    }
  }

  function goToProductList(category) {
    return props.navigation.push("ProductList", { category, groceryListID });
  }

  function showCategories() {
    return (
      <View style={styles.container}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            onPress={() => goToProductList(cat.name)}
            style={styles.vignetteItem}
            key={index}
          >
            <MaterialCommunityIcons name={cat.img} size={100} color={grey} />

            <View style={styles.text}>
              <Text style={{ fontSize: 18 }}> {cat.name.toUpperCase()} </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return (
    <View>
      {Platform.OS !== "ios" && Platform.OS !== "android" ? (
        <View>{showCategories()}</View>
      ) : (
        <ScrollView>{showCategories()}</ScrollView>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductCategory);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    flexDirection: "row",
    padding: 8,
    flexWrap: "wrap",
  },
  vignetteItem: {
    alignItems: "center",
    width: 150,
    height: 150,
    margin: 10,
  },
  button: {
    marginVertical: 10,
    margin: 20,
  },
  text: {
    textAlign: "center",
  },
});
