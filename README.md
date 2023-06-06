# step to use this

## step 1: configure .env file
1. Frontend dashboard .env file
- toggle to directory 'react-frontend' > '.env'
- configure 
```
REACT_APP_AUTH0_DOMAIN=<your Auth0 audience>
REACT_APP_AUTH0_CLIENT_ID=<your client ID>
REACT_APP_AUTH0_CALLBACK_URL=<your callback URL>
REACT_APP_AUTH0_AUDIENCE=<your Auth0 audience>
```

2. Backend API .env file
- toggle to directory 'express-api-server' > '.env'
- configure 
```
AUTH0_AUDIENCE=<your Auth0 audience>
AUTH0_DOMAIN=<your Auth0 domain>
CLIENT_ID=<your client ID>
CLIENT_SECRET=<your client secret>
```

## step 2: start API server and load frontend dashboard
1. to start the API server
```
cd express-api-server
npm i
npm run dev
```

2. to start frontend dashboard
```
(open another terminal)
cd react-frontend
npm i
npm start
```

## that's it!