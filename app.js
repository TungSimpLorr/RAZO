
const express = require('express');
const path = require('path');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
// tuyen duong toi trang chu
app.get('/', (req, res) => {
  res.render('pages/index.ejs', { pageTitle: 'Trang chủ' });
});
// tuyen duong toi trang san pham
app.get('/products', (req, res) => {
  res.render('pages/products.ejs', { pageTitle: 'Trang sản phẩm' });
});
// tuyen duong toi trang chi tiet gio hang
app.get('/cartDetail', (req, res) => {
  res.render('pages/cartDetail.ejs', { pageTitle: 'Chi tiết giỏ hàng' });
});
app.get('/login', (req, res) => {
  res.render('pages/login.ejs', { pageTitle: 'Đăng nhập' });
});
app.get('/contact', (req, res) => {
  res.render('pages/contact.ejs', { pageTitle: 'Liên hệ' });
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng http://localhost:${PORT}`);
});
