# toggle-text Makefile

MOCHA=mocha
JSHINT=jshint -c .jshintrc
MOCHA_PJS=$(MOCHA)-phantomjs

.PHONY: test stylecheck

all: stylecheck test

test:
	$(MOCHA_PJS) -R dot test/client.html

stylecheck:
	$(JSHINT) toggle-text.js
