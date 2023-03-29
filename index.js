const express = require('express');
const app = express();
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
  {
    username: 'Todd',
    comment: 'lol that is so funny!',
    id: 1
  },
  {
    username: 'Skyler',
    comment: 'I like to go birdwatching with my dog',
    id: 2
  },
  {
    username: 'Sk8erBoi',
    comment: 'Plz delete your account, Todd',
    id: 3
  },
  {
    username: 'onlysayswoof',
    comment: 'woof woof woof',
    id: 4
  }
];

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/new', (req, res) => {
  res.render('comments/new');
});

app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  comments.push({ username, comment });
  res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find(c => c.id === parseInt(id));
  res.render('comments/show', { comment });
})


app.listen(3001, () => {
  console.log('Server is running on port 3001');
})