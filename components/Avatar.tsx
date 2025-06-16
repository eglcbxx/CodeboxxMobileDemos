/*
Avatar Component
----------------
A user profile picture component that displays either an image or fallback initials.

Copy this file to your project's components folder and import it where needed.
Perfect for user profiles, comment sections, and contact lists.
*/

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface AvatarProps {
  uri?: string;
  initials?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ uri, initials, size = 40 }) => {
  const avatarStyle = { 
    width: size, 
    height: size, 
    borderRadius: size / 2 
  };

  return (
    <View style={[styles.container, avatarStyle]}> 
      {uri ? (
        <Image source={{ uri }} style={avatarStyle} />
      ) : (
        <Text style={styles.initials}>{initials || '?'}</Text>
      )}
    </View>
  );
};

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