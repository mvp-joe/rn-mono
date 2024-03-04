import { serve } from '@hono/node-server'
import { greeting } from '@repo/lib'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text(greeting)
})

const port = 3100
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
