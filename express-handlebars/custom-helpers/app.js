const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// 設定靜態檔案
app.use(express.static('public'))

//告訴node你現在要使用express-handlebars作為模板引擎
app.engine('handlebars', exphbs({
  defaultLayout: 'main', helpers: {
    getImage: function (category, category_image) {
      return category_image[category]
    },
    add_up: function (a, b) {
      return a + b
    }
  }
}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  const category_image = {
    '食': '<i class="fas fa-utensils"></i>',
    '衣': '<i class="fas fa-tshirt"></i>',
    '住': '<i class="fas fa-home"></i>',
    '行': '<i class="fas fa-bus"></i>',
    '其他': '<i class="fas fa-shopping-bag"></i>'
  }
  const records = [
    { name: "生鮮食品", amount: 1200, date: '2019-04-14', category: '食' },
    { name: "婚禮西裝", amount: 1800, date: '2019-04-15', category: '衣' },
    { name: "線上學費", amount: 3000, date: '2019-04-13', category: '其他' }
  ]

  res.render('index', { records, category_image })
})

app.listen(3000, () => {
  console.log('you are now listening at port 3000');
})