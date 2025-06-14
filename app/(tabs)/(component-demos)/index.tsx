import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const demos = [
  { name: 'AlertBox', route: '/(component-demos)/alertbox-demo' },
  { name: 'Avatar', route: '/(component-demos)/avatar-demo' },
  { name: 'Badge', route: '/(component-demos)/badge-demo' },
  { name: 'CardList', route: '/(component-demos)/cardlist-demo' },
  { name: 'Checkbox', route: '/(component-demos)/checkbox-demo' },
  { name: 'Collapsible', route: '/(component-demos)/collapsible-demo' },
  { name: 'CustomButton', route: '/(component-demos)/custombutton-demo' },
  { name: 'Divider', route: '/(component-demos)/divider-demo' },
  { name: 'ExternalLink', route: '/(component-demos)/external-link-demo' },
  { name: 'HapticTab', route: '/(component-demos)/haptictab-demo' },
  { name: 'HelloWave', route: '/(component-demos)/hellowave-demo' },
  { name: 'Icon', route: '/(component-demos)/icon-demo' },
  { name: 'InfoBlock', route: '/(component-demos)/infoblock-demo' },
  { name: 'InfoCard', route: '/(component-demos)/infocard-demo' },
  { name: 'List', route: '/(component-demos)/list-demo' },
  { name: 'LoadingSpinner', route: '/(component-demos)/loadingspinner-demo' },
  { name: 'Modal', route: '/(component-demos)/modal-demo' },
  { name: 'ParallaxScrollView', route: '/(component-demos)/parallaxscrollview-demo' },
  { name: 'RadioButton', route: '/(component-demos)/radiobutton-demo' },
  { name: 'SectionHeader', route: '/(component-demos)/sectionheader-demo' },
  { name: 'SimpleInput', route: '/(component-demos)/simpleinput-demo' },
  { name: 'Spacer', route: '/(component-demos)/spacer-demo' },
  { name: 'StyledText', route: '/(component-demos)/styledtext-demo' },
  { name: 'Switch', route: '/(component-demos)/switch-demo' },
  { name: 'Themed', route: '/(component-demos)/themed-demo' },
];

export default function ComponentDemosIndex() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const backgroundColor = '#f5f5f7';
  const buttonColor = '#fff';
  const buttonTextColor = '#11181C';

  return (
    <ThemedView style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 16 + insets.bottom,
        }}
      >
        {demos.map(({ name, route }) => (
          <View key={route} style={{ marginBottom: 16 }}>
            <Pressable
              style={({ pressed }) => [{
                padding: 16,
                backgroundColor: pressed ? '#e5e5ea' : buttonColor,
                borderRadius: 12,
                shadowColor: '#aaa',
                shadowOpacity: 0.08,
                shadowRadius: 8,
                shadowOffset: { width: 0, height: 2 },
                elevation: 2,
              }]}
              onPress={() => router.push(route as any)}
            >
              <Text style={{ fontSize: 18, color: buttonTextColor, fontWeight: '600' }}>{name}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </ThemedView>
  );
}