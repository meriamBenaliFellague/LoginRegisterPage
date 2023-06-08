const express = require('express');
const app = express();

// Config
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    return res.render('landingPage');
});

app.get('/login', (req, res) => {
    return res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    return res.redirect('/');
});

app.get('/register', (req, res) => {
    return res.render('register');
});

app.post('/register', (req, res) => {
    const { email, password, dateOfBirth, name } = req.body;
    console.log(email, password, dateOfBirth, name);
    return res.redirect('/'); 
});

app.get('*', (req, res) => {
    return res.render('404');
});

// Start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});