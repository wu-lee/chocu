// This converts a raw wiki page into an editable page
// using the template this.templates.wiki

function(doc, req) {
    var markdown = require("js/markdown");
    var templater = require("js/template");
    var source = doc.src? doc.src : "";
    var template = this.templates.edit;
    return {
        body: templater.render(template, { 
            content: doc.src,
            save_uri: "../../_update/save/"+doc._id,
        })
    }
}
