import React, { useState } from 'react';
import * as Fonts from 'expo-font'
import { AppLoading } from 'expo'

import {MondayStack} from "./routes/mondayStack"
import {TuesdayStack} from "./routes/tuesdayStack"
import {WednesdayStack} from "./routes/wednesdayStack"
import {ThursdayStack} from "./routes/thursdayStack"
import {FridayStack} from "./routes/fridayStack"
import {SaturdayStack} from "./routes/saturdayStack"

import {AboutStack} from "./routes/aboutStack"

const getFonts = () => {
	return Fonts.loadAsync({
		'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
		'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf')
	})
}
export default function App() {
	const [fonts, setfonts] = useState(false)
	var date = new Date();
	var day = date.getDay();
	console.log(day);
	if(fonts) {
		if(day == 1) {
			return( < MondayStack / > )
		}
		if(day == 2) {
			return( < TuesdayStack / > )
		}
		if(day == 3) {
			return( < WednesdayStack / > )
		}
		if(day == 4) {
			return( < ThursdayStack / > )
		}
		if(day == 5) {
			return( < FridayStack / > )
		}
		if(day == 6) {
			return( < SaturdayStack / > )
		}
    if(day == 7) {
      return( <AboutStack /> )
    }
		
		// 
		{/* // <AppNavigator /> //lvlUP */}
	} else {
		return( < AppLoading startAsync = {
				getFonts
			}
			onFinish = {
				() => setfonts(true)
			}
			/>)
	}
}