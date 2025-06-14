/*
CardList Component
------------------
Renders a list of cards using FlatList.

Usage:
import CardList from './components/CardList';

<CardList
  data={dataArray}
  renderItem={({ item }) => <YourCardComponent item={item} />}
  keyExtractor={(item, idx) => item.id || idx.toString()}
/>

Props:
- data: T[] // Array of items
- renderItem: ({ item }: { item: T }) => React.ReactElement // Render function
- keyExtractor: (item: T, index: number) => string // Unique key for each item
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