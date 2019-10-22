const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgresdb',
  host: 'food-trucks.cgpjhm2tri92.us-east-2.rds.amazonaws.com',
  database: 'FoodTrucks',
  password: 'Postgres',
  port: 3306,
})

const getTrucks = (request, response) => {
  pool.query('SELECT * FROM trucks ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTrucksById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM trucks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//Need to figure out how to access Strings
// const getTrucksByName = (request, response) => {
//   const name = parseString(request.params.truck_name)

//   pool.query('SELECT * FROM trucks WHERE truck_name = $1', [name], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

module.exports = {
  getTrucks,
  getTrucksById,
  /*getTrucksByName,*/
}