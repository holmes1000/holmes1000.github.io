require('dotenv').config()

const http = require( 'http' ),
      fs   = require( 'fs' ),
      mime = require( 'mime' ),
      port = 3000

const express = require('express'),
      app     = express(),
      cors    = require('cors'),
      helmet = require('helmet'),
      path = require("path")

app.use( cors() )
app.use('/static', express.static(__dirname + '/static' ));
app.use(express.static(path.join(__dirname, "static")));
app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
    })
  );

  app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
  });

  app.listen(process.env.PORT || port);