const express = require('express');

const bodyParser = require('body-parser');

const session = require('express-session');

const MySQLStore = require('express-mysql-session')(session);

const options = require('./config/database/databaseConfig');

const key = require('./util/config');

const router = require('./router/indexRouter');

const db_connection = require('./util/database/dbConnect');

const PORT = 8080;

const path = require('path');

const app = new express();

app.use(bodyParser.json());

app.use(
	bodyParser.urlencoded(
		{
			extended: true
		}
	)
)

var sessionStore = new MySQLStore(options);

app.use(session({
	secret: key.keyCookie,
	resave: true,
	saveUninitialized: false,
	//cookie: {maxAge: 10000, httpOnly: true, isLoggedIn: false},
	store: sessionStore
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    console.log(req.method, req.url)
    next();
})

app.use('/api', router);

app.set('port', PORT);

var server = app.listen(
	app.get('port'), function() {
		var port = server.address().port;
		console.log("Server is running on port: " + port);
		db_connection
		.sync({force:false})
		.then(() => {
			console.log('Database connected!');
		})
		.catch(err => {
			console.log(err);
		});
	}
);
