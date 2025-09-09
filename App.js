import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>🎲 D&D Campaign Finder</Text>
        <Text style={styles.subtitle}>Connect Players & DMs</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🏰 Campaign Board</Text>
        <Text style={styles.cardText}>Browse active campaigns looking for players</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚔️ Create Campaign</Text>
        <Text style={styles.cardText}>Start your own D&D adventure</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🧙‍♂️ Guild Master AI</Text>
        <Text style={styles.cardText}>Get campaign advice and DM tips</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💬 Messaging</Text>
        <Text style={styles.cardText}>Connect with players and DMs</Text>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Find Your Adventure</Text>
      </TouchableOpacity>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Connect across Discord, Roll20, Foundry & more!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#d4af37',
    fontWeight: '600',
  },
  card: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#d4af37',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  cardText: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#d4af37',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
  },
  buttonText: {
    color: '#1a1a1a',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  footerText: {
    color: '#888',
    fontSize: 12,
    textAlign: 'center',
  },
});