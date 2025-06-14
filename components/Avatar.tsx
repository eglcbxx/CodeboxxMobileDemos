/*
Avatar Component
----------------
Displays a user avatar with an image or initials.

Usage:
import Avatar from './components/Avatar';

<Avatar uri="https://example.com/photo.jpg" size={48} />
<Avatar initials="AB" size={40} />

Props:
- uri?: string // Image URL
- initials?: string // Fallback initials
- size?: number // Avatar size (default: 40)
*/

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface AvatarProps {
  uri?: string;
  initials?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ uri, initials, size = 40 }) => (
  <View style={[styles.container, { width: size, height: size, borderRadius: size / 2 }]}> 
    {uri ? (
      <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size / 2 }} />
    ) : (
      <Text style={styles.initials}>{initials || '?'}</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  initials: {
    fontSize: 18,
    color: '#555',
  },
});

export default Avatar;