# toggle-text

`toggle-text.js` is a lightweight library to make togglable text. It has no
dependencies and is dead easy to use. This was originally made for a personal
project but it might be useful to others.

Note: this is currently under development, while it works for my needs, it
needs more code and tests to be production-ready.

## Install

TODO


## Usage

Drop `toggle-text.js` at the end of your page and you’re done on the JS part.
To mark an element as “togglable”, add the `toggle-text` class to it, and put
the alternative text in a `data-toggle-text` attribute.

For example, I heavily use this library for large numbers when you don’t care
of what each exact number is, like on social network profiles:

```html
<li class="toggle-text" data-toggle-text="1259">1.2k</li>
```

When the user click on this `li` element, the `1.2k` text will be replaced by
`1259`. When they click again on it, it’ll go back to the initial text.

## Tests

TODO

## Contributing

TODO
