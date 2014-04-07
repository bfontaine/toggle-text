var     expect   = chai.expect,
        g        = {},
        defaultTimeout = 10;

function randomText() {
    return (Math.random()*1000|0).toString(36);
}

function click( el, cb, timeout ) {
    var ev = document.createEvent( 'MouseEvent' );
    ev.initMouseEvent('click', true, true);
    el.dispatchEvent(ev);
    setTimeout(cb, timeout || defaultTimeout);
}

function dblclick( el, cb, timeout ) {
    click( el, function() {
        click( el, cb, timeout );
    }, timeout || defaultTimeout);
}

function mkElement( attrs ) {
    var el = document.createElement(attrs.tag),
        rs = [ 'tag', 'klass', 'text' ];
    el.className = attrs.klass;
    el.innerText = attrs.text;

    for (var k in attrs) {
        if (attrs.hasOwnProperty(k) && rs.indexOf(k) == -1) {
            el.setAttribute(k, attrs[k]);
        }
    }

    g.container.appendChild( el );

    return el;
}

describe('toggle-text', function() {

    before(function() {
        g.container = document.createElement('div');
        document.getElementsByTagName('body')[0].appendChild(g.container);
    });

    after(function() {
        g.container.parentElement.removeChild(g.container);
        delete g.container;
    });

    beforeEach(function() {
        g.text = randomText();
        g.alt = randomText();
    });

    afterEach(function() {
        if ('el' in g) {
            g.container.removeChild(g.el);
            delete g.el;
        }
    });

    describe('click', function() {

        it( 'should switch initial text with alternative one',
               function( done ) {
            g.el = mkElement({
                tag: 'span',
                klass: 'toggle-text',
                'data-toggle-text': g.alt,
                text: g.text
            });
            expect(g.el.innerText).to.equal(g.text);
            expect(g.el.getAttribute('data-toggle-text')).to.equal(g.alt);
            click( g.el, function() {
                expect(g.el.innerText).to.equal(g.alt);
                expect(g.el.getAttribute('data-toggle-text')).to.equal(g.text);
                done();
            });
        });

        it( 'should not switch if there’s no alternative text',
                function( done ) {
            g.el = mkElement({
                tag: 'span',
                klass: 'toggle-text',
                text: g.text
            });
            expect(g.el.innerText).to.equal(g.text);
            click( g.el, function() {
                expect(g.el.innerText).to.equal(g.text);
                done();
            });
        });

        it( 'should not switch if the alternative text is empty',
                function( done ) {
            g.el = mkElement({
                tag: 'span',
                klass: 'toggle-text',
                text: g.text,
                'data-toggle-text': '',
            });
            expect(g.el.innerText).to.equal(g.text);
            click( g.el, function() {
                expect(g.el.innerText).to.equal(g.text);
                done();
            });
        });

        it( 'should not switch if the element doesn’t have the required class',
                function( done ) {
            g.el = mkElement({
                tag: 'span',
                klass: 'toglle-text',
                text: g.text,
                'data-toggle-text': '',
            });
            expect(g.el.innerText).to.equal(g.text);
            click( g.el, function() {
                expect(g.el.innerText).to.equal(g.text);
                done();
            });
        });

    });

    describe( 'click again', function() {

        it( 'should switch back to the initial text',
                function( done ) {
            g.el = mkElement({
                tag: 'span',
                klass: 'toggle-text',
                text: g.text,
                'data-toggle-text': g.alt,
            });
            expect(g.el.innerText).to.equal(g.text);
            expect(g.el.getAttribute('data-toggle-text')).to.equal(g.alt);
            dblclick( g.el, function() {
                expect(g.el.innerText).to.equal(g.text);
                expect(g.el.getAttribute('data-toggle-text')).to.equal(g.alt);
                done();
            });
        });

        it( 'should not re-switch if the initial text is empty',
                function( done ) {
            g.el = mkElement({
                tag: 'span',
                klass: 'toggle-text',
                text: '',
                'data-toggle-text': g.alt,
            });
            expect(g.el.innerText).to.equal('');
            dblclick( g.el, function() {
                expect(g.el.innerText).to.equal(g.alt);
                done();
            });
        });

    });
});
