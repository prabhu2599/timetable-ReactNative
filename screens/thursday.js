import React, {useState} from 'react';
import { Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'

export default function Thursday({navigation}) {

  const [reviews, setReviews] = useState([
    { title: '8 baje', course: 'ENJOY', courseName: 'FREE' , body:'Apne se ho roobaroo', faculty: 'Lazy Lazy sa laage', key: '8' },
    { title: '9 baje', course: 'CSE5001', courseName: 'ALGO BABA' , body:'Kuch bhi padhane do samajh thodi na aana hai', faculty: 'Main ** hun jo isme aaya', key: '9' },
    { title: '10 baje', course: 'MAT6001', courseName: 'STATS' , body:'Kuch bhi padhane do samajh thodi na aana hai', faculty: 'Sweet si madam', key: '10' },
    { title: '11 baje', course: 'ENJOY', courseName: 'FREE' , body:'Apne se ho roobaroo', faculty: 'Lazy Lazy sa laage', key: '11' },
    { title: '12 baje', courseName: 'ALGO BABA-LAB' , body:'Kuch bhi padhane do samajh thodi na aana hai', faculty: 'Main ** hun jo isme aaya', key: '12' },
    { title: '14 baje', course: 'MAT6001', courseName: 'STATS LAB' , body:'Kuch bhi padhane do samajh thodi na aana hai' , faculty: 'Sweet si madam', key: '14' },
  ]);

  return(
    <View style={globalStyles.container}>

      <FlatList data={reviews}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {item}) } >
          <Card>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={globalStyles.flexrowwise}>
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </View>
              <View style={globalStyles.flexrowwise}>
                <Text style={globalStyles.text}> {item.courseName}</Text>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}