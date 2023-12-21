import { View, Text } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <>
      <View style={{ padding: 25 }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{ color: 'gray' }}>Friday, 15 Dec</Text>
          <Text style={{ color: 'gray' }}>Search</Text>
        </View>

        <View style={{ paddingVertical: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', paddingBottom: 5 }}>
            Learn
          </Text>
          <Text>Choose part of the body</Text>
        </View>

        <View
          style={{ backgroundColor: '#EB7662', borderRadius: 15, padding: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: 'white' }}>
            Head & Face
          </Text>
          <Text style={{ color: '#E9F2FF' }}>11 diseases</Text>
        </View>

        <View
          style={{ backgroundColor: '#8DC4BB', borderRadius: 15, padding: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: 'white' }}>
             Back & Neck
          </Text>
          <Text style={{ color: '#E9F2FF' }}>11 diseases</Text>
        </View>

        <View
          style={{ backgroundColor: '#F2982F', borderRadius: 15, padding: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: 'white' }}>
           Elbow & Shoulders
          </Text>
          <Text style={{ color: '#E9F2FF' }}>11 diseases</Text>
        </View>

        <View
          style={{ backgroundColor: '#327389', borderRadius: 15, padding: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingBottom: 5, color: 'white' }}>
            Hand & Arm
          </Text>
          <Text style={{ color: '#E9F2FF' }}>11 diseases</Text>
        </View>
      </View>
    </>
  );
};

export default App;
