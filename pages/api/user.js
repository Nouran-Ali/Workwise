// API: http://localhost:3000/api/user

export default function handler(req, res) {
  res.status(200).json({
    email: 'n@gmail.com',
    password: '123456789'
  })
}
