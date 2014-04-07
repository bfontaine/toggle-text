(function() {

    var ns = "toggle-text",

        body = document.getElementsByTagName("body")[0],

        // we can't use \b because it matches before and after hyphens:
        //  /^.\b.$/.test("-b") === true
        re_class = new RegExp("(^|\\s)" + ns + "($|\\s)", "i"),
        attr = "data-" + ns;

    body.addEventListener( "click", function( e ) {
        var new_text,
            el = e.target;

        if (!re_class.test(el.className)) {
            return;
        }

        new_text = el.getAttribute(attr);

        if ( !new_text ) {
            return;
        }

        e.preventDefault();

        el.setAttribute(attr, el.innerText);
        el.innerText = new_text;
    }, false);

})();
