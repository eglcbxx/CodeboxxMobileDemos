/*
InfoCard Component
-----------------
Displays a card with an optional title and content.

Usage:
import InfoCard from './components/InfoCard';

<InfoCard title="Card Title">
  <Text>Some content goes here.</Text>
</InfoCard>

<InfoCard backgroundColor="#e0f7fa">
  <Text>Custom background color!</Text>
</InfoCard>

Props:
- title?: string // Optional card title
- children: ReactNode // Content inside the card
- backgroundColor?: string // Card background color (default: #f0f0f0)
*/

import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface InfoCardProps {
  title?: string;
  children: ReactNode;
  backgroundColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, backgroundColor }) => {
  return (
    <View style={[styles.card, { backgroundColor: backgroundColor || '#f0f0f0' }]}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {},
});

export default InfoCard;
