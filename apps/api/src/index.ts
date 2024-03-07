import { serve } from '@hono/node-server'
import { getUser, greeting } from '@repo/lib'
import { Hono } from 'hono'
import { supabase } from './supabase'

const app = new Hono()

app.get('/', (c) => {
  return c.text(greeting)
})

app.get('/user/:id', async (c) => {
	const res = await getUser(supabase, parseInt(c.req.param('id')))
	return c.json(res.data)
})

const port = 3100
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})


