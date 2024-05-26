const express=require('express');
const router= express.Router();
// FOR Products
const productController=require('../controllers/productController');
router.post('/products',productController.createProduct);
router.get('/products',productController.getAllProducts);
router.put('/products/:id',productController.updateProduct);
router.delete('/products/:id',productController.deleteProduct);

// FOR users
const UserController=require('../controllers/UserController');
router.post('/CreateUser',UserController.createUser);
router.get('/getUser',UserController.getAllUsers);
router.put('/updateUsers/:id',UserController.updateUser);
router.delete('/DeleteUsers/:id',UserController.deleteUser);

// FOR Address
const AddressController=require('../controllers/addressController');
router.post('/CreateAddress',AddressController.createAddress);
router.get('/getAddresses',AddressController.getAllAddresses);
router.put('/updateAddress/:id',AddressController.updateAddress);
router.delete('/DeleteAddress/:id',AddressController.deleteAddress);

// FOR Orders
const OrdersController=require('../controllers/OrderDetailsController');
router.post('/createOrder',OrderDetailsController.createOrder);
router.get('/getOrders',OrderDetailsController.getAllOrders);
router.put('/updateOrder/:id',OrderDetailsController.updateOrder);
router.delete('/DeleteOrder/:id',OrderDetailsController.deleteOrder);

// FOR Payemnts
const PaymentController=require('../controllers/PaymentController');
router.post('/createPayment',PaymentController.createPayment);
router.get('/getPayments',PaymentController.getAllPayments);
router.put('/updatePayment/:id',PaymentController.updatePayment);
router.delete('/DeletePayment/:id',PaymentController.deletePayment);

// FOR Weather
const WeatherController=require('../controllers/weatherController');
router.post('/createWeather',WeatherController.createWeather);
router.get('/getWeathers',WeatherController.getAllWeathers);
router.put('/updateWeather/:id',WeatherController.updateWeather);
router.delete('/DeleteWeather/:id',WeatherController.deleteWeather);

// FOR OrderDetails
const orderDetailsController=require('../controllers/orderDetailsController');
router.post('/createOrderDetails',orderDetailsController.createOrderDetails);
router.get('/getOrderDetails',orderDetailsController.getAllOrderDetails);
router.put('/updateOrderDetails/:id',orderDetailsController.updateOrderDetails);
router.delete('/DeleteOrderDetails/:id',orderDetailsController.deleteOrderDetails);

module.exports=router;