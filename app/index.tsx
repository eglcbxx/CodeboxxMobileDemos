import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
import { Image } from 'expo-image';
import { StyleSheet, Pressable } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <BottomTabBarHeightContext.Provider value={0}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/CodeboxxFavicon.png')}
            style={styles.reactLogo}
          />
        }
        >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome!</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            onPress={() => router.push('/(tabs)' as any)}
          >
            <ThemedText style={styles.buttonText}>Go to Demos</ThemedText>
          </Pressable>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Explore the App</ThemedText>
          <ThemedText>
            Use the buttons above to navigate to the main tabs or see component demos.
          </ThemedText>
        </ThemedView>
      </ParallaxScrollView>
    </BottomTabBarHeightContext.Provider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginVertical: 8,
    minWidth: 220,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonPressed: {
    backgroundColor: '#1e40af',
    opacity: 0.92,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});