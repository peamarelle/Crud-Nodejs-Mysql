const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if(err) {
                res.json(err);
            }
            console.log(customers);
            
            res.render('customers', {
                data: customers
            });
        })  
    })//se utiliza el método de framework express-myconnection que utilizamos para conectarnos a mysql
}
controller.save = (req, res) => {
    let data = req.body;
    req.getConnection((err,conn) => {
        conn.query('INSERT INTO customer set ?',[data], (err, customer) => {
            console.log(customer);
        })
    })
    res.send('Listo');
}

controller.delete = (req, res) => {
    let data = req.body;
    req.getConnection((err,conn) => {
        conn.query('DELETE FROM customer WHERE set ?',[data], (err, customer) => {
            console.log(customer);
        })
    })
    res.send('Listo');
}

module.exports = controller;