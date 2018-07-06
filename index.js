const express = require('express');
const app = express();
const images = require('./images');
const static = express.static;

// Handlebar registration
const expressHbs = require('express-handlebars');
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(static('public'));
// Handlebar registration

app.get('/', (req, res) => {
  res.render('all', {otters: images.otters});
});

app.get('/:id', (req, res) => {
  let id = req.params.id;
  let otter = images.otters.find(otter => {
    return id === otter.src;
  });
  if(otter) {
    res.render('details', {otter});
  } else {
    res.send('no otter found');
  }
})


app.listen(9999);