import React from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";

const GroceryStore = () => {
  // Dummy data for grocery stores
  const groceryStores = [
    {
      id: "1",
      name: "Freshco",
      address: "123 Main St",
      image: require("../../../assets/Freshco.png"),
    },
    {
      id: "2",
      name: "Nofrills",
      address: "456 Elm St",
      image: require("../../../assets/NoFrills.png"),
    },
    {
      id: "3",
      name: "Wallmart",
      address: "789 Oak St",
      image: require("../../../assets/Wallmart.png"),
    },
    {
      id: "4",
      name: "Loblaws",
      address: "789 Oak St",
      image: require("../../../assets/loblaws.png"),
    },
    {
      id: "4",
      name: "Merto",
      address: "733 finch St",
      image: require("../../../assets/metro.png"),
    },
    {
      id: "5",
      name: "Centra",
      address: "893 Eglinton St",
      image: require("../../../assets/centra.png"),
    },
    {
      id: "6",
      name: "Shoppers Drug Mart",
      address: "340 Albion St",
      image: require("../../../assets/Shoppers_Drug.png"),
    },
    // Add more grocery stores here...
  ];

  // Render item component for FlatList
  const renderStoreItem = ({ item }) => (
    <View style={styles.storeCard}>
      <Image source={item.image} style={styles.storeImage} />
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeAddress}>{item.address}</Text>
        {/* Add space for URL */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={groceryStores}
        renderItem={renderStoreItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  storeCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
  },
  storeImage: {
    backgroundColor: "#fff",
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  storeAddress: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default GroceryStore;
