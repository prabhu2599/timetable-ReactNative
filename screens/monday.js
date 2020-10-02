import React, {useState} from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import {globalStyles} from '../styles/global'
import Card from '../shared/card'

export default function Monday({navigation}) {

  const [reviews, setReviews] = useState([
    { title: '8 baje', course: 'AI', courseName: 'INTRO TO AI' , body:'Kuch bhi padhane do samajh thodi na aana hai  ', faculty: 'Pathak Sir ka class', key: '8' },
    { title: '9 baje', course: 'STS5001', courseName: 'SOFT SKILLS' , body:'Kuch bhi padhane do samajh thodi na aana hai ', faculty: 'Ajeeb dasta hai ye', key: '9' },
    { title: '10 baje', course: 'CSE5003', courseName: 'DBMS' , body:'Kuch bhi padhane do samajh thodi na aana hai ', faculty: 'Haye mera saiyan pscho', key: '10' },
    { title: '11 baje', course: 'ENJOY', courseName: 'FREE' , body:'Apne se ho roobaroo', faculty: 'Lazy Lazy sa laage', key: '11' },
    { title: '12 baje', course: 'ML', courseName: 'APPLIED ML' , body:'Kuch bhi padhane do samajh thodi na aana hai ', faculty: 'Behti hawa sa tha vo', key: '12' },
    { title: '2 baje', course: 'AI', courseName: 'INTRO TO AI' , body:'Kuch bhi padhane do samajh thodi na aana hai  ', faculty: 'Pathak Sir ka class', key: '14' },

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