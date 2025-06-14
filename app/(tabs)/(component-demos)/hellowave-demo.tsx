/*
HelloWave Demo
--------------
This demo shows how to use the HelloWave component to display a waving hand emoji with animation.

Usage Steps:
1. Import the HelloWave component:
   import { HelloWave } from '@/components/HelloWave';

2. Use the component in your JSX:
   <HelloWave />

Props:
- None. The component is self-contained and does not accept props.

To use HelloWave in another component, simply import and render it where you want the animated wave to appear.
*/

import { View } from 'react-native';
import { HelloWave } from '../../../components/HelloWave';

export default function HelloWaveDemo() {
  return (
    <View style={{ alignItems: 'center', marginTop: 40 }}>
      <HelloWave />
    </View>
  );
}
