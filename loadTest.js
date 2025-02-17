import http from 'k6/http'

const fibonacci = 40
const BASE_URL = `http://localhost:8000?fibonacci=${fibonacci}`

export const options = {
  vus: 40,
  duration: '60s'
}

export default function () {
  http.get(BASE_URL)
}