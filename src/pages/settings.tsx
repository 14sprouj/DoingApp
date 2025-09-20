import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'

import { ThemeContext } from '../Theme'

export default function Settings() {
	const { t } = useTranslation()
	const { theme } = useContext(ThemeContext)

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: '#1985A1',
			color: '#ededed',
			alignItems: 'center',
			justifyContent: 'center',
			padding: 20
		},
		settingTabs: {
			flexDirection: 'row',
			justifyContent: 'space-between'
		},
		settingTab: {
			backgroundColor: theme.buttonColor,
			color: theme.buttonText,
			padding: 10
		},
		settingActiveTab: {
			backgroundColor: theme.buttonColor,
			color: theme.buttonText,
			padding: 10
		}
	})
	return (
		<View style={styles.container}>
			<View style={styles.settingTabs}>
				<View style={styles.settingTab}>
					<Text>{t('settings.profile')}</Text>
				</View>
				<View style={(styles.settingTab, styles.settingActiveTab)}>
					<Text>{t('settings.display')}</Text>
				</View>
			</View>
			<View>
				<Text>Profile</Text>
			</View>
			<View>
				<Text>Display</Text>
			</View>
		</View>
	)
}
