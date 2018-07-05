product:
	cp constants_product_track.js constants.js
	yarn export
	mv out static/product

engineering:
	cp constants_engineering_track.js constants.js
	yarn export
	mv out static/engineering

.PHONY : build
build: engineering product

.PHONY : clean
clean:
	rm -rf static/engineering static/product
