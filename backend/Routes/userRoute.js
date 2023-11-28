const express = require('express');
const {validateToken,requireRoles } = require('../Utils/authorization_middleware');


const router = express.Router();

const userController = require('../Controllers/userController');
const loginController = require('../Controllers/loginController');

router.post('/login',loginController.loginUser);
router.post('/users',userController.addUser);
router.get('/getallusers',userController.getAllUser);
router.put('/updateuser/:id',userController.updateUser);
router.delete('/deleteuser/:id',userController.deleteUser);
router.post('/admin', validateToken, (req,res)=>{
    res.send("Verified Admin");
});
// router.get('/superadminAccess',validateToken,requireRoles(['superadmin']), (req, res) =>{
//     res.json({ message: 'welcome my super user' });
// });
// router.get('/adminAccess',validateToken,requireRoles(['admin']), (req, res) =>{
//     res.json({ message: 'welcome my admin' });
// });
// router.get('/bothAccess',validateToken,requireRoles(['admin','superadmin']), (req, res) =>{
//     res.json({ message: 'welcome admin/super admin' });
// });
// router.get('/publicAccess',validateToken,requireRoles(['user']), (req, res) =>{
//     res.json({ message: 'welcome public user' });
// });



module.exports = router;