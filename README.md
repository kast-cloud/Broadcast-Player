# broadcast-player

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## API

The App will need to be initialised with a "Broadcast" id and the base Url in order to call the endpoint on the API. Clients can have more than one Broadcast channel so the API needs to know which one you are referring to:

### Get Broadcast
```
{baseUrl}/api/broadcast-player/{id}
```

### Get Episodes
```
{baseUrl}/api/broadcast-player/{id}/episodes
```

### Get Latest Series 
```
{baseUrl}/api/broadcast-player/{id}/series/latest
```
