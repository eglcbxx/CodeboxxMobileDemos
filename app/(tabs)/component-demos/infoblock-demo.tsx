import { InfoBlock } from '@/components/InfoBlock';
import { ScrollView, Text, View } from 'react-native';
import { useThemedStyles } from '@/hooks/useThemedStyles';

export default function InfoBlockDemo() {
  const styles = useThemedStyles();
  return (
    <ScrollView style={{ flex: 1, padding: 16, ...styles.scrollViewBackground }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16, ...styles.text }}>
        InfoBlock Component Demo
      </Text>

      <InfoBlock title="Features">
        <Text style={{ lineHeight: 20, ...styles.text }}>
          InfoBlock is a versatile component for displaying information in a structured format. 
          It provides consistent styling and optional title support for better organization.
        </Text>
      </InfoBlock>

      <View style={{ height: 16 }} />

      <InfoBlock>
        <Text style={{ lineHeight: 20, ...styles.text }}>
          This InfoBlock doesn&apos;t have a title. You can use it for simple content blocks 
          that don&apos;t need a header.
        </Text>
      </InfoBlock>

      <View style={{ height: 16 }} />

      <InfoBlock title="Key Benefits">
        <Text style={{ lineHeight: 20, marginBottom: 8, ...styles.text }}>
          • Optional title support
        </Text>
        <Text style={{ lineHeight: 20, ...styles.text }}>
          • Easy to customize and use
        </Text>
      </InfoBlock>
    </ScrollView>
  );
}