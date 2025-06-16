/*
CardList Component
------------------
A reusable FlatList wrapper for rendering lists of cards or items with consistent styling.

Copy this file to your project's components folder and import it where needed.
Perfect for displaying lists of cards, items, or any repeated content with scroll functionality.
*/

import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

interface CardListProps<T> {
  data: T[];
  renderItem: ({ item }: { item: T }) => React.ReactElement;
  keyExtractor: (item: T, index: number) => string;
}

function CardList<T>({ data, renderItem, keyExtractor }: CardListProps<T>) {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
});

export default CardList;