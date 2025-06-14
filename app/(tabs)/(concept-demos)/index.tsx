import { useRouter } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/ThemedView';

const demos = [
  { name: 'Access Modifiers', route: '/(concept-demos)/access-modifiers-demo' },
  { name: 'Arrays and Collections', route: '/(concept-demos)/arrays-and-collections-demo' },
  { name: 'Asynchronous Constructs', route: '/(concept-demos)/asynchronous-constructs-demo' },
  { name: 'Break and Continue', route: '/(concept-demos)/break-continue-demo' },
  { name: 'Classes and Objects', route: '/(concept-demos)/classes-and-objects-demo' },
  { name: 'Comments', route: '/(concept-demos)/comments-demo' },
  { name: 'Conditional Statements', route: '/(concept-demos)/conditional-statements-demo' },
  { name: 'Data Types', route: '/(concept-demos)/data-types-demo' },
  { name: 'Exception Handling', route: '/(concept-demos)/exception-handling-demo' },
  { name: 'Fetch Example', route: '/(concept-demos)/fetch-example-demo' },
  { name: 'Function Calls', route: '/(concept-demos)/function-calls-demo' },
  { name: 'Functions and Methods', route: '/(concept-demos)/functions-and-methods-demo' },
  { name: 'Import/Export', route: '/(concept-demos)/import-export-demo' },
  { name: 'Loops', route: '/(concept-demos)/loops-demo' },
  { name: 'Operators', route: '/(concept-demos)/operators-demo' },
  { name: 'Parameters and Arguments', route: '/(concept-demos)/parameters-and-arguments-demo' },
  { name: 'Recursion', route: '/(concept-demos)/recursion-demo' },
  { name: 'Return Statements', route: '/(concept-demos)/return-statements-demo' },
  { name: 'Scope', route: '/(concept-demos)/scope-demo' },
  { name: 'Type Declarations', route: '/(concept-demos)/type-declarations-demo' },
  { name: 'useEffect Example', route: '/(concept-demos)/use-effect-example-demo' },
  { name: 'useState Example', route: '/(concept-demos)/use-state-example-demo' },
  { name: 'Variable Declaration', route: '/(concept-demos)/variable-declaration-demo' },
];

export default function ConceptDemosIndex() {
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
