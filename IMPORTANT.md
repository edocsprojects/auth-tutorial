YT VIDEO: https://www.youtube.com/watch?v=WWwDL9G9xkU

IMPORTANT ->

1. head to supabase and turn on google auth
    https://supabase.com/

2. head to https://console.cloud.google.com/
    setup oauth id client

3. connect supabase and google together...

4. Set up next.js -> https://supabase.com/docs/guides/auth/server-side/nextjs
    npm install @supabase/supabase-js @supabase/ssr 
    create .env.local with supabase url and anon key
    utils/supabase/client.ts
    utils/supabase/server.ts
    utils/middleware.ts
    middleware.ts
    just follow steps lol

without code ->
1. npx create-next-app@latest **auth_tutorial** --typescript --tailwind --eslint:
    √ Would you like your code inside a `src/` directory? ... **No** / Yes
    √ Would you like to use App Router? (recommended) ... No / **Yes**
    √ Would you like to use Turbopack for `next dev`? ... No / **Yes**
    √ Would you like to customize the import alias (`@/*` by default)? ... **No** / Yes

2. cd **auth_tutorial**
    npx shadcn@latest init

with code ->

1. npm install

2. npm run dev

3. create .env.local or .env for supabase

    important things (flow) :
    
    home -> login <-> signup -> workspace
    
    needs:
    
    after signup needs an email verfication page...
    login page should forward you to workspace





login has a verfication box unutlized curerntly
    

