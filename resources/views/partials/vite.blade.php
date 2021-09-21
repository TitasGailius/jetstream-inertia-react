@production
    @php
        $manifest = json_decode(file_get_contents(public_path('dist/manifest.json')), true);
    @endphp

    <script type="module" src="/dist/{{ $manifest['resources/ts/app.tsx']['file'] }}"></script>
    <link rel="stylesheet" href="/dist/{{ $manifest['resources/ts/app.tsx']['css'][0] }}">
@else
    <script type="module">
        import RefreshRuntime from "http://localhost:3000/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => {}
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>

    <script type="module" src="http://localhost:3000/@@vite/client"></script>
    <script type="module" src="http://localhost:3000/resources/js/app.tsx"></script>
@endproduction
