require('dotenv').config()

const http = require( 'http' ),
      fs   = require( 'fs' ),
      mime = require( 'mime' ),
      port = 3000

const express = require('express'),
      app     = express(),
      cors    = require('cors'),
      helmet = require('helmet')

app.use( cors() )
app.use( express.static('./') )
app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
    })
  );
server.listen( process.env.PORT || port )