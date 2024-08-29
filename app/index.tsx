import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Image, View, Text } from 'react-native';
import { Icon, MD3Colors } from 'react-native-paper';

import PlacesMap from "@/components/map/map"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PlacesMap/>
      <SafeAreaView style={{
        position: 'absolute',
        top: 0,
        // borderColor: 'red',
        // borderWidth: 1
      }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 30,
            height: 50,
            width: Dimensions.get('screen').width - 30,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: 'white'
        }}>
            <Image source={{uri: "https://places.nu/static/home/img/place_logo_standalone.png"}} style={{width: 30, height:30, marginTop: 9, marginLeft: 8}}/>
            <Text style={{flex: 1, color: '#666666', fontSize: 18, marginTop: 12, marginLeft: 12}}>Search here</Text>
            <Image source={{uri: "https://places.nu/static/home/img/user_default.png"}} style={{width: 30, height:30, marginTop: 9, marginRight: 8}}/>
        </View>
      </SafeAreaView>

      <SafeAreaView style={{
        position: 'absolute',
        bottom: 0,
        borderColor: '#ccc',
        borderTopWidth: 1,
        backgroundColor: 'white',
        width: Dimensions.get('screen').width

      }}>
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 30,
            height: 55
        }}>
            <View style={{flex:1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Icon source="map-marker" size={25} color="#607D8B"/>
                <Text style={{color: "#607D8B", textAlign: 'center', marginTop: 3}}>Places</Text>
            </View>

            <View style={{flex:1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Icon source="calendar-heart" size={25} color="#607D8B"/>
                <Text style={{color: "#607D8B", textAlign: 'center', marginTop: 3}}>Events</Text>
            </View>

            <View style={{flex:1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Icon source="account-multiple" size={25} color="#607D8B"/>
                <Text style={{color: "#607D8B", textAlign: 'center', marginTop: 3}}>People</Text>
            </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
