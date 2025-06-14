/*
Classes and Objects
------------------
This component demonstrates how to define and use classes and objects in JavaScript/TypeScript.

How to use:
1. Define a class with properties and methods.
2. Create an instance (object) of the class using 'new'.
3. Call methods on the object.

Example:
class Person { ... }
const person = new Person('Alice');
person.greet();
*/

import React from 'react';
import { Text, View } from 'react-native';

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}

const ClassesAndObjects = () => {
  // Classes and objects
  const person = new Person('Alice');
  return (
    <View>
      <Text>{person.greet()}</Text>
    </View>
  );
};

export default ClassesAndObjects;