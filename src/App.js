import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeProvider, useTheme } from './ThemeContext';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationAchievements } from './components/EducationAchievements';
import { Footer } from './components/Footer';

function AppShell() {
  const { colors } = useTheme();

  return (
    <View style={[styles.app, { backgroundColor: colors.background }]}>
      <NavBar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <EducationAchievements />
      <Footer />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: '100%',
    transitionProperty: 'background-color',
    transitionDuration: '300ms',
  },
});
