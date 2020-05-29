require('../utils/environment')

const verifyToken = (req, res) => {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN

  const mode = req.query['hub.mode']
  const challenge = req.query['hub.challenge']
  const token = req.query['hub.verify_token']

  if (mode && token) {
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
      res.status(200).send(challenge)
    } else {
      res.sendStatus(403)
    }
  }
}

module.exports = {
  verifyToken
}