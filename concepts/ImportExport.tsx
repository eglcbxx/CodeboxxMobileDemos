/*
Import Export
-------------
ES6 module system for importing and exporting functions, components, and variables.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding module structure and code organization patterns.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Named exports - multiple exports from a module
export const utilityFunction = (message: string): string => {
  return `Utility: ${message}`;
};

export const CONSTANTS = {
  API_URL: 'https://api.example.com',
  MAX_RETRIES: 3,
  TIMEOUT: 5000,
};

export interface User {
  id: number;
  name: string;
  email: string;
}

// Export class
export class DataProcessor {
  private data: any[] = [];

  addData(item: any): void {
    this.data.push(item);
  }

  getData(): any[] {
    return [...this.data];
  }

  getCount(): number {
    return this.data.length;
  }
}

// Re-export from other modules (examples)
// export { default as VariableDeclaration } from './VariableDeclaration';
// export { DataTypes } from './DataTypes';
// export * from './utilities'; // Export all named exports

// Component that demonstrates import patterns
const ImportExport = () => {
  // Using exported items within the same module
  const processor = new DataProcessor();
  processor.addData({ name: 'Item 1' });
  processor.addData({ name: 'Item 2' });

  const user: User = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  };

  const utilityResult = utilityFunction('Hello from utility');

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Import/Export Patterns</Text>
        <Text style={styles.example}>Utility Result: {utilityResult}</Text>
        <Text style={styles.example}>API URL: {CONSTANTS.API_URL}</Text>
        <Text style={styles.example}>Max Retries: {CONSTANTS.MAX_RETRIES}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Class Export Usage</Text>
        <Text style={styles.example}>Data Count: {processor.getCount()}</Text>
        <Text style={styles.example}>Data Items: {JSON.stringify(processor.getData())}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Interface Usage</Text>
        <Text style={styles.example}>User: {user.name} ({user.email})</Text>
        <Text style={styles.example}>User ID: {user.id}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Common Import Patterns</Text>
        <Text style={styles.code}>// Default import</Text>
        <Text style={styles.code}>import React from 'react';</Text>
        
        <Text style={styles.code}>// Named imports</Text>
        <Text style={styles.code}>import {'{ useState, useEffect }'} from 'react';</Text>
        
        <Text style={styles.code}>// Mixed imports</Text>
        <Text style={styles.code}>import React, {'{ useState }'} from 'react';</Text>
        
        <Text style={styles.code}>// Namespace import</Text>
        <Text style={styles.code}>import * as utils from './utils';</Text>
        
        <Text style={styles.code}>// Aliased imports</Text>
        <Text style={styles.code}>import {'{ Component as Comp }'} from './Component';</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Export Types</Text>
        <Text style={styles.note}>✓ Default export: export default Component</Text>
        <Text style={styles.note}>✓ Named export: export const func = () =&gt; {'{}'}</Text>
        <Text style={styles.note}>✓ Export class: export class MyClass {'{}'}</Text>
        <Text style={styles.note}>✓ Export interface: export interface User {'{}'}</Text>
        <Text style={styles.note}>✓ Re-export: export {'{ Item }'} from './module'</Text>
      </View>
    </View>
  );
};

// Default export - one per module
export default ImportExport;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  section: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  example: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
    fontFamily: 'monospace',
  },
  code: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
    fontFamily: 'monospace',
    backgroundColor: '#f8f8f8',
    padding: 2,
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
});