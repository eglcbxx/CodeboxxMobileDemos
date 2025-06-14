/*
Access Modifiers (public, private, protected)
---------------------------------------------
This component demonstrates how to use access modifiers in TypeScript classes.

How to use:
1. Use 'public', 'private', or 'protected' before class properties or methods.
2. Access public members from outside the class.
3. Private and protected members are not accessible from outside the class.

Example:
class Demo { public x; private y; protected z; }
*/

import React from 'react';
import { Text, View } from 'react-native';

class Demo {
  public publicValue = 'Public';
  private privateValue = 'Private';
  protected protectedValue = 'Protected';
  getValues() {
    return `${this.publicValue}, ${this.privateValue}, ${this.protectedValue}`;
  }
}

const AccessModifiers = () => {
  // Access modifiers (public, private, protected)
  const demo = new Demo();
  return (
    <View>
      <Text>{demo.getValues()}</Text>
    </View>
  );
};

export default AccessModifiers;