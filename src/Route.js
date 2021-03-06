const express = require('express')
const app = express()
const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
const service = require('./src/Route')

const router = express.Router()
router.get('/', (req, res) => {
    res.send('rodando')
})
router.get('/customers/:cpf/dependents', service.getCustomersAllDependents)
router.delete('/customers/:cpf', service.deleteCustomers)
router.get('/customers/:cpf', service.getCustomersById)
router.put('/customers/:cpf', service.updateCustomers)
router.get('/customers', service.getAllCustomers)
router.post('/customers', service.newCustomers)

app.use('/', router)

const port = process.env.PORT;
console.log(port)


app.listen(porta || 8081, () => {
    console.log('Server started on port 8081')
})