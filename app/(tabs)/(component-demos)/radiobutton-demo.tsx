/*
RadioButton Demo
----------------
Demonstrates the RadioButton component for single-option selection from a group.

Copy-paste instructions:
1. Copy the RadioButton.tsx file to your components folder
2. Import: import RadioButton from './components/RadioButton';
3. Use with state to track which option is selected across multiple radio buttons
*/

import RadioButton from '@/components/RadioButton';
import StyledText from '@/components/StyledText';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

export default function RadioButtonDemo() {
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedColor, setSelectedColor] = useState('blue');

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View style={{ gap: 24, marginVertical: 16 }}>
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

        <View>
          <StyledText type="heading2">Color Options</StyledText>
          <View style={{ gap: 12, marginTop: 8 }}>
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
                value="red"
                label="Red"
                selected={selectedColor === 'red'}
                onPress={() => setSelectedColor('red')}
              />
              <StyledText>Red</StyledText>
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

        <View style={{ padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
          <StyledText type="paragraph">
            Selected Size: {selectedSize}
          </StyledText>
          <StyledText type="paragraph">
            Selected Color: {selectedColor}
          </StyledText>
        </View>
      </View>
    </ScrollView>
  );
}