import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Avatar } from '@rneui/themed';

export default function About({navigation}) {
    return (
        <View style={styles.container}>
  <Avatar
    size={32}
    rounded
    title="KA"
    containerStyle={{ backgroundColor: "purple" }}
  />
            <Text>About Page</Text>
            <StatusBar style="auto" />
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
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
