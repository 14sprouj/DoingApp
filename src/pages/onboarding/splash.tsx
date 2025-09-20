import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
	outer: {
		backgroundColor: '#cccccc'
	}
})

export default function Splash() {
	return (
		<View style={styles.outer}>
			<Text>Splash</Text>
		</View>
	)
}
