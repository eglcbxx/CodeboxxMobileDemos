import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

const demoScreens = [
  { name: 'alertbox-demo', title: 'AlertBox' },
  { name: 'avatar-demo', title: 'Avatar' },
  { name: 'badge-demo', title: 'Badge' },
  { name: 'cardlist-demo', title: 'Card List' },
  { name: 'checkbox-demo', title: 'Checkbox' },
  { name: 'collapsible-demo', title: 'Collapsible' },
  { name: 'custombutton-demo', title: 'Custom Button' },
  { name: 'divider-demo', title: 'Divider' },
  { name: 'external-link-demo', title: 'ExternalLink' },
  { name: 'haptictab-demo', title: 'HapticTab' },
  { name: 'hellowave-demo', title: 'HelloWave' },
  { name: 'icon-demo', title: 'Icon' },
  { name: 'infoblock-demo', title: 'Info Block' },
  { name: 'infocard-demo', title: 'Info Card' },
  { name: 'list-demo', title: 'List' },
  { name: 'loadingspinner-demo', title: 'Loading Spinner' },
  { name: 'modal-demo', title: 'Modal' },
  { name: 'parallaxscrollview-demo', title: 'ParallaxScrollView' },
  { name: 'radiobutton-demo', title: 'Radio Button' },
  { name: 'sectionheader-demo', title: 'Section Header' },
  { name: 'simpleinput-demo', title: 'Simple Input' },
  { name: 'spacer-demo', title: 'Spacer' },
  { name: 'styledtext-demo', title: 'Styled Text' },
  { name: 'switch-demo', title: 'Switch' },
  { name: 'themed-demo', title: 'Themed' },
  { name: 'themedtext-demo', title: 'ThemedText' },
  { name: 'themedview-demo', title: 'ThemedView' },
];

export default function ComponentDemosLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false,
        }} 
      />
      {demoScreens.map(({ name, title }) => (
        <Stack.Screen 
          key={name} 
          name={name} 
          options={{ 
            title,
          }} 
        />
      ))}
    </Stack>
  );
}