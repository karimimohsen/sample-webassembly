
function fetchAndInstantiate(url, importObject) {
    return fetch(url)
        .then(response => response.arrayBuffer())
        .then(bytes => WebAssembly.instantiate(bytes, importObject))
        .then(results => results.instance);
}

// var importObject = { imports: { imported_func: arg => console.log(arg) } };
fetchAndInstantiate('newSum.wasm')
    .then(function (instance) {
        // Call an exported function:
        console.log(instance.exports.sum(100, 120));

        // or access the buffer contents of an exported memory:
        // var i32 = new Uint32Array(instance.exports.memory.buffer);

        // or access the elements of an exported table:
        // var table = instance.exports.table;
        // console.log(table.get(0)());
    })

