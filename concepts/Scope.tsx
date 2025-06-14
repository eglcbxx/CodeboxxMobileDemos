/*
Scope (Global, Local, Block)
---------------------------
This component demonstrates variable scope in JavaScript/TypeScript: global, local, and block scope.

How to use:
1. Declare a variable outside any function/block for global scope.
2. Declare a variable inside a function for local scope.
3. Declare a variable inside a block (e.g., inside {}) for block scope.
4. Observe which variables are accessible where.

Example:
let globalScope = 'Global';
function localScope() { let local = 'Local'; }
{ let block = 'Block'; }
*/

import React from 'react';
import { Text, View } from 'react-native';

const Scope = () => {
    // Scope (global, local, block)
    let globalScope = 'Global scope';
    let blockScopeMessage = '';
    {
        let blockScope = 'Block scope';
        // blockScope is only visible inside this block
        blockScopeMessage = blockScope; // We can assign it here
    }
    function localScope() {
        let localScope = 'Local scope';
        return localScope;
    }
    return (
        <View>
            <Text>Global: {globalScope}</Text>
            <Text>Local: {localScope()}</Text>
            <Text>Block: {blockScopeMessage}</Text>
        </View>
    );
};

export default Scope;