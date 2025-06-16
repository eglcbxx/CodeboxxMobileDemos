/*
Access Modifiers
----------------
TypeScript class access modifiers (public, private, protected) for controlling property and method visibility.

Copy this file to your project's concepts folder and import it where needed.
Perfect for implementing encapsulation and data protection in object-oriented programming.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Base class demonstrating all access modifiers
class Vehicle {
  public brand: string = 'Toyota';           // Accessible everywhere
  private engineNumber: string = 'EN123';   // Only within this class
  protected model: string = 'Camry';        // Within this class and subclasses

  // Public method accessible from anywhere
  public getInfo(): string {
    return `${this.brand} ${this.model}`;
  }

  // Private method only accessible within this class
  private getEngineNumber(): string {
    return this.engineNumber;
  }

  // Protected method accessible in this class and subclasses
  protected getFullDetails(): string {
    return `${this.brand} ${this.model} - Engine: ${this.getEngineNumber()}`;
  }
}

// Subclass demonstrating inheritance with access modifiers
class Car extends Vehicle {
  public year: number = 2023;

  // Can access protected members from parent class
  public getCarDetails(): string {
    return `${this.getFullDetails()} (${this.year})`;
  }

  // Cannot access private members from parent class
  // This would cause error: this.getEngineNumber()
}

// User class demonstrating external access
class User {
  public name: string = 'John';
  private password: string = 'secret123';

  // Public getter for controlled access to private data
  public getName(): string {
    return this.name;
  }

  // Public method that uses private data internally
  public authenticate(inputPassword: string): boolean {
    return this.password === inputPassword;
  }
}

const AccessModifiers = () => {
  const vehicle = new Vehicle();
  const car = new Car();
  const user = new User();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Public Access</Text>
        <Text style={styles.example}>Brand: {vehicle.brand}</Text>
        <Text style={styles.example}>Info: {vehicle.getInfo()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Inheritance & Protected</Text>
        <Text style={styles.example}>Car Details: {car.getCarDetails()}</Text>
        <Text style={styles.example}>Car Year: {car.year}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Private with Controlled Access</Text>
        <Text style={styles.example}>User: {user.getName()}</Text>
        <Text style={styles.example}>Auth Valid: {user.authenticate('secret123') ? 'Yes' : 'No'}</Text>
        <Text style={styles.example}>Auth Invalid: {user.authenticate('wrong') ? 'Yes' : 'No'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Access Patterns</Text>
        <Text style={styles.note}>✓ Public: Accessible everywhere</Text>
        <Text style={styles.note}>✓ Protected: Accessible in class & subclasses</Text>
        <Text style={styles.note}>✓ Private: Only accessible within the same class</Text>
      </View>
    </View>
  );
};

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
  note: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
});

export default AccessModifiers;