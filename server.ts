import { Hono } from 'hono'
import { logger } from 'hono/logger'

const app = new Hono()
app.use(logger())

const fibonacci = (n: number) => {
  if(n < 2) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

app.get('/', (c) => {
  const getValue = Number(c.req.query('fibonacci')) || 10
  const result = fibonacci(getValue)
  return c.text(`fibonacci (${getValue}): ${result}`)
})

Bun.serve({
  port: 3000,
  fetch: app.fetch
})
