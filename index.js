var xhr = require('xhr')
var example = require('./views/example.hbs')

xhr.get('http://pokeapi.co./api/v2/pokemon/pikachu/', function(err, data) {
  if (err) console.log(err) // do something

  console.log(JSON.parse(data.body).name)
  document.body.innerHTML = example({ name: "Space" });
})

