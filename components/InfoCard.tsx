/*
InfoCard Component
------------------
A card container with optional title and customizable background for displaying content.

Copy this file to your project's components folder and import it where needed.
Perfect for displaying information blocks, feature highlights, and content sections.
*/

import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface InfoCardProps {
  title?: string;
  children: ReactNode;
  backgroundColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, backgroundColor = '#f0f0f0' }) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
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
