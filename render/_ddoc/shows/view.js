// This converts a raw wiki page into html
// using the template this.templates.wiki

function(doc, req) {
    var markdown = require("js/markdown");
    var templater = require("js/template");
    var src = doc.src? doc.src : "_no content_";
    var template = this.templates.view;
    return {
        body: templater.render(template, { 
            content: markdown.toHTML(doc.src),
            edit_uri: "../edit/"+doc._id,
        })
    }
}
