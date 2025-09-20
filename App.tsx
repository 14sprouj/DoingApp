import { useState } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import i18next from './src/i18n'
import Home from './src/pages/home'

const { t } = i18next

console.log(Platform.Version)

//const permissions = {
//  permissions: {
//	read: [
//		HealthKitPermissions.StepCount,
//		HealthKitPermissions.SleepAnalysis,
//	],
//  },
//} as HealthKitPermissions;

//AppleHealthKit.initHealthKit(permissions, (error: string, results: any) => {
//	  if (error) {
//	console.error('error initializing Healthkit: ', error);
//	return;
//  }

//  AppleHealthKit.getStepCount(
//	{
//	  startDate: new Date(2021, 1, 1).toISOString(),
//	  endDate: new Date().toISOString(),
//	},
//	(err: any, results: any) => {
//	  if (err) {
//		console.error('error getting step count: ', err);
//		return;
//	  }
//	  console.log('Step count: ', results);
//	},
//  );
//});

export default function YourApp() {
	const [session, setSession] = useState(null)

	//useEffect(() => {
	//	supabase.auth.getSession().then(({ data: { session } }) => {
	//		setSession(session)
	//	})
	//	const {
	//		data: { subscription }
	//	} = supabase.auth.onAuthStateChange((_event, session) => {
	//		setSession(session)
	//	})
	//	return () => subscription.unsubscribe()
	//}, [])

	if (!session) {
		return (
			<>
				<Text>You need to login</Text>
				{/*<Auth
					supabaseClient={supabase}
					appearance={{ theme: ThemeSupa }}
				/>*/}
			</>
		)
	} else {
		return <Home />
	}
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: '#333333',
		color: '#dedede',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

//export default YourApp
