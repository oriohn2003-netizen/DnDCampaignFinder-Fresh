import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>D&D Campaign Finder</Text>
        <Text style={styles.subtitle}>Find Your Adventure</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Welcome Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome, Adventurer!</Text>
          <Text style={styles.description}>
            Connect with Dungeon Masters and fellow players to find your next epic D&D campaign.
          </Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          
          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>🎲 Campaign Board</Text>
            <Text style={styles.featureDescription}>Browse available campaigns and join adventures</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>⚔️ Create Campaign</Text>
            <Text style={styles.featureDescription}>Post your own campaign and find players</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>🧙‍♂️ AI Guild Master</Text>
            <Text style={styles.featureDescription}>Get campaign guidance and tips</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.featureCard}>
            <Text style={styles.featureTitle}>👤 Profile</Text>
            <Text style={styles.featureDescription}>Manage your character and preferences</Text>
          </TouchableOpacity>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Platform Statistics</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>247</Text>
              <Text style={styles.statLabel}>Active Campaigns</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>1,543</Text>
              <Text style={styles.statLabel}>Registered Players</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>89</Text>
              <Text style={styles.statLabel}>Dungeon Masters</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>2,891</Text>
              <Text style={styles.statLabel}>Sessions Completed</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Start your legendary adventure today!</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#dc2626',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#fecaca',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  featureCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#dc2626',
  },
  statLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
  },
  footer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  footerText: {
    fontSize: 16,
    color: '#6b7280',
    fontStyle: 'italic',
  },
});});
