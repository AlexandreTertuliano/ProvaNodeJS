var customers = []

const getCustomersAllDependents = (req, res) => {
    var cpf = req.params.cpf;
    var result = [];

    customers.forEach(xxx => {
        if (cpf == xxx.CpfTitular) {
            result.push(xxx)
        }
    })
    if (result.length == 0) res.json({ message: "Paciente não encontrado" }, 404)
    res.json(result)
}

const deleteCustomers = (req, res) => {
    var cpf = `${req.params.cpf}`;
    let valid = false;
    for (let i = 0; i < customers.length; i++) {
        console.log(customers[i].CpfTitular)
        console.log(cpf)
        if (cpf == customers[i].CpfTitular) {
            customers.splice(i, 1);
            valid = true;
        }
    }

    if (!valid) res.json({ message: "Paciente não encontrado" }, 404)
    else res.json({}, 200)
}

const getCustomersById = (req, res) => {
    var cpf = `${req.params.cpf}`;
    customers.forEach(xxx => {
        console.log(cpf)
        console.log(xxx.cpf)
        if (cpf == xxx.cpf) res.json(xxx)
    })
    res.json({ message: "Paciente não encontrado" }, 404)
}

const updateCustomers = (req, res) => {
    var body = req.body;
    let valid = false;
    for (let i = 0; i < customers.length; i++) {
        if (cpf == customers[i].cpf) {
            customers[i] = body;
            valid = true;
        }
    }
    if (!valid) res.json({ message: "Paciente não encontrado" }, 404)
    res.json({}, 200)
}

const getAllCustomers = (req, res) => {
    return res.send(customers)
}

const newCustomers = (req, res) => {
    var body = req.body;

    if (body.CpfTitular) res.status(405)
    if (body.DtNasc) res.status(405)
    if (body.NomePaciente) res.status(405)
    if (body.cpf) res.status(405)

    var customer = {
        'CpfTitular': body.CpfTitular,
        'DtNasc': body.DtNasc,
        'NomePaciente': body.NomePaciente,
        'cpf': body.cpf,
    }
    customers.push(customer)
    res.json({}, 200)

}


module.exports = {
    getCustomersAllDependents,
    deleteCustomers,
    getCustomersById,
    updateCustomers,
    getAllCustomers,
    newCustomers
}