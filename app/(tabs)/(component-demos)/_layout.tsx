import { HeaderHeightContext } from '@react-navigation/elements';
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
];

export default function ComponentDemosLayout() {
  return (
    <Stack
      screenOptions={{
      contentStyle: {
        backgroundColor: '#f5f5f7',
      },
      headerStyle: {
        backgroundColor: '#151718',
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      headerBackButtonDisplayMode: "minimal",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {demoScreens.map(({ name, title }) => (
      <Stack.Screen key={name} name={name} options={{ title }} />
      ))}
    </Stack>
  );
}