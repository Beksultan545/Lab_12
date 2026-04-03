import React, { useState } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Image,
  Platform,
} from 'react-native';

import { GridLayout, Card } from './step5/src/components/GridLayout';
import { ResponsiveHeader, ResponsiveContainer } from './step5/src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow } from './step5/src/components/AdaptiveLayout';

// ─── HOME SCREEN ─────────────────────────────────────────────────────────────

function HomeScreen() {
  return (
    <AdaptiveLayout
      content={
        <View>
          <StatsRow
            stats={[
              { label: 'Users', value: '1,200' },
              { label: 'Sales', value: '340' },
              { label: 'Rating', value: '4.8' },
            ]}
          />
          <FeatureCard
            icon="🚀"
            title="Fast Performance"
            description="Optimized for all screen sizes and orientations"
            variant="primary"
          />
          <FeatureCard
            icon="📱"
            title="Responsive Design"
            description="Adapts to phone, tablet, portrait and landscape"
            variant="secondary"
          />
          <FeatureCard
            icon="🎨"
            title="Clean UI"
            description="Modern design with Flexbox layout system"
            variant="accent"
          />

          <Text style={styles.sectionTitle}>Grid Layout</Text>
          <GridLayout columns={2} spacing={12}>
            <Card title="Card 1" subtitle="Subtitle 1" />
            <Card title="Card 2" subtitle="Subtitle 2" />
            <Card title="Card 3" subtitle="Subtitle 3" />
            <Card title="Card 4" subtitle="Subtitle 4" />
          </GridLayout>
        </View>
      }
    />
  );
}

// ─── PROFILE SCREEN ───────────────────────────────────────────────────────────

function ProfileScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      {/* Avatar */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>johndoe@email.com</Text>
      </View>

      {/* Stats */}
      <StatsRow
        stats={[
          { label: 'Posts', value: '128' },
          { label: 'Followers', value: '4.2K' },
          { label: 'Following', value: '312' },
        ]}
      />

      {/* Info cards */}
      <Text style={styles.sectionTitle}>About Me</Text>
      <View style={styles.infoCard}>
        <InfoRow icon="📍" label="Location" value="Almaty, Kazakhstan" />
        <InfoRow icon="💼" label="Occupation" value="Mobile Developer" />
        <InfoRow icon="🎓" label="Education" value="Computer Science" />
        <InfoRow icon="📅" label="Joined" value="March 2024" />
      </View>

      <Text style={styles.sectionTitle}>My Activity</Text>
      <GridLayout columns={2} spacing={12}>
        <Card title="🏆 Achievements" subtitle="12 earned" />
        <Card title="📊 Progress" subtitle="Level 5" />
        <Card title="⭐ Reviews" subtitle="4.9 avg" />
        <Card title="🎯 Goals" subtitle="3 active" />
      </GridLayout>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

// ─── INFO ROW COMPONENT ───────────────────────────────────────────────────────

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

// ─── SETTINGS SCREEN ──────────────────────────────────────────────────────────

function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(true);
  const [analytics, setAnalytics] = useState(false);

  return (
    <ScrollView style={styles.screenContainer}>

      <Text style={styles.sectionTitle}>Account</Text>
      <View style={styles.infoCard}>
        <SettingsButton icon="👤" label="Edit Profile" />
        <SettingsButton icon="🔑" label="Change Password" />
        <SettingsButton icon="📧" label="Email Preferences" />
      </View>

      <Text style={styles.sectionTitle}>Preferences</Text>
      <View style={styles.infoCard}>
        <SettingsToggle
          icon="🔔"
          label="Notifications"
          value={notifications}
          onToggle={() => setNotifications(!notifications)}
        />
        <SettingsToggle
          icon="🌙"
          label="Dark Mode"
          value={darkMode}
          onToggle={() => setDarkMode(!darkMode)}
        />
        <SettingsToggle
          icon="📍"
          label="Location Access"
          value={location}
          onToggle={() => setLocation(!location)}
        />
        <SettingsToggle
          icon="📊"
          label="Analytics"
          value={analytics}
          onToggle={() => setAnalytics(!analytics)}
        />
      </View>

      <Text style={styles.sectionTitle}>Support</Text>
      <View style={styles.infoCard}>
        <SettingsButton icon="❓" label="Help Center" />
        <SettingsButton icon="📄" label="Privacy Policy" />
        <SettingsButton icon="⭐" label="Rate the App" />
      </View>

      <Text style={styles.sectionTitle}>Danger Zone</Text>
      <View style={styles.infoCard}>
        <SettingsButton icon="🚪" label="Log Out" danger />
        <SettingsButton icon="🗑️" label="Delete Account" danger />
      </View>

      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

// ─── SETTINGS HELPERS ─────────────────────────────────────────────────────────

function SettingsButton({
  icon,
  label,
  danger = false,
}: {
  icon: string;
  label: string;
  danger?: boolean;
}) {
  return (
    <TouchableOpacity style={styles.infoRow}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <Text style={[styles.infoLabel, danger && { color: '#e53935', flex: 1 }]}>{label}</Text>
      <Text style={styles.infoValue}>›</Text>
    </TouchableOpacity>
  );
}

function SettingsToggle({
  icon,
  label,
  value,
  onToggle,
}: {
  icon: string;
  label: string;
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoIcon}>{icon}</Text>
      <Text style={[styles.infoLabel, { flex: 1 }]}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: '#ccc', true: '#0066cc' }}
        thumbColor={value ? '#fff' : '#fff'}
      />
    </View>
  );
}

// ─── BOTTOM TAB BAR ───────────────────────────────────────────────────────────

type TabName = 'Home' | 'Profile' | 'Settings';

function BottomTabBar({
  active,
  onPress,
}: {
  active: TabName;
  onPress: (tab: TabName) => void;
}) {
  const tabs: { name: TabName; icon: string }[] = [
    { name: 'Home', icon: '🏠' },
    { name: 'Profile', icon: '👤' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <View style={styles.tabBar}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={styles.tabItem}
          onPress={() => onPress(tab.name)}
        >
          <Text style={styles.tabIcon}>{tab.icon}</Text>
          <Text style={[styles.tabLabel, active === tab.name && styles.tabLabelActive]}>
            {tab.name}
          </Text>
          {active === tab.name && <View style={styles.tabIndicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('Home');

  const titles: Record<TabName, string> = {
    Home: 'My App',
    Profile: 'Profile',
    Settings: 'Settings',
  };

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>

        {/* HEADER */}
        <ResponsiveHeader
          title={titles[activeTab]}
          leftAction={{
            icon: '☰',
            onPress: () => console.log('Menu'),
          }}
          rightAction={{
            icon: activeTab === 'Home' ? '🔔' : '✏️',
            onPress: () => console.log('Action'),
          }}
        />

        {/* CONTENT */}
        <ResponsiveContainer>
          {activeTab === 'Home' && <HomeScreen />}
          {activeTab === 'Profile' && <ProfileScreen />}
          {activeTab === 'Settings' && <SettingsScreen />}
        </ResponsiveContainer>

        {/* BOTTOM TAB BAR */}
        <BottomTabBar active={activeTab} onPress={setActiveTab} />

      </View>
    </SafeAreaProvider>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    marginTop: 8,
    paddingHorizontal: 16,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  // Profile
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    backgroundColor: '#fff',
    marginBottom: 12,
    ...Platform.select({
      web: { boxShadow: '0px 1px 3px rgba(0,0,0,0.1)' },
      default: { elevation: 2 },
    }),
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#888',
  },

  // Info card
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 8,
    ...Platform.select({
      web: { boxShadow: '0px 1px 3px rgba(0,0,0,0.08)' },
      default: { elevation: 2 },
    }),
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoIcon: {
    fontSize: 18,
    marginRight: 12,
  },
  infoLabel: {
    fontSize: 15,
    color: '#333',
    flex: 1,
  },
  infoValue: {
    fontSize: 14,
    color: '#888',
  },

  // Bottom tab bar
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingBottom: Platform.OS === 'ios' ? 20 : 8,
    paddingTop: 8,
    ...Platform.select({
      web: { boxShadow: '0px -1px 4px rgba(0,0,0,0.08)' },
      default: { elevation: 8 },
    }),
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tabIcon: {
    fontSize: 22,
    marginBottom: 2,
  },
  tabLabel: {
    fontSize: 11,
    color: '#999',
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#0066cc',
    fontWeight: '700',
  },
  tabIndicator: {
    position: 'absolute',
    top: -8,
    width: 32,
    height: 3,
    backgroundColor: '#0066cc',
    borderRadius: 2,
  },
});