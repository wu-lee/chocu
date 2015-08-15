// This, when passed the design document as a parameter,
// serves a concatenated set of attributes containing
// the client-side javascript libraries.
// i.e. Use this to get them
// http://localhost:5984/chocu/_design/render/_show/scripts

function(doc, req) {
    var js = this.js;
    var scripts = [
        "exports = window;", // to make commonjs modules happy
        js.markdown,
        js.angular,
        js["angular-cornercouch"],
        js.chocu
    ];
    return {
        headers: {
            "Content-Type": "application/x-javascript"
        },
        body: scripts.join("\n")
    }
}



