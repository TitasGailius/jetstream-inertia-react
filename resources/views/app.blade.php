<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Scripts -->
        @routes

        @production
            @php
                $manifest = json_decode(file_get_contents(public_path('dist/manifest.json')), true);
            @endphp

            <script type="module" src="/dist/{{ $manifest['resources/ts/app.ts']['file'] }}"></script>
            <link rel="stylesheet" href="/dist/{{ $manifest['resources/ts/app.ts']['css'][0] }}">
        @else
            <script type="module" src="http://localhost:3000/@@vite/client"></script>
            <script type="module" src="http://localhost:3000/resources/ts/app.ts"></script>
        @endproduction
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
