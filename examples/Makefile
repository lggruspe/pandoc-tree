PANDOC = pandoc

.PHONY:	check
check:
	$(PANDOC) create.md -o create.js.json -F ../dist/examples/create.js
	$(PANDOC) create.md -o create.lua.json -L create.lua
	diff create.js.json create.lua.json --color
	$(PANDOC) stringify.md -o stringify.js.json -F ../dist/examples/stringify.js
	$(PANDOC) stringify.md -o stringify.lua.json -L stringify.lua
	diff stringify.js.json stringify.lua.json --color
	rm create.*.json stringify.*.json
