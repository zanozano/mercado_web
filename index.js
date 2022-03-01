const express = require('express');
const { engine } = require('express-handlebars');
const app = express();

// listen server
app.listen(3000, () => {
	console.log(`Server running on port 3000 and PID: ${process.pid}`);
});

// jquery
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// bootstrap
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));

// engine
app.engine(
	'handlebars',
	engine({
		layoutsDir: __dirname + '/views/',
		partialsDir: __dirname + '/views/components/',
	})
);

// set handlebars
app.set('view engine', 'handlebars');

// root
app.get('/', (req, res) => {
	res.render('Dashboard', {
		layout: 'Dashboard',
		productos: [
			{
				imagen: './img/banana.png',
				descripcion: 'Banana',
			},
			{
				imagen: './img/cebollas.png',
				descripcion: 'Cebollas',
			},
			{
				imagen: './img/lechuga.png',
				descripcion: 'Lechuga',
			},
			{
				imagen: './img/papas.png',
				descripcion: 'Papas',
			},
			{
				imagen: './img/pimenton.png',
				descripcion: 'Pimenton',
			},
			{
				imagen: './img/tomate.png',
				descripcion: 'Tomate',
			},
		],
	});
});

// public
app.use(express.static('public'));
