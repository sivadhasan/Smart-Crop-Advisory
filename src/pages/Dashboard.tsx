import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Feather icons
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Dashboard = () => {
  const navigation = useNavigation<any>();

  const dashboardCards = [
    { id: "advisory", title: "Crop Advisory", description: "Get personalized farming recommendations", icon: "activity", color: "#4f46e5", route: "CropAdvisory", stats: "12 new tips" },
    { id: "pest-scanner", title: "Pest Scanner", description: "AI-powered pest & disease detection", icon: "bug", color: "#10b981", route: "PestScanner", stats: "95% accuracy" },
    { id: "weather", title: "Weather Updates", description: "Real-time weather alerts and forecasts", icon: "cloud", color: "#f97316", route: "Weather", stats: "Rain in 2 days" },
    { id: "market", title: "Market Prices", description: "Latest crop prices from local markets", icon: "trending-up", color: "#22c55e", route: "MarketPrices", stats: "₹2,500/quintal" },
  ];

  const handleCardClick = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Main Features</Text>
      <View style={styles.cardGrid}>
        {dashboardCards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={[styles.card, { backgroundColor: card.color }]}
            onPress={() => handleCardClick(card.route)}
          >
            <Icon name={card.icon} size={30} color="#fff" />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
            <Text style={styles.cardStats}>{card.stats}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#e0f7f4", padding: 12 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#111827", marginVertical: 8 },
  cardGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  card: { width: (width - 48) / 2, padding: 12, borderRadius: 12, marginBottom: 12 },
  cardTitle: { color: "#fff", fontWeight: "bold", marginTop: 8 },
  cardDescription: { color: "#fff", fontSize: 12, marginVertical: 4 },
  cardStats: { color: "#fff", fontSize: 10 },
});

export default Dashboard;
