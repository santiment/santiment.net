import type { APIRoute } from 'astro'

const robotsTxt = `\
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
`

export const GET: APIRoute = () => {
  return new Response(robotsTxt)
}
