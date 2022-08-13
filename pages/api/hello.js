const faunadb = require('faunadb')
const q = faunadb.query
const client = new faunadb.Client({ secret: 'Your secret here' })



export default function handler(req, res) {
  var doc = req.query
  var createP = client.query(
    q.Create(
      q.Collection('contact'),
      { data: { doc: doc } }
    )
  )
  res.redirect('/thankyou')
}
