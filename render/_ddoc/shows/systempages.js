function(doc, req) {
    var pages = [];
    var systempages = (doc && doc.systempages)? doc.systempages : [];
    for (page in systempages) {
        pages.push(JSON.parse(systempages[page]));
    }
    return {
        json : pages,
    }
}
