import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FAB } from '@rneui/themed';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <FAB
    size="small"
    icon={{
      name: "place",
      color: "white",
    }}
  />
  <FAB size="small" title="Solid" />
  <FAB
    size="small"
    title="Extended"
    icon={{
      name: "place",
      color: "white",
    }}
  />
            <Text>Welcome!</Text>
            <StatusBar style="auto" />
            <Button 
                title="Go to about page"
                onPress={() => navigation.push('About')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 8
    },
});
