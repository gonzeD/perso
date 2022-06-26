<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>

    <script src="{{ asset('js/app.js') }}" async></script>
    <link rel="preload" as="style" href="{{ asset('css/app.css') }}" onload="this.rel='stylesheet'">

  </head>
  <body>
    <div id="app"></div>
    <canvas id="background"></canvas>
  </body>

  <script src="{{ asset('js/background.js') }}"></script>
</html>
