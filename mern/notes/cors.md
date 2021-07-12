1. cors:

your cra deployed on localhost:3000
your data you want to fetch on www.xxx.zzz

cors: (browser)localhost:3000->fetch->(server)www.xxx.zzz
CORS only happens when access from browser!!!!!!

2. http request

2.1 Referer: http://localhost:3000/
this request from where

2.2 Origin: http://localhost:3000
this request's origin

2.3 Referrer Policy: strict-origin-when-cross-origin
data site's Referrer Policy, it depends on whether data site wants your Referer(where your request come from)

3. http response

3.1 access-control-allow-methods: GET
only allow GET method access

3.2 access-control-allow-origin: \*
no cors problem, it allows all origins to access

4. solve CORS

4.1 CORS from your browser client www.xxx.zzz:3000 -> your server www.xxx.zzz:4000
Solution: set proxy server www.xxx.zzz:4000 for your server(not client side)!!!
it means any access to your server will be proxied through your local web server
-- DEV: set proxy for server side webpack( all requests sending to this server are proxy sent from this backend server instead of browser )

    -- PROD: set actrual backend server(nginx, express...) then server can fetch every thing without CORS:
       CLIENT ORIGIN: nginx server
       BACKEND ORIGIN: nginx server

       GET HTML: browser->nginx->client side
       GET DATA: browser->fetch->nginx->server side

4.2 CORS from your browser client www.xxx.zzz -> outside site qqq.ccc.zzz
Solution: NO WAY!!!!! you can access only if outside site qqq.ccc.zzz enables CORS
OR you can set up an middle server which can fetch data without CORS for you

4.3 CORS from outside site browser qqq.ccc.zzz -> your server www.xxx.zzz
Solution: Enables CORS at your server OR he use proxy server

4.4 NO CORS!!!!! from your browser client-> your middle(proxy) server -> fetch -> outside origin
