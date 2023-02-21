const express = require('express');
const app = express();
app.listen(3000);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const blogs = [
    {title: 'How to make a Website', snippet: 'Lorem ipsum dolor'},
    {title: 'Python Arrays', snippet: 'Lorem ipsum dolor'},
    {title: 'Best IDE', snippet: 'Lorem ipsum dolor'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog post' });
});
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
