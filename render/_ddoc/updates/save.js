// This accepts content posted by the edit page,
// and attempts to commit it.

function(doc, req) {
    // Define the default document
    var newdoc = {
        _id : req.id,
        _rev: doc._rev,
        src: "No content",
    };

    // And response
    var response = {
        headers: {
            "Content-Type": "text/plain",
            // Relative locations are now officially ok
            // as well as being ok in practice.
            "Location": "../../_show/view/"+req.id,
        },
        code: 303,
    };

    if (doc) {
        // editing
        // FIXME check rev match
        // doc._rev vs req.form.rev
        newdoc.src = req.form.content;
        response.body = "Updated: "+req.id;
        return [newdoc, response];
    }

    // creating; should be a PUT with id 
    if (!req.id) // no-op if it isn't
        return [null, 'Nothing to save to'];
    
    response.body = "Created: "+req.id;

    return [newdoc, response];
}