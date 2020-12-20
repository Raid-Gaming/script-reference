# Scripting API - Raid Gaming

A scripting API reference project written in Typescript with Vue 3.

## Project setup

We've provided an easy setup script that will pull in all necessary dependencies and set them up correctly. Just open a terminal and run:

```console
yarn setup
```

### Developing

You can run a development server with hot-reloading functionality using:

```console
yarn serve
```

### Building for production

You can either do a complete production build in one go or build individual components separately:

```console
yarn build
# changes to the api will be reflected only in development builds, for production, please rebuild the app as well
yarn build:api
yarn build:app
```

## Deployment

This app is configured to run in `history` mode by default (see `src/router/index.ts`). To make this work correctly you will have to set up URL rewriting in your preferred web server. Below are basic configurations that will work for some popular web servers. Adapt these to your needs, don't blindly copy them as features such as logging are not included.

### nginx

```
server {
  root /home/example/www;
  server_name example.com;

  location / {
    try_files $uri $uri/ @rewrites;
  }

  location @rewrites {
    rewrite ^(.+)$ /index.html last;
  }

  location ~* \.(?:ico|css|js|gif|jpe?g|png)$ {
    # Static file caching
    expires max;
    add_header Pragma public;
    add_header Cache-Control "public, must-revalidate, proxy-revalidate";
  }
}
```

### Apache

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## API

This project makes use of a JSON API, the source of which is available at https://github.com/Raid-Gaming/script-reference-api. You do not need to set up the API separately, the setup and build scripts take care of this for you and will allow you to deploy the JSON API together with your app.
