This benchmark tests Vite's initial page loading performance by simulating module graphs with different nested import chain depth and amount of parallel requests. Each file also has a simulated 5ms transform time (see `vite.config.js`).

1. Build and link Vite locally into the project
2. `node genModules` (adjust depth and concurrency for different graph shapes)
3. Run `vite` to test load time
