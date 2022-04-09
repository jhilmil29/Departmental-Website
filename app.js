const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser');


//Requiring Routes
const indexRoutes     = require('./routes/index'),
      aboutRoutes     = require('./routes/about'),
      academicsRoutes = require('./routes/academics'),
      alumniRoutes    = require('./routes/alumni'),
      newsRoutes      = require('./routes/news'),
      peopleRoutes    = require('./routes/people'),
      researchRoutes  = require('./routes/research');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



//Routes
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/academics', academicsRoutes);
app.use('/alumni', alumniRoutes);
app.use('/news-and-events', newsRoutes);
app.use('/people', peopleRoutes);
app.use('/research', researchRoutes);

app.get('*', (req, res) => {
    res.send('<h1>ERROR 404!</h1><p>Page not Found</p>');
})


//
app.listen('8000', () => {
    console.log('Server is up at Port 8000!')
})