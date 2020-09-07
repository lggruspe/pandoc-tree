PANDOC = pandoc

.PHONY:	check
check:
	$(PANDOC) create.md -o create.js.json -F ../dist/examples/create.js
	$(PANDOC) create.md -o create.lua.json -L create.lua
	diff create.js.json create.lua.json --color
	rm -rf create.*.json
