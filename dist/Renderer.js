
class Renderer {
    renderIngredients(data) {
        console.log({data})
        $('.recipe-container').empty()
        let source = $('#recipe-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({ data });
        $('.recipe-container').append(newHTML);
    }
}

Handlebars.registerHelper('toUpper', function (str) {
    return str.replace(/^\w/, c => c.toUpperCase());
});