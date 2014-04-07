# toggle-text

`toggle-text.js` is a lightweight library to make togglable text. It has no
dependencies and is dead easy to use. This was originally made for a personal
project but it might be useful to others.

Note: this is currently under development, while it works for my needs, it
needs more code and tests to be production-ready.

## Install

Drop [`toggle-text.js`][js] at the bottom of your page. You can bundle it with
other JavaScript files in any order because it doesn’t have any dependency, and
rely only on the presence of a `<body>` element.

[js]: https://raw.githubusercontent.com/bfontaine/toggle-text/master/toggle-text.js

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

Open `test/client.html` in your browser.

## Contributing

### Code

1. [Fork the repo][help-fork]
2. Run the tests suite to ensure all tests pass before you change any code
3. Create a new branch
4. If you’re fixing a bug, add a test which shows the bug
5. Write your code
6. Run the tests suite
7. [Open a pull-request][help-pr]

[help-fork]: https://help.github.com/articles/fork-a-repo
[help-pr]: https://help.github.com/articles/creating-a-pull-request

### Bug reports

Don’t know how to fix a bug? Don’t worry, you can still help with a bug report.
Start by [opening an issue][help-issue], and describe the problem: what should
happen, what happens instead, the browser you’re using, and all steps required
for one to reproduce the bug. Thank you!

[help-issue]: https://github.com/bfontaine/toggle-text/issues/new
