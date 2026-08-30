import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from './theme';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { EducationAchievements } from './components/EducationAchievements';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <View style={styles.app}>
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

const styles = StyleSheet.create({
  app: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background,
  },
});
