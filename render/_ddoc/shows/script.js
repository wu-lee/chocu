// This gets one script embedded in the design document
// named by the 'name' quiery parameter.

function(doc, req) {
    return {
        headers: {
            "Content-Type": "application/x-javascript"
        },
        body: this.js[req.query.name]
    }
}
