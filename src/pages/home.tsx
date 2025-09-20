import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1985A1',
		color: '#ededed',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20
	},

	button: {
		marginTop: 20
	}
})

export default function Home() {
	return (
		<View style={styles.container}>
			<View>
				<Button
					onPress={() => {
						console.log('Button pressed')
					}}
					title='Tap me'
					color='#1985A1'
				/>
			</View>
			<Text>See your log here</Text>
		</View>
	)
}
