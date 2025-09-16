import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation<any>();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    language: "",
    farmSize: "",
    mainCrop: "",
  });

  const languages = [
    "हिंदी (Hindi)",
    "English",
    "मराठी (Marathi)",
    "ગુજરાતી (Gujarati)",
    "ਪੰਜਾਬੀ (Punjabi)",
    "বাংলা (Bengali)",
    "தமிழ் (Tamil)",
    "తెలుగు (Telugu)",
  ];

  const handleSubmit = () => {
    if (isLogin) {
      if (!formData.phone) {
        Alert.alert("Phone number required", "Please enter your phone number");
        return;
      }
    } else {
      if (!formData.name || !formData.phone || !formData.location || !formData.language) {
        Alert.alert("All fields required", "Please fill in all required fields");
        return;
      }
    }

    Alert.alert(
      isLogin ? "Login Successful!" : "Registration Successful!",
      `Welcome ${formData.name || "farmer"}! Redirecting to dashboard...`
    );

    setTimeout(() => {
      navigation.replace("Dashboard"); // Replace to prevent going back
    }, 1500);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>
          {isLogin ? "Welcome Back, Farmer!" : "Join Smart Crop Advisory"}
        </Text>
        <Text style={styles.subtitle}>
          {isLogin
            ? "Login to access your personalized farming dashboard"
            : "Create your account and start your smart farming journey"}
        </Text>

        {!isLogin && (
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
        />

        {!isLogin && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Location (Village, District, State)"
              value={formData.location}
              onChangeText={(text) => setFormData({ ...formData, location: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Preferred Language"
              value={formData.language}
              onChangeText={(text) => setFormData({ ...formData, language: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Farm Size (acres)"
              value={formData.farmSize}
              onChangeText={(text) => setFormData({ ...formData, farmSize: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Main Crop"
              value={formData.mainCrop}
              onChangeText={(text) => setFormData({ ...formData, mainCrop: text })}
            />
          </>
        )}

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{isLogin ? "Login" : "Create Account"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.switchText}>
            {isLogin ? "Create New Account" : "Login Instead"}
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          By continuing, you agree to our Terms of Service and Privacy Policy
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    color: "gray",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  switchText: {
    marginTop: 15,
    textAlign: "center",
    color: "#4CAF50",
  },
  footerText: {
    marginTop: 10,
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});
