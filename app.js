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
    if (password == 'meriam' && email == 'be2430423@gmail.com') {
        return res.redirect('/profile');
    }else{
        return res.render('404');
    }
});

app.get('/register', (req, res) => {
    return res.render('register');
});

app.post('/register', (req, res) => {
    const { email, password, dateOfBirth, name } = req.body;
    console.log(email, password, dateOfBirth, name);
    return res.redirect('/profile2'); 
});

app.get('/profile', (req, res) => {
    return res.render('profile');
});

app.post('/profile', (req, res) => {
    return res.redirect('/');
});

app.get('/profile2', (req, res) => {
    return res.render('profile2');

});

app.get('*', (req, res) => {
    return res.render('404');
});

// Start
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});