import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Platform } from 'react-native';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: number;
}

interface CardProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export function GridLayout({
  children,
  columns = 2,
  spacing = 12,
}: GridLayoutProps) {
  const { width } = useWindowDimensions();

  const itemWidth = (width - spacing * (columns + 1)) / columns;
  const items = React.Children.toArray(children);
  const rows: React.ReactNode[][] = [];

  for (let i = 0; i < items.length; i += columns) {
    rows.push(items.slice(i, i + columns));
  }

  return (
    <View style={[styles.container, { padding: spacing }]}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={[styles.row, { marginBottom: spacing }]}>
          {row.map((item, colIndex) => (
            <View
              key={colIndex}
              style={[
                styles.item,
                {
                  width: itemWidth,
                  marginRight: colIndex < columns - 1 ? spacing : 0,
                },
              ]}
            >
              {item}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

export function Card({ title, subtitle, children }: CardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  item: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    // ✅ Web үшін boxShadow, Native үшін elevation
    ...Platform.select({
      web: {
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      },
      default: {
        elevation: 3,
      },
    }),
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
});