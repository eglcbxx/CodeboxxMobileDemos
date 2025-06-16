/*
Classes and Objects
-------------------
Object-oriented programming with TypeScript classes, constructors, methods, and inheritance.

Copy this file to your project's concepts folder and import it where needed.
Perfect for implementing structured data models and object-oriented design patterns.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Basic class with constructor and methods
class Person {
  public name: string;
  public age: number;
  private id: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.id = Math.random().toString(36).substr(2, 9);
  }

  greet(): string {
    return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  getId(): string {
    return this.id;
  }

  celebrateBirthday(): void {
    this.age++;
  }
}

// Class with static methods and properties
class MathHelper {
  static PI = 3.14159;

  static calculateCircleArea(radius: number): number {
    return MathHelper.PI * radius * radius;
  }

  static formatNumber(num: number): string {
    return num.toFixed(2);
  }
}

// Inheritance example
class Employee extends Person {
  public department: string;
  public salary: number;

  constructor(name: string, age: number, department: string, salary: number) {
    super(name, age); // Call parent constructor
    this.department = department;
    this.salary = salary;
  }

  greet(): string {
    return `${super.greet()} I work in ${this.department}.`;
  }

  getAnnualSalary(): number {
    return this.salary * 12;
  }

  promote(raise: number): void {
    this.salary += raise;
  }
}

// Class with getters and setters
class BankAccount {
  private _balance: number = 0;
  public readonly accountNumber: string;

  constructor(initialBalance: number = 0) {
    this._balance = initialBalance;
    this.accountNumber = 'ACC' + Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  get balance(): number {
    return this._balance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
    }
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      return true;
    }
    return false;
  }
}

const ClassesAndObjects = () => {
  // Creating instances
  const person = new Person('Alice', 28);
  const employee = new Employee('Bob', 32, 'Engineering', 5000);
  const account = new BankAccount(1000);

  // Using static methods
  const circleArea = MathHelper.calculateCircleArea(5);

  // Modifying objects
  person.celebrateBirthday();
  employee.promote(500);
  account.deposit(250);
  account.withdraw(100);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Basic Class Usage</Text>
        <Text style={styles.example}>Person: {person.greet()}</Text>
        <Text style={styles.example}>ID: {person.getId()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Inheritance</Text>
        <Text style={styles.example}>Employee: {employee.greet()}</Text>
        <Text style={styles.example}>Annual Salary: ${employee.getAnnualSalary()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Static Methods</Text>
        <Text style={styles.example}>Circle Area (r=5): {MathHelper.formatNumber(circleArea)}</Text>
        <Text style={styles.example}>Pi Constant: {MathHelper.PI}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Encapsulation (Getters/Setters)</Text>
        <Text style={styles.example}>Account: {account.accountNumber}</Text>
        <Text style={styles.example}>Balance: ${account.balance}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>OOP Principles</Text>
        <Text style={styles.note}>✓ Encapsulation: Private properties with controlled access</Text>
        <Text style={styles.note}>✓ Inheritance: Employee extends Person</Text>
        <Text style={styles.note}>✓ Polymorphism: Overriding greet() method</Text>
        <Text style={styles.note}>✓ Abstraction: Complex logic hidden behind simple methods</Text>
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

export default ClassesAndObjects;