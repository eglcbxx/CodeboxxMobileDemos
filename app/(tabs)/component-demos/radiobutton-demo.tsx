/*
RadioButton Demo
================

What this demo shows:
This demo displays radio buttons that allow users to select one option from a group, like choosing sizes or colors.

What component you need:
You need the RadioButton component from: /components/RadioButton.tsx
You also need: StyledText component from: /components/StyledText.tsx

How to copy and use in your project:
1. Copy the RadioButton.tsx and StyledText.tsx files to your components folder
2. Copy the import lines below
3. Copy the useState and RadioButton examples below and paste them in your screen

Code examples to copy:
*/

import RadioButton from '@/components/RadioButton';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function RadioButtonDemo() {
  // State management for radio button groups - copy these lines
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState('blue');

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 24, marginVertical: 16 }}>
        {/* Size selection group - copy this entire block */}
        <View>
          <StyledText type="heading2">Size Options</StyledText>
          <View style={{ gap: 12, marginTop: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <RadioButton
                value="small"
                label="Small"
                selected={selectedSize === 'small'}
                onPress={() => setSelectedSize('small')}
              />
              <StyledText>Small</StyledText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <RadioButton
                value="medium"
                label="Medium"
                selected={selectedSize === 'medium'}
                onPress={() => setSelectedSize('medium')}
              />
              <StyledText>Medium</StyledText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <RadioButton
                value="large"
                label="Large"
                selected={selectedSize === 'large'}
                onPress={() => setSelectedSize('large')}
              />
              <StyledText>Large</StyledText>
            </View>
          </View>
        </View>

        {/* Color selection group - copy this entire block */}
        <View>
          <StyledText type="heading2">Color Options</StyledText>
          <View style={{ gap: 12, marginTop: 8 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <RadioButton
                value="red"
                label="Red"
                selected={selectedColor === 'red'}
                onPress={() => setSelectedColor('red')}
              />
              <StyledText>Red</StyledText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <RadioButton
                value="blue"
                label="Blue"
                selected={selectedColor === 'blue'}
                onPress={() => setSelectedColor('blue')}
              />
              <StyledText>Blue</StyledText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <RadioButton
                value="green"
                label="Green"
                selected={selectedColor === 'green'}
                onPress={() => setSelectedColor('green')}
              />
              <StyledText>Green</StyledText>
            </View>
          </View>
        </View>

        {/* Current selection display - copy this block */}
        <View style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
          <StyledText type="heading2" style={{ marginBottom: 8 }}>Current Selection:</StyledText>
          <StyledText type="paragraph">Size: {selectedSize}</StyledText>
          <StyledText type="paragraph">Color: {selectedColor}</StyledText>
        </View>
      </View>
    </ScrollView>
  );
}