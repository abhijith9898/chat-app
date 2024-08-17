import React, { useState } from 'react';
import { View, Text, Button, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import styles from './styles'

export default function SideBar() {

    const [isDarkMode, setIsDarkMode] = useState(false);
    const sidebarWidth = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            width: withSpring(sidebarWidth.value),
        };
    });

    const toggleSidebar = () => {
        sidebarWidth.value = sidebarWidth.value === 0 ? 200 : 0;
    };

    const handleLogout = () => {
        // Handle logout functionality
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Handle dark mode functionality
    };

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={toggleSidebar} style={styles.toggleButton}>
      <Text>☰</Text>
    </TouchableOpacity>
    <Animated.View style={[styles.sidebar, animatedStyles]}>
      <View style={styles.content}>
        <Button title="Logout" onPress={handleLogout} />
        <View style={styles.switchContainer}>
          <Text>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>
      </View>
    </Animated.View>
  </View>
  )
}