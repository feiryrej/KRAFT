export function logServerDetails(port: number) {
    console.log(`\nServer is running`);
    console.log(`\x1b[36m%s\x1b[0m`, `➜  Local:   http://localhost:${port}/`);
}
