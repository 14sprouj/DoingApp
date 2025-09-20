import colors from 'colors'
import winston, { format } from 'winston'
import 'winston-daily-rotate-file'

colors.enable()

winston.addColors({
	error: 'red',
	warn: 'yellow',
	info: 'cyan',
	debug: 'gray'
})

const myFormat = winston.format.printf(({ level, message }) => {
	const date = new Date().toISOString()
	return `[${date.slice(0, 19).replace('T', ' ')}] [${level}] ${message}`
})

const debugTransport = new winston.transports.DailyRotateFile({
	level: 'debug',
	maxFiles: '2d',
	maxSize: '2m',
	format: winston.format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.errors({ stack: true }),
		format.splat(),
		format.json()
	),
	filename: 'logs/%DATE% level4.log',
	datePattern: 'YYYY-MM-DD'
})

const infoTransport = new winston.transports.DailyRotateFile({
	level: 'info',
	maxFiles: '7d',
	format: winston.format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.errors({ stack: true }),
		format.splat(),
		format.json()
	),
	filename: 'logs/%DATE% level3.log',
	datePattern: 'YYYY-MM-DD'
})

//const warnTransport = new winston.transports.DailyRotateFile({
//	level: 'warn',
//	maxFiles: '14d',
//	utc: true,
//	format: winston.format.combine(
//		format.timestamp({
//			format: 'YYYY-MM-DD HH:mm:ss',
//		}),
//		format.errors({ stack: true }),
//		format.splat(),
//		format.json()
//	),
//	filename: 'logs/%DATE% level2.log',
//	datePattern: 'YYYY-MM-DD',
//});

const errorTransport = new winston.transports.DailyRotateFile({
	level: 'error',
	maxFiles: '14d',
	format: winston.format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.errors({ stack: true }),
		format.splat(),
		format.json()
	),
	filename: 'logs/%DATE% level1.log',
	datePattern: 'YYYY-MM-DD'
})

errorTransport.on('error', function (err) {
	logger.error('Error: ', err)
})

//warnTransport.on('error', function (err) {
//	logger.error('Error: ', err);
//});

infoTransport.on('error', function (err) {
	logger.error('Error: ', err)
})

debugTransport.on('error', function (err) {
	logger.error('Error: ', err)
})

const logger = winston.createLogger({
	level: 'debug',
	transports: [
		infoTransport,
		//warnTransport,
		errorTransport,
		new winston.transports.Console({
			level: 'debug',
			format: myFormat
		})
	]
})

if (process.env.environment == 'development') {
	logger.transports.push(debugTransport)
}

const userLog = winston.createLogger({
	level: 'debug',
	transports: [
		new winston.transports.DailyRotateFile({
			// This is for this year
			level: 'info',
			datePattern: 'YYYY',
			filename: 'logs/users/%DATE% users.log',
			format: winston.format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss'
				}),
				format.errors({ stack: true }),
				format.splat(),
				format.json()
			)
		}),
		new winston.transports.DailyRotateFile({
			// This is for this month
			level: 'info',
			datePattern: 'YYYY-MM',
			filename: 'logs/users/%DATE% users.log',
			format: winston.format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss'
				}),
				format.errors({ stack: true }),
				format.splat(),
				format.json()
			)
		}),
		new winston.transports.DailyRotateFile({
			// This is for today
			level: 'info',
			datePattern: 'YYYY-MM-DD',
			filename: 'logs/users/%DATE% users.log',
			format: winston.format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss'
				}),
				format.errors({ stack: true }),
				format.splat(),
				format.json()
			)
		}),
		new winston.transports.Console({
			level: 'debug',
			format: winston.format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss'
				}),
				format.errors({ stack: true }),
				format.splat()
			)
		})
	]
})

const dbLog = winston.createLogger({
	level: 'info',
	transports: [
		new winston.transports.DailyRotateFile({
			// This is for today
			level: 'error',
			datePattern: 'YYYY-MM-DD',
			maxFiles: '5d',
			filename: 'logs/db/%DATE% db error.log',
			format: winston.format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss'
				}),
				format.errors({ stack: true }),
				format.splat(),
				format.json()
			)
		})
		//new winston.transports.DailyRotateFile({
		//	level: 'info',
		//	datePattern: 'YYYY-MM-DD',
		//	maxFiles: '1',
		//	maxSize: '10k',
		//	filename: 'logs/db/%DATE% db log.log',
		//	format: winston.format.combine(
		//		format.timestamp({
		//			format: 'YYYY-MM-DD HH:mm:ss',
		//		}),
		//		format.errors({ stack: true }),
		//		format.splat(),
		//		format.json()
		//	),
		//}),
	]
})

export { logger }
