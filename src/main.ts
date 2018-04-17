import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

var cors = require('cors');
var cookieParser = require('cookie-parser')

async function bootstrap()
{
	const app = await NestFactory.create( ApplicationModule );

	app.use(cors({
		origin : [ 
			"http://localhost:4200",
			"http://127.0.0.1:4200"
		],
		credentials : true,
		preflightContinue: true
	})) ;

	app.use(cookieParser()) ;
	
	// app.setGlobalPrefix("api");
	
	await app.listen(33000);
}
bootstrap();
