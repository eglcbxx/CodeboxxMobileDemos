import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

const demoScreens = [
  { name: 'access-modifiers-demo', title: 'Access Modifiers' },
  { name: 'arrays-and-collections-demo', title: 'Arrays and Collections' },
  { name: 'asynchronous-constructs-demo', title: 'Asynchronous Constructs' },
  { name: 'break-continue-demo', title: 'Break and Continue' },
  { name: 'classes-and-objects-demo', title: 'Classes and Objects' },
  { name: 'comments-demo', title: 'Comments' },
  { name: 'conditional-statements-demo', title: 'Conditional Statements' },
  { name: 'data-types-demo', title: 'Data Types' },
  { name: 'exception-handling-demo', title: 'Exception Handling' },
  { name: 'fetch-example-demo', title: 'Fetch Example' },
  { name: 'function-calls-demo', title: 'Function Calls' },
  { name: 'functions-and-methods-demo', title: 'Functions and Methods' },
  { name: 'import-export-demo', title: 'Import/Export' },
  { name: 'loops-demo', title: 'Loops' },
  { name: 'operators-demo', title: 'Operators' },
  { name: 'parameters-and-arguments-demo', title: 'Parameters and Arguments' },
  { name: 'recursion-demo', title: 'Recursion' },
  { name: 'return-statements-demo', title: 'Return Statements' },
  { name: 'scope-demo', title: 'Scope' },
  { name: 'type-declarations-demo', title: 'Type Declarations' },
  { name: 'use-effect-example-demo', title: 'useEffect Example' },
  { name: 'use-state-example-demo', title: 'useState Example' },
  { name: 'variable-declaration-demo', title: 'Variable Declaration' },
];

export default function ConceptDemosLayout() {
  const colorScheme = useColorScheme();
  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerTitleAlign: 'center',
        headerBackButtonDisplayMode: "minimal"
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false, 
          title: "",
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