/*
Scope
-----
Variable scope patterns: global, function, block, and lexical scoping in JavaScript/TypeScript.

Copy this file to your project's concepts folder and import it where needed.
Perfect for understanding variable accessibility and scoping rules.
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Global scope - accessible everywhere
const globalVar = 'I am global';
let globalCounter = 0;

// Function scope example
function functionScopeExample() {
  const functionScoped = 'I am function scoped';
  // Note: var is function scoped (shown for educational purposes)
  // eslint-disable-next-line no-var
  var oldStyleFunctionScoped = 'I am also function scoped';
  
  // This is only accessible within this function
  return `${functionScoped} and ${oldStyleFunctionScoped}`;
}

// Block scope demonstration
function blockScopeExample() {
  let outerVariable = 'I am in the outer scope';
  const results: string[] = [];
  
  if (true) {
    let blockScoped = 'I am block scoped with let';
    const alsoBlockScoped = 'I am block scoped with const';
    // eslint-disable-next-line no-var
    var notBlockScoped = 'I am NOT block scoped (var)';
    
    results.push(blockScoped);
    results.push(alsoBlockScoped);
  }
  
  // blockScoped and alsoBlockScoped are NOT accessible here
  // but notBlockScoped IS accessible (var doesn't respect block scope)
  results.push(notBlockScoped);
  results.push(outerVariable);
  
  return results;
}

// Lexical scoping (closures)
function outerFunction(x: number) {
  const outerVariable = `Outer: ${x}`;
  
  // Inner function has access to outer function's variables
  function innerFunction(y: number) {
    const innerVariable = `Inner: ${y}`;
    // Can access both outer and inner variables
    return `${outerVariable}, ${innerVariable}`;
  }
  
  return innerFunction;
}

// Variable shadowing
function shadowingExample() {
  const name = 'Outer';
  const results: string[] = [];
  
  results.push(`Outer scope: ${name}`);
  
  if (true) {
    const name = 'Inner'; // This shadows the outer 'name'
    results.push(`Inner scope: ${name}`);
  }
  
  results.push(`Back to outer: ${name}`); // Original 'name' is accessible again
  
  return results;
}

// Module scope (this entire file)
const moduleScoped = 'I am module scoped';

const Scope = () => {
  // Component function scope
  const componentScoped = 'I am component scoped';
  globalCounter++; // Modifying global variable
  
  // Local function scope
  function localFunction() {
    const localToFunction = 'I am local to this function';
    return localToFunction;
  }
  
  // Block scope within component
  let blockMessage = '';
  {
    const blockScoped = 'I am in a block';
    blockMessage = blockScoped; // Assigning to outer variable
  }
  
  // Using closure example
  const closure = outerFunction(42);
  const closureResult = closure(24);
  
  // Other examples
  const functionResult = functionScopeExample();
  const blockResults = blockScopeExample();
  const shadowResults = shadowingExample();

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Global Scope</Text>
        <Text style={styles.example}>Global variable: {globalVar}</Text>
        <Text style={styles.example}>Global counter: {globalCounter}</Text>
        <Text style={styles.example}>Module scoped: {moduleScoped}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Function Scope</Text>
        <Text style={styles.example}>Component scoped: {componentScoped}</Text>
        <Text style={styles.example}>Local function: {localFunction()}</Text>
        <Text style={styles.example}>Function example: {functionResult}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Block Scope</Text>
        <Text style={styles.example}>Block message: {blockMessage}</Text>
        <Text style={styles.example}>Block results:</Text>
        {blockResults.map((result, index) => (
          <Text key={index} style={styles.subExample}>  {result}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Lexical Scoping (Closures)</Text>
        <Text style={styles.example}>Closure result: {closureResult}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Variable Shadowing</Text>
        {shadowResults.map((result, index) => (
          <Text key={index} style={styles.example}>{result}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Scope Rules</Text>
        <Text style={styles.note}>✓ Global: Accessible everywhere</Text>
        <Text style={styles.note}>✓ Function: Accessible within function</Text>
        <Text style={styles.note}>✓ Block: let/const respect block boundaries</Text>
        <Text style={styles.note}>✓ var: Function scoped, not block scoped</Text>
        <Text style={styles.note}>✓ Closure: Inner functions access outer variables</Text>
        <Text style={styles.note}>✓ Shadowing: Inner scope can hide outer variables</Text>
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
  subExample: {
    fontSize: 12,
    color: '#777',
    marginBottom: 2,
    fontFamily: 'monospace',
    marginLeft: 8,
  },
  note: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
});

export default Scope;