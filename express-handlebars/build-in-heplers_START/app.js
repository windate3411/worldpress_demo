const express = require('express')
const app = express()
//加入這行
const exphbs = require('express-handlebars')

//告訴node你現在要使用express-handlebars作為模板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const user_name = 'John'
  res.render('index', { name: user_name })
})

app.listen(3000, () => {
  console.log('you are now listening at port 3000');
})