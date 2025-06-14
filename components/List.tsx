/*
List Component
--------------
Renders a list of items using FlatList, with an empty state message.

Usage:
import List from './components/List';

<List
  data={myDataArray}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id}
/>

Props:
- data: T[] // Array of items to display
- renderItem: ListRenderItem<T> // Function to render each item
- keyExtractor?: (item: T, index: number) => string // Unique key for each item (optional)
*/

import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';

interface ListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
  keyExtractor?: (item: T, index: number) => string;
}

const List = <T extends unknown>({ data, renderItem, keyExtractor }: ListProps<T>) => {
  if (!data || data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No items to display.</Text>
      </View>
    );
  }

  return (
    <FlatList<T>
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor || ((item, index) => index.toString())}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});

export default List;