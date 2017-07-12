(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.two = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("beep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFoEoIAAlTIgGhEQgGghgQgaQgQgbgcgPQgcgQgtAAQg0AAgiAUQghATgUAeQgTAegIAjQgIAjAAAgIAAFDIhLAAIAAlaQABgogIghQgHgfgPgZQgdgxg+AAQgpAAglAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnIADAAQAWgvA1gjQAagRAfgJQAfgIAiAAQA6AAAvAdQAwAeAUBCQAOghAUgXQAVgYAbgPQA3geA7AAQBEAAAqAVQArAVAYAjQAYAiALAtQAIAtABAwIAAFWg");
	this.shape.setTransform(2921.2,147.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhrEZQg1gWgngpQgngogUg4QgVg5AAhCQAAhAAVg4QAVg3AogoQAmgpA0gXQA1gXA/AAQBCAAAzAXQAyAXAiAmQAjAnARAxQASAwAAAyIAAA0InlAAIAKA8QAKAlAZAjQAZAjAqAZQApAZBCAAQA5AAA2gbQA2gcAdgwIA2AvQgrBChBAcQhAAehOAAQhBAAg2gXgADNgwQAAgmgQgjQgQghgagaQgbgZglgQQglgPgpAAQg8AAgpAZQgpAagXAgQgYAggKAfIgLAqIGaAAIAAAAg");
	this.shape_1.setTransform(2833.5,148.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_2.setTransform(2777.5,140.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAXAuAvAYQAuAZAyAAQAYAAAXgIQAZgHASgNQASgPANgTQAMgTAAgZQgBgpgZgTQgagUglgLIhRgTQgugJglgQQglgRgagdQgageAAg4QAAgqASggQARgeAdgWQAbgUAkgKQAigKAkAAQBIAAAzAaQA0AbAcA4IhDAoQgVgpgggTQgggWgzAAIgqAGIgmATQgSAKgMASQgMASAAAWQAAAnAaASQAZATAmALIBRARQAtAJAmAQQAlAQAaAgQAaAggBA7QAAAsgQAiQgRAhgeAWQgcAXgmALQglAMgqAAQhKAAg+geg");
	this.shape_3.setTransform(2729.5,148.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgjIA0iGIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA3glAhQgmAhg+AAg");
	this.shape_4.setTransform(2675,163.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcghg8IBCgtQAXAuAvAYQAuAZAyAAQAYAAAXgIQAYgHAUgNQARgPANgTQALgTAAgZQAAgpgZgTQgagUglgLIhSgTQgsgJgmgQQgmgRgagdQgZgeAAg4QAAgqASggQARgeAcgWQAcgUAjgKQAjgKAkAAQBIAAAzAaQA0AbAdA4IhEAoQgWgpgfgTQgggWgzAAIgpAGIgoATQgRAKgMASQgMASAAAWQAAAnAaASQAZATAnALIBRARQAsAJAmAQQAmAQAZAgQAZAgABA7QAAAsgRAiQgRAhgdAWQgdAXgnALQgkAMgqAAQhKAAg+geg");
	this.shape_5.setTransform(2618.4,148.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglHZIAAuwIBLAAIAAOwg");
	this.shape_6.setTransform(2545.3,129.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgUgSghQgSggAAgvQAAhDAhglQAignAxgTQAygTA3gGIBhgFIBYAAIAAgjQAAgmgLgaQgMgbgXgRQgughhHAAQgxAAgsAQQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAYQA+AyAABtIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAZQgwAbhJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAZQgVAZAAAmQAAAaALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngRQAmgSAXgcQAYgcAIgkQAJgjAAglIAAgmIhTAAg");
	this.shape_7.setTransform(2497.2,148.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_8.setTransform(2450.5,133.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhNEZQg5gWgogpQgogogXg4QgWg5ABhBQgBhCAWg4QAXg3AogoQAogpA5gXQA4gWBBAAQBAAAA3AaQA2AbAqAvIg8AtQgggkgngUQgngWgtAAQg0AAgqATQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQAvAAAogWQAngWAdgkIA5AvQgqA0g2AZQg1AYg/AAQhBAAg4gXg");
	this.shape_9.setTransform(2408.1,148.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgFhEQgIghgPgaQgQgbgcgPQgbgQguAAQgnAAgmAOQglAPgbAdQgaAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgCgnIgCgvIgCgsIgBggIBLAAIACA+IADAnIAEAAQAWgvA1gjQAagRAfgJQAegIAiAAQBEAAAqAVQArAVAZAjQAXAiAKAtQAKAtAAAwIAAFWg");
	this.shape_10.setTransform(2340.3,147.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgUgSghQgSggAAgvQAAhDAhglQAignAxgTQAygTA3gGIBhgFIBYAAIAAgjQAAgmgLgaQgMgbgXgRQgughhHAAQgxAAgsAQQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAYQA+AyAABtIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAZQgwAbhJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAZQgVAZAAAmQAAAaALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngRQAmgSAXgcQAYgcAIgkQAJgjAAglIAAgmIhTAAg");
	this.shape_11.setTransform(2272.7,148.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgFhEQgIghgPgaQgPgbgcgPQgdgQgtAAQgoAAglAOQglAPgaAdQgbAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIADA+IACAnIAEAAQAWgvA1gjQAagRAfgJQAfgIAhAAQBEAAArAVQAqAVAYAjQAZAiAJAtQAKAtAAAwIAAFWg");
	this.shape_12.setTransform(2206,147.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_13.setTransform(2156.5,133.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhFHgIAAn+Ih3AAIAAhDIB3AAIAAi8QAAg5ASgkQARglAZgXQAYgWAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgNgrAAQhlABAACZIAAChICHAAIAABDIiHAAIAAH+g");
	this.shape_14.setTransform(2125.7,129);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhqEZQg2gWgngpQgngogUg4QgVg5AAhCQAAhAAVg4QAWg3AngoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAjAmQAiAnARAxQASAwAAAyIAAA0InkAAIAKA8QAJAlAZAjQAYAjArAZQAqAZBBAAQA5AAA2gbQA1gcAegwIA2AvQgrBChBAcQhAAehNAAQhCAAg1gXgADNgwQAAgmgPgjQgRghgagaQgbgZgkgQQgmgPgpAAQg8AAgoAZQgqAagXAgQgYAggKAfIgKAqIGZAAIAAAAg");
	this.shape_15.setTransform(2037.3,148.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACtHZIAAlUIgGhFQgIghgPgaQgPgagcgPQgdgQgtAAQgoAAglAPQglAPgaAcQgbAdgQAsQgQAtAAA8IAAEhIhKAAIAAuwIBKAAIAAHVIADAAQAWgwA1giQAagSAfgIQAfgJAhAAQBEAAArAVQAqAVAYAjQAZAiAJAsQAKAtAAAwIAAFYg");
	this.shape_16.setTransform(1967.8,129.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_17.setTransform(1911.6,140.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhFHgIAAn+Ih3AAIAAhDIB3AAIAAi8QAAg5ASgkQARglAZgXQAYgWAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgNgrAAQhlABAACZIAAChICHAAIAABDIiHAAIAAH+g");
	this.shape_18.setTransform(1842.9,129);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah5EZQg5gWgogpQgogogXg4QgWg5AAhBQAAhCAWg4QAXg3AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA3QAXA4AABCQAABBgXA5QgWA4gpAoQgpApg3AWQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAegfAPgrQAQgrAAgxQAAgwgQgsQgPgqgeggQgegggrgTQgrgTg0AAQg0AAgqATg");
	this.shape_19.setTransform(1784.6,148.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgjIA0iGIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA3glAhQgmAhg+AAg");
	this.shape_20.setTransform(1686.1,163.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_21.setTransform(1635.9,140.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_22.setTransform(1600.6,133.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkHZIAAuwIBJAAIAAOwg");
	this.shape_23.setTransform(1570.5,129.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_24.setTransform(1540.5,133.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag+HZQgjgHgegPQgegOgbgWQgagWgSgeIgDAAIAABmIhKAAIAAuwIBKAAIAAHVIADAAQASgeAagWQAbgWAegPQAegOAjgHIBAgHQBDAAA4AXQA3AWAoApQApAoAXA3QAXA4AABCQAABCgXA4QgXA4gpAoQgoApg3AWQg4AXhDAAgAhcgoQgrASghAfQghAggRArQgUArAAAxQAAAxAUArQARArAhAgQAhAgArASQAsATAyAAQA1AAArgTQAqgSAfggQAdggAQgrQAQgrAAgxQAAgxgQgrQgQgrgdggQgfgfgqgSQgrgTg1AAQgyAAgsATg");
	this.shape_25.setTransform(1488.1,130.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgUgSghQgSggAAgvQAAhDAhglQAignAxgTQAygTA3gGIBhgFIBYAAIAAgjQAAgmgLgaQgMgbgXgRQgughhHAAQgxAAgsAQQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAYQA+AyAABtIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAZQgwAbhJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAZQgVAZAAAmQAAAaALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngRQAmgSAXgcQAYgcAIgkQAJgjAAglIAAgmIhTAAg");
	this.shape_26.setTransform(1416,148.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_27.setTransform(1363,140.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcghg8IBCgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHAUgNQARgPANgTQALgTAAgZQAAgpgZgTQgagUglgLIhSgTQgtgJglgQQglgRgbgdQgZgeAAg4QAAgqASggQARgeAcgWQAdgUAigKQAjgKAkAAQBHAAA0AaQA0AbAdA4IhEAoQgWgpgfgTQgggWgzAAIgqAGIgnATQgRAKgLASQgNASAAAWQAAAnAaASQAaATAlALIBSARQAsAJAmAQQAlAQAaAgQAaAgAAA7QgBAsgQAiQgRAhgeAWQgdAXgmALQglAMgpAAQhKAAg+geg");
	this.shape_28.setTransform(1315,148.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhqEZQg3gWgmgpQgngogVg4QgUg5AAhCQAAhAAVg4QAVg3AogoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAnARAxQASAwAAAyIAAA0InlAAIAKA8QAJAlAZAjQAaAjAqAZQApAZBCAAQA5AAA2gbQA1gcAegwIA2AvQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgQgjQgPghgbgaQgbgZglgQQglgPgpAAQg8AAgpAZQgoAagZAgQgXAggKAfIgLAqIGaAAIAAAAg");
	this.shape_29.setTransform(1222.2,148.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ACtHZIAAlUIgHhFQgGghgPgaQgQgagcgPQgdgQgsAAQgpAAglAPQgkAPgcAcQgaAdgQAsQgPAtAAA8IAAEhIhMAAIAAuwIBMAAIAAHVIACAAQAXgwA0giQAbgSAegIQAegJAjAAQBDAAArAVQAqAVAYAjQAYAiAKAsQAJAtAAAwIAAFYg");
	this.shape_30.setTransform(1152.7,129.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_31.setTransform(1096.5,140.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHATgNQATgPAMgTQALgTAAgZQABgpgagTQgagUglgLIhRgTQgtgJgmgQQglgRgagdQgageAAg4QAAgqASggQASgeAbgWQAcgUAkgKQAigKAkAAQBIAAAzAaQA0AbAdA4IhEAoQgWgpgfgTQgggWgzAAIgqAGIgmATQgSAKgLASQgNASAAAWQAAAnAaASQAaATAlALIBRARQAtAJAmAQQAmAQAZAgQAZAgAAA7QAAAsgQAiQgRAhgeAWQgcAXgmALQgmAMgpAAQhKAAg+geg");
	this.shape_32.setTransform(1016,148.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhqEZQg2gWgngpQgngogUg4QgVg5AAhCQAAhAAVg4QAVg3AogoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAnARAxQASAwAAAyIAAA0InlAAIAKA8QAKAlAZAjQAZAjAqAZQApAZBCAAQA5AAA2gbQA2gcAdgwIA2AvQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgPgjQgQghgbgaQgbgZglgQQglgPgpAAQg8AAgpAZQgoAagYAgQgYAggKAfIgLAqIGaAAIAAAAg");
	this.shape_33.setTransform(955.7,148.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_34.setTransform(899.6,140.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ah5EZQg5gWgogpQgogogXg4QgWg5AAhBQAAhCAWg4QAXg3AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA3QAXA4AABCQAABBgXA5QgWA4gpAoQgpApg3AWQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAegfAPgrQAQgrAAgxQAAgwgQgsQgPgqgeggQgegggrgTQgrgTg0AAQg0AAgqATg");
	this.shape_35.setTransform(842.2,148.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AFpEoIAAlTIgGhEQgHghgQgaQgPgbgcgPQgdgQgtAAQg0AAgiAUQghATgUAeQgTAegIAjQgJAjAAAgIAAFDIhJAAIAAlaQAAgogIghQgHgfgPgZQgdgxg+AAQgpAAglAOQglAPgaAdQgbAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIADA+IADAnIADAAQAXgvA0gjQAagRAfgJQAfgIAiAAQA6AAAvAdQAwAeAUBCQAOghAUgXQAVgYAbgPQA2geA8AAQBEAAArAVQAqAVAYAjQAYAiALAtQAJAtAAAwIAAFWg");
	this.shape_36.setTransform(751.5,147.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ah5EZQg5gWgogpQgogogXg4QgWg5AAhBQAAhCAWg4QAXg3AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA3QAXA4AABCQAABBgXA5QgWA4gpAoQgpApg3AWQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAegfAPgrQAQgrAAgxQAAgwgQgsQgPgqgeggQgegggrgTQgrgTg0AAQg0AAgqATg");
	this.shape_37.setTransform(661.4,148.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AiSEoIAAmeIgCgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnQAcgzAsghQAtggBBAAIAWABIAVAFIgIBKIgcgFQgxAAgkAQQgjAPgXAbQgWAcgNAlQgLAlABAqIAAE6g");
	this.shape_38.setTransform(609.7,147.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AkxG3IAAteIBKAAIAABmIADAAQASgeAagWQAbgWAegPQAegOAjgHIBAgHQBDAAA4AXQA3AWAoApQApAoAXA4QAXA4gBBCQABBCgXA4QgXA3gpAoQgoApg3AWQg4AXhDAAIhAgHQgjgHgegPQgegOgbgWQgagWgSgeIgDAAIAAGDgAhclfQgrASghAgQghAggRArQgUArAAAxQAAAxAUArQARAqAhAgQAhAgArASQAsATAyAAQA1AAArgTQAqgSAfggQAdggAQgqQAQgrAAgxQAAgxgQgrQgQgrgdggQgfgggqgSQgrgTg1AAQgyAAgsATg");
	this.shape_39.setTransform(547.6,161.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_40.setTransform(454.8,140.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgoG7IAAt1IBRAAIAAN1g");
	this.shape_41.setTransform(418.3,132.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("AYnAAQAAKNnNHNQnNHNqNAAQqMAAnNnNQnNnNAAqNQAAqMHNnOQHNnMKMAAQKNAAHNHMQHNHOAAKMg");
	this.shape_42.setTransform(121,116.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AxZRaQnNnNAAqNQAAqMHNnNQHNnNKMAAQKNAAHNHNQHNHNAAKMQAAKNnNHNQnNHNqNAAQqMAAnNnNg");
	this.shape_43.setTransform(121,116.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

	// Layer 1
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcgAkuJxQhAAAgmgbQgpgeAAg5QAAgoAqgwIDqj7QCMiWBUhyQAdgnAQgjQATgsAAgqQAAg2gmgnQgmgog3AAQhHAAgoAsQgZAdgYBFQgZBKgSAYQggAtg6AAQhAAAglgmQgigjAAg1QAAihCHh3QCEh1CsAAQCrAABtBhQBvBkAACiQAACYiSC6QhSBqi0DAIFAAAQA+AAAoAiQApAjAAA7QAAA5goAjQglAhg3AAg");
	this.shape_44.setTransform(143,143);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#176B8D").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcgAkuJxQhAAAgmgbQgpgeAAg5QAAgoAqgwIDqj7QCMiWBUhyQAdgnAQgjQATgsAAgqQAAg2gmgnQgmgog3AAQhHAAgoAsQgZAdgYBFQgZBKgSAYQggAtg6AAQhAAAglgmQgigjAAg1QAAihCHh3QCEh1CsAAQCrAABtBhQBvBkAACiQAACYiSC6QhSBqi0DAIFAAAQA+AAAoAiQApAjAAA7QAAA5goAjQglAhg3AAg");
	this.shape_45.setTransform(143,143);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44}]}).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_44}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.1,286.1);


(lib.three = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("beep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8ETQg9gdgjg8IBDgtQAYAuAuAZQAuAYAyAAQAYAAAYgHQAXgIATgOQASgOANgSQALgUAAgZQABgpgagTQgagUglgLIhSgUQgsgIgmgPQglgSgageQgageAAg3QAAgqASgfQARggAcgUQAcgVAjgKQAjgKAkAAQBHAAA0AaQA0AaAdA5IhEAoQgWgogfgVQgggUgzgBIgqAHIgmASQgSAKgLASQgNASAAAWQAAAnAaATQAZASAmALIBRASQAtAHAmARQAlAQAaAgQAZAgAAA7QAAAtgQAhQgRAhgeAWQgdAXgmALQglAMgpAAQhKAAg+gdg");
	this.shape.setTransform(1467,255.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgGhEQgGghgQgaQgPgbgdgPQgcgQgsAAQgoAAgmAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnIADAAQAWgvA1gjQAbgRAegJQAegIAjAAQBDAAAqAVQArAVAZAjQAXAiAKAtQAJAtAAAwIAAFWg");
	this.shape_1.setTransform(1406.4,254.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogpQgogogXg3QgWg4AAhCQAAhBAWg4QAXg4AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA4QAXA4AABBQAABCgXA4QgWA3gpAoQgpApg3AXQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAwAQArQAQAsAeAgQAeAgAqASQAqATA0AAQA0AAArgTQArgSAeggQAeggAPgsQAQgrAAgwQAAgwgQgsQgPgqgeggQgegggrgTQgrgSg0gBQg0ABgqASg");
	this.shape_2.setTransform(1334.8,255.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_3.setTransform(1282.7,241.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_4.setTransform(1246.2,247.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiNETQgrgVgYgiQgYgkgJgsQgJgtAAgwIAAlWIBLAAIAAFSIAGBEQAHAiAQAaQAPAaAcAPQAcAQAtABQApAAAkgPQAlgOAbgdQAbgeAPgtQAQgsAAg6IAAkhIBLAAIAAGeIABAmIADAvIACAtIABAgIhLAAIgDg+IgDgnIgDAAQgWAvg1AjQg1AihFABQhDgBgsgVg");
	this.shape_5.setTransform(1190.9,256.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_6.setTransform(1135.1,247.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_7.setTransform(1099.8,241.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_8.setTransform(1063.4,247.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah8ETQg+gdghg8IBCgtQAXAuAvAZQAuAYAyAAQAYAAAYgHQAXgIAUgOQASgOAMgSQALgUAAgZQAAgpgZgTQgagUglgLIhSgUQgtgIglgPQglgSgbgeQgZgeAAg3QAAgqASgfQARggAcgUQAdgVAigKQAjgKAkAAQBIAAAzAaQA0AaAdA5IhEAoQgWgogfgVQgggUgzgBIgpAHIgoASQgRAKgLASQgNASAAAWQAAAnAaATQAaASAmALIBRASQAsAHAmARQAlAQAaAgQAaAgAAA7QAAAtgRAhQgRAhgdAWQgeAXgmALQglAMgpAAQhKAAg+gdg");
	this.shape_9.setTransform(1015.4,255.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgFhEQgIghgPgaQgQgbgcgPQgbgQguAAQgnAAgmAOQglAPgbAdQgaAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgDgvIgCgsIAAggIBKAAIADA+IADAnIADAAQAWgvA1gjQAagRAfgJQAfgIAhAAQBEAAAqAVQArAVAZAjQAXAiAKAtQAKAtAAAwIAAFWg");
	this.shape_10.setTransform(954.8,254.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_11.setTransform(905.3,241.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkHYIAAuwIBJAAIAAOwg");
	this.shape_12.setTransform(842.8,237);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgUgSghQgSghAAguQAAhDAhgmQAigmAxgSQAygUA3gGIBhgFIBYAAIAAgjQAAgmgLgbQgMgbgXgQQgugghHgBQgxABgsAQQgsAQgmAgIgrgzQApgoA9gUQA9gVA3AAQA1AAAqAMQApANAgAYQA+AyAABuIAACMIABBNIACA+IADA2IAGAxIhGAAQgHgqAAgzIgEAAQggA4gwAaQgwAbhJAAQglAAgkgKgAgJAFQgtAGgjAPQgkAQgVAYQgVAYAAAnQAAAaALAVQAMATATAOQATANAXAIIAvAGQA7AAAngRQAmgSAXgcQAYgdAIgjQAJgjAAglIAAgmIhTAAg");
	this.shape_13.setTransform(794.7,255.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_14.setTransform(748,241.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhNEZQg5gXgngpQgpgogWg3QgXg4AAhCQAAhBAXg4QAWg4ApgoQAngpA5gXQA4gWBBAAQBAAAA2AaQA3AbArAvIg9AtQggglgogUQglgUgugBQg0ABgqASQgqATgeAgQgeAggQAqQgQAsAAAwQAAAwAQArQAQAsAeAgQAeAgAqASQAqATA0AAQAwAAAogWQAmgWAdgkIA5AwQgqAzg1AYQg2AZg/AAQhBAAg4gXg");
	this.shape_15.setTransform(705.6,255.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgGhEQgIghgOgaQgRgbgbgPQgcgQgtAAQgpAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIAAgnIgCgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAXgvA0gjQAagRAfgJQAegIAjAAQBDAAArAVQAqAVAYAjQAZAiAJAtQAJAtAAAwIAAFWg");
	this.shape_16.setTransform(637.8,254.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgUgSghQgSghAAguQAAhDAhgmQAigmAxgSQAygUA3gGIBhgFIBYAAIAAgjQAAgmgLgbQgMgbgXgQQgugghHgBQgxABgsAQQgsAQgmAgIgrgzQApgoA9gUQA9gVA3AAQA1AAAqAMQApANAgAYQA+AyAABuIAACMIABBNIACA+IADA2IAGAxIhGAAQgHgqAAgzIgEAAQggA4gwAaQgwAbhJAAQglAAgkgKgAgJAFQgtAGgjAPQgkAQgVAYQgVAYAAAnQAAAaALAVQAMATATAOQATANAXAIIAvAGQA7AAAngRQAmgSAXgcQAYgdAIgjQAJgjAAglIAAgmIhTAAg");
	this.shape_17.setTransform(570.2,255.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgPgaQgQgbgcgPQgdgQgsAAQgpAAglAOQgkAPgcAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgBgvIgCgsIgBggIBKAAIACA+IADAnIAEAAQAXgvA0gjQAbgRAegJQAegIAjAAQBDAAArAVQAqAVAYAjQAYAiAKAtQAJAtAAAwIAAFWg");
	this.shape_18.setTransform(503.5,254.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_19.setTransform(454,241.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhFHgIAAn+Ih3AAIAAhCIB3AAIAAi9QAAg5ASglQARgkAZgWQAYgXAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgMgrAAQhlgBAACbIAAChICHAAIAABCIiHAAIAAH+g");
	this.shape_20.setTransform(423.2,236.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglHZIAAuwIBLAAIAAOwg");
	this.shape_21.setTransform(3173.3,64.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgVgSggQgSghAAgtQAAhDAhgmQAignAxgTQAygTA3gFIBhgGIBYAAIAAgkQAAglgLgbQgMgbgXgQQgughhHABQgxAAgsAPQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAZQA+AwAABuIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAaQgwAahJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAYQgVAZAAAmQAAAbALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngSQAmgRAXgcQAYgdAIgjQAJgjAAglIAAglIhTAAg");
	this.shape_22.setTransform(3125.2,82.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiMETQgrgVgZgiQgZgjgIgtQgIgtAAgwIAAlXIBKAAIAAFTIAGBFQAHAhAPAaQAQAbAcAPQAcAQAtAAQAoAAAlgPQAlgOAbgeQAagdARgsQAQgtAAg7IAAkhIBLAAIAAGeIAAAoIACAvIACAtIABAfIhLAAIgBg/IgDgnIgEAAQgXAxg0AhQg0AkhGgBQhEABgqgWg");
	this.shape_23.setTransform(3058.4,83.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_24.setTransform(2985,65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_25.setTransform(2932.6,68.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiEhIjspBIBVAAIC/HwIC8nwIBNAAIjkJBg");
	this.shape_26.setTransform(2888.7,82.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_27.setTransform(2844.8,68.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_28.setTransform(2790.6,65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgGhEQgHghgPgaQgQgbgcgPQgcgQgtAAQgoAAglAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnIADAAQAWgvA1gjQAagRAfgJQAfgIAhAAQBEAAAqAVQArAVAZAjQAXAiAKAtQAJAtAAAwIAAFWg");
	this.shape_29.setTransform(2718.2,81.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_30.setTransform(2668.8,68.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhFHgIAAn9Ih3AAIAAhEIB3AAIAAi8QAAg5ASgkQARglAZgXQAYgWAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgNgrAAQhlABAACZIAAChICHAAIAABEIiHAAIAAH9g");
	this.shape_31.setTransform(2605.4,63.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_32.setTransform(2547.1,82.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcgig8IBDgtQAXAuAvAYQAuAZAyAAQAYAAAXgIQAYgHATgNQASgOANgUQAMgTAAgZQAAgogagUQgagUglgMIhRgTQgugIglgQQgmgRgagdQgZgeAAg3QAAgrASggQARgfAdgUQAbgVAkgKQAigKAkAAQBHAAA0AaQA0AaAcA4IhDApQgVgpgggTQgggWgzABIgpAFIgoASQgRAMgMARQgMASAAAWQAAAnAaASQAZATAnALIBQARQAtAIAmARQAlAQAaAgQAZAhAAA6QAAAtgQAhQgRAhgdAXQgeAWglALQgmAMgpAAQhKAAg+geg");
	this.shape_33.setTransform(2449.8,82.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHATgNQATgOAMgUQALgTAAgZQAAgogZgUQgagUglgMIhSgTQgsgIgmgQQgmgRgZgdQgageAAg3QAAgrASggQASgfAbgUQAcgVAjgKQAjgKAkAAQBHAAA0AaQA0AaAcA4IhDApQgVgpgggTQgggWgzABIgqAFIgnASQgRAMgLARQgNASAAAWQAAAnAaASQAZATAmALIBRARQAtAIAmARQAmAQAZAgQAZAhAAA6QAAAtgQAhQgRAhgeAXQgcAWgmALQgmAMgpAAQhKAAg+geg");
	this.shape_34.setTransform(2396.6,82.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhrEZQg1gXgngoQgngpgUg3QgVg4AAhCQAAhCAVg3QAVg3AogoQAmgpA0gXQA1gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InlAAIAKA8QAKAlAZAjQAZAjAqAZQApAZBCAAQA5AAA2gcQA2gbAdgvIA2AuQgrBChBAcQhAAehOAAQhBAAg2gXgADNgwQAAgmgQgjQgQghgagaQgbgaglgPQglgOgpAAQg8gBgpAZQgpAagXAgQgYAhgKAeIgLAqIGaAAIAAAAg");
	this.shape_35.setTransform(2336.3,82.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgPgaQgRgbgbgPQgcgQgtAAQgpAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIgBgnIgBgvIgDgsIgBggIBLAAIACA+IADAnIAEAAQAXgvA0gjQAagRAfgJQAegIAjAAQBDAAArAVQAqAVAYAjQAYAiAKAtQAJAtAAAwIAAFWg");
	this.shape_36.setTransform(2266.5,81.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_37.setTransform(2193,65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgFhEQgIghgPgaQgQgbgcgPQgcgQgtAAQgnAAgmAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgCgvIgCgsIAAggIBKAAIACA+IAEAnIADAAQAWgvA1gjQAbgRAegJQAegIAiAAQBEAAAqAVQArAVAZAjQAXAiAKAtQAJAtAAAwIAAFWg");
	this.shape_38.setTransform(2120.6,81.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AiMETQgrgVgZgiQgYgjgJgtQgJgtABgwIAAlXIBKAAIAAFTIAHBFQAGAhAPAaQAQAbAcAPQAcAQAtAAQApAAAlgPQAkgOAbgeQAagdAQgsQARgtgBg7IAAkhIBMAAIAAGeIABAoIABAvIACAtIABAfIhLAAIgBg/IgEgnIgDAAQgXAxg0AhQg1AkhFgBQhDABgrgWg");
	this.shape_39.setTransform(2051.1,83.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_40.setTransform(1979.5,82.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHATgNQATgOAMgUQALgTAAgZQABgogagUQgagUglgMIhSgTQgsgIgmgQQglgRgagdQgageAAg3QAAgrASggQARgfAcgUQAcgVAjgKQAjgKAkAAQBHAAA0AaQA0AaAdA4IhEApQgWgpgfgTQgggWgzABIgqAFIgmASQgSAMgLARQgNASAAAWQAAAnAaASQAZATAmALIBRARQAtAIAmARQAlAQAaAgQAZAhAAA6QAAAtgQAhQgRAhgeAXQgdAWgmALQglAMgpAAQhKAAg+geg");
	this.shape_41.setTransform(1914.7,82.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_42.setTransform(1817.7,65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgHghgOgaQgRgbgbgPQgdgQgsAAQgpAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIAAgnIgCgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAXgvA0gjQAagRAfgJQAegIAjAAQBDAAArAVQAqAVAYAjQAZAiAJAtQAJAtAAAwIAAFWg");
	this.shape_43.setTransform(1745.3,81.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgVgSggQgSghAAgtQAAhDAhgmQAignAxgTQAygTA3gFIBhgGIBYAAIAAgkQAAglgLgbQgMgbgXgQQgughhHABQgxAAgsAPQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAZQA+AwAABuIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAaQgwAahJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAYQgVAZAAAmQAAAbALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngSQAmgRAXgcQAYgdAIgjQAJgjAAglIAAglIhTAAg");
	this.shape_44.setTransform(1677.7,82.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgkIA0iFIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA4glAgQgmAhg+AAg");
	this.shape_45.setTransform(1584.6,97.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_46.setTransform(1534.3,75.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngoQgngpgUg3QgVg4AAhCQAAhCAVg3QAWg3AngoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InkAAIAKA8QAJAlAZAjQAYAjArAZQAqAZBBAAQA5AAA2gcQA1gbAegvIA2AuQgrBChBAcQhAAehNAAQhCAAg1gXgADNgwQAAgmgPgjQgRghgagaQgbgagkgPQgmgOgpAAQg8gBgoAZQgqAagXAgQgYAhgKAeIgKAqIGZAAIAAAAg");
	this.shape_47.setTransform(1479.3,82.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AhFHgIAAn9Ih3AAIAAhEIB3AAIAAi8QAAg5ASgkQARglAZgXQAYgWAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgNgrAAQhlABAACZIAAChICHAAIAABEIiHAAIAAH9g");
	this.shape_48.setTransform(1428.7,63.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgVgSggQgSghAAgtQAAhDAhgmQAignAxgTQAygTA3gFIBhgGIBYAAIAAgkQAAglgLgbQgMgbgXgQQgughhHABQgxAAgsAPQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAZQA+AwAABuIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAaQgwAahJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAYQgVAZAAAmQAAAbALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngSQAmgRAXgcQAYgdAIgjQAJgjAAglIAAglIhTAAg");
	this.shape_49.setTransform(1374.4,82.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcghg8IBCgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHAUgNQARgOANgUQALgTAAgZQAAgogZgUQgagUglgMIhSgTQgtgIglgQQglgRgbgdQgZgeAAg3QAAgrASggQARgfAcgUQAdgVAigKQAjgKAkAAQBHAAA0AaQA0AaAdA4IhEApQgWgpgfgTQgggWgzABIgqAFIgnASQgRAMgLARQgNASAAAWQAAAnAaASQAaATAlALIBSARQAsAIAmARQAlAQAaAgQAaAhAAA6QgBAtgQAhQgRAhgeAXQgdAWgmALQglAMgpAAQhKAAg+geg");
	this.shape_50.setTransform(1315,82.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhqEZQg3gXgmgoQgngpgVg3QgUg4AAhCQAAhCAVg3QAVg3AogoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InlAAIAKA8QAJAlAZAjQAaAjAqAZQApAZBCAAQA5AAA2gcQA1gbAegvIA2AuQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgQgjQgPghgbgaQgbgaglgPQglgOgpAAQg8gBgpAZQgoAagZAgQgXAhgKAeIgLAqIGaAAIAAAAg");
	this.shape_51.setTransform(1222.2,82.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("ACtHZIAAlVIgHhEQgGghgPgaQgQgagcgPQgdgPgsAAQgpAAglANQgkAPgcAcQgaAegQAsQgPAtAAA8IAAEhIhMAAIAAuwIBMAAIAAHVIACAAQAXgwA0giQAbgSAegJQAegIAjAAQBDAAArAVQAqAVAYAjQAYAjAKArQAJAuAAAvIAAFYg");
	this.shape_52.setTransform(1152.7,64.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_53.setTransform(1096.5,75.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHATgNQATgOAMgUQALgTAAgZQABgogagUQgagUglgMIhRgTQgtgIgmgQQglgRgagdQgageAAg3QAAgrASggQASgfAbgUQAcgVAkgKQAigKAkAAQBIAAAzAaQA0AaAdA4IhEApQgWgpgfgTQgggWgzABIgqAFIgmASQgSAMgLARQgNASAAAWQAAAnAaASQAaATAlALIBRARQAtAIAmARQAmAQAZAgQAZAhAAA6QAAAtgQAhQgRAhgeAXQgcAWgmALQgmAMgpAAQhKAAg+geg");
	this.shape_54.setTransform(1016,82.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngoQgngpgUg3QgVg4AAhCQAAhCAVg3QAVg3AogoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InlAAIAKA8QAKAlAZAjQAZAjAqAZQApAZBCAAQA5AAA2gcQA2gbAdgvIA2AuQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgPgjQgQghgbgaQgbgaglgPQglgOgpAAQg8gBgpAZQgoAagYAgQgYAhgKAeIgLAqIGaAAIAAAAg");
	this.shape_55.setTransform(955.7,82.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_56.setTransform(899.6,75.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_57.setTransform(842.2,82.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AFpEoIAAlTIgGhEQgHghgQgaQgPgbgcgPQgdgQgtAAQg0AAgiAUQghATgUAeQgTAegIAjQgJAjAAAgIAAFDIhJAAIAAlaQAAgogIghQgHgfgPgZQgdgxg+AAQgpAAglAOQglAPgaAdQgbAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIADA+IADAnIADAAQAXgvA0gjQAagRAfgJQAfgIAiAAQA6AAAvAdQAwAeAUBCQAOghAUgXQAVgYAbgPQA2geA8AAQBEAAArAVQAqAVAYAjQAYAiALAtQAJAtAAAwIAAFWg");
	this.shape_58.setTransform(751.5,81.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_59.setTransform(661.4,82.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AiSEoIAAmeIgCgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnQAcgzAsghQAtggBBAAIAWABIAVAFIgIBKIgcgFQgxAAgkAQQgjAPgXAbQgWAcgNAlQgLAlABAqIAAE6g");
	this.shape_60.setTransform(609.7,81.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AkxG3IAAteIBKAAIAABmIADAAQASgeAagWQAbgWAegPQAegOAjgHIBAgHQBDAAA4AXQA3AWAoApQApAoAXA4QAXA4gBBCQABBCgXA4QgXA3gpAoQgoApg3AWQg4AXhDAAIhAgHQgjgHgegPQgegOgbgWQgagWgSgeIgDAAIAAGDgAhclfQgrASghAgQghAggRArQgUArAAAxQAAAxAUArQARAqAhAgQAhAgArASQAsATAyAAQA1AAArgTQAqgSAfggQAdggAQgqQAQgrAAgxQAAgxgQgrQgQgrgdggQgfgggqgSQgrgTg1AAQgyAAgsATg");
	this.shape_61.setTransform(547.6,96.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_62.setTransform(454.8,75.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgoG7IAAt0IBRAAIAAN0g");
	this.shape_63.setTransform(418.3,67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcgAj7IEQhphiAAhwQAAgvApgiQAmggAvAAQAkAAAbAfQAIAJAkA7QAcAvAeAVQAqAfA9AAQBAAAAsgtQAtguAAhDQAAhPgrgiQgcgWhDgKQhIgMgXgOQgrgZAAhCQAAg7AkgcQAVgQA6gQQA5gQAWgSQAkgeAAg/QAAgygfgfQggghg2AAQgzAAgkAaQgYASgbAnQgeAugMALQgbAagkAAQgwAAgegnQgcgkAAgyQAAhlBuhWQBvhYCFAAQCiAABkBqQBVBbAAByQAABRghBCQgiBEhCAsQBZArA2BPQA3BTAABiQAACbh2BuQh4BvisAAQioAAh2hug");
	this.shape_64.setTransform(143,143);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#176B8D").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcgAj7IEQhphiAAhwQAAgvApgiQAmggAvAAQAkAAAbAfQAIAJAkA7QAcAvAeAVQAqAfA9AAQBAAAAsgtQAtguAAhDQAAhPgrgiQgcgWhDgKQhIgMgXgOQgrgZAAhCQAAg7AkgcQAVgQA6gQQA5gQAWgSQAkgeAAg/QAAgygfgfQggghg2AAQgzAAgkAaQgYASgbAnQgeAugMALQgbAagkAAQgwAAgegnQgcgkAAgyQAAhlBuhWQBvhYCFAAQCiAABkBqQBVBbAAByQAABRghBCQgiBEhCAsQBZArA2BPQA3BTAABiQAACbh2BuQh4BvisAAQioAAh2hug");
	this.shape_65.setTransform(143,143);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(1,1,1).p("AZ8AAQAAJsnnG4QnlG4qwAAQqvAAnmm4Qnmm4AApsQAAprHmm4QHmm4KvAAQKwAAHlG4QHnG4AAJrg");
	this.shape_66.setTransform(137.4,136.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#176B8D").s().p("AyVQkQnlm4AApsQAApsHlm3QHmm4KvAAQKwAAHlG4QHmG3AAJsQAAJsnmG4QnlG4qwAAQqvAAnmm4g");
	this.shape_67.setTransform(137.4,136.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64}]}).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_64}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.1,286.1);


(lib.one = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("beep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgjIA0iGIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA3glAhQgmAhg+AAg");
	this.shape.setTransform(2571.1,163.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhNEZQg4gWgogpQgogogXg4QgXg5AAhBQAAhCAXg4QAXg3AogoQAogpA4gXQA4gWBBAAQBAAAA2AaQA3AbAqAvIg8AtQgggkgogUQgmgWgtAAQgzAAgrATQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQArATAzAAQAwAAAogWQAngWAcgkIA5AvQgpA0g2AZQg2AYg/AAQhBAAg4gXg");
	this.shape_1.setTransform(2514.8,148.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_2.setTransform(2467.1,133.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglHZIAAuwIBKAAIAAOwg");
	this.shape_3.setTransform(2437,129.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah5EZQg5gWgogpQgogogXg4QgWg5AAhBQAAhCAWg4QAXg3AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA3QAXA4AABCQAABBgXA5QgWA4gpAoQgpApg3AWQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAegfAPgrQAQgrAAgxQAAgwgQgsQgPgqgeggQgegggrgTQgrgTg0AAQg0AAgqATg");
	this.shape_4.setTransform(2384.8,148.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkyG3IAAteIBLAAIAABmIADAAQASgeAagWQAbgWAegPQAegOAjgHIBAgHQBDAAA4AXQA3AWAoApQApAoAXA4QAXA4gBBCQABBCgXA4QgXA3gpAoQgoApg3AWQg4AXhDAAIhAgHQgjgHgegPQgegOgbgWQgagWgSgeIgDAAIAAGDgAhclfQgrASghAgQghAggSArQgTArAAAxQAAAxATArQASAqAhAgQAhAgArASQAsATAyAAQA1AAArgTQAqgSAeggQAeggAPgqQARgrAAgxQAAgxgRgrQgPgrgeggQgegggqgSQgrgTg1AAQgyAAgsATg");
	this.shape_5.setTransform(2310.4,161.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgjIA0iGIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA3glAhQgmAhg+AAg");
	this.shape_6.setTransform(2210,163.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiTEoIAAmeIgBgnIgBgvIgDgsIAAggIBKAAIACA+IADAnQAdgzAtghQAsggBBAAIAWABIAWAFIgJBKIgcgFQgyAAgjAQQgjAPgXAbQgXAcgLAlQgMAlAAAqIAAE6g");
	this.shape_7.setTransform(2164.2,147.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgUgSghQgSggAAgvQAAhDAhglQAignAxgTQAygTA3gGIBhgFIBYAAIAAgjQAAgmgLgaQgMgbgXgRQgughhHAAQgxAAgsAQQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAYQA+AyAABtIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAZQgwAbhJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAZQgVAZAAAmQAAAaALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngRQAmgSAXgcQAYgcAIgkQAJgjAAglIAAgmIhTAAg");
	this.shape_8.setTransform(2106.3,148.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_9.setTransform(2053.3,140.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhqEZQg2gWgngpQgngogUg4QgVg5AAhCQAAhAAVg4QAWg3AngoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAnARAxQASAwAAAyIAAA0InkAAIAKA8QAJAlAZAjQAZAjAqAZQAqAZBBAAQA5AAA2gbQA2gcAdgwIA2AvQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgPgjQgRghgagaQgbgZgkgQQgmgPgpAAQg8AAgpAZQgoAagYAgQgYAggKAfIgKAqIGZAAIAAAAg");
	this.shape_10.setTransform(1998.2,148.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgHghgOgaQgRgbgbgPQgcgQguAAQgoAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIAAgnIgCgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAWgvA1gjQAbgRAegJQAfgIAhAAQBEAAArAVQAqAVAYAjQAZAiAJAtQAJAtAAAwIAAFWg");
	this.shape_11.setTransform(1928.4,147.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah5EZQg5gWgogpQgogogXg4QgWg5AAhBQAAhCAWg4QAXg3AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA3QAXA4AABCQAABBgXA5QgWA4gpAoQgpApg3AWQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAegfAPgrQAQgrAAgxQAAgwgQgsQgPgqgeggQgegggrgTQgrgTg0AAQg0AAgqATg");
	this.shape_12.setTransform(1856.8,148.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AFoEoIAAlTIgFhEQgHghgQgaQgPgbgdgPQgbgQguAAQg0AAgiAUQghATgUAeQgTAegIAjQgJAjABAgIAAFDIhLAAIAAlaQAAgogHghQgHgfgPgZQgdgxg+AAQgoAAgmAOQglAPgbAdQgaAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgCgnIgCgvIgCgsIgBggIBLAAIADA+IADAnIADAAQAWgvA1gjQAagRAfgJQAfgIAiAAQA6AAAvAdQAwAeAUBCQAOghAUgXQAVgYAbgPQA3geA7AAQBEAAAqAVQArAVAYAjQAYAiALAtQAIAtABAwIAAFWg");
	this.shape_13.setTransform(1766.2,147.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcghg8IBCgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHAUgNQASgPAMgTQALgTAAgZQAAgpgZgTQgagUglgLIhSgTQgtgJglgQQgmgRgagdQgZgeAAg4QAAgqASggQARgeAcgWQAcgUAjgKQAjgKAkAAQBIAAAzAaQA0AbAdA4IhEAoQgWgpgfgTQgggWgzAAIgqAGIgnATQgRAKgMASQgMASAAAWQAAAnAaASQAaATAmALIBRARQAsAJAmAQQAlAQAaAgQAaAgAAA7QAAAsgRAiQgRAhgdAWQgeAXgmALQglAMgpAAQhKAAg+geg");
	this.shape_14.setTransform(1653,148.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhUCPIBPkdIBaAAIhfEdg");
	this.shape_15.setTransform(1625.1,102.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgGhEQgIghgOgaQgRgbgbgPQgcgQguAAQgnAAgmAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIAAgnIgCgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAWgvA1gjQAbgRAegJQAfgIAhAAQBEAAArAVQAqAVAYAjQAZAiAJAtQAKAtgBAwIAAFWg");
	this.shape_16.setTransform(1573.8,147.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ah5EZQg5gWgogpQgogogXg4QgWg5AAhBQAAhCAWg4QAXg3AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA3QAXA4AABCQAABBgXA5QgWA4gpAoQgpApg3AWQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAegfAPgrQAQgrAAgxQAAgwgQgsQgPgqgeggQgegggrgTQgrgTg0AAQg0AAgqATg");
	this.shape_17.setTransform(1502.2,148.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_18.setTransform(1450.1,133.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_19.setTransform(1413.7,140.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgUgSghQgSggAAgvQAAhDAhglQAignAxgTQAygTA3gGIBhgFIBYAAIAAgjQAAgmgLgaQgMgbgXgRQgughhHAAQgxAAgsAQQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAYQA+AyAABtIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAZQgwAbhJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAZQgVAZAAAmQAAAaALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngRQAmgSAXgcQAYgcAIgkQAJgjAAglIAAgmIhTAAg");
	this.shape_20.setTransform(1360.2,148.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgGhEQgHghgQgaQgQgbgbgPQgcgQgtAAQgoAAgmAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIAAgnIgCgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAXgvA0gjQAagRAfgJQAegIAjAAQBDAAArAVQAqAVAYAjQAZAiAJAtQAKAtgBAwIAAFWg");
	this.shape_21.setTransform(1293.5,147.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhrEZQg2gWgmgpQgngogVg4QgUg5AAhCQAAhAAVg4QAVg3AngoQAngpA0gXQA1gXA/AAQBCAAAyAXQAzAXAjAmQAiAnARAxQASAwAAAyIAAA0InlAAIAKA8QAJAlAZAjQAaAjAqAZQApAZBCAAQA5AAA2gbQA1gcAdgwIA3AvQgrBChBAcQhAAehNAAQhCAAg2gXgADNgwQAAgmgQgjQgPghgbgaQgbgZglgQQglgPgoAAQg+AAgoAZQgpAagYAgQgXAggKAfIgLAqIGaAAIAAAAg");
	this.shape_22.setTransform(1191.8,148.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACsHZIAAlUIgGhFQgGghgQgaQgQgagcgPQgcgQgsAAQgoAAgmAPQglAPgbAcQgaAdgQAsQgPAtAAA8IAAEhIhMAAIAAuwIBMAAIAAHVIACAAQAWgwA1giQAbgSAegIQAegJAjAAQBDAAAqAVQArAVAZAjQAXAiAKAsQAKAtgBAwIAAFYg");
	this.shape_23.setTransform(1122.3,129.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_24.setTransform(1066.1,140.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcghg8IBCgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAYgHATgNQASgPAMgTQALgTAAgZQABgpgagTQgagUglgLIhSgTQgtgJglgQQglgRgbgdQgZgeAAg4QAAgqASggQARgeAcgWQAdgUAigKQAjgKAkAAQBHAAA0AaQA0AbAdA4IhEAoQgWgpgfgTQgggWgzAAIgqAGIgnATQgRAKgLASQgNASAAAWQAAAnAaASQAaATAlALIBSARQAsAJAmAQQAlAQAaAgQAaAgAAA7QgBAsgQAiQgRAhgdAWQgeAXgmALQglAMgpAAQhKAAg+geg");
	this.shape_25.setTransform(985.6,148.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_26.setTransform(938.7,140.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhNEZQg5gWgogpQgngogYg4QgWg5ABhBQgBhCAWg4QAYg3AngoQAogpA5gXQA4gWBBAAQBAAAA3AaQA2AbAqAvIg8AtQgggkgngUQgngWgtAAQg0AAgpATQgrATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhArASQApATA0AAQAvAAAogWQAogWAcgkIA5AvQgqA0g2AZQg1AYg/AAQhBAAg4gXg");
	this.shape_27.setTransform(891,148.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AiNETQgqgWgZgiQgZgigIgtQgIgtAAgwIAAlXIBKAAIAAFUIAHBDQAGAiAPAaQAQAaAcAQQAcAPAtAAQAoAAAmgOQAkgOAbgdQAageARgsQAQgtAAg7IAAkhIBLAAIAAGeIAAAnIACAwIACAtIACAfIhMAAIgCg/IgCgmIgEAAQgXAvg0AjQg0AjhGAAQhEAAgrgWg");
	this.shape_28.setTransform(823.3,148.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_29.setTransform(749.8,130.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgHghgOgaQgRgbgbgPQgcgQgtAAQgoAAgmAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgCgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAXgvA0gjQAbgRAegJQAegIAjAAQBDAAArAVQAqAVAYAjQAZAiAJAtQAJAtABAwIAAFWg");
	this.shape_30.setTransform(677.4,147.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah5EZQg5gWgogpQgogogXg4QgWg5AAhBQAAhCAWg4QAXg3AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA3QAXA4AABCQAABBgXA5QgWA4gpAoQgpApg3AWQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAegfAPgrQAQgrAAgxQAAgwgQgsQgPgqgeggQgegggrgTQgrgTg0AAQg0AAgqATg");
	this.shape_31.setTransform(605.8,148.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhNEZQg5gWgngpQgpgogWg4QgXg5AAhBQAAhCAXg4QAWg3ApgoQAngpA5gXQA4gWBBAAQBAAAA2AaQA3AbArAvIg9AtQgggkgogUQglgWguAAQg0AAgqATQgqATgeAgQgeAggQAqQgQAsAAAwQAAAxAQArQAQArAeAfQAeAhAqASQAqATA0AAQAwAAAogWQAmgWAdgkIA5AvQgqA0g1AZQg2AYg/AAQhBAAg4gXg");
	this.shape_32.setTransform(541.3,148.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_33.setTransform(454.8,140.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgoG7IAAt1IBRAAIAAN1g");
	this.shape_34.setTransform(418.3,132.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAJPQgogmAAg/IAAtUIhJAAQg1AAgegrQgagmAAgzQAAgyAdgnQAggrAwAAIDkAAQAyABAdAjQAcAiABA2IAAPgQAAA/goAmQgmAkg2AAQg3AAgkgkg");
	this.shape_35.setTransform(138.5,143.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcg");
	this.shape_36.setTransform(143,143);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#176B8D").s().p("AAAJPQgogmAAg/IAAtUIhJAAQg1AAgegrQgagmAAgzQAAgyAdgnQAggrAwAAIDkAAQAyABAdAjQAcAiABA2IAAPgQAAA/goAmQgmAkg2AAQg3AAgkgkg");
	this.shape_37.setTransform(138.5,143.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#176B8D").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcg");
	this.shape_38.setTransform(143,143);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(1,1,1).p("AUuAAQAAIlmFGEQmEGFolAAQokAAmFmFQmEmEAAolQAAokGEmFQGFmEIkAAQIlAAGEGEQGFGFAAIkg");
	this.shape_39.setTransform(140.6,140.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AupOpQmEmEABolQgBokGEmFQGFmEIkAAQIlAAGEGEQGFGFgBIkQABIlmFGEQmEGFolAAQokAAmFmFg");
	this.shape_40.setTransform(140.6,140.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35}]}).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.1,286.1);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhIDGQAAgGgBgGQgEgQgOgEIgqgFQgngFAHgsQABgHgDgCIgGgEQgDgEAHgKQABgBgGgCQgGgCAAgCIAGgLQAGgJgDgCIgQgJQgMgHABgIQAAgFASgUQATgUACgLQADgLgEgMQgFgQAAgKQgJggAWgmQASgeAggYIBZAAQgwAIgWAnIACAPQAJAUAmAVIAWANIAABwQAAAKAJAFQADACAEAAQAEAAAEgCIBgg2IAGAGQARAQAbgjQAdgmgNgwQgHgegpgaQgogbgwgHIBZAAQBYAwgTBvQgPBSg3BFQgcAhABA0g");
	this.shape.setTransform(19.9,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,39.9,39.7), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al0DGIAAmLILpAAIAAGLg");
	this.shape.setTransform(37.3,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,74.6,39.7), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZABQAZgDAaADg");
	this.shape.setTransform(2.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,5.2,0.3), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjEBHQgKgKAAgNIgChaQAAgNAKgKQAJgKAOAAIFdgEQAOgBAKAKQAKAKAAANIABBaQAAANgKAKQgJAKgOAAIldAEIgBAAQgNAAgJgJg");
	this.shape.setTransform(20.9,8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,41.8,16.1), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDgUIAAgPQAAgKAJgFQAEgCAEAAQAFAAAFADIBkBGQAIAEAAAKQgBAKgIAEIgGAEQgdgXhbgyg");
	this.shape.setTransform(6.8,5.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,13.6,10.6), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnhFNQgOAAgJgJQgKgKAAgOIAApYQAAgOAKgJQAJgKAOAAIPDAAQAOAAAJAKQAKAJAAAOIAAJYQAAAOgKAKQgJAJgOAAgAmXEBINLAAIAAoAItLAAgAnSBMQgDADAAAFIAABEQAAAFADADQADADAFAAQAFAAADgDQAEgDAAgFIAAhEQAAgFgEgDQgDgDgFgBQgFABgDADgAnggVQgJAJAAAMQAAALAJAIQAIAIAMAAQAMAAAJgIQAIgIAAgLQAAgMgIgJQgJgJgMABQgMgBgIAJgAnSifQgDAEAAAEIAABEQAAAEADAEQADADAFAAQAFAAADgDQAEgEAAgEIAAhEQAAgEgEgEQgDgDgFAAQgFAAgDADg");
	this.shape.setTransform(51.5,33.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,103,66.7), null);


(lib.FRBLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,0,2).p("EgABgpOICKAEICFAJICEARIDCAlIC8A0IB6AoIB5AwIB0A0IByA7IBvBAIDUCPIDECiIBbBXIBYBcIBTBfIBQBkICMDUIBCBtIBvDoIBZDxIA0C9IAlDAIAZELIAECHIgECGIgZEJIg2ECIgjB9IhZDzIhvDlIhCBwIiMDRIijDFIhYBcIhbBXIjEChIhoBKIjbCEIjmBvIh5AwIj3BOIiAAeIiBAWIiEAQIiFAMIiKAEIiEgEIiHgMIiEgQIiCgWIh/geIj4hOIh5gwIjlhvIhxhAIhrhEIjMiaIhfhRIhchXIhYhcIhThhIiYjKIhFhrIh6jiIg2hzIguh4IhOj4Igdh/IgXiDIgRiEIgLiFIgDiGIADiHIALiGIARiFIAXiAIAdh/IBOj3IAuh4IA2h2IB6jfIBFhsIBKhoIBOhkIBThfIBYhcIC7iqIBmhPIDRiPIDih7IB0g0IB5gwIB6goID9hCICCgXICEgRICHgJg");
	this.shape.setTransform(93.9,93.8,0.355,0.355);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.6,0,2).p("AAA+DIDDAKIDBAdIBcAWIC2A4ICtBHIBSAtICfBhICUBvIBHA7IBCBAIB9CKIBvCUIBhCdIAqBUIBKCsIAeBZIAvC5IASBeIALBhIAKDDIgDBiIgSDDIgnC7Ig4C0IgjBYIhRCoIgvBRIhoCZIg5BJIg9BGIiCCCIiPB2IhMA2IifBhIinBSIhYAiIi2A4Ii7AnIjDAUIjFAAIjBgUIi7gnIhcgaIiyhAIiohSIiehhIhMg2IiPh2IhFhAIh8iIIg3hJIhoiZIhcimIhHirIgehZIgwi4IgejAIgIhhIAAjEIAIhhIAei/IAWhdIA4i1IBHisIBcijIAyhOIBtiUIB8iKIBFhAICPh0ICahoICjhcICthHIBageIC4gwIC/gdg");
	this.shape_1.setTransform(93.9,93.4,0.355,0.355);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVBrIgTgHIgKgGIgJgEIgRgMIgNgRIgQgoIgCgKIAAgWIAEgTIAOgdIANgQIARgOIAmgQIAMAAIAJgCIAMACIAJAAIALAEIAdAMIAHAHIAJAHIANAQIAJATIAIAdIACAMIgFAUIgBAMIgNAcIgNARIgQAMIgTAKIgVAHg");
	this.shape_2.setTransform(18.1,62.1,0.355,0.355);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUBrIgVgHIgKgGIgJgEIgQgMIgNgRIgJgTIgHgVIAAgKIgDgKIADgMIAAgIIAKgfIATgZIAQgOIAogQIAJAAIALgCIAKACIALAAIAnAQIAPAOIAYAjIAIAdIACAMIgFAUIgBAMIgEAJIgYAkIgPAMIgSAKIgVAHg");
	this.shape_3.setTransform(168.9,62.1,0.355,0.355);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjnBmIFyh6ImEgTIgRh3IHhhBIAMBNImWA2IGfAVIAKBRImKB9IGVg2IAKBOInhBCg");
	this.shape_4.setTransform(174.7,83.4,0.355,0.355);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AkFBvIAokiIBWAMIgeDRIBmAPIAcjCIBUANIgcDAIB9ATIAfjcIBVANIgqEsg");
	this.shape_5.setTransform(175,98.9,0.355,0.355);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AkFCSIBSk6IBUAXIgfB1IGEBiIgVBSImEhkIgfB1g");
	this.shape_6.setTransform(171.9,109.9,0.355,0.355);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABfDEIgigDIgkgLIAehKIARAFIAiAAIANgEIAYgSIAJgPIAIgPIALgjIAAgQIgCgMIgEgNIgHgKIgLgJIgNgFIgIgEIgRAAIgOAEIgPAJIgGAFIhKBcIgOAQIgQANIgmARIgnACIgWgEIgYgJIgtgYIgfgfIgHgMIgLgZIgEgMIgCgQIAAgOIADgfIAag9IAJgPIAighIAngRIAPgCIANgEIARAAIAwAHIAPAHIgeBLIgRgEIgOgBIgPABIgNAEIgXAQIgIANIgLAgIgDANIAAANIADANIAEAKIAHAKIAIAHIAVAJIAYAAIAHgCIANgJIAGgFIBYhuIAMgMIAQgKIAlgOIAZAAIAKACIANABIAaAJIAvAaIAgAfIAJAOIALAcIADAcIgDAvIgEATIgPAjIgSAdIgVAYIgaATIgNAHIgcAHIgOACg");
	this.shape_7.setTransform(168.3,124.3,0.355,0.355);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABCB6IlMgnIAzhTIDfAnIiLiyIA0hPIC9ENICcBhIgtBHg");
	this.shape_8.setTransform(161,134.2,0.355,0.355);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ABEDjIgegFIgfgMIgugeIA1g8IAPALIARAHIANAEIAOAAIAQgEIAMgFIAPgKIAZgbIAJgPIAJgcIAAgNIgMgYIgJgLIgOgGIgQgFIgJAAIgRAFIgHABIhgA/IgWAKIgUAIIgUACIgogCIgmgSIgTgSIgNgKIgdgmIgGgNIgKgcIgBgNIABgbIANgrIASgcIAXgaIAagVIAcgOIANgFIAegFIAOAAIAcAEIAeAKIAPAIIALAMIAOAJIgzA9IgPgKIgegJIgMAAIgOADIgaAOIgVAaIgHALIgFAaIAAAKIAKAYIAJAJIAHAFIAHAEIAPADIAJAAIAOgDIB/hOIARgHIAigGIAMAAIAWAEIAUAJIAiAYIAaAaIARAaIAHANIAJAfIAAAqIgJAeIgPAdIgjArIgoAfIgcAOIgfAFg");
	this.shape_9.setTransform(154,147.5,0.355,0.355);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AkGh2IDzikIAwBIIiuB2IA6BTICghtIAxBJIihBsIBGBoIC3h9IAxBHIj7Cqg");
	this.shape_10.setTransform(139.7,160,0.355,0.355);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjIh1IBSglIDrEnIhQlxIBQgkIBUHwIhHAig");
	this.shape_11.setTransform(125.3,165.9,0.355,0.355);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjljJIDTg9IAMgCIAMAAIAXADIAZAIIAdAWIASAUIATAkIAJAhIACAlIgCARIgLAfIgIANIgMAMIAHABIAXAHIALAIIAHAIIAQAUIAqB9IAFAJIAIAIIAJADIAEAMIhZAaIgOgXIgmhwIgOgUIgSgLIgKAAIgdAFIhUAZIA2C3IhOAXgAh/iPIAmB9IBmgfIANgGIAHgFIAHgIIAHgJIAEgXIgEgaIgFgMIgHgOIgPgQIgJgGIgLgBIgJgDg");
	this.shape_12.setTransform(114.6,172.3,0.355,0.355);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ai3jdIElgnIAKBWIjSAcIAOBlIDBgaIAMBVIi/AaIARB7IDZgeIALBVIkrArg");
	this.shape_13.setTransform(100.7,174.9,0.355,0.355);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKEAIg3gJIghgNIglgcIgJgLIgPgaIgKgdIgDg0IACgVIBPAOIAAASIACAQIAFANIAHANIAMALIAbAPIAlAGIARAAIAcgJIASgRIAHgLIACgPIAAgPIgBgJIgGgHIgDgHIgLgMIiFhBIgggaIgJgRIgHgTIgEgUIAAguIAOgxIAOgbIASgXIAYgQIAZgMIAegFIANgBIA0AFIAfALIAcAPIAVAUIAJALIAPAYIAGAPIAHAuIgCAiIhQgMIAAgRIgCgQIgFgMIgHgOIgXgRIgfgJIgcAAIgNAEIgMAFIgJAHIgIAKIgFAJIgEAXIACAIIAAAHIAHAOIAMAKICGBAIAQALIAdAjIAGALIAFAWIACAYIgCAcIgOAyIgQAcIgSAWIglAYIgfAJIgQACg");
	this.shape_14.setTransform(86.1,174.3,0.355,0.355);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjPDAICGnTIEZBRIgWBSIjMg6IgcBjIC7A1IgZBTIi6g2IghB5IDUA8IgYBUg");
	this.shape_15.setTransform(73.1,171.5,0.355,0.355);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA0EaIg7geIAEgcIAshrIADgNIgBgUIgNgTIgYgOIhPgmIhQCtIhMghIDNm7IC8BXIALAHIAUAOIAXAdIADAKIAJAlIAAAaIgCANIgHAbIgFAOIgVAhIgYAZIgPAKIgdAJIgPABIADAGIAHALIAIAWIAAAYIgBANIgzB4IgDAOIABAJIADAIIgDAMgAgog7IBcApIAGADIAVAGIAMAAIAVgKIAPgSIANgaIADgNIAAgNIgCgMIgDgJIgOgRIgKgFIhjgug");
	this.shape_16.setTransform(59,166.7,0.355,0.355);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ai5BkIEyl5IBBA0Ij4E1ICYB9Ig4BFg");
	this.shape_17.setTransform(40.7,156.7,0.355,0.355);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhLCzIA9hVIhghtIhdAsIg7hFIHOjQIA/BLIkVGmgAgfg0IBBBKIByiig");
	this.shape_18.setTransform(31.7,148.7,0.355,0.355);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiVC5IApggIBCgnIAOgKIAJgIIAIgKIADgJIACgKIgFgZIgzhYIinBeIgphHIGnjzIBoC0IAMAjIACANIAAAZIgFAUIgLAYIgYAeIgXASIgwAZIgjAFIgegFIgBAAIgQgFIgNgJIAAAVIgHAWIgNAUIgWAUIhVAzIgWARIgFAIIgCALIgMAHgAAHhZIA2BeIAIAJIAQAOIAKADIALAAIAYgDIAagPIAJgKIAOgQIADgMIAAgMIgHgUIg4hgg");
	this.shape_19.setTransform(24.1,134.9,0.355,0.355);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AkYg2IHHitIBqESIhSAeIhKjFIhgAjIBEC4IhQAdIhFi0Ih1AtIBQDNIhSAdg");
	this.shape_20.setTransform(18.8,122.1,0.355,0.355);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag9DFIhAgOIghgQIgOgKIgZgXIgKgNIgHgSIgti/IHchsIArDEIgBAhIgKAgIgQAeIgbAaIgyAgIgrATIhOATIgaAEIgCACgAiegcIAVBUIABAJIARAYIAHAGIAJAFIAXAIIAYADIA/gCIBEgOIA2gZIASgNIANgOIAFgIIAHgSIACgJIAAgKIgVhdg");
	this.shape_21.setTransform(14.2,107.8,0.355,0.355);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Aj5iLIHngXIAMEkIhVAEIgKjTIhnAGIAJDCIhUAEIgJjDIh+AHIALDdIhXADg");
	this.shape_22.setTransform(12.6,94.4,0.355,0.355);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AB5CiIAdjEIhrgRIgaCtIhUgOIAYisIjLgdIAMhSIHhBGIgpEZg");
	this.shape_23.setTransform(14.1,81.4,0.355,0.355);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAmDdIgMgKIgHgFIgOgEIghgFIgNAAIgNACIgfgLIgLgIIgJgEIgIgJIgEgHIgFgMIAAgNIACgLIASgeIABgTIgBgHIgDgIIgFgFIgTgOIgMgHIgPgDIgZgSIgGgIIgEgGIgEgQIACgFIALgNIALgIIAJgFIAJgHIAHgKIAHgOIADgOIgBgZIgCgIIgEgHIgCgdIACgaIAMgeIACgFIAHgDIAHgBIAMAAIAJABIAKAGIALAHIAmAjIAAAJIACAIIADAEIAFADIADAFIAGACIAVAAIAwgTIALgDIAJAAIAHADIAHAEIAKAKIAEAMIAEAZIgEAaIAIAcIADAGIALAJIAXAJIAKAAIASAGIALAHIAGACIABAFIAEAJIAAAJIgKAXIgsAvIgtAdIgfArIgQAxIgIAlg");
	this.shape_24.setTransform(140.6,89,0.355,0.355);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABBE/IhTgwIgqgeIgPgNIgVAAIgagIIgJgFIgFgGIgCgGIgBgHIADgPIALgUIAKgNIAJgFIAHgGIAFgFIAFgHIACgFIAAgNIgMgLIgFgDIglgIIgYgPIgJgHIgJgTIAAgcIAEgQIAEgKIADgEIAFgNIACgNIgEgYIgIgYIgOgGIgMgHIgLgRIgCgHIAAgTIALgWIAKgNIAMgMIALgIIARgaIAEgLIACgKIAAgQIANgpIAHgLIAJgKIAKgEIAHgBIARADIAHAHIAIAFIANAMIAJAQIAOAOIAOAKIAVAJIALAAIANgEIAigFIAUAFIAJAGIAGAHIAIARIACARIgEAfIgVAhIgDAPIgEALIAAAJIAEAOIADAFIAGAEIADADIAMACIALAAIARAEIAYAKIAHAFIAEAHIABAGIAAAGIgBAHIgGALIgIAKIgLAIIgRAjIgDANIAAAWIADALIARATIAVAIIANAEIAiAdIAMAXIAAAWIgKASIgJAIIgmAXIgFACIgXAUIgTAVIgKAQIgGAPIgGAXIACAHg");
	this.shape_25.setTransform(137,107.9,0.355,0.355);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaExIgJgOIgtg5IgZgXIgNgGIgRgcIgCgKIAAgIIAIgTIAGgKIAJgJIABgHIgBgXIgEgNIgMgWIgXgeIgNgbIAAgaIABgKIARgeIAIgHIALgNIAPgLIgGgVIgDgfIABgMIACgKIAGgIIADgIIATgLIApgDIAagHIAHgHIAIgDIADgEIAEgKIAAgJIgJgOIAQgYIAOgRIAIgFIAHgGIAGgBIAFgCIAOAAIAJADIAKAIIAQAWIAHAMIARA2IAaAWIAJAMIAKASIAFATIgCAFIgDAOIgFAJIgVAWIgHAFIgBAGIgEALIACALIADAKIAFAFIAcA3IAAAWIgCAIIgIAMIgGAEIgSAGIgLAAIgOAFIgQALIgKAPIgDAPIAAAIIADAOIAFALIAHALIAEAMIABALIACAHIgDARIgCAFIgJAMIgTANIgJADIgvAdIgOAOIgJALIgFALIgCAIIAAAFg");
	this.shape_26.setTransform(149,102.1,0.355,0.355);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAMBuIgvgTIgwgeIgMghIgCgNIACgJIAAgGIAEgHIAGgDIALgDIAFACIAaAEIgEAqIAAACIAOhSIALgjIAHgMIAKgJIARgJIATAAIAIACIAZAJIAGAFIALACIAHAIIAFAJIAFALIAAAYIgDAMIgMAiIgTAmIABAfIgBAKIgIASIgFADIgFAEIgIABg");
	this.shape_27.setTransform(145.1,120.8,0.355,0.355);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhyEMIgrhBIgiggIgNgTIgCgKIAAgQIACgHIAIgQIAogkIAGgMIABgJIADgKIAAgHIgDgFIgDgLIAAgbIADgIIAFgHIAUgRIAUgJIAMgEIAHgEIALgJIACgFIADgQIAAgJIgFgRIgHgKIgEgLIgCgJIACgKIAAgHIAHgLIAGgGIAKgHIAKgEIALgDIAPgFIAHgHIAHgEIACgDIABgEIgBgEIgCgCIAAgXIAFgTIAHgNIAKgLIAKgFIAQgGIAfAwIAKAUIApAwIAJAGIAVAIIAHAAIAQAFIAMAHIARAPIAHATIAAARIgDARIgOAbIgHAHIgEAGIgIAPIgBALIABAJIAFAHIADAIIAGADIARAgIAFAOIAAAVIgDAHIgEAFIgIAEIgFADIgVAEIgQAAIgOADIgKADIgKAEIgLAKIgFAMIgCAHIALA0IABANIgBANIgJASIgHAIIgJAFIgaALIgQADIggAAIgNAEIgOABIghALIgQAJIgYATIgIAIg");
	this.shape_28.setTransform(133.3,129,0.355,0.355);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAGBZIgUgDIgIgEIgLgKIgLgSIAAgJIAEgNIAAgFIgCgFIgFgHIgMgLIgOgEIgFgPIAAgQIAEgMIAHgLIAIgIIAHgFIAIgIIAGgFIAOgIIAKAAIAEACIAIAGIALAOIACAJIAEAIIAMAIIAFABIAOAAIAFgBIAMAAIAEADIAKAVIACALIAAAVIgHAcIgJAWIgIAOIgEAFIgfAFg");
	this.shape_29.setTransform(125.4,140.7,0.355,0.355);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPAAIgGgCIACgGIAKAGIgDgIIAiAKIgEALg");
	this.shape_30.setTransform(86.3,154.5,0.355,0.355);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhcBcIAFgLIgIAEIAzhbIA/g3IAzgaIAYgGIACALIgUAFIgzAaIg8AzIgyBYIgBAHg");
	this.shape_31.setTransform(90.2,151.7,0.355,0.355);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AggANIgCgLIgDABIAcgPIAXACIATAIIAFAFIgHAIIgTgLIgSAAIgWALIgCACg");
	this.shape_32.setTransform(94.8,148.3,0.355,0.355);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAvA8IgXgtIghgvIg0ghIgCAAIAAgCIAHgIIA4AjIAkAyIAVAsIAHAUIgLACg");
	this.shape_33.setTransform(98.2,151.1,0.355,0.355);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXAIIALgCIgHgCIAlgRIAGAJIgtASg");
	this.shape_34.setTransform(100.9,153.5,0.355,0.355);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AA3BEIgCAHIgcgtIhKhVIgQgOIAJgHIBaBiIAcAwIAEAFIgGACg");
	this.shape_35.setTransform(99.6,150.5,0.355,0.355);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgqATIAAgDIARgbIAdgJIAnALIgDAJIgMgCIgYgEIgWAEIgMATIgCgDIgJAHg");
	this.shape_36.setTransform(98.8,147.3,0.355,0.355);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgIALIglgSIACAAIADgKIACAAIAkASIAZAFIANAAIADgCIAHAJIgJADIgQACg");
	this.shape_37.setTransform(101.8,147.6,0.355,0.355);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AglgGIAGAAIgGgJIADgDIAEAFIAhAWIAOgCIAIgLIACgHIAMABIgFAKIgLARIgZACg");
	this.shape_38.setTransform(104.5,148.3,0.355,0.355);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWAKIgLgJIgQgCIgVAGIACgEIgMgBIACgBIAbgNIAWAEIARANIAFAFIgLAIg");
	this.shape_39.setTransform(106.8,147.9,0.355,0.355);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVAcIgtgwIAJgHIAAACIAqAsIAhgDIAcgSIAMgOIAJAIIgtAkg");
	this.shape_40.setTransform(110.1,149.2,0.355,0.355);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgcALIASgVIARgHIAPAHIAHAFIgJAGIgEgBIgJgDIgMACIgPASIAAABg");
	this.shape_41.setTransform(113.3,148.2,0.355,0.355);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgugOIAJgHIAvAjIATgGIAHgTIAAgMIALAAIAAAPIgJAZIgfAHg");
	this.shape_42.setTransform(115.7,148.8,0.355,0.355);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgWAPIAGgWIAQgGIAQAAIAIACIgDAKIgFgCIgPAAIgIADIgEAOIAAABg");
	this.shape_43.setTransform(117.8,147.4,0.355,0.355);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbAXIADgLIgEAAIAWgMIAXgRIAEgEIAIAJIgFACIgJAKIglAXg");
	this.shape_44.setTransform(119.5,146.5,0.355,0.355);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgqArIgCACIAVgfIA7hCIAJAJIg8A+IgTAhIAAAAg");
	this.shape_45.setTransform(121.8,144.2,0.355,0.355);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgyARIgJgLIAEgGIAIAGIAWAAIA8gOIAGAJIhAAQgAAjgIIAZgIIgRAQg");
	this.shape_46.setTransform(121.8,142.6,0.355,0.355);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAzAhIgCAFIglg3IghgLIgYAKIgJAHIgHgHIALgKIAdgLIApAOIAoA6IACAFIgEACg");
	this.shape_47.setTransform(118,141.4,0.355,0.355);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeAFIgIgJIACgIIAJAGIACADIARAGIAsgCIgEACIAHAHIgCACIgtABg");
	this.shape_48.setTransform(114.7,140.6,0.355,0.355);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag7AXIAHgQIAUgZIApgHIAxAqIACACIgCAEIgJgGIAAAGIgvgmIgaAHIgSAWIgHAMg");
	this.shape_49.setTransform(111.6,139.6,0.355,0.355);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgmASIgFgIIAKgEIgBgCIAIACIAVgFIAqgSIgEACIALADIAAAFIgBAAIgsATIgXAGg");
	this.shape_50.setTransform(108.3,141,0.355,0.355);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag+ARIAFgLIATgSIAngHIA7AXIACAAIABACIgKAEIABADIg2gVIggAFIgPAQIgCAHg");
	this.shape_51.setTransform(104.9,141,0.355,0.355);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AhEAvIB/hlIgCADIAMADIgBACIgCACIh/Bjg");
	this.shape_52.setTransform(100.6,143.4,0.355,0.355);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhIASIgIgLIAKgGIAFAGIAXALIAqgHIBKgnIAHAIIAAACIhNApIgwAGg");
	this.shape_53.setTransform(95.5,146.2,0.355,0.355);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgggKIgHgGIAEgLIBKAtIACADIgKAFIACACg");
	this.shape_54.setTransform(91.6,145.5,0.355,0.355);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("ABiAIIhOgiIg+gTIg0gHIgpACIgcAFIgSAFIgDAEIgIgMIAIgCIASgHIAdgFIArgCIA2AHIBBATIBOAmIBaA2IgFALg");
	this.shape_55.setTransform(83.4,142.6,0.355,0.355);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("ACRBNIhAgGIhigcIgxgaIgxgjIgngwIgCgGIAEgEIAIALIABgJIAjAwIAvAiIAyAaIAxAQIBUAPIAjAAIAAAMg");
	this.shape_56.setTransform(82,143.6,0.355,0.355);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AA2AYIACgDIgIgLIghgOIhRgNIACAAIAAgMIBTAMIAlARIALARIgCANg");
	this.shape_57.setTransform(89.9,147,0.355,0.355);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhcBYIAJgVIAhgwIA2g6IBOg1IALAGIgEAAIhOA2Ig0A6IggAwIgKATg");
	this.shape_58.setTransform(88.9,151.1,0.355,0.355);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AmMDVIAJgVIAdgwIA5g7IA4gpIAXgNIAAgBIACgEIgEgIIgGgJIgFgEIgRgGIgcgJIhngKIhUgOIgagIIhMghIgvglIglgwIAYgJIANgCIARgFIBCAAIA7AOIBIAcIBTAsIB3BOIARAOIAHACIATADIAJAAIAcgFIAPgHIATgIIASgMICXh2IAEgKIAKgNIAGgDIAGgEIAHgDIAVgBIAoANIATAJIACAEIATAAIA5gaIAHgPIAIgNIALgLIAHgEIAKgDIAHAAIALACIAKADIAMAHIAZAcIAAAEIABAGIACAEIAJADIAfAEIAagEIABgCIAVgNIAOgEIAJAAIATAGIATAPIALANIATAlIgEAEIAAADIAEACIAJACIAQgCIBBgOIgLAJIgyA1IgTAgIgMAMIglAWIgIgCIgPAAIgIACIgHAGIgBACIgCADIAAAYIgDANIgDAGIgCAGIgFADIgNAEIgHgCIgXgLIgigeIgFgDIgHgCIgIAAIgJAFIgIAIIgKANIgCADIgHAMIgOAKIgRAKIgJAEIgJACIgXgGIgWgPIgJgNIgLgSIgMgMIgHgFIgJgEIgMgCIgKAEIgGAEIgIADIgCAKIgCAHIgHAGIgJAFIgGAAIgGgCIgGgDIgTgNIgJgKIgOAEIgJAAIgZgFIglgVIgYgHIgbAAIgHACIgHADIgJAIIgDAHIgCAJIAQAPIAkAlIA2BIIAGANIAHAKIgoAQIgOgnIgng8IgXgXIgbgSIgQgGIgEgFIgIgFIgHgDIgLgCIgZAFIgGAFIgFAFIgHACIgnAOIgbASIgRAIIghAcIgdAkIgaAqIgJAcg");
	this.shape_59.setTransform(99.9,146.8,0.355,0.355);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhZABIgGgBIADgFIAKADIgDgIIA9AKIBlgFIARgFIABALIgQADIhnAHg");
	this.shape_60.setTransform(72.8,151.3,0.355,0.355);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhRAFICAgTIAjgCIAAAMIiiAUg");
	this.shape_61.setTransform(79,150.7,0.355,0.355);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgoAwIAAgLIgFABIAUgbIBAg7IAHALIgjAcIgbAbIgUAaIgCAEg");
	this.shape_62.setTransform(83.4,148.8,0.355,0.355);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("ABaAAIAEALIhfgCIhsgJIACgKIAKACIAjAFICsADIgMALg");
	this.shape_63.setTransform(81.6,147.1,0.355,0.355);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ah0A8IAKgTIAmgjIBFgoIBxgcIACAAIgCALIACAAIhvAdIhDAlIgjAkIgJAMg");
	this.shape_64.setTransform(73.6,148.9,0.355,0.355);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AjWA2IAagfIAJgIIAMgNIAcgTIBAgcIA4gOIAegDIAvAFICdAFIgJAHIhDA/IgIAOIggACIiDAUIgRAEIhmAFg");
	this.shape_65.setTransform(77.3,149.2,0.355,0.355);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("ABBBoIAAgMIgFAIIgrhZIgqg8IgjgiIgNgLIAHgJIAPALIAjAlIArA8IAvBjg");
	this.shape_66.setTransform(73.8,141,0.355,0.355);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAegCIhGgTIg1gFIgVAAIAAgMIAWAAIA2AFIBKAVIBPAqIgHAJg");
	this.shape_67.setTransform(67.3,136.2,0.355,0.355);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAgAnIgxhFIg6hHIgKgJIAOAAIAAALIADgJIA9BIIAwBDIAtBLIgKAFg");
	this.shape_68.setTransform(65.8,138.8,0.355,0.355);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAkAYIhDgSIhIgaIgDAAIAAgDIAKgEIgCgCIBHAZIBBAOIBFAJIAAALg");
	this.shape_69.setTransform(72.3,143.6,0.355,0.355);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ABuB9IhogbIgigQIgKgVIhTh6Ig7hHIBKAHIBLATIATAIIA6AiIAwAuIAsA8IArBbg");
	this.shape_70.setTransform(69.7,139.8,0.355,0.355);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAjAjIgqgzIgYgTIAEgLIAbAXIAuA0IAHAMIgLAGgAg0gsIAUgCIgBAKg");
	this.shape_71.setTransform(58.1,144.4,0.355,0.355);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgXAXIhegwIgCgBIALgGIgBgCIBZAsIBJANIAugCIARgHIAEAMIgTAGIgyADg");
	this.shape_72.setTransform(63.9,147,0.355,0.355);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhSARICjgsIACAMIgMACIiWAqg");
	this.shape_73.setTransform(71,146.9,0.355,0.355);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("ABCATIAAAMIg5gKIg3gRIg+gZIADgJIA9AYIA5APIBgAPIgoAHg");
	this.shape_74.setTransform(71.5,145.2,0.355,0.355);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgIgHIgqgMIgMAAIgLgFIAIgHIASAAIAsAPIBNAmIgDAKg");
	this.shape_75.setTransform(65.1,143.3,0.355,0.355);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhSAAICegKIgFADIAMAFIgDACIgCAAIigALg");
	this.shape_76.setTransform(59.9,142.7,0.355,0.355);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgtBJIg/gYIgwgeIgagjIgngoIgPgHICggLIAAgDIACgCIARAAIC1BOIBxAbIgKACIiZArIgDACIg/AHg");
	this.shape_77.setTransform(65.4,145.2,0.355,0.355);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AghgjIgWg0IAGAFIAAgMIAEAAIAYA1IA/BtIAOATIgKAIg");
	this.shape_78.setTransform(59.4,128.4,0.355,0.355);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgPBnIAHgSIAJgwIAEhAIgMhIIAIgIIAAADIACAAIANBNIgEBCIgJAyIgFATgAgIhkIABABIgBAAgAgHhjg");
	this.shape_79.setTransform(61.4,135.3,0.355,0.355);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAhAgIgZghIgXgSIgUgMIgIAAIACgMIAMADIAVAJIAaAXIAZAkIgMAAIANAEIgGAMg");
	this.shape_80.setTransform(59.7,138,0.355,0.355);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AARBPIgCgCIgWgvIgNgzIgEg5IAKAAIAGA4IAMAxIAVArIgFgDIgCAMg");
	this.shape_81.setTransform(57.5,134.1,0.355,0.355);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgNBYIABhhIAIg0IAKgVIAJgFIAAANIgJAQIgHAxIgCBhg");
	this.shape_82.setTransform(57.1,128.1,0.355,0.355);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAZCfIgZgUIgLgGIgKgDIgHgEIgPgUIgJgZIgOhHIAAgSIgDgRIAAg4IAKhcIAFgNIAEgFIADgCIACAAIAWAwIBPCEIAMA4IACASIAAAkIgOBPIgFASg");
	this.shape_83.setTransform(59.3,132.2,0.355,0.355);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAMANIgPghIgRgZIgOgOIAVAFIgCALIAEgJIAhA+IANAuIgLAEg");
	this.shape_84.setTransform(45.7,133.4,0.355,0.355);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("ACbBEIgYgDIiCgjIhsg1Ig2gnIgCAAIAAgCIALgDIAyAiIA3AeIBmAmIBmAWIAHAAIgCALg");
	this.shape_85.setTransform(52.4,137.8,0.355,0.355);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAbAwIACgMIgDAKIgagbIgmg1IgFgKIAKgFIAGAJIA9BOIAKAMg");
	this.shape_86.setTransform(57.2,138.6,0.355,0.355);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgCAAIgcgcIgQgLIgBgCIABgNIAIADIAPANIBHBZIgLAEg");
	this.shape_87.setTransform(54.3,135,0.355,0.355);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AhUgJIgUgIIACgLIBLAVICDAXIABAAIgBANg");
	this.shape_88.setTransform(48.9,132.5,0.355,0.355);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("ABJBgIhngnIg2gdIg1gmIgEgPIgYhCIgJgQIgJgKIBMATICFAaIAFAAIAFAHIAJAHIAxA3IArA/IAvA6g");
	this.shape_89.setTransform(51.7,135.9,0.355,0.355);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("ABjAdIjMguIAEgLIAKACIDBAqIgHAGIALAAIAAAHg");
	this.shape_90.setTransform(47.8,128.5,0.355,0.355);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("ABlCTIg7guIgvgwIglgwIgthXIgTg1IgCgJIALgCIABAHIAlBcIAaAtIAkAvIAvAxIA7AqIgBAAIgFALg");
	this.shape_91.setTransform(40.4,122.6,0.355,0.355);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAgAiIgggOIgygiIAJgFIgLACIgFgQIA/AsIAeALIAOAAIAIAHIgIAFg");
	this.shape_92.setTransform(38.4,118.1,0.355,0.355);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("ACVCSIAAgHIgMg7IgTgoIgjgtIg5gvIhMgvIhrgkIAFgCIgHgHIACgCIADAAIBsAnIBQAtIA4AyIAmAuIATArIALAlIACAhg");
	this.shape_93.setTransform(45.9,124,0.355,0.355);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AADB4Ig6gsIhDhIIgggvIgfg/IgLgfIgGgXIgEgFIAzAjIASAHIAXAFIAKgDIAeAIIA2ATIBXArIAhAYIAmAiIAmAxIAUArIAKAjIABAgg");
	this.shape_94.setTransform(44,123.3,0.355,0.355);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAKAoIgzggIgjgtIALgDIgLAAIAAgZIAIAWIAlArIAvAeIAqATIATAGIgEALg");
	this.shape_95.setTransform(36.3,105,0.355,0.355);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AA7BJIgCgJIgQgeIgogrIhGg0IADAAIADgLIACAAIBFA2IAqAsIAQAiIAEANg");
	this.shape_96.setTransform(41.3,109.6,0.355,0.355);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgghIIAAgCIAKAAIAAgBIAgBdIASAlIAFAOIgJAHg");
	this.shape_97.setTransform(44.5,114.8,0.355,0.355);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AA2AdIgCgCIg8gkIgkgPIgSgDIgCACIgGgKIAIgEIAUAEIAnAOIA+AoIgHAIIAJgGIAKATg");
	this.shape_98.setTransform(43.5,116.5,0.355,0.355);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("ABnCoIhIgoIg1gzIgng5Igag2IgUhgIAAgnIAKAAIAIBRIAlBmIAlA2IAzAyIBIApIgFAAIAFAJIgBACg");
	this.shape_99.setTransform(37.4,109.6,0.355,0.355);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ACDCrIhAgiIgTgBIgHABIglgSIgjgXIgogjIgwhCIgQgcIgSg2IgNhFIAAgmIAFAMIAIALIAUAUIAyAgIAtAUIATAFIAnAcIA0AwIAcAnIBDCug");
	this.shape_100.setTransform(39.7,110.5,0.355,0.355);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAHAiIgOgbIgQgxIAJAEIgEgMIAFgBIACAFIANAxIAOAaIAHAMIgCALg");
	this.shape_101.setTransform(56.2,114.2,0.355,0.355);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgTBbIAFgJIANgfIALg2IgFhZIAGAGIACgLIAEACIABABIACBbIgKA6IgPAgIgHALg");
	this.shape_102.setTransform(56.6,119.1,0.355,0.355);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgrBNIAegcIAXgwIAWhVIADgBIAHAIIACgFIgYBVIgYA0IgWAXIgLAIg");
	this.shape_103.setTransform(54.7,125.4,0.355,0.355);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAPAWIgOg6IgSgrIgLgRIALgFIAKARIAUAtIAQA9IAABJIgJgGIAFAJIgKAEg");
	this.shape_104.setTransform(52.4,124.9,0.355,0.355);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("Ag8B+IAKhLIAPg4IAUguIASggIAUgWIAcgVIAGgCIAEAMIgQAHIgOALIgTAVIgSAfIghBjIgJBKIAAgDIgMAFg");
	this.shape_105.setTransform(53.5,116.9,0.355,0.355);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgeCVIgSg8IgTgtIgKgPIADgoIAOhAIAahHIAegsIAjgcIAEgBIAIAdIAPAlIAGAMIAEAHIAFADIABACIAEAaIAABAIgEAeIgNAsIgHANIgIAJIgIAvIgTA1IgUAiIgMAOIgJAKIgIAFg");
	this.shape_106.setTransform(54.4,120.4,0.355,0.355);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgRB3IAPhAIAJhKIgDhoIAKALIgHAIIAJgFIACBaIgSB+IgHARg");
	this.shape_107.setTransform(55.7,104.8,0.355,0.355);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhkBmICNifIAzgzIgBACIAKAFIgBAEIg0AwIiMCdg");
	this.shape_108.setTransform(51.8,112.8,0.355,0.355);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAAgCIAAgiIgEgUIAAgGIAJgGIACAIIAFAYIAAAjIgHAxIgJgFIAHAHIgOATg");
	this.shape_109.setTransform(48.4,114.9,0.355,0.355);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgzBtIAKhpIAghBIAmgmIATgLIAEAJIgOAKIgmAjIgeA/IgJBlIAAgCIgKAFg");
	this.shape_110.setTransform(50,108.7,0.355,0.355);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("Ag6A9IgEgKIgBAAIBLg4IAjgjIAIgNIAAABIAHgIIACAKIgJATIgkAgIhLA8g");
	this.shape_111.setTransform(53.9,102.9,0.355,0.355);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AhlDCIAAhHIgCgJIgFgHIAAg5IAJguIAHgTIAbguIATgVIASgPIA9gqIA2gsIAMgPIAGgLIACgDIgBgHIACAAIAAADIgBAEIABBSIgMBlIgLAnIg0AyIiNCgg");
	this.shape_112.setTransform(52.2,108.8,0.355,0.355);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgsBaIAEgFIBLipIADgKIAHAKIgKAEIAKAAIhNCvg");
	this.shape_113.setTransform(35.9,93.4,0.355,0.355);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("ABhCKIgYgPIhKg7IgngrIglgvIgYg3IgJg7IAAgEIALAEIAAAAIAKA5IAXAzIAiAvIAmAqIBKA5IAYAPIAHAGIgFALg");
	this.shape_114.setTransform(38.3,101.8,0.355,0.355);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAPCNIAGgLIgIAGIgRgxIgNgzIgGguIgGhtIACgVIAAgHIAMACIADCFIASBfIARAyIAHAQg");
	this.shape_115.setTransform(41.5,102,0.355,0.355);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AApBYIAAACIgQgqIhNiEIAKgFIBOCGIARArIAAACg");
	this.shape_116.setTransform(39,93.6,0.355,0.355);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("ABKDRIg1gpIgVgTIg5hBIgfgxIgRg6IgCgQIAAgNIASggIA8iQIAwBLIAqBTIAGASIgDAZIAHBuIAMBHIAZBLg");
	this.shape_117.setTransform(38.3,98.6,0.355,0.355);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AguCeIADgEIAQgLIASgTIATgfIAPgpIALg0IgChBIgRhQIAMAAIgMgDIAGgRIAGARIAQBRIACBDIgLA3IgRArIgTAgIgkAjIgHABg");
	this.shape_118.setTransform(53.6,95.2,0.355,0.355);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AhQBJIApg2IAvgxIBBgyIACAAIADAIIADAAIhAA0IgvAuIgeAkIgJASg");
	this.shape_119.setTransform(49.3,103.7,0.355,0.355);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgBAzIgHgrIAAgiIAHgiIAKAFIgCAHIgGA2IAIApIgKgCIAKAIIgIAIg");
	this.shape_120.setTransform(46.5,104.6,0.355,0.355);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AglBjIADheIAYg/IAbghIAQgLIAFALIgMAJIgaAfIgWA5IgEBig");
	this.shape_121.setTransform(47.7,99,0.355,0.355);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AhQBHIBMg3IAugyIAWgjIAFgMIALADIgHAPIgXAjIgvAzIhOA7g");
	this.shape_122.setTransform(51.8,92.8,0.355,0.355);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("Ah6C/IAAgjIAHggIgCgzIAJg9IAOggIAHgKIAFgLIAIgKIANgNIAMgHIABgCIBNg6IAugzIAegwIARBSIABBCIgKA2IgRAqIgTAdIgoAlIgSAKIgvAmIhNBXIgKAQg");
	this.shape_123.setTransform(50.7,98.1,0.355,0.355);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgLBRIgEgdIACg4IARhTIAGAIIgDgLIAJgBIgRBaIgCA1IADAdIACAHIgIAEg");
	this.shape_124.setTransform(49.1,86.5,0.355,0.355);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AhZCLIAGgIIASgSIBRhyIAwhfIANgyIACAFIAJgFIACAAIAAACIgQAyIgVAxIg5BdIhGBdIgHAGg");
	this.shape_125.setTransform(46,94.8,0.355,0.355);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgBA8IADg7IgDgoIgJgaIgDgEIAMgJIALAlIAEAqIgGA+IgIgGIAHAIIgNAOg");
	this.shape_126.setTransform(42.9,97.8,0.355,0.355);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAABQIABgBIgZg3IAKgzIASglIAOgPIAHAIIgdAwIgJAuIAWAwIACAAIgKAIIAAABg");
	this.shape_127.setTransform(42.4,92.4,0.355,0.355);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AhQBdIgIgJIgCACIAthZIA8g3IAygbIAYgHIACAMIgVAEIgyAaIg3A0IgsBZIAAACg");
	this.shape_128.setTransform(46.2,86.6,0.355,0.355);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhDCsIgDgrIgGgMIgDgMIgFgJIgRgaIgEgMIgDgOIAAgMIAGgaIADgLIAKgUIAWgeIASgxIAog5IAcgbIAqgaIAqgPIAGgBIgMAtIgKBDIAAAZIAHAdIABAJIgMAwIgKAYIhGB3IhMBfg");
	this.shape_129.setTransform(45.6,91.7,0.355,0.355);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AovDvIAKg5IAIgDIAZgXIAIgLIANgNIAVgfIAPgpIAFgXIAAgzIgFgbIgKgeIgJg/IAAgkIAHgkIAIgPIAJgOIALgMIAPgHIAVgEIALAAIANACIAEgEIAYgHIAVAAIAMABIAcAKIAfASIA2A3IAmA3IAxBVIBJCeIADAPIAGANIALARIAEACIADAAIAGgEIAEgHIAJgaIADgWIgKiWIAEhxIADgXIAKgnIAFgIIAFgFIACgGIADgPIAGgHIAFgKIAPgRIAagJIAjACIAYAHIAZAOIBGAuIApAiIAwAxIBEBhIAtBhIAFASIAOAaIAJANIAcAXIAFADIANALIAXAOIAhAKIkRBVIhWAXIioAbg");
	this.shape_130.setTransform(96.2,73.2,0.355,0.355);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AqEF6IBlikIALgaIADgIIAAgIIgDgHIgDgFIgDgGIgIgEIgJgDIgfABIgTAEIBHiSIgBgLIAAgJIAGgfIAOgcIAHgJIAVgTIAGAAIAJgDIAQgIIAvglIBQhSIAMAGIAPAEIAVADIAMAAIAVgDIANgFIAYgRIAMgLIAYgkIBFhMIAJgHIARgGIAEAAIAMAIIB2A9ICJA4IC5A9IDvA7IARBsIANAlIgEATIgKAGIgHADIgJAAIgJACIgMAAIgNgCIpigtIgjAtIhJBCIgiAQIgmAKIgSAAIgIgHIgSgDIgMADIgEACIgGAGIgEAHIgHARIgDANIgGAJIgKAKIgyAmIg7AcIgGgEIgIgCIgNAEIgDACIgEAFIgHAOIgDAWIAAASIgDAKIgCAHIgHAOIgRAOIgvARIgvAFg");
	this.shape_131.setTransform(55.7,72.8,0.355,0.355);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AA/DBIlFhwIiXhDIgmgWIAMgWIBChbIBAhPIAmgnIB9BiICHBVIBtA2IBZAhIB8AbIBeAIIAvBCIgzgTIhSgJIgPACIgPAFIgOAHIgMAIIgJAMIgKADIgNAPIgHAPIgGAcIAIApg");
	this.shape_132.setTransform(69.9,58.1,0.355,0.355);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AEND1IgxgJIhDgTIiIg4IishgIiHhdIgMgLIgEgIIgCgGIAAgKIAEgGIADgIICeibIATgIIAcgFIAHAAIAQAEIAFAFIAFAIIAAALIgCAPIgFAQIgMAVIgHAHIgMARIgEATIACAFIABAHIAIAOIAHAFIBhBQIB4BQIBNAlIADgCIAIAAIAUAFIARAMIAJAJIARAaIAWA/IAGAbg");
	this.shape_133.setTransform(72.6,49.6,0.355,0.355);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("ApzG/IgTgFIgTgIIFAloIEHkTICqieIAugfIAFgEIAOgLIAagNIA2gSIBMgKIAfACIBoATIAGADIAgAeIAGAMIAFAKIADAOIAAAOIgDAQIgSAkIgkApIgHAGIgKAQIgCAKIAAAFIAFAMIAFAHIAEAFIAKAHIAeAoIAbAVIAqAOIAOADIARAAIAHACIAygFIAigOIgGAOIgQA0IgIARIgEAkIgRAKIgJADIgNACIgHAAIgHgCIgIgBIgHgEIgIgHIish/IgpglIgLgFIgKgIIgKgJIgEgOIAAgHIACgHIAFgKIAIgJIAagWIAHgYIACgaIAAgNIgCgNIgGgNIgFgIIgJgKIgNgIIgRgDIgUACIg4APIhVBAIiYCQIiJCdIhvClIhJCAIgLAPIgGAFIgKAIIgTAJIgLACIgLAAIgLgCIgOgGIgcgYIgCAIIgQAVIgzA5IhEAuIgfAGg");
	this.shape_134.setTransform(60.3,51.2,0.355,0.355);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AiPDrIgGgCIgHgDIgIgOIgQgOIgegjIgGgMIgLgUIgCgLIAAgUIANgRIFCkjIACgMIAEgHIAFgHIAGgCIADgDIALAGIAGAGIAIAHIAJAMIA8BwIADAIIAEAGIADAXIgFAZIgLALIkgDnIgZAOIgPAGIgOADg");
	this.shape_135.setTransform(116.8,55.9,0.355,0.355);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AiaERIgHgCIgWgRIgRgQIglhAIALgHIBLhEIBohvIAzhEIAshdIAMg5IAEgEIAPgWIAIgGIAHgDIAHgEIAKgDIALAAIALADIAZAOIAOAOIAOAQIAiA9IAGAGIAFAHIAIAVIAAAOIgBAKIgHASIgFAKIlfFKIgXATIAAACg");
	this.shape_136.setTransform(111.6,49.5,0.355,0.355);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AONKqIgGgCIgHgHIgFgHIgJgOIgIgTIg2hIIgKgJIgIgGIgGgGIgFgCIgCACIgCAFIAAAHIAHAjIgFAYIgHAJIgFAEIgDACIgGAAIgHgCIgHgGIgRgUIrSxtIgCgGIgBgJIgMgVIgIgJIgVgMIgMgEIgPgDIgogDIgvAKIgEACIgFACIgOAMIgMAWIgMA2IgYBBIgcA6IhCBfIgfAgIhIBDIgsAfIgTAJIgJAMIgCAHIgEAHIAAAWIATAoIAPAaIAGAKIAoArIAXAPIAcAMIABgBIAGgFIAIgCIAJAAIAFAFIAHADIAIAHIAGALIAJAKIAaA5IALAPIASAXIATAMIALAGIAWADIANgCIANgFIAOgIIFKjmIATgWIAHgGIAGgDIAHgCIAIAAIAJACIAJAFIAKAIIAJALIASAjIDFE+IACAIIABAIIgBAEIgCAEIgLAKIgiAJIgQAAIgegIIhcgIIhyACIiXATIh4AXIgIADIgIACIgJAAIgMgFIgOgJIgJgHIgIgLIgJgJIgRgbIhTh0IhShVIgfgaIhEgmIgmgMIgkgFIg9ADIgKAEIgOADIgXAQIgXAXIgQAlIgGAXIgDA7IAFAjIgLBKIjolNIgSgSIgQgWIgUg2IgCgTIACgzIARg5IAlhDIAAgDIAWghIAPgKIAUgEIAXAFIAOAHIAfAaIAJgBIAWgEIAegMIAdgVIAEgEIAGgBIAHgDIAJAAIAKAEIAdAXIALAFIAPAGIAIABIATAAIAYgDIAZgOIATgOIAKgFIAMgJIAngIIAagCIBFAGIAKgDIAIgBIARgIIAFgHIAFgKIAAgKIgCgNIgRglIgIgGIgPgMIgYgiIgEgNIgBgbIADgJIAEgHIADgIIAZgUIAWgNIBIgVIAEgCIAGgFIAFgFIAWgLIAjgHIAYgDIBgAMIBXAXIBwArIADACIAPAFIAcAMIBBAsICPCAICYClIGYIpIASAiIAHARIABAEIgBAHIgCADIgHACIgJgCIgvgYIgggiIgvgnIgbgQIgKgEIgDAAIgFAGIAAAFIADAPIALAZIArBLIASAYIAxBTIAXA/IAHArIgBApIgJAeIgGAMIgEAFIgDACg");
	this.shape_137.setTransform(118.6,59.6,0.355,0.355);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AC0DRIgHgBIgGgEIgHgFIglgeIgQgIIgWgHIgJAAIgPAFIgHAGIgHAKIgtAOIgNACIgOgCIgLgEIgugjIAPgRIAXgkIAMgXIAFgUIAAgKIgCgHIgFgGIgIgFIgNgMIgHgJIgLgGIgNgFIgPgDIgHAAIgHADIhAgEIg4AfIgHgTIgCguIAJgcIAIgMIAZgaIAqgTIAbgHIAtAAIACgLIAJgaIAKgNIAOgMIAXgJIAbgDICoAAIANADIANAHIAPAJIANAMIAIAJIALAXIAHAcIAAEHIgCAGIgEAPIgJARIgNAOIgLAJIgKAEIgKACg");
	this.shape_138.setTransform(91.6,38.8,0.355,0.355);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AhCNSIAAxGIgDgMIgFgPIgJgPIgLgNIgKgGIghgHIgjAHIgUAQIgGAJIgKAWIgDANIABQ3IiMgyIAAwHIgEgNIgDgRIgKgPIgGgFIgHgIIgKgDIgHgEIgMgEIgZAAIgKACIgQAIIgNAJIgJANIgHAOIgEAOIgBAMIgDAKIAAPNIiDgpIgDu5IgDgYIgGgRIgHgOIgNgNIgRgJIgUgEIgVACIgOAFIgOAHIgUAXIgHAPIgEAOIAAOHIiHhTIgEudIgyjtIC7jnIEgAhIQXgVIDzgSICoDtIhCDtIgCOhIiNBOIgCuCIgEgaIgMgfIgOgNIgHgDIgLgHIgLAAIgNgCIgYAEIgHAFIgRAIIgQAVIgHANIgCANIgBPSIh7ApIgCvYIgFgeIgEgHIgDgIIgGgHIgPgLIgWgIIgbAAIgIACIgJAEIgQAJIgHAGIgKANIgHANIgHAaIACQHIh5AjIgCwnIgCgMIgMgeIgHgIIgQgMIgLgEIgbgEIgVAEIgMAEIgOAKIgGAHIgPAfIgFAcIAEQ4g");
	this.shape_139.setTransform(94,108.6,0.355,0.355);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AhfDhIgPgEIgbgLIgagQIgOgLIgYgcIgcguIgKghIgCgOIAAgdIAIgeIAQgbIAJgNIAognIAwBBIgOAMIgKANIgHAPIgEANIAAAPIAEAOIARAfIAaAbIAXANIAOADIAMgBIAMgEIANgIIAGgEIAEgHIAIgPIACgJIAAgJIgCgHIAAgHIgohvIgKgqIACgVIAEgSIASgmIAigeIAcgTIAfgOIAcgFIAOAAIAcADIAaALIANAIIAXASIAXAaIATAfIAPArIACAQIAAAPIgFAcIgLAaIgbAnIgaAWIgxhAIANgNIAKgNIAIgZIAAgOIgIgbIgKgQIgUgUIgOgHIgKgDIgMgDIgLAAIgYAMIgLANIgGAFIgBAIIgBAHIAAAOIAxCPIAEAQIgBAlIgDAJIgGALIgDAKIgNAUIgKAHIgTASIgQAMIgfARIgeAHIgOACg");
	this.shape_140.setTransform(158.2,45,0.355,0.355);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AkRBIIFRlfIDSDLIg7A9IiXiSIhIBLICMCGIg7A/IiMiHIhYBaICgCYIg6A+g");
	this.shape_141.setTransform(149.1,34.7,0.355,0.355);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AjcDSIDhlIIhkhGIAxhFIELC0IgvBKIhkhFIjgFKg");
	this.shape_142.setTransform(140.4,25,0.355,0.355);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgBAKIADgSIAAASg");
	this.shape_143.setTransform(126.2,28.3,0.355,0.355);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AA4DpIAAgTIAOhTIgOgFIh2g4IhDBQIhPglIFIl/IBZApIhJH0gAgHAEIBdAoIAhjDg");
	this.shape_144.setTransform(124.3,20.4,0.355,0.355);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AiWDvIBlmCIh2gfIAXhRIE4BPIgUBVIh1gfIhjGCg");
	this.shape_145.setTransform(115.2,14.2,0.355,0.355);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AghD/IgRgEIgvgSIgXgSIgMgKIgJgMIgHgMIgPgvIgCgRIAAgmIBQAHIAEAkIAFAOIAIAMIALAJIAdAMIATAFIAUAAIAQgDIAcgJIAKgHIAMgXIACgPIAAgHIgHgYIgMgLIgOgKIh/g2IgTgLIgPgOIgUgjIgGgSIgBguIAKgyIAOgcIAHgLIAJgLIAVgTIANgHIAZgJIAvgIIA1AIIAPAFIAcANIAKAIIAMALIALAJIAWAnIAEAOIAHAwIgCASIhQgIIAAgRIgDgPIgPgaIgJgHIgNgHIgPgFIgQgCIgPAAIgcAFIgKAGIgPARIgGAMIgCAOIAAAOIACAHIAEAIIARAQIAHAEIByAsIAfATIAPAKIATAWIAGAJIAJAvIAAAcIgCATIgJAgIgOAcIgSAYIgWAUIgaAMIgPAEIgiAGg");
	this.shape_146.setTransform(100.2,12.4,0.355,0.355);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("Ai7jgICzgdIANAAIADgCIAyAHIArAaIAZAcIAfA0IAaBfIAFA1IgDBIIgJAqIgZA0IgLAPIgZAWIgOAHIgRAHIjDAhgAhciaIAxE5IBVgNIAQgFIAHgIIAJgGIAHgHIAFgHIAKgWIAFgYIACg9IgEglIgZhZIgOgTIgPgPIgHgFIgTgHIgGgCIgVAAg");
	this.shape_147.setTransform(79.8,13.5,0.355,0.355);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AjhizIEWhjIAcBSIjFBHIAhBfIC4hAIAcBRIi3BAIAqB3IDQhLIAdBSIkeBmg");
	this.shape_148.setTransform(66.3,16.7,0.355,0.355);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("Ag6hXIhqA7IgrhMIEbidIAqBKIhqA7IDEFdIhLApg");
	this.shape_149.setTransform(51.9,21.1,0.355,0.355);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AivisIBFgyIEaGMIhEAxg");
	this.shape_150.setTransform(45.9,27.1,0.355,0.355);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AkchEIBBg7IFcCLIjoj2IA6g2IFKFlIg8A5IlliQIDsD9Ig5A2g");
	this.shape_151.setTransform(37.9,33.7,0.355,0.355);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ABfD5IgRgDIgPgEIgggNIgdgSIkMjJIAxhCIEJDDIAgARIAPABIAdgBIAagPIAUgaIAHgbIAAgQIgKgbIgUgXIkQjHIA0hHIEGDDIAFAFIAQAMIAhAmIAPAbIAJArIAAARIgGAdIgLAeIgTAeIgYAcIgaAUIgcANIgdAKg");
	this.shape_152.setTransform(26.9,44,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,189.8,189.6);


(lib.four = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("beep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgJIAagWIAUgfIAPgjIA0iFIjrpDIBUAAIC+HlIC6nlIBRAAIkpLzQgWA4glAhQgmAhg+AAg");
	this.shape.setTransform(3144.6,270.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiSEoIAAmeIgCgnIgCgvIgCgsIgBggIBLAAIADA+IADAnQAcgzAsghQAtggBBAAIAWABIAVAFIgIBKIgdgFQgwAAgkAQQgjAPgXAbQgXAcgMAlQgLAlAAAqIAAE6g");
	this.shape_1.setTransform(3098.8,254.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_2.setTransform(3052.7,247.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah8ETQg+gdgig8IBDgtQAYAuAuAZQAuAYAyAAQAYAAAYgHQAYgIATgOQARgOANgSQALgUAAgZQABgpgagTQgagUglgLIhSgUQgsgIgmgPQglgSgageQgageAAg3QAAgqASgfQARggAcgUQAdgVAigKQAjgKAkAAQBIAAAzAaQA0AaAdA5IhEAoQgWgogfgVQgggUgzgBIgqAHIgnASQgRAKgLASQgNASAAAWQAAAnAaATQAaASAlALIBRASQAtAHAmARQAlAQAaAgQAZAgAAA7QAAAtgQAhQgRAhgeAWQgcAXgnALQglAMgpAAQhKAAg+gdg");
	this.shape_3.setTransform(3004.7,255.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiNETQgqgVgZgiQgZgkgIgsQgIgtAAgwIAAlWIBKAAIAAFSIAHBEQAGAiAPAaQAQAaAcAPQAcAQAtABQAoAAAlgPQAlgOAbgdQAageARgtQAQgsAAg6IAAkhIBLAAIAAGeIAAAmIACAvIACAtIABAgIhLAAIgCg+IgDgnIgDAAQgXAvg0AjQg0AihGABQhEgBgrgVg");
	this.shape_4.setTransform(2944.1,256.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_5.setTransform(2870.7,237.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgQgaQgQgbgbgPQgcgQgtAAQgpAAglAOQglAPgaAdQgbAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgCgnIgBgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAXgvA0gjQAagRAfgJQAegIAjAAQBDAAArAVQAqAVAYAjQAZAiAJAtQAJAtABAwIAAFWg");
	this.shape_6.setTransform(2798.3,254.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_7.setTransform(2748.8,241.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhaG1QgqgHglgQQgmgPgegXQgfgXgWgcIA7g3QAoA4A7AbQA9AaBDAAQA5AAAngPQAogPAZgZQAZgYAPgdIAVg7IAIg4IABgrIAAhQIgCAAQggA1g4AeQg4AehKAAQhAAAg4gXQg4gYgqgoQgqgogYg1QgYg2gBg9QABg9AYg3QAZg1ApgoQAqgoA4gYQA4gYBAABQBKgBA4AeQA4AfAgA1IACAAIAAhiIBMAAIAAIbQgBA2gHArQgJArgPAhQgfBDgvAjQgvAmg2AMQg1ANgrgBQgrABgrgKgAhXlnQgqARgfAfQgfAfgRApQgTArABAvQgBAvATAqQARAqAfAeQAfAeAqASQAqATAugBQAwABApgTQArgSAegeQAfgeASgqQASgqAAgvQAAgvgSgrQgSgpgfgfQgegfgrgRQgpgTgwAAQguAAgqATg");
	this.shape_8.setTransform(2662.7,269.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgHghgPgaQgPgbgcgPQgdgQgtAAQgoAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIAAgnIgDgvIgCgsIgBggIBLAAIADA+IACAnIAEAAQAWgvA1gjQAagRAfgJQAfgIAhAAQBEAAArAVQAqAVAYAjQAZAiAJAtQAJAtAAAwIAAFWg");
	this.shape_9.setTransform(2589.9,254.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_10.setTransform(2540.5,241.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACLHYIk8kxIAAExIhKAAIAAuwIBKAAIAAJ1IEdkEIBtAAIkoEHIFLE4g");
	this.shape_11.setTransform(2500.6,237);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgFhEQgIghgPgaQgQgbgcgPQgbgQguAAQgnAAgmAOQglAPgbAdQgaAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgCgnIgCgvIgCgsIgBggIBLAAIACA+IADAnIAEAAQAWgvA1gjQAagRAfgJQAegIAiAAQBEAAAqAVQArAVAZAjQAXAiAKAtQAKAtAAAwIAAFWg");
	this.shape_12.setTransform(2430.3,254.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgUgSghQgSghAAguQAAhDAhgmQAigmAxgSQAygUA3gGIBhgFIBYAAIAAgjQAAgmgLgbQgMgbgXgQQgugghHgBQgxABgsAQQgsAQgmAgIgrgzQApgoA9gUQA9gVA3AAQA1AAAqAMQApANAgAYQA+AyAABuIAACMIABBNIACA+IADA2IAGAxIhGAAQgHgqAAgzIgEAAQggA4gwAaQgwAbhJAAQglAAgkgKgAgJAFQgtAGgjAPQgkAQgVAYQgVAYAAAnQAAAaALAVQAMATATAOQATANAXAIIAvAGQA7AAAngRQAmgSAXgcQAYgdAIgjQAJgjAAglIAAgmIhTAAg");
	this.shape_13.setTransform(2362.7,255.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag/HZQghgHgfgPQgfgOgagWQgagWgSgeIgCAAIAABmIhMAAIAAuwIBMAAIAAHVIACAAQASgeAagWQAagWAfgPQAfgOAhgHIBCgHQBCAAA3AXQA4AWAoApQApAoAXA3QAWA4ABBCQgBBCgWA4QgXA4gpAoQgoApg4AWQg3AXhCAAgAhcgoQgrASghAfQghAggSArQgSArAAAxQAAAxASArQASArAhAgQAhAgArASQAsATAzAAQA0AAAqgTQArgSAeggQAeggAPgrQAQgrAAgxQAAgxgQgrQgPgrgeggQgegfgrgSQgqgTg0AAQgzAAgsATg");
	this.shape_14.setTransform(2293.7,237.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhrEZQg1gXgngpQgngogVg3QgUg5AAhCQAAhBAVg2QAVg3AogpQAmgpA0gXQA1gXA/AAQBCAAAyAXQAzAXAiAmQAjAmARAyQASAwAAAyIAAAzInlAAIAKA9QAJAlAZAjQAaAjAqAZQApAZBCAAQA5AAA2gcQA1gbAdgwIA3AvQgrBChBAdQhAAdhOAAQhBAAg2gXgADNgwQAAgngQghQgPgigbgaQgbgaglgPQglgPgpAAQg8ABgpAZQgpAYgYAhQgXAggKAfIgLAqIGaAAIAAAAg");
	this.shape_15.setTransform(2187.4,255.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACtHYIAAlTIgHhFQgGghgPgaQgQgagdgPQgbgQgtAAQgpABglAOQglAPgbAbQgaAegQAtQgQAsAAA8IAAEgIhLAAIAAuwIBLAAIAAHVIADAAQAXgvA0gjQAbgRAegJQAegIAjAAQBDAAAqAVQArAWAYAiQAYAiAKAsQAJAuAAAvIAAFXg");
	this.shape_16.setTransform(2117.9,237);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_17.setTransform(2061.7,247.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogpQgogogXg3QgWg4AAhCQAAhBAWg4QAXg4AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA4QAXA4AABBQAABCgXA4QgWA3gpAoQgpApg3AXQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAwAQArQAQAsAeAgQAeAgAqASQAqATA0AAQA0AAArgTQArgSAeggQAeggAPgsQAQgrAAgwQAAgwgQgsQgPgqgeggQgegggrgTQgrgSg0gBQg0ABgqASg");
	this.shape_18.setTransform(1971.8,255.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_19.setTransform(1913.4,247.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah8ETQg+gdgig8IBDgtQAXAuAvAZQAuAYAyAAQAYAAAXgHQAZgIASgOQASgOANgSQAMgUAAgZQAAgpgagTQgagUglgLIhRgUQgugIglgPQgmgSgageQgZgeAAg3QAAgqASgfQARggAdgUQAbgVAkgKQAigKAkAAQBHAAA0AaQA0AaAcA5IhDAoQgVgogggVQgggUgzgBIgpAHIgnASQgSAKgMASQgMASAAAWQAAAnAaATQAZASAnALIBQASQAtAHAmARQAlAQAaAgQAaAgAAA7QAAAtgRAhQgRAhgeAWQgdAXglALQgmAMgpAAQhKAAg+gdg");
	this.shape_20.setTransform(1832.9,255.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhqEZQg3gXgmgpQgngogUg3QgVg5AAhCQAAhBAVg2QAVg3AngpQAngpA1gXQA0gXA/AAQBCAAAyAXQAzAXAjAmQAiAmARAyQASAwAAAyIAAAzInkAAIAKA9QAIAlAaAjQAYAjArAZQAqAZBBAAQA5AAA2gcQA1gbAegwIA2AvQgrBChBAdQhAAdhNAAQhCAAg1gXgADNgwQAAgngPghQgRgigagaQgbgagkgPQgmgPgpAAQg9ABgnAZQgqAYgXAhQgYAggKAfIgKAqIGZAAIAAAAg");
	this.shape_21.setTransform(1772.6,255.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhNEZQg4gXgpgpQgngogXg3QgXg4AAhCQAAhBAXg4QAXg4AngoQApgpA4gXQA4gWBBAAQBAAAA3AaQA2AbArAvIg9AtQggglgogUQglgUgugBQg0ABgqASQgqATgeAgQgeAggQAqQgQAsAAAwQAAAwAQArQAQAsAeAgQAeAgAqASQAqATA0AAQAwAAAogWQAmgWAdgkIA5AwQgqAzg1AYQg2AZg/AAQhBAAg4gXg");
	this.shape_22.setTransform(1710.4,255.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_23.setTransform(1662.7,241.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiEhIjspBIBVAAIC/HwIC8nwIBNAAIjkJBg");
	this.shape_24.setTransform(1618.8,255.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AiSEoIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIADA+IACAnQAdgzAsghQAtggBBAAIAWABIAVAFIgIBKIgdgFQgwAAgkAQQgjAPgXAbQgXAcgMAlQgKAlgBAqIAAE6g");
	this.shape_25.setTransform(1573,254.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhrEZQg2gXgmgpQgngogVg3QgUg5AAhCQAAhBAVg2QAVg3AngpQAngpA0gXQA1gXA/AAQBCAAAyAXQAzAXAjAmQAiAmARAyQASAwAAAyIAAAzInlAAIAKA9QAJAlAZAjQAaAjAqAZQApAZBCAAQA5AAA2gcQA1gbAdgwIA3AvQgrBChBAdQhAAdhNAAQhCAAg2gXgADNgwQAAgngQghQgPgigbgaQgbgaglgPQglgPgoAAQg+ABgoAZQgpAYgYAhQgXAggKAfIgLAqIGaAAIAAAAg");
	this.shape_26.setTransform(1513.5,255.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ah8ETQg+gdghg8IBCgtQAXAuAvAZQAuAYAyAAQAYAAAXgHQAYgIAUgOQARgOANgSQALgUAAgZQAAgpgZgTQgagUglgLIhSgUQgsgIgmgPQgmgSgageQgZgeAAg3QAAgqASgfQARggAcgUQAcgVAjgKQAjgKAkAAQBIAAAzAaQA0AaAdA5IhEAoQgWgogfgVQgggUgzgBIgpAHIgoASQgRAKgMASQgMASAAAWQAAAnAaATQAaASAmALIBRASQAsAHAmARQAlAQAaAgQAZAgABA7QAAAtgRAhQgRAhgdAWQgdAXgnALQgkAMgqAAQhKAAg+gdg");
	this.shape_27.setTransform(1451.1,255.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("ACsHYIAAlTIgFhFQgIghgPgaQgQgagcgPQgbgQguAAQgnABgmAOQglAPgbAbQgaAegQAtQgQAsAAA8IAAEgIhKAAIAAuwIBKAAIAAHVIADAAQAWgvA1gjQAagRAfgJQAfgIAhAAQBEAAAqAVQArAWAZAiQAXAiAKAsQAKAuAAAvIAAFXg");
	this.shape_28.setTransform(1358.3,237);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhaG1QgpgHgmgQQgmgPgegXQgfgXgWgcIA7g3QAoA4A7AbQA9AaBDAAQA5AAAngPQAngPAagZQAZgYAPgdIAVg7IAIg4IABgrIAAhQIgCAAQghA1g3AeQg4AehKAAQhAAAg4gXQg4gYgqgoQgqgogYg1QgYg2AAg9QAAg9AYg3QAYg1AqgoQAqgoA4gYQA4gYBAABQBKgBA4AeQA3AfAhA1IACAAIAAhiIBMAAIAAIbQgBA2gHArQgJArgPAhQgfBDgvAjQgvAmg2AMQg1ANgrgBQgsABgqgKgAhXlnQgqARgfAfQgeAfgSApQgSArAAAvQAAAvASAqQASAqAeAeQAfAeAqASQAqATAugBQAwABApgTQArgSAegeQAfgeASgqQASgqAAgvQAAgvgSgrQgSgpgfgfQgegfgrgRQgpgTgwAAQguAAgqATg");
	this.shape_29.setTransform(1284.9,269.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiNETQgrgVgYgiQgZgkgIgsQgJgtAAgwIAAlWIBLAAIAAFSIAGBEQAHAiAQAaQAPAaAcAPQAcAQAtABQAoAAAlgPQAlgOAbgdQAageAQgtQARgsgBg6IAAkhIBLAAIAAGeIACAmIACAvIABAtIABAgIhKAAIgDg+IgDgnIgDAAQgWAvg1AjQg1AihFABQhDgBgsgVg");
	this.shape_30.setTransform(1212.1,256.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogpQgogogXg3QgWg4AAhCQAAhBAWg4QAXg4AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA4QAXA4AABBQAABCgXA4QgWA3gpAoQgpApg3AXQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAwAQArQAQAsAeAgQAeAgAqASQAqATA0AAQA0AAArgTQArgSAeggQAeggAPgsQAQgrAAgwQAAgwgQgsQgPgqgeggQgegggrgTQgrgSg0gBQg0ABgqASg");
	this.shape_31.setTransform(1140.5,255.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AiSEoIAAmeIgBgnIgCgvIgDgsIgBggIBLAAIADA+IACAnQAdgzAsghQAtggBBAAIAWABIAVAFIgIBKIgdgFQgwAAgkAQQgjAPgXAbQgXAcgMAlQgKAlgBAqIAAE6g");
	this.shape_32.setTransform(1088.8,254.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACsHYIAAlTIgFhFQgIghgPgaQgQgagcgPQgbgQguAAQgnABgmAOQglAPgbAbQgaAegQAtQgQAsAAA8IAAEgIhKAAIAAuwIBKAAIAAHVIADAAQAWgvA1gjQAagRAfgJQAfgIAhAAQBEAAAqAVQArAWAZAiQAXAiAKAsQAKAuAAAvIAAFXg");
	this.shape_33.setTransform(1029.3,237);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_34.setTransform(973.1,247.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgJIAagWIAUgfIAPgjIA0iFIjrpDIBUAAIC+HlIC6nlIBRAAIkpLzQgWA4glAhQgmAhg+AAg");
	this.shape_35.setTransform(891.4,270.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AhNEZQg5gXgogpQgogogXg3QgVg4gBhCQABhBAVg4QAXg4AogoQAogpA5gXQA4gWBBAAQBAAAA3AaQA2AbArAvIg9AtQggglgogUQglgUgugBQg0ABgqASQgqATgeAgQgeAggQAqQgQAsAAAwQAAAwAQArQAQAsAeAgQAeAgAqASQAqATA0AAQAvAAAogWQAngWAdgkIA5AwQgpAzg2AYQg2AZg/AAQhBAAg4gXg");
	this.shape_36.setTransform(835.1,255.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgGhEQgHghgQgaQgPgbgcgPQgdgQgtAAQgoAAglAOQglAPgaAdQgbAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgCgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAXgvA0gjQAagRAfgJQAfgIAhAAQBEAAArAVQAqAVAYAjQAZAiAJAtQAKAtAAAwIAAFWg");
	this.shape_37.setTransform(767.3,254.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhrEZQg2gXgmgpQgngogVg3QgUg5AAhCQAAhBAVg2QAVg3AngpQAngpA0gXQA1gXA/AAQBCAAAyAXQAzAXAjAmQAiAmARAyQASAwAAAyIAAAzInlAAIAKA9QAJAlAZAjQAZAjArAZQApAZBCAAQA5AAA2gcQA2gbAcgwIA3AvQgrBChBAdQhAAdhNAAQhCAAg2gXgADNgwQAAgngQghQgPgigbgaQgbgaglgPQglgPgoAAQg+ABgoAZQgpAYgYAhQgXAggKAfIgLAqIGaAAIAAAAg");
	this.shape_38.setTransform(698.1,255.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_39.setTransform(648.4,241.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhNEZQg4gXgogpQgogogXg3QgXg4AAhCQAAhBAXg4QAXg4AogoQAogpA4gXQA4gWBBAAQBAAAA2AaQA3AbAqAvIg8AtQggglgogUQglgUgugBQgzABgqASQgrATgeAgQgeAggQAqQgQAsAAAwQAAAwAQArQAQAsAeAgQAeAgArASQAqATAzAAQAvAAApgWQAngWAcgkIA6AwQgqAzg3AYQg1AZg/AAQhBAAg4gXg");
	this.shape_40.setTransform(606,255.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_41.setTransform(558.3,241.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhFHgIAAn+Ih3AAIAAhCIB3AAIAAi9QAAg5ASglQARgkAZgWQAYgXAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgMgrAAQhlgBAACbIAAChICHAAIAABCIiHAAIAAH+g");
	this.shape_42.setTransform(527.4,236.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhFHgIAAn+Ih3AAIAAhCIB3AAIAAi9QAAg5ASglQARgkAZgWQAYgXAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgMgrAAQhlgBAACbIAAChICHAAIAABCIiHAAIAAH+g");
	this.shape_43.setTransform(492.7,236.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhrEZQg2gXgmgpQgngogVg3QgUg5AAhCQAAhBAVg2QAWg3AmgpQAngpA0gXQA1gXA/AAQBCAAAyAXQAzAXAjAmQAiAmARAyQASAwAAAyIAAAzInlAAIALA9QAIAlAZAjQAZAjArAZQApAZBCAAQA5AAA2gcQA2gbAcgwIA3AvQgrBChBAdQhAAdhNAAQhCAAg2gXgADNgwQAAgngQghQgQgigagaQgbgagkgPQgmgPgoAAQg+ABgnAZQgpAYgZAhQgXAggKAfIgLAqIGaAAIAAAAg");
	this.shape_44.setTransform(436.8,255.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_45.setTransform(3241.5,65);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgPgaQgRgbgcgPQgbgQgtAAQgpAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIgBgnIgBgvIgDgsIgBggIBLAAIACA+IADAnIAEAAQAXgvA0gjQAagRAfgJQAegIAjAAQBDAAArAVQAqAVAYAjQAZAiAJAtQAJAtAAAwIAAFWg");
	this.shape_46.setTransform(3169.1,81.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgVgSggQgSghAAgtQAAhDAhgmQAignAxgTQAygTA3gFIBhgGIBYAAIAAgkQAAglgLgbQgMgbgXgQQgughhHABQgxAAgsAPQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAZQA+AwAABuIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAaQgwAahJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAYQgVAZAAAmQAAAbALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngSQAmgRAXgcQAYgdAIgjQAJgjAAglIAAglIhTAAg");
	this.shape_47.setTransform(3101.5,82.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgkIA0iFIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA4glAgQgmAhg+AAg");
	this.shape_48.setTransform(3008.4,97.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_49.setTransform(2958.1,75.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngoQgngpgUg3QgVg4AAhCQAAhCAVg3QAWg3AmgoQAngpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InkAAIAJA8QAKAlAYAjQAZAjArAZQAqAZBBAAQA5AAA2gcQA1gbAegvIA2AuQgrBChBAcQhAAehNAAQhCAAg1gXgADNgwQAAgmgPgjQgRghgagaQgbgagkgPQgmgOgpAAQg9gBgnAZQgqAagYAgQgXAhgKAeIgKAqIGZAAIAAAAg");
	this.shape_50.setTransform(2903.1,82.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AhFHgIAAn9Ih3AAIAAhEIB3AAIAAi8QAAg5ASgkQARglAZgXQAYgWAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgNgrAAQhlABAACZIAAChICHAAIAABEIiHAAIAAH9g");
	this.shape_51.setTransform(2852.5,63.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgVgSggQgSghAAgtQAAhDAhgmQAignAxgTQAygTA3gFIBhgGIBYAAIAAgkQAAglgLgbQgMgbgXgQQgughhHABQgxAAgsAPQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAZQA+AwAABuIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAaQgwAahJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAYQgVAZAAAmQAAAbALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngSQAmgRAXgcQAYgdAIgjQAJgjAAglIAAglIhTAAg");
	this.shape_52.setTransform(2798.2,82.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcgig8IBDgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHAUgNQARgOANgUQALgTAAgZQABgogagUQgagUglgMIhSgTQgtgIglgQQglgRgbgdQgZgeAAg3QAAgrASggQARgfAcgUQAdgVAigKQAjgKAkAAQBHAAA0AaQA0AaAdA4IhEApQgWgpgfgTQgggWgzABIgqAFIgnASQgRAMgLARQgNASAAAWQAAAnAaASQAZATAmALIBRARQAtAIAmARQAlAQAaAgQAaAhAAA6QgBAtgQAhQgRAhgeAXQgdAWgmALQglAMgpAAQhKAAg+geg");
	this.shape_53.setTransform(2738.8,82.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AFoEoIAAlTIgGhEQgGghgQgaQgPgbgdgPQgcgQgtAAQg0AAgiAUQgiATgTAeQgTAegJAjQgIAjAAAgIAAFDIhKAAIAAlaQAAgogHghQgHgfgPgZQgdgxg+AAQgpAAglAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnIADAAQAXgvA0gjQAbgRAegJQAegIAjAAQA6AAAvAdQAwAeAUBCQAOghAVgXQAUgYAbgPQA2geA8AAQBEAAAqAVQAqAVAZAjQAZAiAJAtQAJAtAAAwIAAFWg");
	this.shape_54.setTransform(2627.2,81.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngoQgngpgUg3QgVg4AAhCQAAhCAVg3QAWg3AngoQAmgpA1gXQA0gXA/AAQBCAAAyAXQAzAXAjAmQAiAmARAxQASAxAAAyIAAA0InkAAIAKA8QAIAlAaAjQAYAjArAZQAqAZBBAAQA5AAA2gcQA1gbAegvIA2AuQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgQgjQgQghgagaQgbgagkgPQgmgOgpAAQg8gBgoAZQgqAagXAgQgYAhgKAeIgKAqIGZAAIAAAAg");
	this.shape_55.setTransform(2539.5,82.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_56.setTransform(2483.4,75.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcgig8IBDgtQAXAuAvAYQAuAZAyAAQAYAAAXgIQAZgHATgNQARgOANgUQAMgTAAgZQAAgogagUQgagUglgMIhRgTQgugIglgQQgmgRgagdQgZgeAAg3QAAgrASggQARgfAdgUQAbgVAkgKQAigKAkAAQBHAAA0AaQA0AaAcA4IhDApQgWgpgfgTQgggWgzABIgpAFIgnASQgSAMgMARQgMASAAAWQAAAnAaASQAZATAnALIBQARQAtAIAmARQAlAQAaAgQAaAhgBA6QABAtgRAhQgRAhgeAXQgdAWgmALQglAMgpAAQhKAAg+geg");
	this.shape_57.setTransform(2435.4,82.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgkIA0iFIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA4glAgQgmAhg+AAg");
	this.shape_58.setTransform(2381,97.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ah8ESQg+gcgig8IBDgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHATgNQATgOAMgUQALgTAAgZQABgogagUQgagUglgMIhSgTQgtgIglgQQglgRgbgdQgZgeAAg3QAAgrASggQASgfAbgUQAdgVAigKQAjgKAkAAQBHAAA0AaQA0AaAdA4IhEApQgWgpgfgTQgggWgzABIgqAFIgnASQgRAMgLARQgNASAAAWQAAAnAaASQAZATAmALIBRARQAtAIAmARQAlAQAaAgQAaAhAAA6QgBAtgQAhQgRAhgdAXQgeAWgmALQglAMgpAAQhKAAg+geg");
	this.shape_59.setTransform(2324.3,82.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_60.setTransform(2245,75.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgPgaQgQgbgdgPQgbgQgtAAQgpAAglAOQglAPgbAdQgaAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIgBgnIgBgvIgDgsIAAggIBKAAIACA+IADAnIAEAAQAXgvA0gjQAbgRAegJQAegIAjAAQBDAAAqAVQArAVAYAjQAYAiAKAtQAJAtAAAwIAAFWg");
	this.shape_61.setTransform(2189.6,81.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhrEZQg2gXgmgoQgngpgUg3QgVg4AAhCQAAhCAVg3QAVg3AngoQAngpA0gXQA1gXA/AAQBCAAAyAXQAzAXAiAmQAjAmARAxQASAxAAAyIAAA0InkAAIAKA8QAIAlAZAjQAZAjArAZQApAZBCAAQA5AAA2gcQA1gbAdgvIA3AuQgrBChBAcQhAAehNAAQhCAAg2gXgADNgwQAAgmgPgjQgRghgagaQgbgagkgPQgmgOgpAAQg9gBgnAZQgqAagYAgQgXAhgKAeIgKAqIGZAAIAAAAg");
	this.shape_62.setTransform(2120.4,82.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AFoEoIAAlTIgFhEQgHghgQgaQgQgbgcgPQgbgQguAAQg0AAgiAUQghATgUAeQgTAegIAjQgJAjABAgIAAFDIhKAAIAAlaQAAgogIghQgHgfgPgZQgdgxg+AAQgoAAgmAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhLAAIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIADA+IADAnIADAAQAWgvA1gjQAagRAfgJQAfgIAiAAQA6AAAvAdQAwAeAUBCQAOghAUgXQAVgYAbgPQA3geA7AAQBEAAAqAVQArAVAYAjQAYAiALAtQAIAtABAwIAAFWg");
	this.shape_63.setTransform(2032.1,81.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhqEZQg3gXgmgoQgngpgVg3QgUg4AAhCQAAhCAVg3QAVg3AogoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InlAAIAKA8QAJAlAZAjQAaAjAqAZQApAZBCAAQA5AAA2gcQA1gbAegvIA2AuQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgQgjQgPghgbgaQgbgaglgPQglgOgpAAQg8gBgpAZQgoAagZAgQgXAhgKAeIgLAqIGaAAIAAAAg");
	this.shape_64.setTransform(1944.4,82.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgkHZIAAuwIBJAAIAAOwg");
	this.shape_65.setTransform(1894.7,64.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_66.setTransform(1858.2,75.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_67.setTransform(1816.5,75.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngoQgngpgUg3QgVg4AAhCQAAhCAVg3QAWg3AngoQAmgpA1gXQA0gXA/AAQBCAAAyAXQAzAXAiAmQAjAmARAxQASAxAAAyIAAA0InkAAIAKA8QAIAlAaAjQAYAjArAZQAqAZBBAAQA5AAA2gcQA1gbAegvIA2AuQgrBChBAcQhAAehNAAQhCAAg1gXgADNgwQAAgmgPgjQgRghgagaQgbgagkgPQgmgOgpAAQg8gBgoAZQgqAagXAgQgYAhgKAeIgKAqIGZAAIAAAAg");
	this.shape_68.setTransform(1761.4,82.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAXAuAvAYQAuAZAyAAQAYAAAXgIQAZgHASgNQATgOAMgUQAMgTAAgZQgBgogZgUQgagUglgMIhRgTQgtgIgmgQQgmgRgZgdQgageAAg3QAAgrASggQASgfAcgUQAbgVAkgKQAigKAkAAQBIAAAzAaQA0AaAcA4IhDApQgVgpgggTQgggWgzABIgqAFIgmASQgSAMgLARQgNASAAAWQAAAnAaASQAZATAmALIBRARQAtAIAmARQAmAQAZAgQAZAhAAA6QAAAtgQAhQgRAhgeAXQgcAWgmALQglAMgqAAQhKAAg+geg");
	this.shape_69.setTransform(1699,82.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_70.setTransform(1601.9,65);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgFhEQgIghgPgaQgQgbgcgPQgbgQguAAQgoAAglAOQgkAPgcAdQgaAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIADA+IACAnIAEAAQAXgvA0gjQAagRAfgJQAfgIAhAAQBEAAArAVQAqAVAZAjQAXAiAKAtQAKAtAAAwIAAFWg");
	this.shape_71.setTransform(1529.5,81.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgVgSggQgSghAAgtQAAhDAhgmQAignAxgTQAygTA3gFIBhgGIBYAAIAAgkQAAglgLgbQgMgbgXgQQgughhHABQgxAAgsAPQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAZQA+AwAABuIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAaQgwAahJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAYQgVAZAAAmQAAAbALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngSQAmgRAXgcQAYgdAIgjQAJgjAAglIAAglIhTAAg");
	this.shape_72.setTransform(1461.9,82.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_73.setTransform(1376.4,75.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgFhEQgIghgPgaQgQgbgcgPQgcgQgtAAQgnAAgmAOQglAPgbAdQgaAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgDgvIgCgsIAAggIBKAAIACA+IAEAnIADAAQAWgvA1gjQAagRAfgJQAfgIAhAAQBEAAAqAVQArAVAZAjQAXAiAKAtQAKAtAAAwIAAFWg");
	this.shape_74.setTransform(1321.1,81.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AhrEZQg1gXgngoQgngpgVg3QgUg4AAhCQAAhCAVg3QAVg3AogoQAmgpA0gXQA1gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InlAAIAKA8QAJAlAZAjQAaAjAqAZQApAZBCAAQA5AAA2gcQA1gbAdgvIA3AuQgrBChBAcQhAAehOAAQhBAAg2gXgADNgwQAAgmgQgjQgPghgbgaQgbgaglgPQglgOgoAAQg+gBgoAZQgoAagZAgQgXAhgKAeIgLAqIGaAAIAAAAg");
	this.shape_75.setTransform(1251.9,82.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AFpEoIAAlTIgHhEQgGghgPgaQgRgbgbgPQgdgQgsAAQg1AAgiAUQgiATgTAeQgTAegJAjQgHAjgBAgIAAFDIhKAAIAAlaQAAgogHghQgHgfgPgZQgdgxg9AAQgpAAgmAOQgkAPgbAdQgbAegQAsQgPAtgBA7IAAEgIhLAAIAAmeIAAgnIgCgvIgDgsIgBggIBLAAIACA+IADAnIAEAAQAXgvA0gjQAbgRAegJQAegIAkAAQA5AAAvAdQAwAeAUBCQAOghAVgXQAUgYAbgPQA2geA9AAQBDAAAqAVQAqAVAZAjQAYAiAKAtQAJAtAAAwIAAFWg");
	this.shape_76.setTransform(1163.6,81.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgkIA0iFIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA4glAgQgmAhg+AAg");
	this.shape_77.setTransform(1081.7,97.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgVgSggQgSghAAgtQAAhDAhgmQAignAxgTQAygTA3gFIBhgGIBYAAIAAgkQAAglgLgbQgMgbgXgQQgughhHABQgxAAgsAPQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAZQA+AwAABuIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAaQgwAahJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAYQgVAZAAAmQAAAbALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngSQAmgRAXgcQAYgdAIgjQAJgjAAglIAAglIhTAAg");
	this.shape_78.setTransform(1019.6,82.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AkyG3IAAteIBLAAIAABmIADAAQASgeAagWQAagWAfgPQAfgOAhgHIBBgHQBDAAA4AXQA3AWApApQAoAoAXA4QAWA4AABCQAABCgWA4QgXA3goAoQgpApg3AWQg4AXhDAAIhBgHQghgHgfgPQgfgOgagWQgagWgSgeIgDAAIAAGDgAhclfQgrASghAgQghAggRArQgUArABAxQgBAxAUArQARAqAhAgQAhAgArASQAsATAyAAQA1AAAqgTQArgSAeggQAeggAPgqQAQgrABgxQgBgxgQgrQgPgrgeggQgegggrgSQgqgTg1AAQgyAAgsATg");
	this.shape_79.setTransform(950.6,96.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHATgNQATgOAMgUQALgTAAgZQABgogagUQgagUglgMIhSgTQgsgIgmgQQglgRgagdQgageAAg3QAAgrASggQARgfAcgUQAdgVAigKQAjgKAkAAQBHAAA0AaQA0AaAdA4IhEApQgWgpgfgTQgggWgzABIgqAFIgnASQgRAMgLARQgNASAAAWQAAAnAaASQAZATAmALIBRARQAtAIAmARQAlAQAaAgQAZAhAAA6QAAAtgQAhQgRAhgeAXQgdAWgmALQglAMgpAAQhKAAg+geg");
	this.shape_80.setTransform(851.4,82.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AiTEoIAAmeIgBgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnQAcgzAtghQAsggBBAAIAWABIAWAFIgJBKIgcgFQgyAAgjAQQgjAPgXAbQgWAcgNAlQgLAlABAqIAAE6g");
	this.shape_81.setTransform(809,81.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngoQgngpgUg3QgVg4AAhCQAAhCAVg3QAWg3AngoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InkAAIAJA8QAKAlAZAjQAZAjAqAZQAqAZBBAAQA5AAA2gcQA2gbAdgvIA2AuQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgPgjQgQghgbgaQgbgaglgPQglgOgpAAQg8gBgpAZQgoAagYAgQgYAhgKAeIgKAqIGZAAIAAAAg");
	this.shape_82.setTransform(749.5,82.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_83.setTransform(693.4,75.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAXAuAvAYQAuAZAyAAQAYAAAXgIQAZgHASgNQASgOANgUQAMgTAAgZQgBgogZgUQgagUglgMIhRgTQgugIglgQQgmgRgZgdQgageAAg3QAAgrASggQASgfAcgUQAbgVAkgKQAigKAkAAQBHAAA0AaQA0AaAcA4IhDApQgVgpgggTQgggWgzABIgqAFIgmASQgSAMgMARQgMASAAAWQAAAnAaASQAZATAmALIBRARQAtAIAmARQAmAQAZAgQAaAhgBA6QAAAtgQAhQgRAhgeAXQgdAWglALQgmAMgpAAQhKAAg+geg");
	this.shape_84.setTransform(645.4,82.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_85.setTransform(582.7,82.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AhFHgIAAn9Ih3AAIAAhEIB3AAIAAi8QAAg5ASgkQARglAZgXQAYgWAegKQAfgJAbAAQA1AAAhAPIgOBBQgZgNgrAAQhlABAACZIAAChICHAAIAABEIiHAAIAAH9g");
	this.shape_86.setTransform(529.8,63.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_87.setTransform(454.8,75.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgoG7IAAt0IBRAAIAAN0g");
	this.shape_88.setTransform(418.3,67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcgAAxJSQgVgdAAhIIAAiSIm1AAQg+AAgjgiQgegcAAgnQAAgYAIgVQAFgLAMgTIGXq3QAfg0ApgXQArgYBFAAQBVAAAyAzQA3A5AABvIAAINIAyAAQA3AAAjAfQAlAgAAAyQAAAzglAfQgjAfg3AAIgyAAIAACSQAABFgfAgQgfAhhFAAQhCAAgYghgAjXB5ID4AAIAAndIgDAAg");
	this.shape_89.setTransform(143,143);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#176B8D").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcgAAxJSQgVgdAAhIIAAiSIm1AAQg+AAgjgiQgegcAAgnQAAgYAIgVQAFgLAMgTIGXq3QAfg0ApgXQArgYBFAAQBVAAAyAzQA3A5AABvIAAINIAyAAQA3AAAjAfQAlAgAAAyQAAAzglAfQgjAfg3AAIgyAAIAACSQAABFgfAgQgfAhhFAAQhCAAgYghgAjXB5ID4AAIAAndIgDAAg");
	this.shape_90.setTransform(143,143);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(1,1,1).p("AZ8AAQAAJsnnG4QnlG4qwAAQqvAAnmm4Qnmm4AApsQAAprHmm4QHmm4KvAAQKwAAHlG4QHnG4AAJrg");
	this.shape_91.setTransform(137.4,136.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#176B8D").s().p("AyVQkQnlm4AApsQAApsHlm3QHmm4KvAAQKwAAHlG4QHmG3AAJsQAAJsnmG4QnlG4qwAAQqvAAnmm4g");
	this.shape_92.setTransform(137.4,136.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89}]}).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_89},{t:this.shape_92},{t:this.shape_91}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.1,286.1);


(lib.five = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("beep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape.setTransform(1121.6,247.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACvEoIAAlTIgGhEQgHghgPgaQgQgbgcgPQgcgQgtAAQgnAAgmAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhLAAIAAmeIgCgnIgCgvIgCgsIAAggIBKAAIACA+IAEAnIADAAQAWgvA1gjQAbgRAegJQAfgIAhAAQBEAAAqAVQArAVAZAjQAXAiAKAtQAKAtAAAwIAAFWg");
	this.shape_1.setTransform(1066.3,254.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngpQgngogVg3QgUg5AAhCQAAhBAVg2QAVg3AogpQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAyQASAwAAAyIAAAzInkAAIAJA9QAKAlAZAjQAZAjAqAZQAqAZBBAAQA5AAA2gcQA2gbAdgwIA2AvQgrBChBAdQhAAdhOAAQhBAAg1gXgADNgwQAAgngPghQgQgigbgaQgbgaglgPQglgPgpAAQg8ABgpAZQgoAYgYAhQgYAggKAfIgKAqIGZAAIAAAAg");
	this.shape_2.setTransform(997.1,255.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFpEoIAAlTIgHhEQgGghgPgaQgRgbgbgPQgcgQgtAAQg1AAgiAUQgiATgTAeQgTAegJAjQgIAjAAAgIAAFDIhJAAIAAlaQgBgogHghQgHgfgPgZQgdgxg9AAQgqAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIAAgnIgCgvIgDgsIgBggIBLAAIADA+IACAnIAEAAQAXgvA0gjQAbgRAegJQAegIAkAAQA5AAAvAdQAwAeAUBCQAOghAVgXQAUgYAbgPQA2geA9AAQBDAAArAVQApAVAZAjQAYAiAKAtQAKAtgBAwIAAFWg");
	this.shape_3.setTransform(908.8,254.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkyG3IAAteIBMAAIAABmIACAAQASgeAagWQAagWAfgPQAfgOAhgHIBCgHQBCAAA3AXQA4AWApApQAoAoAXA4QAWA4AABCQAABCgWA4QgXA3goAoQgpApg4AWQg3AXhCAAIhCgHQghgHgfgPQgfgOgagWQgagWgSgeIgCAAIAAGDgAhclfQgrASghAgQggAggTArQgSArAAAxQAAAxASArQATAqAgAgQAhAgArASQAsATAzAAQA0AAAqgTQArgSAeggQAeggAPgqQAQgrAAgxQAAgxgQgrQgPgrgeggQgegggrgSQgqgTg0AAQgzAAgsATg");
	this.shape_4.setTransform(818.5,268.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogpQgogogXg3QgWg4AAhCQAAhBAWg4QAXg4AogoQAogpA5gXQA4gWBBAAQBCAAA4AWQA3AXApApQApAoAWA4QAXA4AABBQAABCgXA4QgWA3gpAoQgpApg3AXQg4AXhCAAQhBAAg4gXgAhejZQgqATgeAgQgeAggQAqQgQAsAAAwQAAAwAQArQAQAsAeAgQAeAgAqASQAqATA0AAQA0AAArgTQArgSAeggQAeggAPgsQAQgrAAgwQAAgwgQgsQgPgqgeggQgegggrgTQgrgSg0gBQg0ABgqASg");
	this.shape_5.setTransform(742.3,255.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglHYIAAuwIBLAAIAAOwg");
	this.shape_6.setTransform(690.2,237);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngpQgngogUg3QgVg5AAhCQAAhBAVg2QAWg3AngpQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAyQASAwAAAyIAAAzInkAAIAKA9QAJAlAZAjQAZAjAqAZQAqAZBBAAQA5AAA2gcQA1gbAegwIA2AvQgrBChBAdQhAAdhNAAQhCAAg1gXgADNgwQAAgngPghQgRgigagaQgbgagkgPQgmgPgpAAQg8ABgoAZQgqAYgXAhQgYAggKAfIgKAqIGZAAIAAAAg");
	this.shape_7.setTransform(640.5,255.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgiEhIjspBIBVAAIC/HwIC8nwIBNAAIjkJBg");
	this.shape_8.setTransform(576.8,255.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngpQgngogUg3QgVg5AAhCQAAhBAVg2QAWg3AngpQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAyQASAwAAAyIAAAzInkAAIAKA9QAJAlAZAjQAZAjAqAZQAqAZBBAAQA5AAA2gcQA2gbAdgwIA2AvQgrBChBAdQhAAdhOAAQhBAAg1gXgADNgwQAAgngPghQgRgigagaQgbgagkgPQgmgPgpAAQg8ABgoAZQgqAYgXAhQgYAggKAfIgKAqIGZAAIAAAAg");
	this.shape_9.setTransform(513.1,255.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_10.setTransform(439.4,237.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjeGzIglgIIAHhGIAiAKIAiAEQAUAAAQgIIAagXIAUgeIAPgkIA0iFIjrpDIBUAAIC+HlIC6nlIBRAAIkpL0QgWA4glAgQgmAhg+AAg");
	this.shape_11.setTransform(3092.1,97.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_12.setTransform(3041.9,75.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_13.setTransform(3006.6,68.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgPgaQgQgbgdgPQgcgQgsAAQgpAAglAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgCgvIgBgsIgBggIBKAAIACA+IADAnIAEAAQAWgvA1gjQAbgRAegJQAegIAjAAQBDAAAqAVQArAVAYAjQAYAiAKAtQAJAtAAAwIAAFWg");
	this.shape_14.setTransform(2956.5,81.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiMETQgsgVgYgiQgZgjgIgtQgJgtAAgwIAAlXIBLAAIAAFTIAGBFQAHAhAPAaQAQAbAcAPQAcAQAtAAQAoAAAlgPQAlgOAbgeQAagdAQgsQARgtgBg7IAAkhIBLAAIAAGeIACAoIACAvIABAtIABAfIhKAAIgCg/IgEgnIgDAAQgWAxg1AhQg1AkhFgBQhEABgqgWg");
	this.shape_15.setTransform(2887,83.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AFpEoIAAlTIgHhEQgGghgQgaQgPgbgcgPQgdgQgtAAQg0AAgiAUQghATgUAeQgTAegIAjQgJAjABAgIAAFDIhKAAIAAlaQAAgogIghQgHgfgPgZQgdgxg+AAQgpAAglAOQglAPgaAdQgbAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIACA+IADAnIAEAAQAWgvA1gjQAagRAfgJQAfgIAiAAQA6AAAvAdQAwAeAUBCQAOghAUgXQAVgYAbgPQA3geA7AAQBEAAArAVQAqAVAYAjQAYAiALAtQAIAtABAwIAAFWg");
	this.shape_16.setTransform(2799,81.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AFoEoIAAlTIgGhEQgGghgQgaQgQgbgcgPQgcgQgtAAQg0AAgiAUQghATgUAeQgTAegIAjQgIAjAAAgIAAFDIhLAAIAAlaQAAgogHghQgHgfgPgZQgdgxg9AAQgqAAglAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnIADAAQAWgvA1gjQAagRAfgJQAfgIAjAAQA5AAAvAdQAwAeAUBCQAOghAUgXQAVgYAbgPQA3geA7AAQBEAAAqAVQAqAVAZAjQAZAiAJAtQAKAtAAAwIAAFWg");
	this.shape_17.setTransform(2692.5,81.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_18.setTransform(2602.4,82.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhNEZQg4gXgpgoQgngpgYg3QgWg4AAhCQAAhCAWg4QAYg3AngoQApgpA4gWQA4gXBBAAQBAAAA2AaQA3AaAqAwIg8AtQggglgogTQglgWguABQgzgBgqAUQgrASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhArASQAqATAzAAQAvAAApgWQAngWAcgkIA6AvQgqA0g3AZQg1AYg/AAQhBAAg4gXg");
	this.shape_19.setTransform(2537.9,82.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah8HJQg4gWgogpQgogogXg4QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA4gWQA4gXBCAAIBCAHQAhAHAfAOQAeAPAbAWQAaAWASAeIACAAIAAnVIBLAAIAAOwIhLAAIAAhmIgCAAQgSAegaAWQgbAWgeAOQgfAPghAHIhCAHQhCAAg4gXgAhggoQgrASgeAfQgeAggQArQgQArAAAxQAAAxAQArQAQArAeAgQAeAgArASQAqATA0AAQAzAAAsgTQAsgSAgggQAgggATgrQATgrAAgxQAAgxgTgrQgTgrggggQgggfgsgSQgsgTgzAAQg0AAgqATg");
	this.shape_20.setTransform(2433.7,65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgPgaQgRgbgcgPQgbgQgtAAQgpAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIgBgnIgBgvIgDgsIgBggIBLAAIACA+IADAnIAEAAQAXgvA0gjQAagRAfgJQAegIAjAAQBDAAArAVQAqAVAYAjQAZAiAJAtQAJAtAAAwIAAFWg");
	this.shape_21.setTransform(2361.3,81.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhwEmQglgJgdgVQgcgVgSggQgSghAAgtQAAhDAhgmQAignAxgTQAygTA3gFIBhgGIBYAAIAAgkQAAglgLgbQgMgbgXgQQgughhHABQgxAAgsAPQgsARgmAhIgrg0QApgnA9gWQA9gUA3AAQA1AAAqAMQApANAgAZQA+AwAABuIAACNIABBMIACA+IADA2IAGAzIhGAAQgHgrAAg0IgEAAQggA6gwAaQgwAahJAAQglAAgkgKgAgJAEQgtAHgjAPQgkAPgVAYQgVAZAAAmQAAAbALAUQAMAVATANQATAOAXAGIAvAHQA7AAAngSQAmgRAXgcQAYgdAIgjQAJgjAAglIAAglIhTAAg");
	this.shape_22.setTransform(2293.7,82.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgPgaQgRgbgbgPQgcgQgtAAQgpAAglAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIgBgnIgBgvIgDgsIgBggIBLAAIACA+IADAnIAEAAQAXgvA0gjQAagRAfgJQAegIAjAAQBDAAArAVQAqAVAYAjQAYAiAKAtQAJAtAAAwIAAFWg");
	this.shape_23.setTransform(2194.5,81.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_24.setTransform(2122.9,82.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AglGvIAApAIBKAAIAAJAgAgnlOQgQgQAAgYQAAgYAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAYQAAAYgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_25.setTransform(2070.8,68.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_26.setTransform(2034.3,75.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhNEZQg5gXgogoQgogpgXg3QgVg4AAhCQAAhCAVg4QAYg3AngoQAogpA5gWQA4gXBBAAQBAAAA3AaQA2AaArAwIg9AtQggglgogTQglgWguABQg0gBgqAUQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQAvAAAogWQAngWAdgkIA5AvQgpA0g2AZQg2AYg/AAQhBAAg4gXg");
	this.shape_27.setTransform(1986.6,82.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhrEZQg2gXgmgoQgngpgVg3QgUg4AAhCQAAhCAVg3QAVg3AngoQAngpA0gXQA1gXA/AAQBCAAAyAXQAzAXAjAmQAiAmARAxQASAxAAAyIAAA0InlAAIALA8QAJAlAYAjQAZAjArAZQAqAZBBAAQA5AAA2gcQA2gbAcgvIA3AuQgrBChBAcQhAAehNAAQhCAAg2gXgADNgwQAAgmgQgjQgQghgagaQgbgagkgPQgmgOgpAAQg9gBgnAZQgpAagZAgQgXAhgKAeIgLAqIGaAAIAAAAg");
	this.shape_28.setTransform(1919.2,82.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_29.setTransform(1863.1,75.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_30.setTransform(1805.7,82.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiTEoIAAmeIgBgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnQAcgzAtghQAsggBBAAIAWABIAWAFIgJBKIgcgFQgxAAgkAQQgjAPgXAbQgWAcgNAlQgKAlAAAqIAAE6g");
	this.shape_31.setTransform(1754,81.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AkxG3IAAteIBKAAIAABmIADAAQASgeAagWQAbgWAegPQAegOAjgHIBAgHQBDAAA4AXQA3AWAoApQApAoAXA4QAXA4AABCQAABCgXA4QgXA3gpAoQgoApg3AWQg4AXhDAAIhAgHQgjgHgegPQgegOgbgWQgagWgSgeIgDAAIAAGDgAhclfQgrASghAgQggAggTArQgTArAAAxQAAAxATArQATAqAgAgQAhAgArASQAsATAyAAQA1AAArgTQAqgSAfggQAdggAQgqQAQgrAAgxQAAgxgQgrQgQgrgdggQgfgggqgSQgrgTg1AAQgyAAgsATg");
	this.shape_32.setTransform(1691.9,96.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AiSEoIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIADA+IADAnQAcgzAsghQAtggBBAAIAWABIAVAFIgIBKIgdgFQgxAAgjAQQgjAPgXAbQgXAcgMAlQgKAlgBAqIAAE6g");
	this.shape_33.setTransform(1603.5,81.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhrEZQg2gXgmgoQgngpgVg3QgUg4AAhCQAAhCAVg3QAVg3AogoQAmgpA0gXQA1gXA/AAQBCAAAyAXQAzAXAiAmQAjAmARAxQASAxAAAyIAAA0InlAAIAKA8QAJAlAZAjQAaAjAqAZQApAZBCAAQA5AAA2gcQA1gbAdgvIA3AuQgrBChBAcQhAAehOAAQhBAAg2gXgADNgwQAAgmgQgjQgPghgbgaQgbgaglgPQglgOgoAAQg+gBgoAZQgpAagYAgQgXAhgKAeIgLAqIGaAAIAAAAg");
	this.shape_34.setTransform(1544,82.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AFoEoIAAlTIgGhEQgGghgPgaQgQgbgdgPQgcgQgsAAQg1AAgiAUQgiATgTAeQgTAegJAjQgHAjgBAgIAAFDIhKAAIAAlaQAAgogHghQgHgfgPgZQgdgxg9AAQgqAAglAOQglAPgbAdQgaAegQAsQgPAtAAA7IAAEgIhMAAIAAmeIgBgnIgBgvIgCgsIgBggIBKAAIACA+IADAnIAEAAQAXgvA0gjQAbgRAegJQAegIAkAAQA5AAAvAdQAwAeAUBCQAOghAVgXQAUgYAbgPQA2geA9AAQBDAAAqAVQAqAVAZAjQAZAiAJAtQAJAtAAAwIAAFWg");
	this.shape_35.setTransform(1455.7,81.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AiNETQgrgVgYgiQgYgjgJgtQgJgtAAgwIAAlXIBLAAIAAFTIAGBFQAHAhAQAaQAPAbAcAPQAcAQAtAAQApAAAkgPQAlgOAbgeQAbgdAPgsQAQgtABg7IAAkhIBKAAIAAGeIABAoIADAvIACAtIAAAfIhKAAIgDg/IgDgnIgDAAQgWAxg1AhQg1AkhFgBQhDABgsgWg");
	this.shape_36.setTransform(1367.7,83.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAXAuAvAYQAuAZAyAAQAYAAAXgIQAZgHASgNQASgOANgUQAMgTAAgZQgBgogZgUQgagUglgMIhRgTQgugIglgQQgmgRgZgdQgageAAg3QAAgrASggQARgfAdgUQAbgVAkgKQAigKAkAAQBHAAA0AaQA0AaAcA4IhDApQgVgpgggTQgggWgzABIgpAFIgnASQgSAMgMARQgMASAAAWQAAAnAaASQAZATAmALIBRARQAtAIAmARQAmAQAZAgQAaAhgBA6QAAAtgQAhQgRAhgeAXQgdAWglALQglAMgqAAQhKAAg+geg");
	this.shape_37.setTransform(1305.6,82.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("ACwEoIAAlTIgHhEQgGghgPgaQgRgbgbgPQgcgQgtAAQgoAAgmAOQgkAPgbAdQgbAegQAsQgQAtAAA7IAAEgIhLAAIAAmeIAAgnIgCgvIgCgsIgCggIBLAAIACA+IADAnIAEAAQAXgvA0gjQAbgRAegJQAegIAjAAQBDAAArAVQAqAVAYAjQAYAiAKAtQAJAtAAAwIAAFWg");
	this.shape_38.setTransform(1245,81.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_39.setTransform(1173.4,82.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhNEZQg4gXgogoQgpgpgWg3QgXg4AAhCQAAhCAXg4QAWg3ApgoQAogpA4gWQA4gXBBAAQBAAAA2AaQA3AaArAwIg9AtQggglgogTQgmgWgtABQgzgBgrAUQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQArATAzAAQAwAAAogWQAmgWAdgkIA6AvQgrA0g1AZQg2AYg/AAQhBAAg4gXg");
	this.shape_40.setTransform(1108.9,82.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ah8ESQg9gcgjg8IBDgtQAYAuAuAYQAuAZAyAAQAYAAAYgIQAXgHATgNQATgOAMgUQALgTAAgZQABgogagUQgagUglgMIhRgTQgtgIgmgQQglgRgagdQgageAAg3QAAgrASggQASgfAbgUQAcgVAkgKQAigKAkAAQBIAAAzAaQA0AaAdA4IhEApQgWgpgfgTQgggWgzABIgqAFIgmASQgSAMgLARQgNASAAAWQAAAnAaASQAaATAlALIBRARQAtAIAmARQAmAQAZAgQAZAhAAA6QAAAtgQAhQgRAhgeAXQgcAWgmALQgmAMgpAAQhKAAg+geg");
	this.shape_41.setTransform(1016,82.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhqEZQg2gXgngoQgngpgUg3QgVg4AAhCQAAhCAVg3QAVg3AogoQAmgpA1gXQA0gXA/AAQBCAAAzAXQAyAXAiAmQAjAmARAxQASAxAAAyIAAA0InlAAIAKA8QAKAlAZAjQAZAjAqAZQApAZBCAAQA5AAA2gcQA2gbAdgvIA2AuQgrBChBAcQhAAehOAAQhBAAg1gXgADNgwQAAgmgPgjQgQghgbgaQgbgaglgPQglgOgpAAQg8gBgpAZQgoAagYAgQgYAhgKAeIgLAqIGaAAIAAAAg");
	this.shape_42.setTransform(955.7,82.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_43.setTransform(899.6,75.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_44.setTransform(842.2,82.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AFpEoIAAlTIgGhEQgHghgQgaQgPgbgcgPQgdgQgtAAQg0AAgiAUQghATgUAeQgTAegIAjQgJAjAAAgIAAFDIhJAAIAAlaQAAgogIghQgHgfgPgZQgdgxg+AAQgpAAglAOQglAPgaAdQgbAegQAsQgQAtAAA7IAAEgIhKAAIAAmeIgBgnIgDgvIgCgsIgBggIBLAAIADA+IADAnIADAAQAXgvA0gjQAagRAfgJQAfgIAiAAQA6AAAvAdQAwAeAUBCQAOghAUgXQAVgYAbgPQA2geA8AAQBEAAArAVQAqAVAYAjQAYAiALAtQAJAtAAAwIAAFWg");
	this.shape_45.setTransform(751.5,81.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ah5EZQg5gXgogoQgogpgXg3QgWg4AAhCQAAhCAWg4QAXg3AogoQAogpA5gWQA4gXBBAAQBCAAA4AXQA3AWApApQApAoAWA3QAXA4AABCQAABCgXA4QgWA3gpApQgpAog3AXQg4AXhCAAQhBAAg4gXgAhejYQgqASgeAgQgeAggQArQgQArAAAwQAAAxAQAqQAQArAeAgQAeAhAqASQAqATA0AAQA0AAArgTQArgSAeghQAeggAPgrQAQgqAAgxQAAgwgQgrQgPgrgeggQgegggrgSQgrgUg0ABQg0gBgqAUg");
	this.shape_46.setTransform(661.4,82.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AiSEoIAAmeIgCgnIgCgvIgBgsIgBggIBKAAIACA+IAEAnQAcgzAsghQAtggBBAAIAWABIAVAFIgIBKIgcgFQgxAAgkAQQgjAPgXAbQgWAcgNAlQgLAlABAqIAAE6g");
	this.shape_47.setTransform(609.7,81.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AkxG3IAAteIBKAAIAABmIADAAQASgeAagWQAbgWAegPQAegOAjgHIBAgHQBDAAA4AXQA3AWAoApQApAoAXA4QAXA4gBBCQABBCgXA4QgXA3gpAoQgoApg3AWQg4AXhDAAIhAgHQgjgHgegPQgegOgbgWQgagWgSgeIgDAAIAAGDgAhclfQgrASghAgQghAggRArQgUArAAAxQAAAxAUArQARAqAhAgQAhAgArASQAsATAyAAQA1AAArgTQAqgSAfggQAdggAQgqQAQgrAAgxQAAgxgQgrQgQgrgdggQgfgggqgSQgrgTg1AAQgyAAgsATg");
	this.shape_48.setTransform(547.6,96.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAUFvQgdgLgRgUQgSgVgHgaQgJgbAAgfIAAl4Ih9AAIAAhDIB9AAIAAinIBKAAIAACnIClAAIAABDIilAAIAAF4QAAAmAVAVQAWAWAlAAIArgGIAqgOIAHBDIgxAOIgxAHQgoAAgcgNg");
	this.shape_49.setTransform(454.8,75.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgoG7IAAt0IBRAAIAAN0g");
	this.shape_50.setTransform(418.3,67.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

	// Layer 1
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcgAkjI3QiahHAAhmQAAgwAlgjQAlgjAzAAQAfAABeA4QBdA3BEAAQBaAAA3hJQAxhAAAhaQAAhPgtgvQgwgvhTAAQg3AAg6AbQg7AdgtAAQgxAAgggeQgcgYAAgaQAAgOACgRIAEgcIAultQAMhiAhgjQAegfBFAAIG7AAQA+AAAkAfQAkAeAAAwQAABNg0AgQggAUgtAAIlZAAIgcC4QBagSAvAAQClAABuBtQBrBqAACZQAADdh9B+QiBCEjqAAQh7AAiAg7g");
	this.shape_51.setTransform(143,143);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#176B8D").s().p("AosUmQkBhtjFjFQjGjGhtkBQhwkKAAkjQAAkiBwkKQBtkADGjGQDFjGEBhtQEKhwEiAAQEjAAEKBwQEABtDGDGQDGDGBtEAQBwEKAAEiQAAEjhwEKQhtEBjGDGQjGDFkABtQkKBwkjAAQkiAAkKhwgAnEwtQjQBYihChQihCghYDRQhbDYAADrQAADtBbDYQBYDQChChQChChDQBYQDYBbDsAAQDsAADYhbQDRhYChihQCgihBYjQQBcjYAAjtQAAjrhcjYQhYjRigigQihihjRhYQjYhcjsAAQjsAAjYBcgAkjI3QiahHAAhmQAAgwAlgjQAlgjAzAAQAfAABeA4QBdA3BEAAQBaAAA3hJQAxhAAAhaQAAhPgtgvQgwgvhTAAQg3AAg6AbQg7AdgtAAQgxAAgggeQgcgYAAgaQAAgOACgRIAEgcIAultQAMhiAhgjQAegfBFAAIG7AAQA+AAAkAfQAkAeAAAwQAABNg0AgQggAUgtAAIlZAAIgcC4QBagSAvAAQClAABuBtQBrBqAACZQAADdh9B+QiBCEjqAAQh7AAiAg7g");
	this.shape_52.setTransform(143,143);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(1,1,1).p("AZ8AAQAAJsnnG4QnlG4qwAAQqvAAnmm4Qnmm4AApsQAAprHmm4QHmm4KvAAQKwAAHlG4QHnG4AAJrg");
	this.shape_53.setTransform(137.4,136.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#176B8D").s().p("AyVQkQnlm4AApsQAApsHlm3QHmm4KvAAQKwAAHlG4QHmG3AAJsQAAJsnmG4QnlG4qwAAQqvAAnmm4g");
	this.shape_54.setTransform(137.4,136.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51}]}).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51},{t:this.shape_54},{t:this.shape_53}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286.1,286.1);


(lib.EXIT_BTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("beep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// TEXT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#176A8E").s().p("AAhBHIgig5IghA5IglAAIAxhJIguhEIAnAAIAdAyIAdgyIAmAAIguBDIAzBKg");
	this.shape.setTransform(15,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBHIgig5IghA5IglAAIAxhJIguhEIAnAAIAdAyIAdgyIAmAAIguBDIAzBKg");
	this.shape_1.setTransform(15,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// BACKGROUND
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AiViVIErAAIAAErIkrAAg");
	this.shape_2.setTransform(15,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape_3.setTransform(15,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiVCWIAAkrIErAAIAAErg");
	this.shape_4.setTransform(15,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.3,32,32);


(lib.begin_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("beep");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3));

	// TEXT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#176A8E").s().p("AAbBQIAAhMIAAgNQgBgIgCgGQgDgGgFgEQgFgDgJAAQgIAAgGADQgGADgDAGQgDAGgBAHIgBANIAABOIgwAAIAAibIAuAAIAAAVIABAAIAGgJIAKgIIAMgFQAIgDAIAAQATAAALAGQALAGAGAJQAGAKADAOQACANAAAQIAABVg");
	this.shape.setTransform(118.4,27.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#176A8E").s().p("AgXB0IAAiaIAvAAIAACagAgThEQgIgIAAgLQAAgMAIgIQAIgIALAAQALAAAJAIQAIAIAAAMQAAALgIAIQgJAJgLAAQgLAAgIgJg");
	this.shape_1.setTransform(105.1,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#176A8E").s().p("AguBxQgUgEgRgOIAbgnQALAJAMAFQANAGAOAAQAWAAAKgLQAFgFADgHQACgHAAgIIAAgPIAAAAQgJALgMAFQgMAEgKAAQgRAAgOgGQgPgGgKgKQgKgLgFgOQgFgPAAgRQAAgPAEgPQAFgPAKgLQAJgLANgHQANgHAQAAQALAAAHACIAPAGIAMAIIAIAIIAAAAIAAgUIAsAAIAACNQAAAsgWAXQgLAMgRAFQgRAGgVAAQgVAAgVgFgAgMhIQgHADgFAGQgGAFgDAHQgDAHAAAIQAAAHADAHQADAHAGAFQAFAGAHADQAGACAIAAQAIAAAHgCQAHgDAFgGQAGgFACgHQADgHAAgHQAAgIgDgHQgCgHgGgFQgFgGgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_2.setTransform(90.4,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#176A8E").s().p("AgaBMQgQgGgLgLQgMgKgHgPQgHgPAAgTQAAgRAHgQQAHgPAMgKQALgLAQgGQAQgGARAAQAQAAAOAGQAOAGAJALQAKAKAFAPQAFAQAAARIAAAPIhvAAQADAOAKAIQAJAIAOAAQALAAAJgFQAIgFAGgJIAhAZQgFAHgIAGQgHAGgJAEQgIAEgKACQgJACgJAAQgRAAgQgGgAgLgrQgGACgEAEQgEAEgDAFQgCAGgBAFIA/AAQAAgMgIgIQgJgJgNAAQgHAAgGADg");
	this.shape_3.setTransform(71.6,27.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#176A8E").s().p("AhYBxIAAjhIBUAAQAOAAAPACQAPACAMAGQAMAGAHAMQAIALAAASQAAAUgMAMQgKANgSAFIAAABQAMACAIADQAKAFAGAHQAHAHADAKQAEAJAAALQAAAJgCAIQgCAHgDAGQgJAMgLAIQgNAHgPADQgPADgPAAgAgmBHIAsAAIAMgBQAFgCAFgDQAFgDADgFQADgFAAgHQAAgIgEgFQgEgFgGgDIgNgEIgMAAIgmAAgAgmgWIAkAAIALgBQAFgBAFgDQAEgDADgFQACgFAAgGQABgHgDgFQgEgFgEgCIgLgEIgLgBIgiAAg");
	this.shape_4.setTransform(53,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbBQIAAhMIAAgNQgBgIgCgGQgDgGgFgEQgFgDgJAAQgIAAgGADQgGADgDAGQgDAGgBAHIgBANIAABOIgwAAIAAibIAuAAIAAAVIABAAIAGgJIAKgIIAMgFQAIgDAIAAQATAAALAGQALAGAGAJQAGAKADAOQACANAAAQIAABVg");
	this.shape_5.setTransform(118.4,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXB0IAAiaIAvAAIAACagAgThEQgIgIAAgLQAAgMAIgIQAIgIALAAQALAAAJAIQAIAIAAAMQAAALgIAIQgJAJgLAAQgLAAgIgJg");
	this.shape_6.setTransform(105.1,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBxQgUgEgRgOIAbgnQALAJAMAFQANAGAOAAQAWAAAKgLQAFgFADgHQACgHAAgIIAAgPIAAAAQgJALgMAFQgMAEgKAAQgRAAgOgGQgPgGgKgKQgKgLgFgOQgFgPAAgRQAAgPAEgPQAFgPAKgLQAJgLANgHQANgHAQAAQALAAAHACIAPAGIAMAIIAIAIIAAAAIAAgUIAsAAIAACNQAAAsgWAXQgLAMgRAFQgRAGgVAAQgVAAgVgFgAgMhIQgHADgFAGQgGAFgDAHQgDAHAAAIQAAAHADAHQADAHAGAFQAFAGAHADQAGACAIAAQAIAAAHgCQAHgDAFgGQAGgFACgHQADgHAAgHQAAgIgDgHQgCgHgGgFQgFgGgHgDQgHgDgIAAQgIAAgGADg");
	this.shape_7.setTransform(90.4,31);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBMQgQgGgLgLQgMgKgHgPQgHgPAAgTQAAgRAHgQQAHgPAMgKQALgLAQgGQAQgGARAAQAQAAAOAGQAOAGAJALQAKAKAFAPQAFAQAAARIAAAPIhvAAQADAOAKAIQAJAIAOAAQALAAAJgFQAIgFAGgJIAhAZQgFAHgIAGQgHAGgJAEQgIAEgKACQgJACgJAAQgRAAgQgGgAgLgrQgGACgEAEQgEAEgDAFQgCAGgBAFIA/AAQAAgMgIgIQgJgJgNAAQgHAAgGADg");
	this.shape_8.setTransform(71.6,27.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhYBxIAAjhIBUAAQAOAAAPACQAPACAMAGQAMAGAHAMQAIALAAASQAAAUgMAMQgKANgSAFIAAABQAMACAIADQAKAFAGAHQAHAHADAKQAEAJAAALQAAAJgCAIQgCAHgDAGQgJAMgLAIQgNAHgPADQgPADgPAAgAgmBHIAsAAIAMgBQAFgCAFgDQAFgDADgFQADgFAAgHQAAgIgEgFQgEgFgGgDIgNgEIgMAAIgmAAgAgmgWIAkAAIALgBQAFgBAFgDQAEgDADgFQACgFAAgGQABgHgDgFQgEgFgEgCIgLgEIgLgBIgiAAg");
	this.shape_9.setTransform(53,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).wait(1));

	// BACKGROUND
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AtqD6IAAnzIbVAAIAAHzg");
	this.shape_10.setTransform(87.5,25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(5,0,1).p("Atqj5IbVAAIAAHzI7VAAg");
	this.shape_11.setTransform(87.5,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#176A8E").s().p("AtqD6IAAnzIbVAAIAAHzg");
	this.shape_12.setTransform(87.5,25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AtqD6IAAnzIbVAAIAAHzg");
	this.shape_13.setTransform(87.5,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,50);


// stage content:
(lib.FEDERAL_RESERVE_BANK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{one:0,two:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.begin_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		function fl_ClickToGoToAndStopAtFrame(){this.gotoAndStop("two");}
		
		/*this.buttonA_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_A.bind(this));
		function fl_ClickToGoToAndStopAtFrame_A(){this.gotoAndStop("one");}
		
		this.buttonB_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_B.bind(this));
		function fl_ClickToGoToAndStopAtFrame_B(){this.gotoAndStop("two");}
		
		this.buttonC_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_C.bind(this));
		function fl_ClickToGoToAndStopAtFrame_C(){this.gotoAndStop("three");}
		
		this.buttonD_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_D.bind(this));
		function fl_ClickToGoToAndStopAtFrame_D(){this.gotoAndStop("four");}
		
		this.buttonE_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_E.bind(this));
		function fl_ClickToGoToAndStopAtFrame_E(){this.gotoAndStop("five");}
		
		this.buttonF_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_F.bind(this));
		function fl_ClickToGoToAndStopAtFrame_F(){this.gotoAndStop("six");}
		
		this.buttonG_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_G.bind(this));
		function fl_ClickToGoToAndStopAtFrame_G(){this.gotoAndStop("seven");}
		
		this.buttonH_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_H.bind(this));
		function fl_ClickToGoToAndStopAtFrame_H(){this.gotoAndStop("eight");}
		
		this.buttonI_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_I.bind(this));
		function fl_ClickToGoToAndStopAtFrame_I(){this.gotoAndStop("nine");}
		
		this.buttonJ_btn.addEventListener("click", fl_ClickToGoToAndStopAtFrame_J.bind(this));
		function fl_ClickToGoToAndStopAtFrame_J(){this.gotoAndStop("ten");}*/
		
		this.exit_btn.addEventListener("click", fl_ClickToGoToFrameAndPlay_X.bind(this));
		function fl_ClickToGoToFrameAndPlay_X(){
		     var x=confirm('Are You sure want to exit?');
		     if(x) window.close();
		   }
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.exit_btn = new lib.EXIT_BTN();
	this.exit_btn.parent = this;
	this.exit_btn.setTransform(905.8,48.7,1,1,0,0,0,15,15.7);
	new cjs.ButtonHelper(this.exit_btn, 0, 1, 2, false, new lib.EXIT_BTN(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exit_btn).wait(2));

	// TEXT
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIQgEgEAAgEQAAgEAEgEQADgCAEAAQAFAAADACQAEAEAAAEQAAAEgEAEQgDAEgFgBQgEABgDgEg");
	this.shape.setTransform(502,289);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgLAAgMQAAgMAEgKQAEgLAIgHQAHgJAKgEQAKgEAMgBQAMABAKAEQAKAEAGAIQAHAIADAJQAEAJAAAKIAAAJIhcAAIABALQACAIAFAGQAFAHAIAEQAIAFAMABQALAAAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAFgPABQgLgBgLgEgAAngJQAAgGgDgHQgDgGgFgFQgFgGgHgCQgHgDgIgBQgLABgIAFQgHAEgFAGQgFAHgBAGIgCAHIBNAAIAAAAg");
	this.shape_1.setTransform(492.3,284.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbA5IAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIAAAMIABAHQAFgJAIgHQAJgGAMAAIAFABIADABIgBANIgGgBQgJAAgHADQgGADgEAGQgEAFgDAIQgCAGAAAIIAAA8g");
	this.shape_2.setTransform(482.8,284.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaA1QgJgFgEgGQgFgHgCgIQgBgJAAgJIAAhBIAOAAIAABAIABAOQACAGADAFQADAFAFADQAFADAJAAQAHAAAHgDQAHgCAFgGQAFgGADgJQADgIAAgLIAAg3IAPAAIAABPIAAAIIAAAJIABAIIAAAGIgOAAIgBgMIAAgIIgBAAQgEAJgKAIQgLAGgMAAQgNAAgIgEg");
	this.shape_3.setTransform(471.4,284.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEBGQgFgCgDgDQgDgFgCgEQgBgFgBgHIAAhHIgYAAIAAgNIAYAAIAAggIAOAAIAAAgIAfAAIAAANIgfAAIAABHQgBAIAFAEQAEAEAHAAIAIgBIAIgDIABANIgJACIgJACQgHAAgGgDg");
	this.shape_4.setTransform(460.7,283);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgGgDgFQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAFQgGAGgDAJQgDAIAAAKIAAA4IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAHIABAAQAEgJAKgGQAFgDAGgCQAGgCAGAAQANAAAIAEQAIAEAFAHQAEAHACAIQACAJAAAJIAABBg");
	this.shape_5.setTransform(450.1,284.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgLAAgMQAAgMAEgKQAEgLAIgHQAHgJAKgEQAKgEAMgBQAMABAKAEQAKAEAGAIQAHAIADAJQAEAJAAAKIAAAJIhcAAIABALQACAIAFAGQAFAHAIAEQAIAFAMABQALAAAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAFgPABQgLgBgLgEgAAngJQAAgGgDgHQgDgGgFgFQgFgGgHgCQgHgDgIgBQgLABgIAFQgHAEgFAGQgFAHgBAGIgCAHIBNAAIAAAAg");
	this.shape_6.setTransform(436.9,284.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA4IgthvIARAAIAjBfIAkhfIAPAAIgrBvg");
	this.shape_7.setTransform(424.7,284.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXBYQgLgEgHgIQgIgIgFgLQgEgLAAgMQAAgNAEgLQAFgKAIgHQAHgIALgEQALgFAMAAIAMACIANAEIAKAHQAGAEADAGIAAAAIAAhaIAPAAIAAC0IgPAAIAAgTIAAAAQgDAGgGAEIgKAHIgNAEIgMABQgMAAgLgEgAgSgHQgIAEgGAFQgFAGgDAIQgDAIAAAKQAAAJADAIQADAJAFAGQAGAGAIAEQAIADAKAAQAJAAAJgDQAIgEAGgGQAHgGADgJQAEgIAAgJQAAgKgEgIQgDgIgHgGQgGgFgIgEQgJgEgJAAQgKAAgIAEg");
	this.shape_8.setTransform(411.6,281);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVA5QgHgCgFgEQgGgEgDgHQgEgFAAgKQAAgMAHgIQAGgGAKgEQAJgEALgBIASgBIARAAIAAgHQAAgHgDgFQgCgFgEgDQgJgHgOAAQgIAAgJAEQgIADgHAGIgJgJQAIgIAMgFQAMgEAJAAQALABAIACQAIACAGAFQAMAJAAAWIAAAaIAAAOIAAAMIABALIABAKIgOAAQgBgJAAgJIgBAAQgGAKgJAFQgJAGgNAAQgIgBgHgBgAgBABQgIABgHADQgHADgEAFQgEAEAAAIQAAAFACAEIAGAGQAEADAEABIAJACQALAAAHgEQAHgEAFgFQAEgFACgHQACgHAAgHIAAgHIgQAAg");
	this.shape_9.setTransform(398.1,284.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRBUQgIgBgHgDQgHgDgGgFQgFgEgFgFIALgLQAIALALAFQAMAFANAAQAKAAAIgDQAHgDAFgFQAFgEADgGIAEgLIACgLIAAgIIAAgPIgBAAQgGAKgKAGQgLAFgPAAQgLAAgLgEQgLgFgIgHQgIgIgFgKQgEgKAAgMQAAgLAEgLQAFgKAIgIQAIgHALgFQALgFALAAQAPAAALAGQAKAGAGAKIABAAIAAgTIAOAAIAABnQAAAKgCAJQgBAIgDAGQgGANgJAHQgJAHgKACQgLADgHAAQgIAAgJgCgAgQhEQgIADgGAGQgGAGgEAIQgDAIAAAJQAAAJADAJQAEAIAGAEQAGAGAIAEQAIADAIAAQAJAAAJgDQAHgEAGgGQAGgEADgIQAEgJAAgJQAAgJgEgIQgDgIgGgGQgGgGgHgDQgJgEgJAAQgIAAgIAEg");
	this.shape_10.setTransform(378.4,287.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgGgDgFQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAFQgGAGgDAJQgDAIAAAKIAAA4IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAHIABAAQAEgJAKgGQAFgDAGgCQAGgCAGAAQANAAAIAEQAIAEAFAHQAEAHACAIQACAJAAAJIAABBg");
	this.shape_11.setTransform(364.5,284.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_12.setTransform(355,281.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgGgDgFQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAFQgGAGgDAJQgDAIAAAKIAAA4IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAHIABAAQAEgJAKgGQAFgDAGgCQAGgCAGAAQANAAAIAEQAIAEAFAHQAEAHACAIQACAJAAAJIAABBg");
	this.shape_13.setTransform(345.4,284.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcA5IAAhPIAAgHIAAgJIAAgJIgBgGIAPAAIABAMIAAAHQAGgJAHgHQAIgGANAAIAEABIAFABIgCANIgFgBQgKAAgHADQgGADgEAGQgEAFgDAIQgCAGAAAIIAAA8g");
	this.shape_14.setTransform(335.6,284.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgVA5QgHgCgFgEQgGgEgDgHQgEgFAAgKQAAgMAHgIQAGgGAKgEQAJgEALgBIASgBIARAAIAAgHQAAgHgDgFQgCgFgEgDQgJgHgOAAQgIAAgJAEQgIADgHAGIgJgJQAIgIAMgFQAMgEAJAAQALABAIACQAIACAGAFQAMAJAAAWIAAAaIAAAOIAAAMIABALIABAKIgOAAQgBgJAAgJIgBAAQgGAKgJAFQgJAGgNAAQgIgBgHgBgAgBABQgIABgHADQgHADgEAFQgEAEAAAIQAAAFACAEIAGAGQAEADAEABIAJACQALAAAHgEQAHgEAFgFQAEgFACgHQACgHAAgHIAAgHIgQAAg");
	this.shape_15.setTransform(324.5,284.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgLAAgMQAAgMAEgKQAEgLAIgHQAHgJAKgEQAKgEAMgBQAMABAKAEQAKAEAGAIQAHAIADAJQAEAJAAAKIAAAJIhcAAIABALQACAIAFAGQAFAHAIAEQAIAFAMABQALAAAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAFgPABQgLgBgLgEgAAngJQAAgGgDgHQgDgGgFgFQgFgGgHgCQgHgDgIgBQgLABgIAFQgHAEgFAGQgFAHgBAGIgCAHIBNAAIAAAAg");
	this.shape_16.setTransform(311.8,284.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_17.setTransform(302.2,280.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXA1QgMgGgHgLIAOgJQAEAJAJAEQAIAFAJABIAJgCQAFgBAEgDIAGgHQACgDAAgFQAAgIgFgDQgFgFgHgCIgPgDIgPgEQgIgEgFgFQgFgGABgKQAAgJACgFQAEgGAFgEQAGgEAGgDQAHgCAGAAQAOABAKAFQAKAFAFAKIgMAIQgFgHgGgEQgGgEgKgBIgHACIgIAEQgDABgCAEQgCADgBAEQAAAIAGAEQAEADAIACIAPAEQAIABAIADQAHACAFAGQAEAHABALQAAAIgEAHQgDAGgGAFQgGAEgGACQgHACgJABQgNgBgMgFg");
	this.shape_18.setTransform(287.9,284.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_19.setTransform(280.1,281.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhBbIAAhCIgBgNQgBgGgDgFQgDgEgGgDQgFgDgJAAQgHAAgHADQgHACgFAFQgFAGgDAIQgDAJAAALIAAA4IgPAAIAAi1IAPAAIAABaIAAAAQAFgJAKgGQAFgEAGgBQAGgCAFAAQANAAAIAEQAJAEAEAHQAFAGACAIQACAJAAAJIAABCg");
	this.shape_20.setTransform(270.6,280.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAEBGQgFgCgDgDQgDgFgCgEQgCgFABgHIAAhHIgZAAIAAgNIAZAAIAAggIAMAAIAAAgIAgAAIAAANIggAAIAABHQAAAIAFAEQAEAEAHAAIAIgBIAIgDIABANIgJACIgJACQgHAAgGgDg");
	this.shape_21.setTransform(259.8,283);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgGgDgFQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAFQgGAGgDAJQgDAIAAAKIAAA4IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAHIABAAQAEgJAKgGQAFgDAGgCQAGgCAGAAQANAAAIAEQAIAEAFAHQAEAHACAIQACAJAAAJIAABBg");
	this.shape_22.setTransform(243,284.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_23.setTransform(233.5,281.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRBUQgHgBgIgDQgHgDgGgFQgFgEgFgFIALgLQAIALALAFQAMAFANAAQAKAAAIgDQAHgDAFgFQAFgEADgGIAEgLIACgLIAAgIIAAgPIgBAAQgGAKgLAGQgLAFgOAAQgLAAgLgEQgLgFgHgHQgJgIgFgKQgEgKAAgMQAAgLAEgLQAFgKAJgIQAHgHALgFQALgFALAAQAOAAALAGQALAGAGAKIABAAIAAgTIAOAAIAABnQAAAKgCAJQgBAIgDAGQgGANgJAHQgJAHgKACQgLADgHAAQgIAAgJgCgAgQhEQgIADgGAGQgGAGgDAIQgEAIAAAJQAAAJAEAJQADAIAGAEQAGAGAIAEQAIADAIAAQAJAAAJgDQAIgEAGgGQAFgEAEgIQADgJAAgJQAAgJgDgIQgEgIgFgGQgGgGgIgDQgJgEgJAAQgIAAgIAEg");
	this.shape_24.setTransform(223.3,287.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgLAAgMQAAgMAEgKQAEgLAIgHQAHgJAKgEQAKgEAMgBQAMABAKAEQAKAEAGAIQAHAIADAJQAEAJAAAKIAAAJIhcAAIABALQACAIAFAGQAFAHAIAEQAIAFAMABQALAAAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAFgPABQgLgBgLgEgAAngJQAAgGgDgHQgDgGgFgFQgFgGgHgCQgHgDgIgBQgLABgIAFQgHAEgFAGQgFAHgBAGIgCAHIBNAAIAAAAg");
	this.shape_25.setTransform(209.4,284.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLBbIgMgEIgLgHQgFgEgEgGIAAAAIAAATIgPAAIAAi0IAPAAIAABaIAAAAQAEgGAFgEIALgHIAMgEIAMgCQAMAAALAFQALAEAHAIQAIAHAFAKQAEALAAANQAAAMgEALQgFALgIAIQgHAIgLAEQgLAEgMAAgAgRgHQgIAEgGAFQgHAGgDAIQgEAIAAAKQAAAJAEAIQADAJAHAGQAGAGAIAEQAJADAJAAQAKAAAIgDQAIgEAGgGQAGgGADgJQADgIAAgJQAAgKgDgIQgDgIgGgGQgGgFgIgEQgIgEgKAAQgJAAgJAEg");
	this.shape_26.setTransform(195.5,281);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWA2QgLgEgIgIQgIgIgEgLQgEgLAAgMQAAgLAEgLQAEgLAIgIQAIgIALgEQAKgEAMgBQANABAKAEQALAEAIAIQAIAIAEALQAEALAAALQAAAMgEALQgEALgIAIQgIAIgLAEQgKAEgNABQgMgBgKgEgAgRgoQgIADgGAGQgGAGgDAJQgDAHAAAJQAAAKADAHQADAJAGAGQAGAGAIAEQAIAEAJAAQAKAAAIgEQAIgEAGgGQAGgGADgJQADgHAAgKQAAgJgDgHQgDgJgGgGQgGgGgIgDQgIgEgKgBQgJABgIAEg");
	this.shape_27.setTransform(174.7,284.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAEBGQgFgCgDgDQgEgFgBgEQgCgFAAgHIAAhHIgXAAIAAgNIAXAAIAAggIAOAAIAAAgIAgAAIAAANIggAAIAABHQAAAIAEAEQAEAEAHAAIAJgBIAIgDIABANIgJACIgKACQgHAAgGgDg");
	this.shape_28.setTransform(163.6,283);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgGgDgFQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAFQgGAGgDAJQgDAIAAAKIAAA4IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAHIABAAQAEgJAKgGQAFgDAGgCQAGgCAGAAQANAAAIAEQAIAEAFAHQAEAHACAIQACAJAAAJIAABBg");
	this.shape_29.setTransform(146.8,284.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWA2QgLgEgIgIQgIgIgEgLQgEgLAAgMQAAgLAEgLQAEgLAIgIQAIgIALgEQAKgEAMgBQANABAKAEQALAEAIAIQAIAIAEALQAEALAAALQAAAMgEALQgEALgIAIQgIAIgLAEQgKAEgNABQgMgBgKgEgAgRgoQgIADgGAGQgGAGgDAJQgDAHAAAJQAAAKADAHQADAJAGAGQAGAGAIAEQAIAEAJAAQAKAAAIgEQAIgEAGgGQAGgGADgJQADgHAAgKQAAgJgDgHQgDgJgGgGQgGgGgIgDQgIgEgKgBQgJABgIAEg");
	this.shape_30.setTransform(133,284.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAEBGQgFgCgDgDQgDgFgCgEQgBgFgBgHIAAhHIgYAAIAAgNIAYAAIAAggIAOAAIAAAgIAfAAIAAANIgfAAIAABHQgBAIAFAEQAEAEAHAAIAIgBIAIgDIABANIgJACIgJACQgHAAgGgDg");
	this.shape_31.setTransform(121.9,283);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAEBGQgFgCgDgDQgEgFgBgEQgBgFgBgHIAAhHIgXAAIAAgNIAXAAIAAggIAOAAIAAAgIAfAAIAAANIgfAAIAABHQgBAIAFAEQAEAEAHAAIAIgBIAIgDIABANIgJACIgJACQgIAAgFgDg");
	this.shape_32.setTransform(113.9,283);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaA1QgJgFgEgGQgFgHgCgIQgBgJAAgJIAAhBIAOAAIAABAIABAOQACAGADAFQADAFAFADQAFADAJAAQAHAAAHgDQAHgCAFgGQAFgGADgJQADgIAAgLIAAg3IAPAAIAABPIAAAIIAAAJIABAIIAAAGIgOAAIgBgMIAAgIIgBAAQgEAJgKAIQgLAGgMAAQgNAAgIgEg");
	this.shape_33.setTransform(103.3,284.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgLBbIgMgEIgLgHQgFgEgEgGIAAAAIAAATIgPAAIAAi0IAPAAIAABaIAAAAQAEgGAFgEIALgHIAMgEIAMgCQAMAAALAFQALAEAHAIQAIAHAFAKQAEALAAANQAAAMgEALQgFALgIAIQgHAIgLAEQgLAEgMAAgAgRgHQgIAEgGAFQgHAGgDAIQgEAIAAAKQAAAJAEAIQADAJAHAGQAGAGAIAEQAJADAJAAQAKAAAIgDQAIgEAGgGQAGgGADgJQADgIAAgJQAAgKgDgIQgDgIgGgGQgGgFgIgEQgIgEgKAAQgJAAgJAEg");
	this.shape_34.setTransform(89.5,281);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAEBHQgFgDgDgDQgDgEgCgFQgBgFAAgGIAAhIIgYAAIAAgNIAYAAIAAggIAMAAIAAAgIAhAAIAAANIghAAIAABIQABAGAEAFQAEAEAHAAIAJgBIAIgDIABANIgJADIgKABQgHAAgGgCg");
	this.shape_35.setTransform(820.3,248.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgbA5IAAhOIAAgIIgBgJIAAgJIAAgGIAOAAIAAAMIABAHQAFgJAIgGQAIgHANAAIAFABIADAAIgBAPIgFgCQgKABgHADQgGADgEAFQgFAFgCAHQgCAIAAAIIAAA7g");
	this.shape_36.setTransform(813.2,249.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVA4QgHgBgFgEQgGgEgDgHQgEgGAAgIQAAgNAHgIQAGgGAKgEQAJgEALAAIASgBIARAAIAAgHQAAgIgDgFQgCgFgEgDQgJgGgOAAQgIgBgJAEQgIADgHAGIgJgKQAIgHAMgEQAMgFAJAAQALAAAIADQAIADAGAEQAMAKAAAVIAAAaIAAAOIAAANIABAKIABAJIgOAAQgBgIAAgJIgBAAQgGAKgJAGQgJAEgNAAQgIAAgHgCgAgBABQgIABgHADQgHADgEAEQgEAGAAAHQAAAFACAEIAGAGQAEADAEABIAJACQALgBAHgDQAHgDAFgFQAEgGACgHQACgGAAgIIAAgHIgQAAg");
	this.shape_37.setTransform(802.1,249.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAEBHQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAhIIgZAAIAAgNIAZAAIAAggIAMAAIAAAgIAhAAIAAANIghAAIAABIQABAGAEAFQAEAEAHAAIAJgBIAIgDIABANIgJADIgKABQgIAAgFgCg");
	this.shape_38.setTransform(792,248.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgXA1QgMgFgHgMIANgJQAFAJAJAEQAIAGAKAAIAIgCQAFgCAEgCIAGgGQACgEAAgFQAAgHgFgFQgFgDgHgCIgPgEIgQgEQgHgDgFgGQgFgFABgLQAAgJADgGQADgFAGgFQAFgDAGgCQAHgDAGAAQAOAAAKAGQAKAFAFALIgMAIQgFgIgGgFQgGgDgKAAIgHABIgHADQgEACgCAEQgCADgBAFQAAAHAGADQAEAEAIACIAPADQAIACAIAEQAHABAFAHQAEAGAAALQAAAJgDAGQgDAHgGAEQgFAEgHACQgHACgIAAQgOABgMgGg");
	this.shape_39.setTransform(782.8,249.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgKAAgNQAAgLAEgLQAEgLAIgIQAHgHAKgFQAKgFAMAAQAMAAAKAFQAKAFAGAHQAHAHADAKQAEAJAAAJIAAAJIhcAAIABANQACAGAFAHQAFAHAIAEQAIAGAMAAQALgBAKgFQAKgFAGgJIAKAJQgIANgMAFQgNAGgPgBQgLABgLgFgAAngIQAAgIgDgGQgDgHgFgFQgFgEgHgEQgHgCgIAAQgLAAgIAEQgHAGgFAGQgFAGgBAGIgCAIIBNAAIAAAAg");
	this.shape_40.setTransform(765,249.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAhBbIAAhCIgBgNQgBgGgDgFQgDgEgGgDQgFgDgJAAQgHAAgHADQgHACgFAFQgFAGgDAIQgDAJAAALIAAA4IgPAAIAAi1IAPAAIAABaIAAAAQAFgJAKgGQAFgEAGgBQAGgCAFAAQANAAAIAEQAJAEAEAHQAFAGACAIQACAJAAAJIAABCg");
	this.shape_41.setTransform(751.7,246.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAEBHQgFgDgDgDQgDgEgCgFQgBgFgBgGIAAhIIgYAAIAAgNIAYAAIAAggIAOAAIAAAgIAfAAIAAANIgfAAIAABIQgBAGAFAFQAEAEAHAAIAIgBIAIgDIABANIgJADIgJABQgHAAgGgCg");
	this.shape_42.setTransform(741,248.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgXA1QgMgFgHgMIAOgJQAEAJAJAEQAIAGAJAAIAJgCQAGgCADgCIAGgGQACgEAAgFQAAgHgFgFQgFgDgHgCIgPgEIgPgEQgIgDgFgGQgEgFgBgLQABgJACgGQAEgFAFgFQAGgDAHgCQAGgDAGAAQAOAAAKAGQAKAFAGALIgOAIQgDgIgHgFQgGgDgKAAIgHABIgIADQgDACgCAEQgCADAAAFQAAAHAEADQAFAEAIACIAOADQAJACAHAEQAHABAFAHQAGAGAAALQgBAJgDAGQgDAHgFAEQgGAEgIACQgGACgJAAQgNABgMgGg");
	this.shape_43.setTransform(725.6,249.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgXA1QgMgFgHgMIAOgJQAEAJAJAEQAIAGAJAAIAJgCQAFgCAEgCIAGgGQACgEAAgFQAAgHgFgFQgFgDgHgCIgPgEIgPgEQgIgDgFgGQgFgFABgLQAAgJACgGQAEgFAFgFQAGgDAGgCQAHgDAGAAQAOAAAKAGQAKAFAFALIgMAIQgFgIgGgFQgGgDgKAAIgHABIgIADQgDACgCAEQgCADgBAFQAAAHAGADQAEAEAIACIAPADQAIACAIAEQAHABAEAHQAFAGABALQAAAJgEAGQgDAHgGAEQgGAEgGACQgIACgIAAQgNABgMgGg");
	this.shape_44.setTransform(715.4,249.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgKAAgNQAAgLAEgLQAEgLAIgIQAHgHAKgFQAKgFAMAAQAMAAAKAFQAKAFAGAHQAHAHADAKQAEAJAAAJIAAAJIhcAAIABANQACAGAFAHQAFAHAIAEQAIAGAMAAQALgBAKgFQAKgFAGgJIAKAJQgIANgMAFQgNAGgPgBQgLABgLgFgAAngIQAAgIgDgGQgDgHgFgFQgFgEgHgEQgHgCgIAAQgLAAgIAEQgHAGgFAGQgFAGgBAGIgCAIIBNAAIAAAAg");
	this.shape_45.setTransform(703.8,249.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgcA5IAAhOIAAgIIAAgJIAAgJIgBgGIAPAAIABAMIAAAHQAFgJAIgGQAJgHAMAAIAEABIAFAAIgCAPIgGgCQgJABgHADQgGADgEAFQgEAFgDAHQgCAIAAAIIAAA7g");
	this.shape_46.setTransform(694.4,249.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag6BUIAAikIAPAAIAAATIAAAAQAEgFAFgFIALgHIAMgEIAMgBQAMAAALAEQALAFAHAHQAIAIAFALQAEALAAAMQAAANgEALQgFAJgIAIQgHAIgLAEQgLAFgMAAIgMgCIgMgEIgLgHQgFgEgEgGIAAAAIAABKgAgRhCQgIADgGAGQgHAGgDAJQgEAIAAAJQAAAKAEAIQADAHAHAGQAGAHAIADQAJAEAJAAQAKAAAIgEQAIgDAGgHQAGgGADgHQADgIAAgKQAAgJgDgIQgDgJgGgGQgGgGgIgDQgIgEgKAAQgJAAgJAEg");
	this.shape_47.setTransform(682.4,252.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgKAAgNQAAgLAEgLQAEgLAIgIQAHgHAKgFQAKgFAMAAQAMAAAKAFQAKAFAGAHQAHAHADAKQAEAJAAAJIAAAJIhcAAIABANQACAGAFAHQAFAHAIAEQAIAGAMAAQALgBAKgFQAKgFAGgJIAKAJQgIANgMAFQgNAGgPgBQgLABgLgFgAAngIQAAgIgDgGQgDgHgFgFQgFgEgHgEQgHgCgIAAQgLAAgIAEQgHAGgFAGQgFAGgBAGIgCAIIBNAAIAAAAg");
	this.shape_48.setTransform(662.1,249.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgXA1QgMgFgGgMIAMgJQAFAJAJAEQAJAGAJAAIAJgCQAFgCADgCIAGgGQACgEAAgFQAAgHgFgFQgFgDgHgCIgPgEIgQgEQgHgDgFgGQgEgFgBgLQAAgJAEgGQADgFAGgFQAFgDAHgCQAGgDAGAAQAOAAAKAGQAKAFAGALIgOAIQgEgIgGgFQgGgDgKAAIgHABIgHADQgEACgCAEQgDADABAFQAAAHAEADQAGAEAHACIAOADQAJACAHAEQAHABAGAHQAEAGAAALQAAAJgDAGQgDAHgFAEQgHAEgHACQgHACgHAAQgOABgMgGg");
	this.shape_49.setTransform(650.2,249.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVA4QgHgBgFgEQgGgEgDgHQgEgGAAgIQAAgNAHgIQAGgGAKgEQAJgEALAAIASgBIARAAIAAgHQAAgIgDgFQgCgFgEgDQgJgGgOAAQgIgBgJAEQgIADgHAGIgJgKQAIgHAMgEQAMgFAJAAQALAAAIADQAIADAGAEQAMAKAAAVIAAAaIAAAOIAAANIABAKIABAJIgOAAQgBgIAAgJIgBAAQgGAKgJAGQgJAEgNAAQgIAAgHgCgAgBABQgIABgHADQgHADgEAEQgEAGAAAHQAAAFACAEIAGAGQAEADAEABIAJACQALgBAHgDQAHgDAFgFQAEgGACgHQACgGAAgIIAAgHIgQAAg");
	this.shape_50.setTransform(638.9,249.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgKAAgNQAAgLAEgLQAEgLAIgIQAHgHAKgFQAKgFAMAAQAMAAAKAFQAKAFAGAHQAHAHADAKQAEAJAAAJIAAAJIhcAAIABANQACAGAFAHQAFAHAIAEQAIAGAMAAQALgBAKgFQAKgFAGgJIAKAJQgIANgMAFQgNAGgPgBQgLABgLgFgAAngIQAAgIgDgGQgDgHgFgFQgFgEgHgEQgHgCgIAAQgLAAgIAEQgHAGgFAGQgFAGgBAGIgCAIIBNAAIAAAAg");
	this.shape_51.setTransform(626.2,249.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_52.setTransform(616.6,246.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgzBVIAAipIAxAAQAIAAAKACQAJACAIAFQAIAGAGAIQAFAIAAAOQAAAMgEAIQgFAJgHAEQgHAGgJABQgJADgKABIgkAAIAABQgAgjgJIAjAAQAHAAAGgBQAHgCAFgEQAFgDADgGQADgGAAgIQAAgIgDgGQgEgGgFgDQgFgEgHgCQgGgBgGgBIgjAAg");
	this.shape_53.setTransform(607.5,246.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_54.setTransform(590.7,254.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AA3A8IAAhDQAAgIgDgGQgEgGgIAAQgHAAgEACQgEACgDAEQgCADgBAFIgBAKIAAA9IgjAAIAAg9IAAgIIgCgIQgCgEgDgDQgDgDgGAAQgHAAgEACQgFADgCAEQgDAEAAAGIAAAKIAAA6IgkAAIAAh0IAhAAIAAAQIACAAIAEgHIAIgGIAJgEQAGgCAGAAQANAAAJAFQAJAFAEALQAHgLAIgFQAJgFANAAQAMAAAIAEQAIAEAFAHQAFAHACAJQABAJAAALIAABEg");
	this.shape_55.setTransform(577.2,249.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgTA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAKAEQAKAEAHAIQAHAIAEAMQAEALAAANIAAALIhTAAQACALAIAGQAHAGAJAAQAJAAAGgEQAHgEAEgGIAZASQgEAGgFAEQgGAEgGADIgOAFIgOABQgMAAgMgEgAgIggQgEABgEAEQgDACgCAEIgCAJIAvAAQAAgJgGgHQgGgGgKAAQgFAAgFACg");
	this.shape_56.setTransform(559.9,249.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AADBLQgGgCgGgEQgGgEgDgHQgDgHAAgJIAAg3IgXAAIAAgcIAXAAIAAgjIAjAAIAAAjIAfAAIAAAcIgfAAIAAAmIAAAJIACAHQACADAEABQADABAGAAIAHAAQAFgBACgCIAAAeQgGADgGAAIgNABQgJAAgIgCg");
	this.shape_57.setTransform(547.9,247.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgbA6QgNgEgJgJIAWgYQAFAGAGADQAHAEAIAAQAFAAAFgCQAFgCAAgFQAAgEgFgCQgEgDgGgBIgPgEQgIgBgGgEQgHgEgFgFQgEgHAAgLQAAgKAEgIQAFgHAGgFQAHgFAJgCQAJgCAIAAQAMAAAMADIAKAFIAJAHIgVAWQgJgKgNAAQgDAAgFACQgEACAAAGQAAAEAEACIALAEIAOADQAIACAHAEQAHADAEAGQAFAHAAALQAAALgFAHQgFAIgHAEQgIAFgKABQgKACgIAAQgMAAgMgDg");
	this.shape_58.setTransform(537.7,249.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("Ag+BTIAFgdQAIADAIAAQAGAAAEgBQAEgCADgDIAEgFIADgJIADgHIgzh0IAnAAIAdBNIAAAAIAahNIAlAAIg1CGIgHARQgDAHgEAFQgFAFgIACQgIADgNAAQgOAAgNgEg");
	this.shape_59.setTransform(525.5,252.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgiBUIgOgGIgMgKIAageQAGAIAJAFQAJAEAJAAIAIgBIAJgDQADgCADgEQACgEAAgEQAAgHgGgFQgGgFgJgDIgSgGQgKgDgJgGQgJgDgGgJQgDgFgBgFQgCgGAAgHQAAgOAGgKQAFgLAJgGQAJgHAMgDQAMgFALAAQAPABANAEQANAEALAJIgZAcQgFgFgIgDQgIgCgHgBIgIABIgHADIgGAFQgDAEAAAFQAAAIAGADQAGAFAIADIASAGQAKACAJAGQAJADAGAJQAFAKAAAPIgBAMIgEAMQgFALgJAGQgJAIgMADQgMADgMABQgRAAgOgGg");
	this.shape_60.setTransform(511.7,246.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgTA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAKAEQAKAEAHAIQAHAIAEAMQAEALAAANIAAALIhTAAQACALAIAGQAHAGAJAAQAJAAAGgEQAHgEAEgGIAZASQgEAGgFAEQgGAEgGADIgOAFIgOABQgMAAgMgEgAgIggQgEABgEAEQgDACgCAEIgCAJIAvAAQAAgJgGgHQgGgGgKAAQgFAAgFACg");
	this.shape_61.setTransform(491.1,249.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgRA6IgwhzIAnAAIAcBOIABAAIAbhOIAkAAIguBzg");
	this.shape_62.setTransform(477.6,249.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgoA8IAAh0IAkAAIAAATQAFgLAIgFQAIgGAMAAIAGAAIAGABIAAAhIgIgBIgHgBQgLAAgGADQgGADgDAFQgCAFgCAHIAAAPIAAAxg");
	this.shape_63.setTransform(466.6,249.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgTA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAKAEQAKAEAHAIQAHAIAEAMQAEALAAANIAAALIhTAAQACALAIAGQAHAGAJAAQAJAAAGgEQAHgEAEgGIAZASQgEAGgFAEQgGAEgGADIgOAFIgOABQgMAAgMgEgAgIggQgEABgEAEQgDACgCAEIgCAJIAvAAQAAgJgGgHQgGgGgKAAQgFAAgFACg");
	this.shape_64.setTransform(454.3,249.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgcA6QgMgEgJgJIAWgYQAFAGAHADQAGAEAHAAQAGAAAFgCQAFgCAAgFQAAgEgEgCQgFgDgGgBIgOgEQgJgBgGgEQgHgEgEgFQgFgHAAgLQAAgKAFgIQADgHAIgFQAGgFAJgCQAJgCAIAAQALAAAMADIAMAFIAJAHIgXAWQgHgKgNAAQgEAAgEACQgFACAAAGQAAAEAFACIAKAEIAPADQAHACAHAEQAHADAFAGQAEAHAAALQAAALgFAHQgFAIgIAEQgHAFgKABQgKACgIAAQgMAAgNgDg");
	this.shape_65.setTransform(441.9,249.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgTA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAKAEQAKAEAHAIQAHAIAEAMQAEALAAANIAAALIhTAAQACALAIAGQAHAGAJAAQAJAAAGgEQAHgEAEgGIAZASQgEAGgFAEQgGAEgGADIgOAFIgOABQgMAAgMgEgAgIggQgEABgEAEQgDACgCAEIgCAJIAvAAQAAgJgGgHQgGgGgKAAQgFAAgFACg");
	this.shape_66.setTransform(429.5,249.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAYBVIgjhEIgTAAIAABEIglAAIAAipIBCAAQAMAAALADQAMACAJAGQAJAGAFAKQAFAKAAAOQAAATgJAMQgKAMgSAEIArBHgAgegOIAXAAIAJAAIAKgCQAFgCADgEQADgDAAgIQAAgGgDgEQgCgEgEgCQgEgCgGgBIgJgBIgZAAg");
	this.shape_67.setTransform(415.6,246.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgRBbIAAi1IAjAAIAAC1g");
	this.shape_68.setTransform(396.9,246.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgdA7QgIgCgFgFQgHgFgCgGQgEgHAAgJQAAgKAEgHQAEgHAFgDQAHgFAJgDIAQgDIAQgCIARAAQAAgKgHgFQgHgGgJAAQgIAAgHAEQgIAEgGAGIgTgUIAMgIQAFgDAHgDQANgEANAAQARAAAKAEQAKAEAGAHQAGAIADALQACALAAAPIAAA6IghAAIAAgOIgBAAQgFAJgLAEQgIAEgMAAQgHAAgIgCgAAEAIIgLACQgFABgEAEQgFADAAAGQAAAGAGAEQAGADAFAAQAFAAAFgCIAIgEQAFgDABgEQADgEAAgFIAAgIIgJAAg");
	this.shape_69.setTransform(387.2,249.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgoA8IAAh0IAkAAIAAATQAFgLAIgFQAIgGAMAAIAGAAIAGABIAAAhIgIgBIgIgBQgKAAgGADQgGADgDAFQgCAFgBAHIgBAPIAAAxg");
	this.shape_70.setTransform(376.6,249.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAKAEQAKAEAHAIQAHAIAEAMQAEALAAANIAAALIhTAAQACALAIAGQAHAGAJAAQAJAAAGgEQAHgEAEgGIAZASQgEAGgFAEQgGAEgGADIgOAFIgOABQgMAAgMgEgAgIggQgEABgEAEQgDACgCAEIgCAJIAvAAQAAgJgGgHQgGgGgKAAQgFAAgFACg");
	this.shape_71.setTransform(364.3,249.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgdBYQgKgFgIgIQgHgIgEgLQgEgLAAgNQAAgMADgLQAEgLAHgIQAHgJAKgFQAJgFANAAQAKAAAKADQAKAEAGAIIAAAAIAAhNIAkAAIAAC0IghAAIAAgPIAAAAIgGAGIgIAGIgKAEQgGACgFAAQgNAAgLgEgAgKADQgFACgEAFQgHAIAAANQAAANAHAIQAIAIAMAAQAOAAAIgIQAHgIAAgNQAAgNgHgIQgEgFgFgCQgGgCgHAAQgFAAgGACg");
	this.shape_72.setTransform(349.5,246.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgTA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAKAEQAKAEAHAIQAHAIAEAMQAEALAAANIAAALIhTAAQACALAIAGQAHAGAJAAQAJAAAGgEQAHgEAEgGIAZASQgEAGgFAEQgGAEgGADIgOAFIgOABQgMAAgMgEgAgIggQgEABgEAEQgDACgCAEIgCAJIAvAAQAAgJgGgHQgGgGgKAAQgFAAgFACg");
	this.shape_73.setTransform(335.4,249.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIBxAAIAAAiIhMAAIAAAjIBGAAIAAAiIhGAAIAABCg");
	this.shape_74.setTransform(322,246.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgTA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAKAEQAKAEAHAIQAHAIAEAMQAEALAAANIAAALIhTAAQACALAIAGQAHAGAJAAQAJAAAGgEQAHgEAEgGIAZASQgEAGgFAEQgGAEgGADIgOAFIgOABQgMAAgMgEgAgIggQgEABgEAEQgDACgCAEIgCAJIAvAAQAAgJgGgHQgGgGgKAAQgFAAgFACg");
	this.shape_75.setTransform(300.4,249.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAUBbIAAg5IAAgLQAAgFgDgFQgBgEgEgDQgEgDgGAAQgHAAgEACQgEADgCAEQgDAEgBAGIAAALIAAA6IgkAAIAAi1IAkAAIAABRIAFgHIAGgGIAJgEQAGgCAGAAQANAAAJAEQAJAFAEAHQAEAIADAJQABAKAAALIAABBg");
	this.shape_76.setTransform(286.7,246.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AADBLQgGgCgGgEQgGgEgDgHQgDgHAAgJIAAg3IgXAAIAAgcIAXAAIAAgjIAjAAIAAAjIAfAAIAAAcIgfAAIAAAmIAAAJIACAHQACADAEABQADABAGAAIAHAAQAFgBACgCIAAAeQgGADgGAAIgNABQgJAAgIgCg");
	this.shape_77.setTransform(274.7,247.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgVBcIAAhYIgXAAIAAgbIAXAAIAAgVQAAgKACgIQACgJAFgGQAEgHAIgDQAJgEAPAAIALAAIAKACIgCAfIgFgCIgGgBQgJAAgEAEQgFAEAAALIAAATIAbAAIAAAbIgbAAIAABYg");
	this.shape_78.setTransform(258.7,245.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgYA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAMAEQAMAEAJAIQAJAIAFAMQAFALAAANQAAAOgFALQgFALgJAIQgJAJgMAEQgMAEgNAAQgMAAgMgEgAgLgbQgFACgEAFQgIAIAAAMQAAANAIAIQAHAIANAAQAOAAAHgIQAIgIAAgNQAAgMgIgIQgEgFgFgCQgFgCgHAAQgGAAgFACg");
	this.shape_79.setTransform(246.8,249.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgcA6QgMgEgJgJIAWgYQAFAGAHADQAGAEAHAAQAGAAAFgCQAFgCAAgFQAAgEgEgCQgFgDgGgBIgOgEQgJgBgGgEQgHgEgEgFQgFgHAAgLQAAgKAFgIQADgHAHgFQAHgFAJgCQAJgCAIAAQALAAAMADIAMAFIAJAHIgXAWQgHgKgNAAQgEAAgEACQgFACAAAGQAAAEAFACIAKAEIAPADQAHACAHAEQAHADAFAGQAEAHAAALQAAALgFAHQgFAIgIAEQgHAFgKABQgKACgIAAQgMAAgNgDg");
	this.shape_80.setTransform(226.8,249.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAUA8IAAg5IAAgKQAAgFgCgFQgCgEgEgDQgEgDgGAAQgHAAgEACQgEADgCAEQgDAEAAAGIgBAKIAAA6IgkAAIAAh0IAiAAIAAAQIABAAIAFgHIAHgGIAJgEQAGgCAGAAQANAAAJAEQAIAFAFAHQAFAIACAKQABAKAAALIAABAg");
	this.shape_81.setTransform(214.4,249.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgYA5QgMgEgJgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAJgIAMgEQAMgEAMAAQANAAAMAEQAMAEAJAIQAJAIAFAMQAFALAAANQAAAOgFALQgFALgJAIQgJAJgMAEQgMAEgNAAQgMAAgMgEgAgLgbQgFACgEAFQgIAIAAAMQAAANAIAIQAHAIANAAQAOAAAHgIQAIgIAAgNQAAgMgIgIQgEgFgFgCQgFgCgHAAQgGAAgFACg");
	this.shape_82.setTransform(200.2,249.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgRBXIAAhzIAjAAIAABzgAgOgyQgGgGAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_83.setTransform(189.8,246.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AADBLQgGgCgGgEQgGgEgDgHQgDgHAAgJIAAg3IgXAAIAAgcIAXAAIAAgjIAjAAIAAAjIAfAAIAAAcIgfAAIAAAmIAAAJIACAHQACADAEABQADABAGAAIAHAAQAFgBACgCIAAAeQgGADgGAAIgNABQgJAAgIgCg");
	this.shape_84.setTransform(181.6,247.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgNA5QgMgEgIgJQgJgIgFgLQgFgLAAgOQAAgNAFgLQAFgMAJgIQAIgIAMgEQAMgEANAAQAKAAALADQAMAEAIAIIgYAZQgCgEgFgCQgFgDgFAAQgHAAgFACQgFACgEAFQgHAIAAAMQAAANAHAIQAIAIANAAQAGAAAEgCIAHgGIAYAYIgJAIIgLAFQgLADgKAAQgNAAgMgEg");
	this.shape_85.setTransform(171.6,249.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAUA8IAAg5IgBgKQAAgFgCgFQgCgEgDgDQgEgDgHAAQgFAAgFACQgFADgCAEQgCAEgBAGIAAAKIAAA6IgkAAIAAh0IAiAAIAAAQIABAAIAEgHIAIgGIAJgEQAGgCAGAAQANAAAJAEQAIAFAFAHQAEAIACAKQACAKAAALIAABAg");
	this.shape_86.setTransform(158.6,249.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgiA3QgJgEgFgHQgEgIgCgKQgBgKAAgMIAAg/IAkAAIAAA5IAAAKIACAKQACAEAEADQAEADAGAAQAHAAAEgDQAEgCACgEIAEgKIAAgKIAAg6IAkAAIAAB0IgiAAIAAgQIgBAAIgFAHIgHAGIgJAEQgGACgGAAQgOAAgIgFg");
	this.shape_87.setTransform(144.8,249.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIBxAAIAAAiIhMAAIAAAjIBGAAIAAAiIhGAAIAABCg");
	this.shape_88.setTransform(131.3,246.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgLQgEgKAAgNQAAgLAEgLQAEgLAIgIQAHgHAKgFQAKgFAMAAQAMAAAKAFQAKAFAGAHQAHAHADAKQAEAJAAAJIAAAJIhcAAIABANQACAGAFAHQAFAHAIAEQAIAGAMAAQALgBAKgFQAKgFAGgJIAKAJQgIANgMAFQgNAGgPgBQgLABgLgFgAAngIQAAgIgDgGQgDgHgFgFQgFgEgHgEQgHgCgIAAQgLAAgIAEQgHAGgFAGQgFAGgBAGIgCAIIBNAAIAAAAg");
	this.shape_89.setTransform(110,249.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAhBbIAAhCIgBgNQgBgGgDgFQgDgEgGgDQgFgDgJAAQgHAAgHADQgHACgFAFQgFAGgDAIQgDAJAAALIAAA4IgPAAIAAi1IAPAAIAABaIAAAAQAFgJAKgGQAFgEAGgBQAGgCAFAAQANAAAIAEQAJAEAEAHQAFAGACAIQACAJAAAJIAABCg");
	this.shape_90.setTransform(96.7,246.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AAEBHQgFgDgDgDQgEgEgBgFQgBgFAAgGIAAhIIgZAAIAAgNIAZAAIAAggIAMAAIAAAgIAhAAIAAANIghAAIAABIQABAGAEAFQAEAEAHAAIAJgBIAIgDIABANIgJADIgKABQgIAAgFgCg");
	this.shape_91.setTransform(85.9,248.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_92.setTransform(853.5,214.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgbA5IAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIAAAMIABAIQAGgKAHgGQAJgHAMAAIAFAAIADABIgBAPIgGgBQgJAAgHACQgGADgEAGQgFAFgCAHQgCAIAAAHIAAA8g");
	this.shape_93.setTransform(844.1,214.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgWA2QgLgEgIgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgIQAIgIALgEQAKgFAMABQANgBAKAFQALAEAIAIQAIAIAEALQAEAKAAAMQAAANgEALQgEAKgIAIQgIAIgLAEQgKAFgNAAQgMAAgKgFgAgRgoQgIADgGAGQgGAGgDAIQgDAJAAAIQAAAKADAHQADAJAGAGQAGAHAIADQAIAEAJgBQAKABAIgEQAIgDAGgHQAGgGADgJQADgHAAgKQAAgIgDgJQgDgIgGgGQgGgGgIgDQgIgFgKAAQgJAAgIAFg");
	this.shape_94.setTransform(832.2,214.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_95.setTransform(822.2,211.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("Ag6BUIAAikIAPAAIAAATIAAAAQAEgFAFgFIALgHIAMgEIAMgBQAMAAALAEQALAFAHAHQAIAIAFALQAEALAAAMQAAANgEALQgFAJgIAIQgHAIgLAEQgLAFgMAAIgMgCIgMgEIgLgHQgFgEgEgGIAAAAIAABKgAgRhCQgIADgGAGQgHAGgDAJQgEAIAAAJQAAAKAEAIQADAHAHAGQAGAHAIADQAJAEAJAAQAKAAAIgEQAIgDAGgHQAGgGADgHQADgIAAgKQAAgJgDgIQgDgJgGgGQgGgGgIgDQgIgEgKAAQgJAAgJAEg");
	this.shape_96.setTransform(812.1,217.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAmA3IgmgxIgmAxIgRAAIAug6Igog0IATAAIAeArIAegrIASAAIgnA0IAvA6g");
	this.shape_97.setTransform(798.9,214.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_98.setTransform(786.5,214.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_99.setTransform(770.8,211.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_100.setTransform(765,211.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_101.setTransform(759.3,212.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAhA3IghhZIgeBZIgPAAIgjhuIAQAAIAbBcIAAAAIAghcIAMAAIAhBcIAAAAIAahcIAPAAIghBug");
	this.shape_102.setTransform(748,214.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgaA1QgJgFgEgGQgFgGgCgJQgBgIAAgKIAAhBIAOAAIAABBIABAMQACAHADAFQADAFAFADQAFADAJAAQAHAAAHgDQAHgDAFgFQAFgGADgIQADgJAAgKIAAg4IAPAAIAABPIAAAHIAAAJIABAJIAAAGIgOAAIgBgMIAAgHIgBAAQgEAIgKAHQgLAHgMAAQgNAAgIgEg");
	this.shape_103.setTransform(726.7,215);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgWA2QgLgEgIgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgIQAIgIALgEQAKgFAMABQANgBAKAFQALAEAIAIQAIAIAEALQAEAKAAAMQAAANgEALQgEAKgIAIQgIAIgLAEQgKAFgNAAQgMAAgKgFgAgRgoQgIADgGAGQgGAGgDAIQgDAJAAAIQAAAKADAHQADAJAGAGQAGAHAIADQAIAEAJgBQAKABAIgEQAIgDAGgHQAGgGADgJQADgHAAgKQAAgIgDgJQgDgIgGgGQgGgGgIgDQgIgFgKAAQgJAAgIAFg");
	this.shape_104.setTransform(712.9,214.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgqBUIgHgCIACgNIAGACIAGAAQAEAAAEgBIAEgFIAFgFIACgHIAKgaIgthuIAQAAIAkBcIAjhcIAQAAIg4CQQgEALgIAGQgGAGgNAAg");
	this.shape_105.setTransform(700.3,217.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_106.setTransform(681.9,214.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgOA2QgLgEgHgIQgIgIgFgKQgEgLAAgNQAAgMAEgKQAFgLAIgIQAHgIALgEQALgFAMABQAMgBAKAGQALAFAIAJIgMAJQgGgIgHgDQgIgFgIAAQgKAAgIAFQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAHQADAJAFAGQAGAHAIADQAIAEAKgBQAJABAHgFQAIgEAFgHIALAJQgIAKgKAEQgKAFgMABQgMAAgLgFg");
	this.shape_107.setTransform(670,214.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgFgDgGQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAGQgGAFgDAIQgDAJAAALIAAA3IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAIIABAAQAEgJAKgHQAFgEAGgBQAGgCAGAAQANAAAIAFQAIAEAFAGQAEAGACAJQACAJAAAJIAABBg");
	this.shape_108.setTransform(657,214.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_109.setTransform(643.8,214.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_110.setTransform(634.2,212.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgbA5IAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIAAAMIABAIQAGgKAHgGQAJgHAMAAIAFAAIADABIgBAPIgGgBQgJAAgHACQgGADgEAGQgEAFgDAHQgCAIAAAHIAAA8g");
	this.shape_111.setTransform(628.2,214.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Ag6BUIAAikIAPAAIAAATIAAAAQAEgFAFgFIALgHIAMgEIAMgBQAMAAALAEQALAFAHAHQAIAIAFALQAEALAAAMQAAANgEALQgFAJgIAIQgHAIgLAEQgLAFgMAAIgMgCIgMgEIgLgHQgFgEgEgGIAAAAIAABKgAgRhCQgIADgGAGQgHAGgDAJQgEAIAAAJQAAAKAEAIQADAHAHAGQAGAHAIADQAJAEAJAAQAKAAAIgEQAIgDAGgHQAGgGADgHQADgIAAgKQAAgJgDgIQgDgJgGgGQgGgGgIgDQgIgEgKAAQgJAAgJAEg");
	this.shape_112.setTransform(616.2,217.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAmA3IgmgxIgmAxIgRAAIAug6Igog0IATAAIAeArIAegrIASAAIgnA0IAvA6g");
	this.shape_113.setTransform(603,214.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_114.setTransform(590.6,214.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgVA4QgHgBgFgEQgGgEgDgGQgEgGAAgKQAAgNAHgGQAGgHAKgEQAJgDALgCIASAAIARAAIAAgIQAAgGgDgFQgCgGgEgDQgJgGgOgBQgIABgJADQgIADgHAGIgJgKQAIgIAMgEQAMgDAJAAQALAAAIACQAIADAGAEQAMAJAAAWIAAAaIAAAPIAAALIABALIABAJIgOAAQgBgHAAgLIgBAAQgGAMgJAEQgJAFgNABQgIAAgHgDgAgBABQgIABgHADQgHADgEAFQgEAFAAAHQAAAFACAEIAGAHQAEACAEABIAJABQALABAHgEQAHgEAFgEQAEgGACgHQACgGAAgIIAAgHIgQAAg");
	this.shape_115.setTransform(571.4,214.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_116.setTransform(562.4,212.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgXBYQgLgEgHgIQgIgIgFgLQgEgLAAgMQAAgNAEgLQAFgKAIgHQAHgIALgEQALgFAMAAIAMACIANAEIAKAHQAGAEADAGIAAAAIAAhaIAPAAIAAC0IgPAAIAAgTIAAAAQgDAGgGAEIgKAHIgNAEIgMABQgMAAgLgEgAgSgHQgIAEgGAFQgFAGgDAIQgDAIAAAKQAAAJADAIQADAJAFAGQAGAGAIAEQAIADAKAAQAJAAAJgDQAIgEAGgGQAHgGADgJQAEgIAAgJQAAgKgEgIQgDgIgHgGQgGgFgIgEQgJgEgJAAQgKAAgIAEg");
	this.shape_117.setTransform(552.1,211.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_118.setTransform(538.3,214.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("ABFA5IAAhAIgBgOQgBgFgDgGQgDgFgGgDQgFgDgJAAQgKAAgGAEQgHAEgDAFQgEAGgCAHIgBANIAAA9IgOAAIAAhCQAAgIgBgFIgEgLQgGgKgMAAQgIAAgHADQgHADgFAGQgFAFgDAIQgDAJAAALIAAA3IgPAAIAAhPIAAgHIAAgJIAAgJIgBgGIAPAAIAAAMIABAIIAAAAQAFgJAKgHQAFgEAGgBQAGgCAGAAQALAAAJAGQAJAGAEAMQACgGAEgEQAEgFAFgDQALgGALAAQANAAAIAFQAJAEAEAGQAFAGACAJQACAJAAAJIAABBg");
	this.shape_119.setTransform(521.4,214.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgXA1QgMgFgHgMIANgJQAFAJAJAFQAIAEAJAAIAKgBQAEgCAEgCIAGgGQACgEAAgFQAAgHgFgEQgFgFgHgBIgPgEIgQgEQgHgEgFgFQgFgGABgLQAAgHADgGQADgHAGgDQAFgFAGgBQAHgCAGAAQAOgBAKAGQAKAFAFALIgMAIQgFgJgGgDQgGgFgKAAIgHACIgIAEQgDACgCADQgCADgBAEQAAAIAGADQAEAEAIACIAPADQAIACAIAEQAHABAFAHQAEAGAAALQAAAJgDAGQgDAGgGAFQgFAEgHACQgHADgJAAQgNAAgMgGg");
	this.shape_120.setTransform(499.7,214.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_121.setTransform(491.9,212.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAhBbIAAhCIgBgNQgBgGgDgFQgDgEgGgDQgFgDgJAAQgHAAgHADQgHACgFAFQgFAGgDAIQgDAJAAALIAAA4IgPAAIAAi1IAPAAIAABaIAAAAQAFgJAKgGQAFgEAGgBQAGgCAFAAQANAAAIAEQAJAEAEAHQAFAGACAIQACAJAAAJIAABCg");
	this.shape_122.setTransform(482.4,211.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAEBHQgFgCgDgFQgDgDgCgGQgCgFABgFIAAhIIgZAAIAAgNIAZAAIAAggIAMAAIAAAgIAhAAIAAANIghAAIAABIQAAAGAFAFQAEAEAHAAIAIgBIAJgDIAAANIgJACIgJACQgIAAgFgCg");
	this.shape_123.setTransform(471.7,213.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgFgDgGQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAGQgGAFgDAIQgDAJAAALIAAA3IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAIIABAAQAEgJAKgHQAFgEAGgBQAGgCAGAAQANAAAIAFQAIAEAFAGQAEAGACAJQACAJAAAJIAABBg");
	this.shape_124.setTransform(454.9,214.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgHBVIAAipIAPAAIAACpg");
	this.shape_125.setTransform(445.2,211.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgIBSQgDgDAAgFQAAgFADgDQAEgDAEAAQAFAAADADQAEADAAAFQAAAFgEADQgDAEgFAAQgEAAgEgEgAgGAoIAAh9IANAAIAAB9g");
	this.shape_126.setTransform(431.5,211.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgpBUIgIgCIACgNIAGACIAGAAQAFAAACgBIAGgFIADgFIADgHIALgaIguhuIAQAAIAkBcIAjhcIAQAAIg4CQQgEALgIAGQgGAGgNAAg");
	this.shape_127.setTransform(421.5,217.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AAEBHQgFgCgDgFQgEgDgBgGQgCgFAAgFIAAhIIgXAAIAAgNIAXAAIAAggIAOAAIAAAgIAfAAIAAANIgfAAIAABIQAAAGAEAFQAEAEAHAAIAJgBIAHgDIACANIgJACIgKACQgIAAgFgCg");
	this.shape_128.setTransform(411.9,213.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_129.setTransform(405.1,212.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgFA3IguhuIARAAIAkBfIAkhfIAOAAIgrBug");
	this.shape_130.setTransform(396.7,214.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_131.setTransform(388.2,212.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAEBHQgFgCgDgFQgEgDgBgGQgCgFAAgFIAAhIIgXAAIAAgNIAXAAIAAggIAOAAIAAAgIAfAAIAAANIgfAAIAABIQAAAGAEAFQAEAEAHAAIAJgBIAHgDIACANIgJACIgKACQgIAAgFgCg");
	this.shape_132.setTransform(381.3,213.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgOA2QgLgEgHgIQgIgIgFgKQgEgLAAgNQAAgMAEgKQAFgLAIgIQAHgIALgEQALgFAMABQAMgBAKAGQALAFAIAJIgMAJQgGgIgHgDQgIgFgIAAQgKAAgIAFQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAHQADAJAFAGQAGAHAIADQAIAEAKgBQAJABAHgFQAIgEAFgHIALAJQgIAKgKAEQgKAFgMABQgMAAgLgFg");
	this.shape_133.setTransform(372.1,214.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgVA4QgHgBgFgEQgGgEgDgGQgEgGAAgKQAAgNAHgGQAGgHAKgEQAJgDALgCIASAAIARAAIAAgIQAAgGgDgFQgCgGgEgDQgJgGgOgBQgIABgJADQgIADgHAGIgJgKQAIgIAMgEQAMgDAJAAQALAAAIACQAIADAGAEQAMAJAAAWIAAAaIAAAPIAAALIABALIABAJIgOAAQgBgHAAgLIgBAAQgGAMgJAEQgJAFgNABQgIAAgHgDgAgBABQgIABgHADQgHADgEAFQgEAFAAAHQAAAFACAEIAGAHQAEACAEABIAJABQALABAHgEQAHgEAFgEQAEgGACgHQACgGAAgIIAAgHIgQAAg");
	this.shape_134.setTransform(359.5,214.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgRBUQgHgBgIgDQgHgDgGgFQgFgEgFgFIALgLQAIALALAFQAMAFANAAQAKAAAHgDQAIgDAFgFQAFgEADgGIAEgLIACgLIAAgIIAAgPIgBAAQgGAKgLAGQgLAFgOAAQgLAAgLgEQgLgFgHgHQgJgIgFgKQgEgKAAgMQAAgLAEgLQAFgKAJgIQAHgHALgFQALgFALAAQAOAAALAGQALAGAGAKIABAAIAAgTIAOAAIAABnQAAAKgCAJQgBAIgDAGQgGANgJAHQgJAHgLACQgKADgHAAQgIAAgJgCgAgQhEQgIADgGAGQgGAGgDAIQgEAIAAAJQAAAJAEAJQADAIAGAEQAGAGAIAEQAIADAIAAQAJAAAIgDQAJgEAGgGQAFgEAEgIQADgJAAgJQAAgJgDgIQgEgIgFgGQgGgGgJgDQgIgEgJAAQgIAAgIAEg");
	this.shape_135.setTransform(339.8,217.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgFgDgGQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAGQgGAFgDAIQgDAJAAALIAAA3IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAIIABAAQAEgJAKgHQAFgEAGgBQAGgCAGAAQANAAAIAFQAIAEAFAGQAEAGACAJQACAJAAAJIAABBg");
	this.shape_136.setTransform(325.9,214.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_137.setTransform(316.4,212.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAiA5IAAhAIgCgOQgBgFgDgGQgDgFgFgDQgGgDgIAAQgHAAgHADQgHADgFAGQgGAFgDAIQgDAJAAALIAAA3IgOAAIAAhPIAAgHIgBgJIAAgJIAAgGIAOAAIABAMIAAAIIABAAQAEgJAKgHQAFgEAGgBQAGgCAGAAQANAAAIAFQAIAEAFAGQAEAGACAJQACAJAAAJIAABBg");
	this.shape_138.setTransform(306.8,214.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgcA5IAAhPIAAgHIAAgJIAAgJIgBgGIAPAAIABAMIAAAIQAFgKAIgGQAJgHAMAAIAEAAIAFABIgCAPIgFgBQgKAAgHACQgGADgEAGQgEAFgDAHQgCAIAAAHIAAA8g");
	this.shape_139.setTransform(297,214.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgVA4QgHgBgFgEQgGgEgDgGQgEgGAAgKQAAgNAHgGQAGgHAKgEQAJgDALgCIASAAIARAAIAAgIQAAgGgDgFQgCgGgEgDQgJgGgOgBQgIABgJADQgIADgHAGIgJgKQAIgIAMgEQAMgDAJAAQALAAAIACQAIADAGAEQAMAJAAAWIAAAaIAAAPIAAALIABALIABAJIgOAAQgBgHAAgLIgBAAQgGAMgJAEQgJAFgNABQgIAAgHgDgAgBABQgIABgHADQgHADgEAFQgEAFAAAHQAAAFACAEIAGAHQAEACAEABIAJABQALABAHgEQAHgEAFgEQAEgGACgHQACgGAAgIIAAgHIgQAAg");
	this.shape_140.setTransform(285.9,214.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_141.setTransform(273.2,214.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_142.setTransform(263.6,211.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgXA1QgMgFgHgMIAOgJQAEAJAJAFQAIAEAJAAIAJgBQAFgCAEgCIAGgGQACgEAAgFQAAgHgFgEQgFgFgHgBIgPgEIgPgEQgIgEgFgFQgFgGABgLQAAgHACgGQAEgHAFgDQAGgFAGgBQAHgCAGAAQAOgBAKAGQAKAFAFALIgMAIQgEgJgHgDQgGgFgKAAIgHACIgIAEQgDACgCADQgDADAAAEQABAIAFADQAEAEAIACIAOADQAJACAIAEQAGABAFAHQAFAGABALQAAAJgEAGQgDAGgGAFQgGAEgGACQgIADgIAAQgNAAgMgGg");
	this.shape_143.setTransform(249.3,214.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgGBTIAAhuIANAAIAABugAgHg/QgDgDAAgFQAAgFADgDQAEgDADAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgDAAgEgDg");
	this.shape_144.setTransform(241.5,212.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAhBbIAAhCIgBgNQgBgGgDgFQgDgEgGgDQgFgDgJAAQgHAAgHADQgHACgFAFQgFAGgDAIQgDAJAAALIAAA4IgPAAIAAi1IAPAAIAABaIAAAAQAFgJAKgGQAFgEAGgBQAGgCAFAAQANAAAIAEQAJAEAEAHQAFAGACAIQACAJAAAJIAABCg");
	this.shape_145.setTransform(232,211.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAEBHQgFgCgDgFQgDgDgCgGQgBgFAAgFIAAhIIgZAAIAAgNIAZAAIAAggIANAAIAAAgIAfAAIAAANIgfAAIAABIQgBAGAFAFQAEAEAHAAIAIgBIAIgDIABANIgJACIgJACQgHAAgGgCg");
	this.shape_146.setTransform(221.2,213.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgWA2QgLgEgIgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgIQAIgIALgEQAKgFAMABQANgBAKAFQALAEAIAIQAIAIAEALQAEAKAAAMQAAANgEALQgEAKgIAIQgIAIgLAEQgKAFgNAAQgMAAgKgFgAgRgoQgIADgGAGQgGAGgDAIQgDAJAAAIQAAAKADAHQADAJAGAGQAGAHAIADQAIAEAJgBQAKABAIgEQAIgDAGgHQAGgGADgJQADgHAAgKQAAgIgDgJQgDgIgGgGQgGgGgIgDQgIgFgKAAQgJAAgIAFg");
	this.shape_147.setTransform(204,214.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAEBHQgFgCgDgFQgEgDgBgGQgCgFAAgFIAAhIIgXAAIAAgNIAXAAIAAggIAOAAIAAAgIAgAAIAAANIggAAIAABIQAAAGAEAFQAEAEAHAAIAJgBIAIgDIABANIgJACIgKACQgHAAgGgCg");
	this.shape_148.setTransform(192.8,213.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_149.setTransform(176.1,214.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("ABFA5IAAhAIgBgOQgBgFgDgGQgDgFgGgDQgFgDgJAAQgKAAgGAEQgHAEgDAFQgEAGgCAHIgBANIAAA9IgOAAIAAhCQAAgIgBgFIgEgLQgGgKgMAAQgIAAgHADQgHADgFAGQgFAFgDAIQgDAJAAALIAAA3IgPAAIAAhPIAAgHIAAgJIAAgJIgBgGIAPAAIAAAMIABAIIAAAAQAFgJAKgHQAFgEAGgBQAGgCAGAAQALAAAJAGQAJAGAEAMQACgGAEgEQAEgFAFgDQALgGALAAQANAAAIAFQAJAEAEAGQAFAGACAJQACAJAAAJIAABBg");
	this.shape_150.setTransform(159.2,214.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgWA2QgLgEgIgIQgIgIgEgKQgEgLAAgNQAAgMAEgKQAEgLAIgIQAIgIALgEQAKgFAMABQANgBAKAFQALAEAIAIQAIAIAEALQAEAKAAAMQAAANgEALQgEAKgIAIQgIAIgLAEQgKAFgNAAQgMAAgKgFgAgRgoQgIADgGAGQgGAGgDAIQgDAJAAAIQAAAKADAHQADAJAGAGQAGAHAIADQAIAEAJgBQAKABAIgEQAIgDAGgHQAGgGADgJQADgHAAgKQAAgIgDgJQgDgIgGgGQgGgGgIgDQgIgFgKAAQgJAAgIAFg");
	this.shape_151.setTransform(141.9,214.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgOA2QgLgEgHgIQgIgIgFgKQgEgLAAgNQAAgMAEgKQAFgLAIgIQAHgIALgEQALgFAMABQAMgBAKAGQALAFAIAJIgMAJQgGgIgHgDQgIgFgIAAQgKAAgIAFQgIADgGAGQgFAGgDAIQgDAJAAAIQAAAKADAHQADAJAFAGQAGAHAIADQAIAEAKgBQAJABAHgFQAIgEAFgHIALAJQgIAKgKAEQgKAFgMABQgMAAgLgFg");
	this.shape_152.setTransform(129.5,214.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgGBbIAAi1IANAAIAAC1g");
	this.shape_153.setTransform(120.4,211.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgUA2QgKgEgHgIQgIgIgEgKQgEgLAAgNQAAgLAEgLQAEgLAIgHQAHgJAKgEQAKgFAMABQAMgBAKAFQAKAEAGAIQAHAIADAIQAEAKAAAJIAAAKIhcAAIABAMQACAGAFAHQAFAHAIAFQAIAEAMAAQALABAKgGQAKgFAGgKIAKAJQgIANgMAGQgNAGgPAAQgLAAgLgFgAAngJQAAgGgDgHQgDgGgFgGQgFgEgHgEQgHgDgIAAQgLAAgIAGQgHAEgFAHQgFAGgBAFIgCAIIBNAAIAAAAg");
	this.shape_154.setTransform(110.9,214.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AArBVIgriWIAAAAIgqCWIgUAAIgxipIAQAAIArCWIAriWIATAAIArCWIABAAIAqiWIAQAAIgxCpg");
	this.shape_155.setTransform(93.3,211.9);

	this.instance = new lib.one();
	this.instance.parent = this;
	this.instance.setTransform(386,219.2,0.175,0.175,0,0,0,143.3,143.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.one(), 3);

	this.instance_1 = new lib.five();
	this.instance_1.parent = this;
	this.instance_1.setTransform(385.9,480.2,0.175,0.175,0,0,0,143.1,143.3);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.five(), 3);

	this.instance_2 = new lib.four();
	this.instance_2.parent = this;
	this.instance_2.setTransform(385.9,414.9,0.175,0.175,0,0,0,143.1,142.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.four(), 3);

	this.instance_3 = new lib.three();
	this.instance_3.parent = this;
	this.instance_3.setTransform(386,349.7,0.175,0.175,0,0,0,143.3,143.1);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.three(), 3);

	this.instance_4 = new lib.two();
	this.instance_4.parent = this;
	this.instance_4.setTransform(386,284.4,0.175,0.175,0,0,0,143.3,143.1);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.two(), 3);

	this.instance_5 = new lib.FRBLogo();
	this.instance_5.parent = this;
	this.instance_5.setTransform(173.7,355.4,1.065,1.065,0,0,0,94,93.8);
	this.instance_5.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_5.cache(-3,-3,194,194);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgGAtQgDgDABgEQgBgEADgDQADgDADAAQAEAAADADQACADAAAEQAAAEgCADQgDACgEAAQgDAAgDgCgAgGgeQgDgDABgEQgBgEADgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_156.setTransform(345.6,166.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgTAsQgKgFgFgJIAKgHQAEAHAIAEQAHAEAHAAIAIgBIAHgEQADgCACgDQABgDAAgEQAAgHgEgDQgEgDgGgCIgMgDIgNgDQgGgDgEgEQgEgFAAgJQAAgHACgFQADgFAFgDQAEgDAGgCQAFgCAFAAQAMAAAIAFQAIAEAFAJIgLAGQgDgGgFgDQgGgEgIAAIgFABIgHADQgDACgBADQgCACAAAEQAAAGAEADQAEADAGACIAMADIANAEQAGABAEAGQAEAFAAAJQAAAHgCAGQgDAFgFADQgEAEgGACQgGACgHAAQgLAAgKgFg");
	this.shape_157.setTransform(338.5,166.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAcAvIAAg1IgBgLQgBgFgDgFQgCgDgFgDQgEgCgHgBQgFABgGACQgGACgFAFQgEAFgCAGQgDAIAAAIIAAAuIgMAAIAAhBIAAgGIgBgHIAAgIIAAgFIAMAAIAAAKIABAGIAAAAQAEgIAJgFIAJgEQAEgCAFABQALAAAHADQAGADAEAGQAEAFACAIIABAOIAAA2g");
	this.shape_158.setTransform(328.9,166.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgSAtQgJgEgHgGQgHgHgDgIQgEgJAAgLQAAgKAEgIQADgJAHgHQAHgGAJgEQAIgEAKAAQAKAAAKAEQAJAEAGAGQAHAHADAJQADAIAAAKQAAALgDAJQgDAIgHAHQgGAGgJAEQgKAEgKAAQgKAAgIgEgAgPgiQgGADgFAFQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAFAFAGADQAIADAHAAQAIAAAHgDQAHgDAFgFQAFgFACgHQACgHABgIQgBgHgCgHQgCgHgFgFQgFgFgHgDQgHgDgIAAQgHAAgIADg");
	this.shape_159.setTransform(317.5,166.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgFBFIAAhbIALAAIAABbgAgGg1QgCgCAAgEQAAgEACgCQADgDADAAQAEAAADADQACACAAAEQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_160.setTransform(309.1,164.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AADA7QgEgCgCgDIgEgIIgCgJIAAg7IgUAAIAAgLIAUAAIAAgbIAMAAIAAAbIAaAAIAAALIgaAAIAAA7QAAAGACADQAEAEAGAAIAHgBIAHgCIABAKIgIADIgIABQgGAAgFgCg");
	this.shape_161.setTransform(303.3,165.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgLAtQgJgEgHgGQgGgHgEgIQgEgJAAgLQAAgKAEgIQAEgJAGgHQAHgGAJgEQAJgEAJAAQAKAAAJAFQAIAEAIAHIgKAIQgGgGgGgDQgGgEgHAAQgHAAgIADQgGADgFAFQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAIADAHAAQAHAAAHgEQAGgDAFgGIAJAIQgHAIgIAEQgJAEgKAAQgJAAgJgEg");
	this.shape_162.setTransform(295.7,166.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAcAvIAAg1IgBgLQgBgFgDgFQgCgDgFgDQgEgCgHgBQgGABgFACQgHACgDAFQgFAFgCAGQgDAIAAAIIAAAuIgMAAIAAhBIAAgGIgBgHIAAgIIAAgFIAMAAIAAAKIABAGIABAAQADgIAJgFIAJgEQAEgCAFABQALAAAHADQAHADADAGQAEAFACAIIABAOIAAA2g");
	this.shape_163.setTransform(284.9,166.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgVAsQgHgDgFgGQgDgFgBgIIgCgOIAAg2IAMAAIAAA1IABALQABAFADAEQACAEAEADQAFACAHAAQAGAAAGgBQAFgDAFgFQAEgEADgHQACgIAAgIIAAguIAMAAIAABBIABAHIAAAHIAAAHIAAAFIgMAAIAAgKIgBgGIAAAAQgEAHgIAGQgIAGgLgBQgLABgGgEg");
	this.shape_164.setTransform(273.8,166.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgKBNIAAhRIgTAAIAAgLIATAAIAAgeQAAgJADgGQACgGAEgDQADgEAFgBIAKgCQAIAAAFADIgCAKQgEgCgHAAQgQAAAAAZIAAAZIAWAAIAAALIgWAAIAABRg");
	this.shape_165.setTransform(265.7,163.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAcAvIAAg1IgBgLQgBgFgDgFQgCgDgFgDQgEgCgHgBQgGABgFACQgHACgDAFQgFAFgCAGQgDAIAAAIIAAAuIgMAAIAAhBIAAgGIgBgHIAAgIIAAgFIAMAAIAAAKIABAGIABAAQADgIAJgFIAJgEQAEgCAFABQALAAAHADQAHADADAGQAEAFACAIIABAOIAAA2g");
	this.shape_166.setTransform(251.6,166.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgFBFIAAhbIALAAIAABbgAgGg1QgCgCAAgEQAAgEACgCQADgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_167.setTransform(243.7,164.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgRAvQgGgBgFgEQgEgDgDgFQgDgFAAgIQAAgKAFgHQAGgFAIgDQAIgDAJgBIAOgBIAOAAIAAgFQAAgGgCgFQgBgEgEgDQgIgFgLAAQgHAAgHADQgHACgGAGIgHgJQAHgGAJgDQAKgEAIAAQAJAAAGACQAHACAFAEQAKAIAAASIAAAVIAAANIAAAKIABAIIABAIIgLAAQgCgHAAgIQgFAJgIAEQgIAFgKAAIgMgCgAgBABQgHABgFACQgGADgEAEQgDAEAAAGQAAAEACADIAFAGIAHADIAHABQAJAAAGgDQAGgDAEgEQADgFACgFIABgMIAAgGIgNAAg");
	this.shape_168.setTransform(236,166.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AA6AvIAAg1IgBgLQgBgFgDgFQgCgDgFgDQgEgCgIgBQgIAAgFADQgGAEgDAEQgDAGgBAFIgCALIAAAyIgLAAIAAg2IgBgLQgBgGgCgEQgFgIgKAAQgGABgGACQgGACgEAFQgFAFgCAGQgDAIAAAIIAAAuIgMAAIAAhBIAAgGIAAgHIgBgIIAAgFIAMAAIABAKIAAAGIABAAQADgIAJgFIAJgEQAFgCAFABQAJAAAIAEQAHAFADAKQACgFAEgEQADgDAEgDQAJgEAJAAQALAAAHADQAHADAEAGQAEAFABAIIACAOIAAA2g");
	this.shape_169.setTransform(222.4,166.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_170.setTransform(203.2,166.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgEAuIgmhbIANAAIAeBOIAehOIAMAAIgkBbg");
	this.shape_171.setTransform(193,166.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgFBFIAAhbIALAAIAABbgAgFg1QgDgCAAgEQAAgEADgCQACgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_172.setTransform(186,164.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgKBNIAAhRIgTAAIAAgLIATAAIAAgeQAAgJADgGQACgGAEgDQADgEAFgBIAKgCQAIAAAFADIgCAKQgEgCgHAAQgQAAAAAZIAAAZIAWAAIAAALIgWAAIAABRg");
	this.shape_173.setTransform(181,163.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgTAsQgKgFgFgJIAKgHQAEAHAIAEQAHAEAHAAIAIgBIAHgEQADgCACgDQABgDAAgEQAAgHgEgDQgEgDgGgCIgMgDIgNgDQgGgDgEgEQgEgFAAgJQAAgHACgFQADgFAFgDQAEgDAGgCQAFgCAFAAQAMAAAIAFQAIAEAFAJIgLAGQgDgGgFgDQgGgEgIAAIgFABIgHADQgDACgBADQgCACAAAEQAAAGAEADQAEADAGACIAMADIANAEQAGABAEAGQAEAFAAAJQAAAHgCAGQgDAFgFADQgEAEgGACQgGACgHAAQgLAAgKgFg");
	this.shape_174.setTransform(168,166.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AA6AvIAAg1IgBgLQgBgFgDgFQgCgDgFgDQgEgCgIgBQgIAAgFADQgGAEgDAEQgDAGgBAFIgCALIAAAyIgLAAIAAg2IgBgLQgBgGgCgEQgFgIgKAAQgGABgGACQgGACgEAFQgFAFgCAGQgDAIAAAIIAAAuIgMAAIAAhBIAAgGIAAgHIgBgIIAAgFIAMAAIABAKIAAAGIABAAQADgIAJgFIAJgEQAFgCAFABQAJAAAIAEQAHAFADAKQACgFAEgEQADgDAEgDQAJgEAJAAQALAAAHADQAHADAEAGQAEAFABAIIACAOIAAA2g");
	this.shape_175.setTransform(155.4,166.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgWAvIAAhBIAAgGIgBgHIAAgIIAAgFIAMAAIAAAKIAAAGQAFgIAGgFQAHgFAKAAIAEAAIADABIAAALIgGgBQgHABgGACQgFACgDAFQgEAEgCAGQgCAHAAAGIAAAxg");
	this.shape_176.setTransform(144.3,166.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgSAtQgJgEgHgGQgGgHgEgIQgEgJAAgLQAAgKAEgIQAEgJAGgHQAHgGAJgEQAJgEAJAAQAKAAAJAEQAKAEAGAGQAHAHADAJQAEAIgBAKQABALgEAJQgDAIgHAHQgGAGgKAEQgJAEgKAAQgJAAgJgEgAgPgiQgGADgFAFQgEAFgDAHQgDAHABAHQgBAIADAHQADAHAEAFQAFAFAGADQAIADAHAAQAJAAAGgDQAHgDAFgFQAEgFADgHQACgHABgIQgBgHgCgHQgDgHgEgFQgFgFgHgDQgGgDgJAAQgHAAgIADg");
	this.shape_177.setTransform(134.4,166.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgKBNIAAhRIgTAAIAAgLIATAAIAAgeQAAgJADgGQACgGAEgDQADgEAFgBIAKgCQAIAAAFADIgCAKQgEgCgHAAQgQAAAAAZIAAAZIAWAAIAAALIgWAAIAABRg");
	this.shape_178.setTransform(125.9,163.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgWAvIAAhBIAAgGIgBgHIgBgIIAAgFIANAAIAAAKIABAGQAEgIAGgFQAHgFAKAAIAEAAIAEABIgBALIgGgBQgHABgGACQgFACgDAFQgEAEgCAGQgBAHAAAGIAAAxg");
	this.shape_179.setTransform(119.9,166.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_180.setTransform(110.4,166.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgwBGIAAiJIAMAAIAAARIABAAQACgFAFgEIAJgGIAKgDIAKgBQAKAAAJAEQAIADAHAHQAHAGAEAJQADAJAAALQAAAKgDAJQgEAIgHAGQgHAHgIAEQgJADgKAAIgKgBIgKgDIgJgGQgFgEgCgEIgBAAIAAA9gAgOg3QgHADgFAFQgFAFgDAHQgDAHAAAIQAAAHADAHQADAGAFAFQAFAFAHADQAHADAIAAQAHAAAIgDQAGgDAFgFQAFgFADgGQACgHAAgHQAAgIgCgHQgDgHgFgFQgFgFgGgDQgIgDgHAAQgIAAgHADg");
	this.shape_181.setTransform(98.9,168.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AADA7QgDgCgEgDIgDgIIgBgJIAAg7IgUAAIAAgLIAUAAIAAgbIAKAAIAAAbIAaAAIAAALIgaAAIAAA7QAAAGADADQAEAEAGAAIAHgBIAGgCIABAKIgHADIgIABQgHAAgEgCg");
	this.shape_182.setTransform(84,165.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_183.setTransform(78.2,163.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQADADAAADQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_184.setTransform(675.6,140.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgTAsQgKgFgFgJIAKgHQAEAHAIAEQAHAEAHAAIAIgBIAHgEQADgCACgDQABgDAAgEQAAgHgEgDQgEgDgGgCIgMgDIgNgDQgGgDgEgEQgEgFAAgJQAAgHACgFQADgFAFgDQAEgDAGgCQAFgCAFAAQAMAAAIAFQAIAEAFAJIgLAGQgDgGgFgDQgGgEgIAAIgFABIgHADQgDACgBADQgCACAAAEQAAAGAEADQAEADAGACIAMADIANAEQAGABAEAGQAEAFAAAJQAAAHgCAGQgDAFgFADQgEAEgGACQgGACgHAAQgLAAgKgFg");
	this.shape_185.setTransform(668.5,137);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_186.setTransform(658.9,137);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AADA7QgDgCgDgDIgFgIIgBgJIAAg7IgTAAIAAgLIATAAIAAgbIALAAIAAAbIAaAAIAAALIgaAAIAAA7QABAGADADQADAEAGAAIAHgBIAGgCIABAKIgHADIgIABQgHAAgEgCg");
	this.shape_187.setTransform(650,135.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgRAvQgGgBgFgEQgEgDgDgFQgDgFAAgIQAAgKAFgHQAGgFAIgDQAIgDAJgBIAOgBIAOAAIAAgFQAAgGgCgFQgBgEgEgDQgIgFgLAAQgHAAgHADQgHACgGAGIgHgJQAHgGAJgDQAKgEAIAAQAJAAAGACQAHACAFAEQAKAIAAASIAAAVIAAANIAAAKIABAIIABAIIgLAAQgCgHAAgIQgFAJgIAEQgIAFgKAAIgMgCgAgBABQgHABgFACQgGADgEAEQgDAEAAAGQAAAEACADIAFAGIAHADIAHABQAJAAAGgDQAGgDAEgEQADgFACgFIABgMIAAgGIgNAAg");
	this.shape_188.setTransform(641.4,137);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AADA7QgDgCgDgDIgFgIIgBgJIAAg7IgUAAIAAgLIAUAAIAAgbIAMAAIAAAbIAZAAIAAALIgZAAIAAA7QAAAGADADQADAEAGAAIAHgBIAGgCIACAKIgIADIgIABQgHAAgEgCg");
	this.shape_189.setTransform(633,135.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgXBFQgHgCgEgEQgGgEgEgGIANgIIAGAHQADAEAEACQAIAEAKAAQAGAAAHgCQAFgCAEgDQAFgEADgFQACgFAAgGQAAgIgDgFQgEgEgEgEQgGgDgGgCIgMgEIgOgFQgGgCgGgFQgFgEgDgHQgDgHAAgKQAAgJADgHQAFgIAFgFQAHgEAIgDQAIgCAIAAQAIAAAOAEQAKAEAHAJIgMAJQgEgHgHgEQgHgDgJAAQgFAAgGABQgGACgFADQgDAEgDAFQgDAFAAAGQAAAGACAEIADAHQAGAFAIAEIAQAFQAKADAIADQAIAEAGAIQAFAHAAAOQAAAJgEAIQgDAHgGAFQgHAFgIADQgHACgJAAQgNAAgLgFg");
	this.shape_190.setTransform(624.2,134.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgTBJQgJgEgHgGQgGgHgEgIQgDgJAAgLQAAgLADgIQAEgJAGgGQAHgGAJgEQAJgEAKAAIAKACIAKADIAJAGQAFADACAFIABAAIAAhLIAMAAIAACWIgMAAIAAgQIgBAAIgHAIIgJAGIgKAEIgKABQgKAAgJgEgAgPgGQgHADgFAEQgEAFgDAHQgCAHAAAIQAAAIACAHQADAHAEAFQAFAFAHADQAHADAIAAQAHAAAIgDQAGgDAGgFQAFgFADgHQADgHAAgIQAAgIgDgHQgDgHgFgFQgGgEgGgDQgIgDgHAAQgIAAgHADg");
	this.shape_191.setTransform(607.2,134.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_192.setTransform(595.7,137);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AADA7QgDgCgDgDIgFgIIgBgJIAAg7IgUAAIAAgLIAUAAIAAgbIAMAAIAAAbIAaAAIAAALIgaAAIAAA7QAAAGACADQAEAEAGAAIAHgBIAHgCIABAKIgIADIgIABQgGAAgFgCg");
	this.shape_193.setTransform(586.7,135.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgFBFIAAhcIALAAIAABcgAgFg0QgDgDAAgEQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_194.setTransform(581.1,134.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAcAwIAAg2IgBgLQgBgFgDgEQgCgEgEgDQgFgCgHAAQgGAAgFACQgHACgDAFQgFAEgDAIQgCAGAAAKIAAAuIgMAAIAAhCIAAgGIgBgIIAAgHIAAgFIAMAAIABAKIAAAGIABAAQADgHAIgGIAJgEQAFgCAFAAQALAAAGAEQAIADADAGQAEAGABAGIACAQIAAA2g");
	this.shape_195.setTransform(573.1,136.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgYBEQgJgFgGgIQgHgIgCgKQgDgLAAgLIAAhWIAOAAIAABSIABARQACAIAEAIQAEAHAHAFIAJADIAKABQAMABAIgFQAHgFAFgHQAEgIABgIIABgRIAAhSIAOAAIAABWQgBALgCALQgDAKgGAIIgHAHIgJAGQgKAEgOABQgOgBgKgEg");
	this.shape_196.setTransform(560.8,134.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_197.setTransform(543.2,137);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AAbBMIAAg3IgBgLQgBgFgCgEQgCgDgFgDQgFgCgGAAQgGAAgGACQgGACgEAEQgFAEgCAIQgCAGgBALIAAAuIgLAAIAAiXIALAAIAABLIABAAQADgHAJgGIAJgEQAFgCAFAAQAKAAAHAEQAHADAEAGQAEAGABAFIACAQIAAA3g");
	this.shape_198.setTransform(532.1,134.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AADA7QgEgCgDgDIgDgIIgBgJIAAg7IgVAAIAAgLIAVAAIAAgbIAKAAIAAAbIAbAAIAAALIgbAAIAAA7QAAAGADADQAEAEAGAAIAHgBIAHgCIAAAKIgHADIgIABQgHAAgEgCg");
	this.shape_199.setTransform(523.1,135.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgKBNIAAhRIgTAAIAAgLIATAAIAAgeQAAgJADgGQACgGAEgDQADgEAFgBIAKgCQAIAAAFADIgCAKQgEgCgHAAQgQAAAAAZIAAAZIAWAAIAAALIgWAAIAABRg");
	this.shape_200.setTransform(512.1,134);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgSAtQgJgEgHgGQgHgHgDgIQgEgJAAgLQAAgKAEgIQADgJAHgHQAHgGAJgEQAIgEAKAAQAKAAAKAEQAJAEAGAGQAHAHADAJQADAIAAAKQAAALgDAJQgDAIgHAHQgGAGgJAEQgKAEgKAAQgKAAgIgEgAgPgiQgGADgFAFQgEAFgDAHQgCAHAAAHQAAAIACAHQADAHAEAFQAFAFAGADQAIADAHAAQAIAAAHgDQAHgDAFgFQAFgFACgHQACgHABgIQgBgHgCgHQgCgHgFgFQgFgFgHgDQgHgDgIAAQgHAAgIADg");
	this.shape_201.setTransform(502.9,137);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AAWBMIgxgyIAAAyIgNAAIAAiXIANAAIAABkIAsgoIASAAIgvAoIA0Azg");
	this.shape_202.setTransform(487.8,134.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AAcAwIAAg2IgBgLQgBgFgCgEQgDgEgEgDQgFgCgHAAQgFAAgHACQgFACgFAFQgEAEgDAIQgCAGAAAKIAAAuIgMAAIAAhCIAAgGIAAgIIgBgHIAAgFIAMAAIABAKIAAAGIABAAQADgHAIgGIAJgEQAFgCAFAAQALAAAGAEQAHADAFAGQADAGABAGIACAQIAAA2g");
	this.shape_203.setTransform(476.5,136.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgRAvQgGgBgFgEQgEgDgDgFQgDgFAAgIQAAgKAFgHQAGgFAIgDQAIgDAJgBIAOgBIAOAAIAAgFQAAgGgCgFQgBgEgEgDQgIgFgLAAQgHAAgHADQgHACgGAGIgHgJQAHgGAJgDQAKgEAIAAQAJAAAGACQAHACAFAEQAKAIAAASIAAAVIAAANIAAAKIABAIIABAIIgLAAQgCgHAAgIQgFAJgIAEQgIAFgKAAIgMgCgAgBABQgHABgFACQgGADgEAEQgDAEAAAGQAAAEACADIAFAGIAHADIAHABQAJAAAGgDQAGgDAEgEQADgFACgFIABgMIAAgGIgNAAg");
	this.shape_204.setTransform(465.7,137);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgJBMIgLgEIgJgGQgEgDgCgFIgBAAIAAAQIgMAAIAAiWIAMAAIAABLIABAAQACgFAEgDIAJgGIALgDIAKgCQAKAAAJAEQAJAEAGAGQAGAGAFAJQADAIAAALQAAALgDAJQgFAIgGAHQgGAGgJAEQgJAEgKAAgAgOgGQgHADgFAEQgFAFgDAHQgDAHgBAIQABAIADAHQADAHAFAFQAFAFAHADQAHADAIAAQAHAAAHgDQAIgDAEgFQAFgFADgHQACgHAAgIQAAgIgCgHQgDgHgFgFQgEgEgIgDQgHgDgHAAQgIAAgHADg");
	this.shape_205.setTransform(454.7,134.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgFBMIAAiXIALAAIAACXg");
	this.shape_206.setTransform(440.9,134.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgRAvQgGgBgFgEQgEgDgDgFQgDgFAAgIQAAgKAFgHQAGgFAIgDQAIgDAJgBIAOgBIAOAAIAAgFQAAgGgCgFQgBgEgEgDQgIgFgLAAQgHAAgHADQgHACgGAGIgHgJQAHgGAJgDQAKgEAIAAQAJAAAGACQAHACAFAEQAKAIAAASIAAAVIAAANIAAAKIABAIIABAIIgLAAQgCgHAAgIQgFAJgIAEQgIAFgKAAIgMgCgAgBABQgHABgFACQgGADgEAEQgDAEAAAGQAAAEACADIAFAGIAHADIAHABQAJAAAGgDQAGgDAEgEQADgFACgFIABgMIAAgGIgNAAg");
	this.shape_207.setTransform(433.2,137);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgWAwIAAhCIAAgGIgBgIIgBgHIAAgFIANAAIAAAKIABAGQAEgIAGgFQAHgGAKAAIAEABIAEAAIgBANIgGgBQgHAAgGACQgFADgDAEQgEAFgCAGQgBAFAAAHIAAAyg");
	this.shape_208.setTransform(425.4,136.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AADA7QgEgCgCgDIgEgIIgCgJIAAg7IgUAAIAAgLIAUAAIAAgbIAMAAIAAAbIAaAAIAAALIgaAAIAAA7QAAAGACADQAEAEAGAAIAHgBIAHgCIABAKIgIADIgIABQgGAAgFgCg");
	this.shape_209.setTransform(418.1,135.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAcAwIAAg2IgBgLQgBgFgCgEQgDgEgEgDQgFgCgHAAQgFAAgHACQgFACgFAFQgEAEgDAIQgCAGAAAKIAAAuIgMAAIAAhCIAAgGIAAgIIgBgHIAAgFIAMAAIAAAKIABAGIAAAAQAEgHAJgGIAJgEQAEgCAFAAQALAAAHAEQAHADAEAGQADAGABAGQACAIAAAIIAAA2g");
	this.shape_210.setTransform(409.2,136.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_211.setTransform(398.2,137);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgMAtQgJgEgGgGQgHgHgDgIQgEgJABgLQgBgKAEgIQADgJAHgHQAGgGAJgEQAKgEAJAAQAKAAAJAFQAIAEAHAHIgJAIQgFgGgGgDQgHgEgHAAQgHAAgIADQgGADgFAFQgFAFgCAHQgCAHgBAHQABAIACAHQACAHAFAFQAFAFAGADQAIADAHAAQAIAAAGgEQAGgDAFgGIAJAIQgHAIgJAEQgIAEgKAAQgJAAgKgEg");
	this.shape_212.setTransform(388.3,137);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_213.setTransform(372.3,137);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAbBMIAAg3IgBgLQAAgFgDgEQgDgDgEgDQgFgCgGAAQgGAAgGACQgGACgEAEQgFAEgCAIQgCAGgBALIAAAuIgLAAIAAiXIALAAIAABLIABAAQADgHAJgGIAJgEQAFgCAFAAQALAAAGAEQAHADAEAGQAEAGABAFIACAQIAAA3g");
	this.shape_214.setTransform(361.2,134.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AADA7QgDgCgEgDIgDgIIgBgJIAAg7IgUAAIAAgLIAUAAIAAgbIAKAAIAAAbIAaAAIAAALIgaAAIAAA7QAAAGADADQAEAEAGAAIAHgBIAGgCIABAKIgHADIgIABQgHAAgEgCg");
	this.shape_215.setTransform(352.2,135.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgTAsQgKgFgFgJIAKgHQAEAHAIAEQAHAEAHAAIAIgBIAHgEQADgCACgDQABgDAAgEQAAgHgEgDQgEgDgGgCIgMgDIgNgDQgGgDgEgEQgEgFAAgJQAAgHACgFQADgFAFgDQAEgDAGgCQAFgCAFAAQAMAAAIAFQAIAEAFAJIgLAGQgDgGgFgDQgGgEgIAAIgFABIgHADQgDACgBADQgCACAAAEQAAAGAEADQAEADAGACIAMADIANAEQAGABAEAGQAEAFAAAJQAAAHgCAGQgDAFgFADQgEAEgGACQgGACgHAAQgLAAgKgFg");
	this.shape_216.setTransform(339.3,137);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgFBFIAAhcIALAAIAABcgAgGg0QgCgDAAgEQAAgEACgDQADgCADAAQAEAAADACQACADAAAEQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_217.setTransform(332.9,134.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AA6AwIAAg2IgBgLQgBgFgDgEQgCgEgFgDQgEgCgIAAQgIAAgFADQgGACgDAGQgDAEgBAGIgCAKIAAA0IgLAAIAAg3IgBgMQgBgFgCgEQgFgHgKAAQgGAAgGACQgGACgEAFQgFAEgCAIQgDAGAAAKIAAAuIgMAAIAAhCIAAgGIAAgIIgBgHIAAgFIAMAAIABAKIAAAGIABAAQADgHAJgGIAJgEQAFgCAFAAQAJABAIAFQAHAEADALQACgGAEgDQADgEAEgCQAJgFAJgBQALAAAHAEQAHADAEAGQAEAGABAGIACAQIAAA2g");
	this.shape_218.setTransform(316.7,136.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_219.setTransform(302.7,137);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AADA7QgDgCgDgDIgFgIIgBgJIAAg7IgUAAIAAgLIAUAAIAAgbIAMAAIAAAbIAaAAIAAALIgaAAIAAA7QAAAGACADQAEAEAGAAIAHgBIAHgCIABAKIgIADIgIABQgGAAgFgCg");
	this.shape_220.setTransform(293.8,135.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgTAsQgKgFgFgJIAKgHQAEAHAIAEQAHAEAHAAIAIgBIAHgEQADgCACgDQABgDAAgEQAAgHgEgDQgEgDgGgCIgMgDIgNgDQgGgDgEgEQgEgFAAgJQAAgHACgFQADgFAFgDQAEgDAGgCQAFgCAFAAQAMAAAIAFQAIAEAFAJIgLAGQgDgGgFgDQgGgEgIAAIgFABIgHADQgDACgBADQgCACAAAEQAAAGAEADQAEADAGACIAMADIANAEQAGABAEAGQAEAFAAAJQAAAHgCAGQgDAFgFADQgEAEgGACQgGACgHAAQgLAAgKgFg");
	this.shape_221.setTransform(286.1,137);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgjBGIgFgCIABgLIAFACIAGAAIAFgBIAFgEIADgEIACgGIAIgVIglhcIANAAIAeBNIAehNIAMAAIguB4QgEAJgGAFQgGAFgKAAg");
	this.shape_222.setTransform(277.4,139.4);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgXBFQgHgCgFgEQgFgEgEgGIANgIIAFAHQAEAEAEACQAIAEAKAAQAGAAAHgCQAGgCAEgDQAEgEADgFQACgFAAgGQAAgIgDgFQgDgEgFgEQgGgDgGgCIgMgEIgOgFQgHgCgFgFQgFgEgDgHQgDgHAAgKQAAgJADgHQAFgIAFgFQAHgEAIgDQAIgCAJAAQAHAAAOAEQAJAEAIAJIgLAJQgFgHgHgEQgHgDgJAAQgFAAgHABQgFACgFADQgDAEgDAFQgDAFAAAGQAAAGABAEIAFAHQAFAFAIAEIAQAFQAKADAIADQAIAEAGAIQAFAHAAAOQAAAJgDAIQgEAHgGAFQgGAFgJADQgHACgJAAQgNAAgLgFg");
	this.shape_223.setTransform(267.2,134.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_224.setTransform(250.9,137);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgEAuIgmhbIANAAIAeBOIAehOIAMAAIgkBbg");
	this.shape_225.setTransform(240.7,137);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgXAwIAAhCIAAgGIAAgIIgBgHIAAgFIAMAAIABAKIABAGQAEgIAGgFQAIgGAKAAIADABIAEAAIgCANIgEgBQgIAAgGACQgFADgDAEQgEAFgBAGQgCAFAAAHIAAAyg");
	this.shape_226.setTransform(233.4,136.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_227.setTransform(223.9,137);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgTAsQgKgFgFgJIAKgHQAEAHAIAEQAHAEAHAAIAIgBIAHgEQADgCACgDQABgDAAgEQAAgHgEgDQgEgDgGgCIgMgDIgNgDQgGgDgEgEQgEgFAAgJQAAgHACgFQADgFAFgDQAEgDAGgCQAFgCAFAAQAMAAAIAFQAIAEAFAJIgLAGQgDgGgFgDQgGgEgIAAIgFABIgHADQgDACgBADQgCACAAAEQAAAGAEADQAEADAGACIAMADIANAEQAGABAEAGQAEAFAAAJQAAAHgCAGQgDAFgFADQgEAEgGACQgGACgHAAQgLAAgKgFg");
	this.shape_228.setTransform(213.9,137);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_229.setTransform(204.3,137);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AAfBHIgnhDIgYAAIAABDIgNAAIAAiNIAlAAIAHAAIAKACIALADQAGACAFAEQAEAEADAHQADAGAAAJQAAALgDAGQgEAHgFAEQgFAEgHABIgMADIApBEgAgggHIAcAAQAJAAAHgDQAGgDAEgDQADgEACgFIABgIIgBgIQgCgEgDgEQgEgEgGgCQgHgDgJAAIgcAAg");
	this.shape_230.setTransform(193.5,134.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgFBMIAAiXIALAAIAACXg");
	this.shape_231.setTransform(179.3,134.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgRAvQgGgBgFgEQgEgDgDgFQgDgFAAgIQAAgKAFgHQAGgFAIgDQAIgDAJgBIAOgBIAOAAIAAgFQAAgGgCgFQgBgEgEgDQgIgFgLAAQgHAAgHADQgHACgGAGIgHgJQAHgGAJgDQAKgEAIAAQAJAAAGACQAHACAFAEQAKAIAAASIAAAVIAAANIAAAKIABAIIABAIIgLAAQgCgHAAgIQgFAJgIAEQgIAFgKAAIgMgCgAgBABQgHABgFACQgGADgEAEQgDAEAAAGQAAAEACADIAFAGIAHADIAHABQAJAAAGgDQAGgDAEgEQADgFACgFIABgMIAAgGIgNAAg");
	this.shape_232.setTransform(171.6,137);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgXAwIAAhCIAAgGIAAgIIgBgHIAAgFIANAAIAAAKIABAGQAEgIAGgFQAHgGAKAAIAEABIAEAAIgBANIgGgBQgHAAgGACQgFADgDAEQgEAFgCAGQgBAFAAAHIAAAyg");
	this.shape_233.setTransform(163.9,136.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_234.setTransform(154.4,137);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgTBJQgJgEgGgGQgHgHgDgIQgEgJAAgLQAAgLAEgIQADgJAHgGQAGgGAJgEQAJgEAKAAIAKACIAKADIAJAGQAFADADAFIAAAAIAAhLIAMAAIAACWIgMAAIAAgQIAAAAIgIAIIgJAGIgKAEIgKABQgKAAgJgEgAgPgGQgHADgEAEQgFAFgDAHQgCAHAAAIQAAAIACAHQADAHAFAFQAEAFAHADQAHADAIAAQAHAAAIgDQAGgDAGgFQAFgFADgHQADgHAAgIQAAgIgDgHQgDgHgFgFQgGgEgGgDQgIgDgHAAQgIAAgHADg");
	this.shape_235.setTransform(142.6,134.2);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_236.setTransform(131.1,137);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgpBHIAAiNIBTAAIAAAMIhGAAIAAAzIBBAAIAAALIhBAAIAABDg");
	this.shape_237.setTransform(120.6,134.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgQAtQgJgEgGgGQgGgHgEgIQgDgJAAgLQAAgKADgIQAEgJAGgHQAGgGAJgEQAIgEAJAAQALAAAIAEQAIAEAGAGQAFAGADAIQADAIAAAIIAAAHIhNAAIACAKQABAGAEAFQAEAGAHAEQAGAEAKAAQAJAAAJgFQAIgEAFgIIAJAIQgHAKgKAFQgLAFgMAAQgKAAgIgEgAAhgHQAAgGgDgFQgCgGgFgEQgEgEgGgCQgGgDgGAAQgJAAgHAEQgGAEgEAFQgEAGgBAFIgCAGIBBAAIAAAAg");
	this.shape_238.setTransform(103.7,137);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AAcBMIAAg3IgBgLQgBgFgDgEQgDgDgEgDQgEgCgIAAQgFAAgGACQgGACgEAEQgEAEgDAIQgDAGABALIAAAuIgNAAIAAiXIANAAIAABLIAAAAQAEgHAIgGIAJgEQAFgCAEAAQALAAAHAEQAHADAEAGQADAGACAFIABAQIAAA3g");
	this.shape_239.setTransform(92.6,134.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AgGBHIAAiBIgwAAIAAgMIBtAAIAAAMIgwAAIAACBg");
	this.shape_240.setTransform(81.3,134.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgEAEQAAAAAAgBQgBAAAAAAQAAgBAAgBQAAAAAAgBIACgDQABAAAAgBQABAAAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAABABAAQABAAAAAAQAAABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAIgCAEQgBABAAAAQgBAAAAAAQgBABgBAAQAAAAAAAAQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBg");
	this.shape_241.setTransform(338.5,87.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgSAdIAGgoIABgDIAAgEIAAgFIAAgDIAIAAIAAAGIgBAEQADgFAFgDQAEgDAGAAIAEAAIgCAHIgCAAQgFAAgDACIgGADQgDADgBAEIgCAIIgEAdg");
	this.shape_242.setTransform(336.9,84.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgOAbQgEgCgEgEQgCgEgCgFQgBgGABgGQAAgFADgGIAHgJQAFgEAFgCQAFgCAFAAQAHAAAFACQAEACADAEIAEAIQABAFgBAFIAAAEIguAAIAAAGIACAHQACADAEACQADADAHAAQAFAAAFgDQAGgDADgEIAEAEQgFAHgGACQgGADgHAAQgGAAgGgCgAgGgTQgEACgDADIgEAGIgBAEIAmAAIgBgHIgCgFIgHgEQgCgCgFAAQgEAAgFADg");
	this.shape_243.setTransform(331.2,84.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgHAuIgGgDIgFgDIgDgFIgBAAIgBAKIgHAAIAMhaIAIAAIgHAtIABAAIAEgFIAGgDIAGgCIAGgBQAHAAAFACQAFACADAEQADADACAFQABAFgBAHQgBAGgCAFQgDAGgFADQgEAEgGADQgFACgGAAgAgDgDQgEABgEADIgGAHQgCAEgBAFQgBAEACAFQABAEACADQADADAEABQAEACAFAAQAEAAAEgCQAFgBADgDIAFgHQADgFAAgEQABgFgBgEQgBgEgCgDQgDgDgEgBQgDgCgFAAQgFAAgEACg");
	this.shape_244.setTransform(324,83.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAgAdIAEggIABgGIgCgGQgBgDgCgCQgDgBgEAAQgFAAgEACIgFAEIgEAHIgCAGIgEAfIgGAAIAEghIABgHIgCgFQAAgBAAAAQAAgBgBAAQAAgBgBAAQAAAAgBgBQgCgBgDAAQgEAAgDABIgHAFQgDADgCAEQgCAEgBAFIgEAcIgHAAIAFgoIABgDIAAgEIABgFIAAgDIAHAAIAAAGIgBAEIABAAIADgFIAFgDIAGgCIAGgBQAGAAADADQAEACABAHIAEgGIAFgDQAGgDAGAAQAGAAAEACQAEACACADQACADAAAEQAAAFgBAEIgEAhg");
	this.shape_245.setTransform(315.3,84.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgRAaQgEgCgCgDQgCgEAAgDIAAgJIAFghIAHAAIgEAgIgBAHQAAADACACQABADACACQADABAEAAIAHgBIAGgFIAFgHQADgEAAgFIAEgcIAHAAIgFAoIgBADIAAAFIAAAEIgBADIgHAAIABgGIAAgEIgEAFIgFADIgEACIgHACQgGgBgEgCg");
	this.shape_246.setTransform(307,85);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AAOAdIAFggIAAgGIgBgGQgBgDgDgCQgCgBgFAAQgEAAgDABIgGAFQgDADgCAEQgCAEgBAFIgEAcIgHAAIAFgoIABgDIAAgEIABgFIAAgDIAHAAIAAAGIgBAEIABAAIADgFIAFgDIAFgCIAGgBQAHAAAEACQADACACADQACADAAAEQABAFgBAEIgFAhg");
	this.shape_247.setTransform(300.2,84.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AAOAtIAFggIAAgHIgBgGQgBgBgDgCQgCgBgFAAQgEAAgDABIgGADQgDADgCAFQgCAEgBAGIgEAbIgHAAIANhZIAHAAIgHAsIABAAIADgEIAFgDIAFgDIAGgBQAHAAAEACQADACACAEQACADAAADQABAFgBAEIgFAhg");
	this.shape_248.setTransform(290.4,83.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgMAbQgFgCgDgEQgEgEgBgFQgBgGABgGQAAgFADgGQADgFAFgEQAEgEAGgCQAEgCAHAAQAGAAAFACQAFADADAEIgGAFIgGgGQgEgCgEAAQgFAAgDACQgFACgDADIgFAHQgDAEAAAEQgBAFABAEQABAEACADQADADAEACQADACAFAAQAEAAAEgCIAHgGIAFAFQgEAFgGACQgFACgFAAQgHAAgFgCg");
	this.shape_249.setTransform(284.8,84.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgNAcIgGgDQgDgCgBgDQgBgDAAgEQABgHAEgDQAEgDAFgCQAFgCAFAAIAJgBIAIAAIABgDQAAgEgBgCQAAgDgCgCQgEgDgHAAIgIACQgFABgEAEIgDgFQAEgEAGgCQAGgCAFAAQAKAAAFAFQADACABAEQABAEgBAFIgCAMIgBAIIAAAGIgBAFIAAAFIgHAAIAAgFIABgEQgEAFgFADQgFACgGAAIgHgBgAAAABIgHACIgGADQgDADAAADQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIADACIAFABQAFAAADgCIAHgEQADgDABgDIACgHIAAgEIgIAAg");
	this.shape_250.setTransform(278.3,84.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgOAbQgFgCgDgEQgDgEgBgFQgBgGABgGQAAgFADgGIAIgJQAEgEAFgCQAGgCAEAAQAHAAAEACQAFACADAEIAEAIQABAFgBAFIAAAEIguAAIAAAGIACAHQACADAEACQAEADAGAAQAEAAAGgDQAGgDADgEIAEAEQgEAHgHACQgHADgGAAQgHAAgFgCgAgFgTQgFACgDADIgEAGIgBAEIAmAAIAAgHIgDgFIgGgEQgEgCgEAAQgEAAgEADg");
	this.shape_251.setTransform(272,84.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgRAdIAFgoIAAgDIABgEIABgFIAAgDIAHAAIgBAGIAAAEQAEgFADgDQAFgDAGAAIAFAAIgCAHIgDAAQgFAAgEACIgFADQgCADgCAEIgCAIIgEAdg");
	this.shape_252.setTransform(264,84.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgNAbQgFgCgEgEQgCgEgCgFQgBgGABgGQABgFADgGIAHgJQAEgEAFgCQAGgCAEAAQAHAAAEACQAFACADAEIAEAIQABAFgBAFIgBAEIgtAAIAAAGIACAHQACADAEACQADADAHAAQAFAAAFgDQAFgDAEgEIAEAEQgEAHgHACQgHADgGAAQgHAAgEgCgAgFgTQgFACgDADIgEAGIgCAEIAnAAIAAgHIgEgFIgFgEQgEgCgDAAQgGAAgDADg");
	this.shape_253.setTransform(258.3,84.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgKAcIgPg3IAIAAIAMAvIAYgvIAHAAIgdA3g");
	this.shape_254.setTransform(252.6,84.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgPAbQgFgCgDgEQgDgEgBgFQgCgGABgGQAAgFADgGQAEgFAEgEQAEgEAGgCQAGgCAFAAQAHAAAFACQAEACAEAEQADAEABAFQACAGgBAFQgBAGgDAGQgCAFgFAEQgFAEgFACQgFACgGAAQgGAAgGgCgAgFgUQgFACgDADIgFAHQgDAEAAAEQAAAFABAEQAAAEACADQADADAEACQAEACAFAAQAEAAAEgCQAEgCAEgDQADgDACgEIADgJQABgEgBgEIgEgHQgCgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_255.setTransform(245.9,84.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgRAdIAFgoIABgDIAAgEIABgFIAAgDIAHAAIAAAGIgBAEQADgFAEgDQAFgDAGAAIAEAAIgBAHIgDAAQgFAAgDACIgGADQgCADgCAEIgCAIIgEAdg");
	this.shape_256.setTransform(237.7,84.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgPAbQgEgCgEgEQgDgEgBgFQgCgGABgGQAAgFADgGQADgFAFgEQAFgEAFgCQAFgCAGAAQAGAAAGACQAFACADAEQADAEABAFQACAGgBAFQgBAGgCAGQgDAFgFAEQgEAEgGACQgGACgFAAQgGAAgGgCgAgFgUQgFACgDADIgFAHQgDAEAAAEQgBAFACAEQAAAEADADQACADAEACQADACAGAAQAEAAAEgCQAEgCADgDQAEgDACgEIADgJQAAgEgBgEIgCgHQgDgDgEgCQgDgCgGAAQgEAAgEACg");
	this.shape_257.setTransform(231.7,84.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgOAaQgGgCgCgGIAHgEQACAEAEACQAEADAFAAIADgBIAFgCIADgDIACgEQAAgDgBgCIgDgDIgFgCIgFgBIgGgCIgEgBIgEgFQgBgCABgEQABgEABgDIAGgFIAGgDIAGgBQAHAAAFACQAEADACAFIgHAEQgCgEgCgCQgDgCgFAAIgEABIgDACIgDACIgCAEQgBAEADACQACACAEABIAGABIAHADQAEAAACADQACADgBAGQAAAEgCAEIgGAFQgCACgEABIgHABQgHAAgGgDg");
	this.shape_258.setTransform(225.4,84.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgRAdIAFgoIAAgDIABgEIAAgFIAAgDIAIAAIgBAGIAAAEQAEgFADgDQAFgDAGAAIAFAAIgDAHIgCAAQgFAAgEACIgFADQgDADgBAEIgCAIIgEAdg");
	this.shape_259.setTransform(221.5,84.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgRAaQgEgCgCgDQgCgEAAgDIAAgJIAFghIAHAAIgEAgIgBAHQAAADACACQABADACACQADABAEAAIAHgBIAGgFIAFgHQADgEAAgFIAEgcIAHAAIgFAoIgBADIAAAFIAAAEIgBADIgHAAIABgGIAAgEIgEAFIgFADIgEACIgHACQgGgBgEgCg");
	this.shape_260.setTransform(215.8,85);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgMAbQgFgCgDgEQgEgEgBgFQgBgGABgGQAAgFADgGQADgFAFgEQAEgEAGgCQAEgCAHAAQAGAAAFACQAFADADAEIgGAFIgGgGQgEgCgEAAQgFAAgDACQgFACgDADIgFAHQgDAEAAAEQgBAFABAEQABAEACADQADADAEACQADACAFAAQAEAAAEgCIAHgGIAFAFQgEAFgGACQgFACgFAAQgHAAgFgCg");
	this.shape_261.setTransform(210,84.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgSAdIAGgoIAAgDIABgEIAAgFIAAgDIAIAAIgBAGIAAAEQAEgFAEgDQAEgDAGAAIAFAAIgDAHIgCAAQgFAAgEACIgFADQgCADgCAEIgCAIIgEAdg");
	this.shape_262.setTransform(202.1,84.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgRAaQgEgCgCgDQgCgEAAgDIAAgJIAFghIAHAAIgEAgIgBAHQAAADACACQABADACACQADABAEAAIAHgBIAGgFIAFgHQADgEAAgFIAEgcIAHAAIgFAoIgBADIAAAFIAAAEIgBADIgHAAIABgGIAAgEIgEAFIgFADIgEACIgHACQgGgBgEgCg");
	this.shape_263.setTransform(196.4,85);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgOAbQgFgCgEgEQgEgEgBgFQgBgGABgGQAAgFAEgGQADgFAEgEQAEgEAGgCQAGgCAFAAQAHAAAEACQAFACAEAEQADAEACAFQABAGgBAFQgBAGgDAGQgDAFgEAEQgFAEgFACQgGACgFAAQgHAAgEgCgAgFgUQgEACgEADIgFAHQgCAEgBAEQAAAFAAAEQABAEACADQADADAEACQAEACAEAAQAFAAAEgCQAFgCADgDQADgDACgEIADgJQAAgEAAgEIgDgHQgDgDgEgCQgDgCgGAAQgEAAgEACg");
	this.shape_264.setTransform(189.5,84.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgbAqIgDgBIABgHIADABIAEABIADgBIADgCIACgDIACgEIAHgNIgPg2IAIAAIAMAtIAYgtIAHAAIgmBHQgCAGgEADQgEADgGAAg");
	this.shape_265.setTransform(183,86.3);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgNAbQgGgCgCgEQgDgEgCgFQgBgGABgGQAAgFAEgGIAGgJQAFgEAFgCQAFgCAGAAQAGAAAFACQAEACADAEIAEAIQABAFgBAFIgBAEIgtAAIAAAGIACAHQACADAEACQAEADAGAAQAEAAAGgDQAGgDADgEIAFAEQgGAHgGACQgGADgHAAQgGAAgFgCgAgFgTQgFACgCADIgFAGIgCAEIAnAAQABgDgCgEIgDgFIgGgEQgDgCgDAAQgGAAgDADg");
	this.shape_266.setTransform(174,84.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgMAbQgFgCgDgEQgEgEgBgFQgBgGABgGQAAgFADgGQADgFAFgEQAEgEAGgCQAEgCAHAAQAGAAAFACQAFADADAEIgGAFIgGgGQgEgCgEAAQgFAAgDACQgFACgDADIgFAHQgDAEAAAEQgBAFABAEQABAEACADQADADAEACQADACAFAAQAEAAAEgCIAHgGIAFAFQgEAFgGACQgFACgFAAQgHAAgFgCg");
	this.shape_267.setTransform(168.1,84.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgNAcIgGgDQgDgCgBgDQgBgDAAgEQABgHAEgDQAEgDAFgCQAFgCAFAAIAJgBIAIAAIABgDQAAgEgBgCQAAgDgCgCQgEgDgHAAIgIACQgFABgEAEIgDgFQAEgEAGgCQAGgCAFAAQAKAAAFAFQADACABAEQABAEgBAFIgCAMIgBAIIAAAGIgBAFIAAAFIgHAAIAAgFIABgEQgEAFgFADQgFACgGAAIgHgBgAAAABIgHACIgGADQgDADAAADQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAIADACIAFABQAFAAADgCIAHgEQADgDABgDIACgHIAAgEIgIAAg");
	this.shape_268.setTransform(161.6,84.9);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgJAtIAMhZIAHAAIgMBZg");
	this.shape_269.setTransform(157.5,83.1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgdArIAMhVIAXAAIAJACQAFABAEACQAEADABAEQACAFgBAGQAAAFgDAFQgDAEgEADIgIADIgKABIgSAAIgFApgAgPgEIARAAIAHgBQAEgBACgCQADgBACgDIADgHQAAgEgBgDQgBgDgDgBQgCgCgDgCIgHgBIgQAAg");
	this.shape_270.setTransform(152.7,83.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgDAeIgEgDIgCgDIgBgFIABgEIACgDIAEgDIADgBIAEABIAEADIACADIABAEIgBAFIgCADIgEADIgEAAIgDAAgAgDgIIgEgCIgCgEIgBgEIABgEIACgEIAEgCIADgBIAEABIAEACIACAEIABAEIgBAEIgCAEIgEACIgEABIgDgBg");
	this.shape_271.setTransform(143.2,84.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgNAdQgHgCgEgEIALgMIAGAEQADACAEAAIAEgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIgFgCIgHgBIgIgDQgDgCgCgCQgCgDAAgGQAAgFACgEQACgDADgDQAEgCAEgBIAIgCQAGAAAGACIAFADIAFADIgLALQgEgFgHAAIgDABQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIAEACIAIACIAHACIAGAFQACADAAAFQAAAGgDAEQgCADgEADIgIADIgJABQgGAAgGgCg");
	this.shape_272.setTransform(138.7,84.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AAKAeIAAgdIAAgEIgBgFQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgCgCgDAAQgDAAgCACIgDACIgCAGIAAAEIAAAdIgSAAIAAg5IARAAIAAAIIABAAIACgEIADgDIAFgCIAFgBQAHAAAFADQAEACACADQACAEABAFIABALIAAAfg");
	this.shape_273.setTransform(132.5,84.7);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgMAdQgGgDgEgEQgEgEgDgFQgCgGgBgHQABgGACgGQADgFAEgEQAEgEAGgCQAHgDAFAAQAHAAAGADQAGACAEAEQAEAEADAFQACAGAAAGQAAAHgCAGQgDAFgEAEQgEAEgGADQgGACgHAAQgFAAgHgCgAgFgNIgEADQgFAFAAAFQAAAHAFAEQAEAEAFAAQAHAAADgEQAEgEAAgHQAAgFgEgFQgBgCgDgBIgGgBIgFABg");
	this.shape_274.setTransform(125.4,84.7);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgIAsIAAg6IARAAIAAA6gAgHgZQgCgDAAgEQAAgEACgDQAEgEADAAQAFAAADAEQACADAAAEQAAAEgCADQgDAEgFAAQgDAAgEgEg");
	this.shape_275.setTransform(120.2,83.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AACAlIgGgDQgDgCgBgDQgCgEAAgEIAAgbIgMAAIAAgOIAMAAIAAgSIARAAIAAASIAQAAIAAAOIgQAAIAAATIAAAEIABAEIADACIAFABIADgBIAEgBIAAAOIgGACIgHABIgIgCg");
	this.shape_276.setTransform(116.1,84);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgFAdQgHgDgEgEQgEgEgDgFQgCgGAAgHQAAgGACgGQADgFAEgEQAEgEAHgCQAFgDAGAAQAFAAAGACQAFACAEAEIgLANIgEgDIgFgCIgGABQgCABgCACQgDAFAAAFQAAAHADAEQAEAEAGAAIAFgBIAEgEIALANIgEAEIgFACQgGACgFAAQgGAAgFgCg");
	this.shape_277.setTransform(111.2,84.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgRAcQgEgDgCgDQgDgEgBgFIAAgLIAAgfIASAAIAAAdIAAAEIABAFIADADQABACAEAAIAFgBIADgDQABgDAAgDIABgEIAAgdIASAAIAAA6IgSAAIAAgJIgCAEIgDADIgFACIgFABQgHAAgFgCg");
	this.shape_278.setTransform(104.7,84.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgTAeIAAg5IASAAIAAAJQABgFAFgDQADgDAHAAIACABIADAAIAAARIgDgBIgFgBQgEAAgDACQgEABgBACIgBAHIAAAHIAAAYg");
	this.shape_279.setTransform(99.1,84.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AACAlIgGgDQgDgCgBgDQgCgEAAgEIAAgbIgMAAIAAgOIAMAAIAAgSIARAAIAAASIAQAAIAAAOIgQAAIAAATIAAAEIABAEIADACIAFABIADgBIAEgBIAAAOIgGACIgHABIgIgCg");
	this.shape_280.setTransform(93.8,84);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgNAdQgHgCgEgEIALgMIAGAEQADACAEAAIAEgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIgFgCIgHgBIgIgDQgDgCgCgCQgCgDAAgGQAAgFACgEQACgDADgDQAEgCAEgBIAIgCQAGAAAGACIAFADIAFADIgLALQgEgFgHAAIgDABQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIAEACIAIACIAHACIAGAFQACADAAAFQAAAGgDAEQgCADgEADIgIADIgJABQgGAAgGgCg");
	this.shape_281.setTransform(88.7,84.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAKAeIAAgdIAAgEIgBgFQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgCgCgDAAQgDAAgCACIgDACIgCAGIAAAEIAAAdIgSAAIAAg5IARAAIAAAIIABAAIACgEIADgDIAFgCIAFgBQAHAAAFADQAEACACADQACAEABAFIABALIAAAfg");
	this.shape_282.setTransform(82.6,84.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgIArIAAhVIARAAIAABVg");
	this.shape_283.setTransform(77.3,83.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// BUTTONS
	this.begin_btn = new lib.begin_btn();
	this.begin_btn.parent = this;
	this.begin_btn.setTransform(796.5,460,1,1,0,0,0,87.5,25);
	new cjs.ButtonHelper(this.begin_btn, 0, 1, 2, false, new lib.begin_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.begin_btn).to({_off:true},1).wait(1));

	// Seal_of_the_United_States_Federal_Reserve_System.svg
	this.instance_6 = new lib.Path_0();
	this.instance_6.parent = this;
	this.instance_6.setTransform(48.4,71.7,0.418,0.417,0,0,0,21.1,8.1);
	this.instance_6.alpha = 0.5;

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AidGBQgGgHgFgKIgIgRQgNgdgFgpQgFg0gFgiIgFhKIgNheIAIggQAJggAEgFQAGgJARgCIAEAAQAKAAAJAFQAJAEACAIQABAGgRA1IAJAwQAHApABgBQABADANh9IgElWQgBgPALgLQALgLAPgBQAQAAALALQALALAAAPIAEFWQAAAJAIAEIAEACIAGABQAFAAAEgDQAEgDACgDQACgDAAgFIgCh0QAAgOAKgJQAJgKANAAQAOgBAKAKQAKAKAAAOIACCKQAAAJAHAFQAGADAEAAQAGAAADgDQAIgFAAgJIgBhaQAAgOAKgJQAJgKAOgBQAOAAAKAKQAKAJAAAOIABBwQAAALAKAFIAHACIACgBQAMgBADgMIABgEIgBhbQAAgIAGgGQAFgGAIAAQAIAAAGAFQAGAGAAAIIABA4IgBAAIABBNIABACIABBUIgBAGQAAAMgCAUIgDAUQgNBLgXA4IgIASQgEAJgHAIQgFAHgGAAIkrAEQgEgBgFgGg");
	this.shape_284.setTransform(48.1,52.2,0.418,0.417);

	this.instance_7 = new lib.Path();
	this.instance_7.parent = this;
	this.instance_7.setTransform(44.4,36.1,0.418,0.417,0,0,0,7,5.4);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(42.6,30.3,0.418,0.417,0,0,0,2.9,0.2);
	this.instance_8.alpha = 0.5;

	this.instance_9 = new lib.Path_2_0();
	this.instance_9.parent = this;
	this.instance_9.setTransform(42.1,38.6,0.418,0.417,0,0,0,20.1,19.9);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.Path_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(43.5,38.6,0.418,0.417,0,0,0,37.5,19.9);
	this.instance_10.alpha = 0.398;

	this.instance_11 = new lib.CompoundPath();
	this.instance_11.parent = this;
	this.instance_11.setTransform(43.1,39,0.418,0.417,0,0,0,51.7,33.4);
	this.instance_11.alpha = 0.5;

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AARAyIAAgwIAAgIIgCgIQgCgEgDgCQgDgCgGAAQgEAAgEACQgEACgCADIgCAIIgBAIIAAAxIgeAAIAAhgIAdAAIAAANIABAAIAEgGIAGgFIAHgDIAKgCQALAAAHAEQAHADAEAGQAEAHACAIIABASIAAA1g");
	this.shape_285.setTransform(305.8,26.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgUAwQgKgEgIgHQgGgGgFgKQgEgJAAgMQAAgLAEgJQAFgKAGgGQAIgHAKgEQAKgDAKAAQALAAAKADQAKAEAIAHQAGAGAFAKQAEAJAAALQAAAMgEAJQgFAKgGAGQgIAHgKAEQgKADgLAAQgKAAgKgDgAgJgWQgEACgDADQgHAHAAAKQAAALAHAHQAFAGALAAQALAAAHgGQAGgHAAgLQAAgKgGgHQgDgDgFgCQgEgCgGABQgFgBgEACg");
	this.shape_286.setTransform(294,26.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgOBIIAAhgIAdAAIAABggAgLgqQgGgFAAgHQAAgIAGgFQAFgEAGAAQAHAAAFAEQAGAFAAAIQAAAHgGAFQgFAFgHAAQgGAAgFgFg");
	this.shape_287.setTransform(285.3,23.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AADA/QgFgCgGgEQgEgDgDgGQgDgFAAgIIAAgtIgTAAIAAgYIATAAIAAgdIAeAAIAAAdIAaAAIAAAYIgaAAIAAAfIAAAHQAAAEACACQABACADACIAHABIAHgBQAEAAACgCIAAAZIgLADIgKAAQgIAAgGgBg");
	this.shape_288.setTransform(278.5,24.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgKAwQgKgEgHgHQgIgGgEgKQgEgJAAgMQAAgLAEgJQAEgKAIgGQAHgHAKgEQAKgDAKAAQAIAAAKADQAJACAHAIIgTAVQgDgEgEgCQgEgBgEAAQgGgBgEACQgEACgDADQgGAHAAAKQAAALAGAHQAGAGALAAQAFAAADgCIAHgFIATAVIgHAGIgJAEQgKADgIAAQgKAAgKgDg");
	this.shape_289.setTransform(270.1,26.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgYAxQgHgCgEgEQgFgEgDgFQgCgGAAgHQAAgIACgHQADgFAGgDQAFgDAHgDIAOgDIANgBIAOgBQAAgHgGgFQgFgEgIgBQgGAAgHAEQgGADgFAFIgQgQIAJgHIALgFQALgEALAAQANAAAJADQAJADAFAHQAEAGADAJQACAKgBAMIAAAwIgbAAIAAgLIAAAAQgFAHgJAEQgHADgJAAQgHAAgGgCgAgGAIQgFABgDADQgDADAAAFQAAAGAEACQAGACAEAAIAIAAIAHgEQADgCACgDQACgEAAgFIAAgGIgIAAIgIAAg");
	this.shape_290.setTransform(259.5,26.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAEgJAHgEQAGgFAKAAIAFAAIAFABIAAAcIgGgCIgHAAQgIAAgFACQgFACgDAFQgCAEAAAGIgBAMIAAApg");
	this.shape_291.setTransform(250.6,26.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgQAwQgKgEgHgHQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGABQgGACgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgIgFgFQgFgGgIAAQgEAAgEACg");
	this.shape_292.setTransform(240.4,26.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AADA/QgFgCgFgEQgFgDgDgGQgCgFAAgIIAAgtIgUAAIAAgYIAUAAIAAgdIAdAAIAAAdIAaAAIAAAYIgaAAIAAAfIAAAHQAAAEABACQACACADACIAHABIAHgBQAEAAACgCIAAAZIgKADIgLAAQgIAAgGgBg");
	this.shape_293.setTransform(230.5,24.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AARAyIAAgwIAAgIIgCgIQgCgEgDgCQgDgCgGAAQgEAAgEACQgEACgCADIgCAIIgBAIIAAAxIgeAAIAAhgIAdAAIAAANIABAAIAEgGIAGgFIAHgDIAKgCQALAAAHAEQAHADAEAGQAEAHACAIIABASIAAA1g");
	this.shape_294.setTransform(220.9,26.1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgOBHIAAiNIAeAAIAACNg");
	this.shape_295.setTransform(212.2,24);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgYAxQgGgCgGgEQgEgEgDgFQgCgGgBgHQAAgIAEgHQADgFAFgDQAFgDAHgDIAOgDIANgBIAOgBQAAgHgFgFQgHgEgHgBQgHAAgFAEQgHADgEAFIgQgQIAJgHIAKgFQALgEAMAAQANAAAIADQAIADAGAHQAEAGACAJQACAKABAMIAAAwIgcAAIAAgLIgBAAQgEAHgJAEQgHADgJAAQgHAAgGgCgAgFAIQgGABgCADQgEADAAAFQAAAGAFACQAFACAFAAIAHAAIAHgEQADgCACgDQACgEAAgFIAAgGIgHAAIgJAAg");
	this.shape_296.setTransform(197.9,26.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgOBIIAAhgIAdAAIAABggAgLgqQgGgFAAgHQAAgIAGgFQAFgEAGAAQAHAAAGAEQAEAFAAAIQAAAHgEAFQgGAFgHAAQgGAAgFgFg");
	this.shape_297.setTransform(190.1,23.8);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgYBJQgIgEgHgGQgGgHgDgJQgEgKAAgLQAAgKADgJQADgIAGgIQAGgHAIgEQAIgEALAAQAIAAAIADQAIACAFAHIABAAIAAhAIAeAAIAACWIgcAAIAAgNIAAAAIgFAGIgHAFIgIADQgFACgEAAQgLAAgJgEgAgIADQgEABgDAEQgHAHAAALQAAALAHAGQAGAHAKAAQAMAAAGgHQAGgGAAgLQAAgLgGgHQgDgEgFgBQgEgCgGAAQgEAAgFACg");
	this.shape_298.setTransform(180.8,23.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgQAwQgKgEgHgHQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGABQgGACgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgIgFgFQgFgGgIAAQgEAAgEACg");
	this.shape_299.setTransform(169.1,26.2);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AAwBHIAAhsIglBsIgXAAIgkhsIAAAAIAABsIgfAAIAAiNIAvAAIAgBcIAAAAIAhhcIAvAAIAACNg");
	this.shape_300.setTransform(154,24);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgMBkIAAjHIAZAAIAADHg");
	this.shape_301.setTransform(136.5,26.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AARAyIAAgwIAAgIIgCgIQgCgEgDgCQgDgCgGAAQgEAAgEACQgEACgCADIgCAIIgBAIIAAAxIgeAAIAAhgIAdAAIAAANIABAAIAEgGIAGgFIAHgDIAKgCQALAAAHAEQAHADAEAGQAEAHACAIIABASIAAA1g");
	this.shape_302.setTransform(122.6,26.1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAEgJAHgEQAGgFAKAAIAFAAIAFABIAAAcIgGgCIgHAAQgIAAgFACQgFACgDAFQgCAEAAAGIgBAMIAAApg");
	this.shape_303.setTransform(112.9,26.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgYAxQgGgCgGgEQgEgEgDgFQgCgGgBgHQAAgIAEgHQADgFAFgDQAFgDAHgDIAOgDIAOgBIANgBQAAgHgFgFQgHgEgHgBQgHAAgFAEQgHADgEAFIgQgQIAJgHIAKgFQALgEAMAAQANAAAIADQAIADAGAHQAEAGACAJQACAKABAMIAAAwIgcAAIAAgLIgBAAQgEAHgIAEQgIADgJAAQgHAAgGgCgAgFAIQgGABgCADQgEADAAAFQAAAGAFACQAFACAEAAIAIAAIAHgEQADgCACgDQACgEAAgFIAAgGIgHAAIgJAAg");
	this.shape_304.setTransform(103,26.2);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgQAwQgKgEgHgHQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGABQgGACgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgIgFgFQgFgGgIAAQgEAAgEACg");
	this.shape_305.setTransform(92,26.2);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgrBHIAAiNIAfAAIAABwIA5AAIAAAdg");
	this.shape_306.setTransform(81.6,24);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AAvAyIAAg4QAAgHgDgFQgEgEgHAAQgFAAgEABQgDACgCADIgDAHIgBAIIAAAzIgdAAIAAgzIAAgGIgBgHIgFgGQgCgCgFAAQgGAAgEACQgDACgCADIgDAIIAAAIIAAAxIgfAAIAAhgIAdAAIAAANIABAAIAEgGIAGgFIAIgDIAKgCQAKAAAIAEQAHAFAEAJQAFgKAIgEQAHgEALAAQAKAAAGADQAHAEAEAFQAEAGABAIQACAIAAAIIAAA5g");
	this.shape_307.setTransform(453.4,58.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgQAwQgKgFgHgGQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGACQgGABgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgHgFgGQgFgFgIgBQgEABgEABg");
	this.shape_308.setTransform(438.9,58.5);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AADA/QgFgCgGgEQgEgDgDgGQgCgFgBgIIAAgtIgTAAIAAgYIATAAIAAgdIAdAAIAAAdIAbAAIAAAYIgbAAIAAAfIABAHQAAAEACACQABACADACIAHABIAHgBQAEAAACgCIAAAZIgLADIgKAAQgIAAgGgBg");
	this.shape_309.setTransform(429,57.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgXAwQgKgDgIgHIASgVQAEAGAGACQAFADAGAAQAFAAAEgCQAEgBAAgEQAAgEgDgCIgJgDIgMgCQgGgCgGgDQgGgDgDgFQgFgFAAgKQAAgIAEgGQADgGAHgEQAFgFAHgBQAIgCAHAAQAJAAAKACIAJAFIAIAFIgTATQgGgJgLAAQgDAAgEADQgDACAAADQAAAFADABIAJADIAMADQAGACAGACQAGADAEAFQADAFAAAKQABAKgFAFQgEAHgGADQgHAEgIACIgPABQgJAAgLgDg");
	this.shape_310.setTransform(420.5,58.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgzBFIADgZQAHADAIAAQAEAAADgBQAEgBACgCIADgFIAEgHIABgFIgqhiIAhAAIAYBAIAAAAIAVhAIAfAAIgsBxIgFANQgDAGgEAEQgEAEgHACQgHACgKAAQgMABgKgEg");
	this.shape_311.setTransform(410.3,60.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgcBGQgGgCgGgDIgKgIIAWgZQAFAHAHADQAHAEAIAAIAHgBIAHgDQADgCACgDQACgCAAgEQAAgHgFgDQgFgEgHgDIgQgFQgIgCgIgFQgHgDgFgHIgDgJIgCgKQAAgMAFgIQAFgJAHgGQAHgGAKgDQAKgCAJAAQAMAAAMADQALADAJAIIgVAYQgEgFgHgCQgGgDgGAAIgHABIgGADQgDABgCADQgCADAAAEQAAAGAFAEQAEADAHADIAQAEQAHADAIAEQAHAEAFAHQAFAHAAANIgBALQgBAFgCAEQgFAJgIAGQgHAGgJADQgKACgLAAQgNAAgMgEg");
	this.shape_312.setTransform(398.8,56.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgQAwQgKgFgHgGQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGACQgGABgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgHgFgGQgFgFgIgBQgEABgEABg");
	this.shape_313.setTransform(381.7,58.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgOAxIgohhIAgAAIAYBBIAAAAIAXhBIAeAAIgmBhg");
	this.shape_314.setTransform(370.4,58.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAEgJAHgEQAGgFAKAAIAFAAIAFABIAAAcIgGgCIgHAAQgIAAgFACQgFACgDAFQgCAEAAAGIgBAMIAAApg");
	this.shape_315.setTransform(361.2,58.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgQAwQgKgFgHgGQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGACQgGABgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgHgFgGQgFgFgIgBQgEABgEABg");
	this.shape_316.setTransform(351,58.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgXAwQgKgDgIgHIASgVQAFAGAFACQAFADAHAAQAEAAAEgCQAFgBgBgEQAAgEgDgCIgJgDIgMgCQgGgCgGgDQgGgDgEgFQgDgFAAgKQgBgIAEgGQAEgGAFgEQAGgFAIgBQAHgCAGAAQAKAAAKACIAJAFIAHAFIgSATQgHgJgLAAQgCAAgEADQgEACAAADQAAAFAEABIAJADIAMADQAGACAGACQAGADADAFQAFAFAAAKQAAAKgFAFQgEAHgGADQgGAEgJACIgOABQgKAAgLgDg");
	this.shape_317.setTransform(340.7,58.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgQAwQgKgFgHgGQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGACQgGABgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgHgFgGQgFgFgIgBQgEABgEABg");
	this.shape_318.setTransform(330.3,58.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AATBHIgcg5IgQAAIAAA5IgfAAIAAiNIA3AAQAKAAAJACQAKACAHAFQAIAFAEAIQAEAJAAAMQAAAPgHALQgIAJgPADIAkA8gAgZgLIATAAIAIgBQAEAAAEgBQAEgCACgDQADgDAAgGQAAgFgCgEQgCgDgEgCIgIgCIgHAAIgVAAg");
	this.shape_319.setTransform(318.8,56.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgOBMIAAiXIAdAAIAACXg");
	this.shape_320.setTransform(303.2,55.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgYAxQgGgCgGgEQgEgEgDgFQgCgGgBgHQAAgIAEgHQADgFAFgDQAFgEAHgCIAOgDIANgBIAOgBQAAgIgFgEQgHgEgHgBQgHAAgFADQgHADgEAGIgQgQIAJgHIAKgFQALgEAMAAQANAAAIADQAIADAGAHQAEAGACAJQACAKABAMIAAAxIgcAAIAAgMIgBAAQgEAHgJAEQgHADgJAAQgHAAgGgCgAgFAIQgGABgCADQgEADAAAFQAAAGAFACQAFACAEABIAIgBIAHgEQADgCACgDQACgEAAgEIAAgHIgHAAIgJAAg");
	this.shape_321.setTransform(295.1,58.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AghAyIAAhgIAeAAIAAAPIAAAAQAEgJAHgEQAGgFAKAAIAFAAIAFABIAAAcIgGgCIgHAAQgIAAgFACQgFACgDAFQgCAEAAAGIgBAMIAAApg");
	this.shape_322.setTransform(286.2,58.4);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgQAwQgKgFgHgGQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGACQgGABgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgHgFgGQgFgFgIgBQgEABgEABg");
	this.shape_323.setTransform(276,58.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgYBJQgIgEgHgGQgGgHgDgJQgEgKAAgLQAAgKADgJQADgIAGgIQAGgHAIgEQAIgEALAAQAIAAAIADQAIACAFAHIABAAIAAhAIAeAAIAACWIgcAAIAAgNIAAAAIgFAGIgHAFIgIADQgFACgEAAQgLAAgJgEgAgIADQgEABgDAEQgHAHAAALQAAALAHAGQAGAHAKAAQAMAAAGgHQAGgGAAgLQAAgLgGgHQgDgEgFgBQgEgCgGAAQgEAAgFACg");
	this.shape_324.setTransform(263.7,55.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgQAwQgKgFgHgGQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGACQgGABgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgHgFgGQgFgFgIgBQgEABgEABg");
	this.shape_325.setTransform(252,58.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AguBHIAAiNIBdAAIAAAdIg+AAIAAAdIA6AAIAAAcIg6AAIAAA3g");
	this.shape_326.setTransform(240.7,56.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgQAwQgKgFgHgGQgHgGgEgKQgFgJAAgMQAAgLAFgJQAEgKAHgGQAHgHAKgEQAKgDAKAAQALAAAIADQAJAEAGAHQAGAGADAKQADAJAAALIAAAKIhFAAQACAIAGAFQAGAFAIAAQAHAAAFgDQAGgDADgGIAVAPQgDAFgFAEIgKAGQgFACgGACQgGABgGAAQgKAAgKgDgAgGgbQgEABgDADIgEAGIgCAHIAnAAQAAgHgFgGQgFgFgIgBQgEABgEABg");
	this.shape_327.setTransform(222.8,58.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AARBMIAAgwIAAgJIgCgIQgCgEgDgCQgDgCgGAAQgEAAgEACQgEACgCADIgCAIIgBAJIAAAxIgeAAIAAiXIAeAAIAABEIABAAQABgDACgDIAGgFQADgCAEgCIAKgBQALAAAHADQAHAEAEAGQAEAGACAIIABASIAAA2g");
	this.shape_328.setTransform(211.3,55.8);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AADA/QgFgCgGgEQgEgDgDgGQgCgFgBgIIAAgtIgTAAIAAgYIATAAIAAgdIAeAAIAAAdIAaAAIAAAYIgaAAIAAAfIAAAHQAAAEACACQABACADACIAHABIAHgBQAEAAACgCIAAAZIgLADIgKAAQgIAAgGgBg");
	this.shape_329.setTransform(201.4,57.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgRBNIAAhJIgUAAIAAgXIAUAAIAAgSQAAgIACgHQABgHAEgFQAEgGAHgDQAHgDAMAAIAJABIAJABIgCAZIgEgBIgFgBQgIAAgDADQgEAEAAAJIAAAQIAWAAIAAAXIgWAAIAABJg");
	this.shape_330.setTransform(188.1,55.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgUAwQgKgFgIgGQgGgGgFgKQgEgJAAgMQAAgLAEgJQAFgKAGgGQAIgHAKgEQAKgDAKAAQALAAAKADQAKAEAIAHQAGAGAFAKQAEAJAAALQAAAMgEAJQgFAKgGAGQgIAGgKAFQgKADgLAAQgKAAgKgDgAgJgWQgFACgDADQgGAHAAAKQAAALAGAGQAHAIAKgBQAMABAFgIQAHgGAAgLQAAgKgHgHQgDgDgEgCQgFgCgFABQgFgBgEACg");
	this.shape_331.setTransform(178.1,58.5);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgXAwQgKgDgIgHIASgVQAEAGAGACQAFADAHAAQAEAAAEgCQAFgBgBgEQAAgEgDgCIgJgDIgMgCQgHgCgFgDQgGgDgEgFQgDgFAAgKQAAgIADgGQAEgGAFgEQAGgFAHgBQAIgCAGAAQAKAAAKACIAJAFIAHAFIgSATQgHgJgLAAQgCAAgEADQgDACAAADQAAAFADABIAJADIAMADQAHACAFACQAGADADAFQAEAFABAKQAAAKgFAFQgEAHgGADQgHAEgIACIgOABQgKAAgLgDg");
	this.shape_332.setTransform(161.5,58.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AARAyIAAgwIAAgIIgCgIQgCgEgDgCQgDgCgGAAQgEAAgEACQgEACgCADIgCAIIgBAIIAAAxIgeAAIAAhgIAdAAIAAANIABAAIAEgGIAGgFIAHgDIAKgCQALAAAHAEQAHADAEAGQAEAHACAIIABASIAAA1g");
	this.shape_333.setTransform(151.1,58.4);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgUAwQgKgFgIgGQgGgGgFgKQgEgJAAgMQAAgLAEgJQAFgKAGgGQAIgHAKgEQAKgDAKAAQALAAAKADQAKAEAIAHQAGAGAFAKQAEAJAAALQAAAMgEAJQgFAKgGAGQgIAGgKAFQgKADgLAAQgKAAgKgDgAgJgWQgEACgEADQgGAHAAAKQAAALAGAGQAHAIAKgBQAMABAFgIQAHgGAAgLQAAgKgHgHQgDgDgEgCQgEgCgGABQgFgBgEACg");
	this.shape_334.setTransform(139.3,58.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgOBJIAAhhIAdAAIAABhgAgMgqQgEgFAAgHQAAgHAEgGQAGgEAGAAQAHAAAFAEQAFAGABAHQgBAHgFAFQgFAFgHAAQgGAAgGgFg");
	this.shape_335.setTransform(130.6,56.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AADA/QgGgCgFgEQgEgDgDgGQgCgFgBgIIAAgtIgTAAIAAgYIATAAIAAgdIAdAAIAAAdIAbAAIAAAYIgbAAIAAAfIABAHQAAAEACACQABACADACIAIABIAGgBQAEAAACgCIAAAZIgLADIgKAAQgIAAgGgBg");
	this.shape_336.setTransform(123.8,57.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgKAwQgKgFgHgGQgIgGgEgKQgEgJAAgMQAAgLAEgJQAEgKAIgGQAHgHAKgEQAKgDAKAAQAIAAAKADQAJACAHAIIgTAVQgDgEgEgCQgEgBgEAAQgGgBgEACQgEACgDADQgGAHAAAKQAAALAGAGQAGAIALgBQAFAAADgBIAHgGIATAVIgHAGIgJAEQgKADgIAAQgKAAgKgDg");
	this.shape_337.setTransform(115.5,58.5);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AARAyIAAgwIAAgIIgCgIQgCgEgDgCQgDgCgGAAQgEAAgEACQgEACgCADIgCAIIgBAIIAAAxIgeAAIAAhgIAdAAIAAANIABAAIAEgGIAGgFIAHgDIAKgCQALAAAHAEQAHADAEAGQAEAHACAIIABASIAAA1g");
	this.shape_338.setTransform(104.6,58.4);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgcAuQgHgDgEgHQgEgGgBgIQgCgJAAgJIAAg1IAeAAIAAAwIABAHQAAAFABAEQACADADADQADACAGAAQAFAAADgCQAEgCACgDQACgEAAgEIABgJIAAgwIAeAAIAABgIgdAAIAAgNIAAAAIgEAGIgGAFIgIADQgEACgGAAQgLAAgHgEg");
	this.shape_339.setTransform(93.1,58.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AguBHIAAiNIBdAAIAAAdIg+AAIAAAdIA6AAIAAAcIg6AAIAAA3g");
	this.shape_340.setTransform(81.9,56.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_341.setTransform(466.9,556.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AACAdQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgCgEIgBgEIAAgeIgKAAIAAgFIAKAAIAAgNIAFAAIAAANIANAAIAAAFIgNAAIAAAeQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQACACADAAIADAAIADgCIABAGIgEABIgEAAIgFgBg");
	this.shape_342.setTransform(462.5,555.8);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgIAYIgFgDIgEgEQgBgDgBgDQABgGACgDQADgCADgBIAJgCIAHgBIAHAAIAAgDIgBgFIgDgDQgEgDgFAAQgDAAgEACQgDABgDACIgEgEQADgDAFgCIAJgBIAIABIAGADQAEAEAAAJIAAAKIAAAGIAAAFIABAEIAAAEIgFAAIgBgHQgDAEgDACQgEACgFAAIgGAAgAAAABIgHABIgEADQgBACAAADIABAEIACADIADACIAEAAQAEAAADgBIAFgEIADgFIAAgGIAAgDIgGAAg");
	this.shape_343.setTransform(458.3,556.4);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgLAYIAAggIAAgEIAAgDIAAgEIAAgCIAGAAIAAAFIAAADQACgEADgDQAEgDAFAAIACAAIABABIAAAGIgDgBQgEAAgCACQgDABgBACIgDAFIgBAHIAAAYg");
	this.shape_344.setTransform(454.4,556.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_345.setTransform(449.6,556.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_346.setTransform(445.7,554.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_347.setTransform(441.7,556.4);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgFAXIgIgFIgFgIQgCgFAAgFQAAgEACgFQACgEADgDQADgEAFgBQAEgCAEAAQAGAAAEACIAIAGIgFADIgGgEQgDgCgEAAQgDAAgDACQgEABgCADIgEAGIgBAGIABAHIAEAGQACADAEACQADABADAAQAEAAADgCQAEgBACgDIAEADQgDAFgEACQgFABgFAAQgEAAgEgBg");
	this.shape_348.setTransform(436.7,556.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgFAXIgIgFIgFgIQgCgFAAgFQAAgEACgFQACgEADgDQADgEAFgBQAEgCAEAAQAGAAAEACIAIAGIgFADIgGgEQgDgCgEAAQgDAAgDACQgEABgCADIgEAGIgBAGIABAHIAEAGQACADAEACQADABADAAQAEAAADgCQAEgBACgDIAEADQgDAFgEACQgFABgFAAQgEAAgEgBg");
	this.shape_349.setTransform(431.9,556.4);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AAaAkIgHgTIglAAIgIATIgHAAIAfhGIAGAAIAeBGgAAQALIgQgmIgPAmIAfAAg");
	this.shape_350.setTransform(425.9,555.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgCAyIAAhjIAFAAIAABjg");
	this.shape_351.setTransform(418.8,556.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AAOAYIAAgaIAAgGIgCgFIgDgDIgHgBIgFABIgFADIgDAGIgBAIIAAAXIgGAAIAAggIAAgEIAAgDIgBgEIAAgCIAGAAIAAAFIABADQACgEADgDIAGgCIADgBQAGAAADACIAGAEIACAHIABAHIAAAbg");
	this.shape_352.setTransform(412.3,556.3);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgJAXIgIgFIgFgIQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAFgCAEAAQAFAAAFACQAEABADAEQAEADABAEQACAFAAAEQAAAFgCAFQgBAEgEAEQgDADgEACQgFABgFAAQgEAAgFgBgAgHgQQgDABgCADIgEAGIgBAGIABAHIAEAGQACADADACQAEABADAAQAEAAAEgBIAFgFQADgCABgEQABgDAAgEQAAgDgBgDQgBgEgDgCIgFgEQgEgCgEAAQgDAAgEACg");
	this.shape_353.setTransform(406.6,556.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgCAjIAAgtIAFAAIAAAtgAgCgaQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_354.setTransform(402.4,555.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AACAdQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgCgEIgBgEIAAgeIgKAAIAAgFIAKAAIAAgNIAFAAIAAANIANAAIAAAFIgNAAIAAAeQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQACACADAAIADAAIADgCIABAGIgEABIgEAAIgFgBg");
	this.shape_355.setTransform(399.5,555.8);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgIAYIgGgDIgDgEQgBgDAAgDQAAgGACgDQADgCAEgBIAIgCIAHgBIAHAAIAAgDIgBgFIgCgDQgFgDgFAAQgDAAgDACQgEABgDACIgDgEQACgDAGgCIAIgBIAIABIAFADQAGAEAAAJIAAAKIAAAGIAAAFIAAAEIABAEIgHAAIAAgHQgDAEgEACQgDACgGAAIgFAAgAAAABIgGABIgFADQgBACgBADIABAEIADADIADACIAEAAQADAAAEgBIAFgEIACgFIABgGIAAgDIgHAAg");
	this.shape_356.setTransform(395.3,556.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgFAXIgIgFIgFgIQgCgFAAgFQAAgEACgFQACgEADgDQADgEAFgBQAEgCAEAAQAGAAAEACIAIAGIgFADIgGgEQgDgCgEAAQgDAAgDACQgEABgCADIgEAGIgBAGIABAHIAEAGQACADAEACQADABADAAQAEAAADgCQAEgBACgDIAEADQgDAFgEACQgFABgFAAQgEAAgEgBg");
	this.shape_357.setTransform(390.6,556.4);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgKAWQgEgCgCgDQgBgCgBgEIgBgHIAAgaIAGAAIAAAaIAAAFIADAFQAAAAAAABQAAAAABABQAAAAABAAQAAABAAAAQADABAEAAQACAAADgBQADgBACgCIADgGIABgIIAAgWIAGAAIAAAfIAAAEIABADIAAAEIAAADIgGAAIAAgGIgBgCQgCADgDADQgFACgEABQgGgBgDgBg");
	this.shape_358.setTransform(385.2,556.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgJAlIgIgFIgFgIQgBgFgBgFQABgFABgFQACgEADgCQAEgEAEgBQAEgCAFAAIAFAAIAFACIAFADQACACABACIAAAAIAAglIAHAAIAABKIgHAAIAAgIIAAAAQgBADgCABIgFADIgFACIgFAAQgFAAgEgBgAgHgCQgDABgDACIgEAGIAAAHIAAAHIAEAGQADADADACQAEABADAAQAEAAAEgBQADgCACgDIAFgGQABgDAAgEQAAgEgBgDIgFgGIgFgDQgEgCgEAAQgDAAgEACg");
	this.shape_359.setTransform(379.3,555);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgWAkIAAhGIArAAIAAAGIgjAAIAAAZIAhAAIAAAFIghAAIAAAbIAkAAIAAAHg");
	this.shape_360.setTransform(373.6,555.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgJAlIgIgFIgFgIQgBgFAAgFQAAgFABgFQACgEADgCQADgEAFgBQAEgCAFAAIAFAAIAFACIAEADQADACABACIABAAIAAglIAFAAIAABKIgFAAIAAgIIgBAAQgBADgDABIgEADIgFACIgFAAQgFAAgEgBgAgHgCQgEABgCACIgDAGIgBAHIABAHIADAGQACADAEACQAEABADAAQAEAAAEgBQADgCACgDIAFgGQABgDAAgEQAAgEgBgDIgFgGIgFgDQgEgCgEAAQgDAAgEACg");
	this.shape_361.setTransform(364.7,555);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_362.setTransform(358.9,556.4);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgFIAGgEQACAEADACQAEACADAAIAEgBIADgBIACgDIACgDQgBgEgCgBIgEgDIgGgBIgHgCIgFgDQgCgCAAgFQAAgDACgDIADgEQACgCAEAAIAEgBQAGAAAEACQAEACACAFIgFADIgEgFQgDgCgEAAIgCABIgDABIgDACIgBAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAIAFADIAGABIAGACIAGADQABACAAAFIgBAGQgBADgCACIgGADIgGAAQgFAAgFgCg");
	this.shape_363.setTransform(354,556.4);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgIAYIgFgDIgEgEQgCgDAAgDQAAgGADgDQADgCADgBIAJgCIAHgBIAHAAIAAgDIgBgFIgCgDQgFgDgFAAQgDAAgDACQgEABgDACIgDgEQACgDAGgCIAIgBIAHABIAGADQAFAEABAJIAAAKIAAAGIAAAFIAAAEIABAEIgHAAIAAgHQgDAEgEACQgDACgGAAIgFAAgAAAABIgGABIgFADQgBACgBADIABAEIADADIADACIAEAAQADAAAEgBIAFgEIACgFIABgGIAAgDIgHAAg");
	this.shape_364.setTransform(349.3,556.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgWAkIAAhGIAUAAIAHABQAFAAADACQADACACAEIACAEIAAAFIgBAGQAAACgCACIgEADIgGACIAAABQAEAAADAAIAFADIADAGIABAHIAAAFIgCAFQgCADgEACQgEADgEABIgHABgAgPAdIAPAAQAEABAEgCQAEgCABgBQACgDABgCIABgEQAAgEgCgDIgEgFIgFgCIgGgBIgPAAgAgPgEIANAAQAEAAAEgBIAFgDIACgEIABgEQAAgDgCgDIgDgDIgFgCIgFgBIgOAAg");
	this.shape_365.setTransform(343.7,555.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgLADIAAgFIAXAAIAAAFg");
	this.shape_366.setTransform(338.8,556.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgRAjIgDgBIABgGIACABIADAAIADAAIACgCIACgCIABgDIAEgLIgTgtIAHAAIAOAlIAPglIAHAAIgXA8QgCAEgDADQgDACgFAAg");
	this.shape_367.setTransform(334.9,557.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgFAXIgIgFIgFgIQgCgFAAgFQAAgEACgFQACgEADgDQADgEAFgBQAEgCAEAAQAGAAAEACIAIAGIgFADIgGgEQgDgCgEAAQgDAAgDACQgEABgCADIgEAGIgBAGIABAHIAEAGQACADAEACQADABADAAQAEAAADgCQAEgBACgDIAEADQgDAFgEACQgFABgFAAQgEAAgEgBg");
	this.shape_368.setTransform(330.4,556.4);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AAOAYIAAgaIAAgGIgCgFIgEgDIgGgBIgFABIgFADIgDAGIgBAIIAAAXIgGAAIAAggIAAgEIAAgDIgBgEIAAgCIAGAAIAAAFIABADQACgEADgDIAGgCIADgBQAGAAADACIAGAEIACAHIABAHIAAAbg");
	this.shape_369.setTransform(325,556.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_370.setTransform(319.4,556.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AACAdQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgCgEIgBgEIAAgeIgKAAIAAgFIAKAAIAAgNIAFAAIAAANIANAAIAAAFIgNAAIAAAeQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQACACADAAIADAAIADgCIABAGIgEABIgEAAIgFgBg");
	this.shape_371.setTransform(315,555.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgYAjIAAhEIAHAAIAAAIIAAAAIADgEIAFgDIAFgCIAFAAQAEAAAFACQAFABADAEQADADACAEQACAFAAAFQAAAFgCAFIgFAHIgIAFQgFABgEAAIgFAAIgFgCIgFgDIgDgEIAAAAIAAAfgAgGgbIgHAEIgDAGQgCADAAAEQAAAEACADIADAFQAEADADACQAEABADAAQADAAAEgBQADgCADgDIAEgFIABgHIgBgHIgEgGIgGgEQgEgCgDAAQgDAAgEACg");
	this.shape_372.setTransform(310.4,557.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AAdAYIAAgaIgBgGIgBgFIgEgDIgGgBQgEAAgDABIgEAEIgCAFIgBAGIAAAZIgFAAIAAgbIAAgGIgCgEQgCgEgFAAIgHABIgFADIgDAGIgBAIIAAAXIgGAAIAAggIAAgEIAAgDIgBgEIAAgCIAGAAIAAAFIABADQACgEAEgDIAFgCIAFgBQAEAAAEADQADACACAFIACgEIAEgDQAFgDAEAAQAGAAADACQAEACABACIADAHIABAHIAAAbg");
	this.shape_373.setTransform(303,556.3);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AgJAXIgIgFIgFgIQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAFgCAEAAQAFAAAFACQAEABADAEQAEADABAEQACAFAAAEQAAAFgCAFQgBAEgEAEQgDADgEACQgFABgFAAQgEAAgFgBgAgHgQQgDABgCADIgEAGIgBAGIABAHIAEAGQACADADACQAEABADAAQAEAAAEgBIAFgFQADgCABgEQABgDAAgEQAAgDgBgDQgBgEgDgCIgFgEQgEgCgEAAQgDAAgEACg");
	this.shape_374.setTransform(295.8,556.4);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgJAiQgGgCgFgFQgFgFgDgHIgBgHIgBgIIABgHIABgHQADgHAFgFQAFgFAGgDIAIgCIAGAAQAIAAAFACQAHADAEAGIgFAEQgDgFgFgCIgGgCIgFAAQgFAAgHACQgFACgEAFQgDAEgCAGQgDAFAAAGQAAAGADAGQACAGADAEQAEAEAFADQAHACAFAAIAGgBIAFgCIAGgDIAEgFIAGAEIgGAGIgHAEQgGADgIAAQgHAAgHgDg");
	this.shape_375.setTransform(289.5,555.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgCAyIAAhjIAFAAIAABjg");
	this.shape_376.setTransform(282.2,556.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgCADQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_377.setTransform(277.2,558.3);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgJAlIgIgFIgFgIQgCgFAAgFQAAgFACgFQACgEADgCQAEgEAEgBQAFgCAEAAIAFAAIAFACIAFADQACACABACIAAAAIAAglIAHAAIAABKIgHAAIAAgIIAAAAQgBADgCABIgFADIgFACIgFAAQgEAAgFgBgAgHgCQgEABgBACIgFAGIgBAHIABAHIAFAGQABADAEACQAEABADAAQAEAAAEgBQADgCADgDIAEgGQABgDAAgEQAAgEgBgDIgEgGIgGgDQgEgCgEAAQgDAAgEACg");
	this.shape_378.setTransform(272.8,555);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_379.setTransform(267,556.4);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgCAXIgTgtIAHAAIAOAnIAPgnIAHAAIgTAtg");
	this.shape_380.setTransform(261.9,556.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AgLAYIAAggIAAgEIAAgDIAAgEIAAgCIAGAAIAAAFIAAADQACgEADgDQAEgDAFAAIACAAIABABIAAAGIgDgBQgEAAgCACQgDABgBACIgDAFIgBAHIAAAYg");
	this.shape_381.setTransform(258.3,556.3);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_382.setTransform(253.5,556.4);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgFIAGgEQACAEADACQAEACADAAIAEgBIADgBIACgDIABgDQAAgEgCgBIgEgDIgGgBIgHgCIgFgDQgCgCAAgFQAAgDACgDIADgEQACgCAEAAIAEgBQAFAAAFACQAEACACAFIgFADIgEgFQgDgCgEAAIgCABIgEABIgCACIgBAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAIAGADIAFABIAGACIAGADQABACAAAFIgBAGQgBADgCACIgGADIgGAAQgFAAgFgCg");
	this.shape_383.setTransform(248.6,556.4);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_384.setTransform(243.7,556.4);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgLAYIAAggIAAgEIAAgDIAAgEIAAgCIAGAAIAAAFIAAADQACgEADgDQAEgDAFAAIACAAIABABIAAAGIgDgBQgEAAgCACQgDABgBACIgDAFIgBAHIAAAYg");
	this.shape_385.setTransform(239.8,556.3);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AgJAWQgFgCgDgFIAFgEQADAEADACQAEACADAAIAEgBIADgBIADgDIABgDQAAgEgDgBIgEgDIgGgBIgHgCIgFgDQgCgCAAgFQAAgDACgDIADgEQADgCADAAIAEgBQAFAAAFACQAEACACAFIgFADIgFgFQgCgCgEAAIgDABIgCABIgDACIgBAEQAAAAAAABQAAABABAAQAAABAAAAQABABAAAAIAFADIAGABIAHACIAEADQACACAAAFIgBAGQgBADgCACIgGADIgGAAQgFAAgFgCg");
	this.shape_386.setTransform(233,556.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AACAdQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgCgEIgBgEIAAgeIgKAAIAAgFIAKAAIAAgNIAFAAIAAANIANAAIAAAFIgNAAIAAAeQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQACACADAAIADAAIADgCIABAGIgEABIgEAAIgFgBg");
	this.shape_387.setTransform(229.3,555.8);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AAOAmIAAgbIgBgGIgBgFIgEgCIgGgBIgFABIgFACIgEAGIgBAJIAAAXIgGAAIAAhLIAGAAIAAAlQACgDAEgDIAFgCIAEgBQAGAAADACIAFAEIADAGIABAHIAAAcg");
	this.shape_388.setTransform(224.9,554.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgGAjIgHgCIgFgDIgEgEIAEgEQAEAEAEACQAFACAFAAIAHgBIAGgDIADgEIABgFIABgEIAAgEIAAgGIAAAAQgDAEgEACQgFADgGAAQgEAAgEgCQgFgCgDgDQgDgDgCgEQgCgEAAgFQAAgFACgEIAFgIIAIgFQAEgCAEAAQAGAAAFADQAEACADAEIAAAAIAAgHIAGAAIAAAqIAAAIIgCAGQgDAFgEADQgDADgFABIgHABIgGgBgAgGgcIgGAEIgEAGQgBADAAAEIABAHIAEAFIAGAEQADABADAAIAHgBIAGgEIAEgFIABgHQAAgEgBgDIgEgGIgGgEIgHgBQgDAAgDABg");
	this.shape_389.setTransform(219,557.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgCAjIAAgtIAFAAIAAAtgAgCgaQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_390.setTransform(214.8,555.3);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgLAYIAAggIAAgEIAAgDIAAgEIAAgCIAGAAIAAAFIAAADQACgEADgDQAEgDAFAAIACAAIABABIAAAGIgDgBQgEAAgCACQgDABgBACIgDAFIgBAHIAAAYg");
	this.shape_391.setTransform(212.3,556.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_392.setTransform(206.5,554.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_393.setTransform(204.1,554.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AAaAkIgHgTIglAAIgIATIgHAAIAfhGIAGAAIAeBGgAAQALIgQgmIgPAmIAfAAg");
	this.shape_394.setTransform(199.5,555.2);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_395.setTransform(190.7,556.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgGAjIgHgCIgFgDIgEgEIAEgEQAEAEAEACQAFACAFAAIAHgBIAGgDIADgEIABgFIABgEIAAgEIAAgGIAAAAQgDAEgEACQgFADgGAAQgEAAgEgCQgFgCgDgDQgDgDgCgEQgCgEAAgFQAAgFACgEIAFgIIAIgFQAEgCAEAAQAGAAAFADQAEACADAEIAAAAIAAgHIAGAAIAAAqIAAAIIgCAGQgDAFgEADQgDADgFABIgHABIgGgBgAgGgcIgGAEIgEAGQgBADAAAEIABAHIAEAFIAGAEQADABADAAIAHgBIAGgEIAEgFIABgHQAAgEgBgDIgEgGIgGgEIgHgBQgDAAgDABg");
	this.shape_396.setTransform(184.8,557.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_397.setTransform(179,556.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_398.setTransform(175.1,554.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#FFFFFF").s().p("AgCAmIAAhLIAFAAIAABLg");
	this.shape_399.setTransform(172.7,554.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFFFFF").s().p("AgJAXIgIgFIgFgIQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAFgCAEAAQAFAAAFACQAEABADAEQAEADABAEQACAFAAAEQAAAFgCAFQgBAEgEAEQgDADgEACQgFABgFAAQgEAAgFgBgAgHgQQgDABgCADIgEAGIgBAGIABAHIAEAGQACADADACQAEABADAAQAEAAAEgBIAFgFQADgCABgEQABgDAAgEQAAgDgBgDQgBgEgDgCIgFgEQgEgCgEAAQgDAAgEACg");
	this.shape_400.setTransform(168.5,556.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#FFFFFF").s().p("AgIAiQgIgCgEgFQgFgFgCgHIgDgHIgBgIIABgHIADgHQACgHAFgFQAEgFAIgDIAGgCIAHAAQAHAAAHACQAGADAEAGIgFAEQgDgFgGgCIgEgCIgGAAQgGAAgFACQgGACgDAFQgEAEgDAGQgCAFAAAGQAAAGACAGQADAGAEAEQADAEAGADQAFACAGAAIAGgBIAGgCIAEgDIAFgFIAFAEIgFAGIgGAEQgHADgIAAQgHAAgGgDg");
	this.shape_401.setTransform(162.2,555.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#FFFFFF").s().p("AgIAXIgHgFQgDgEgCgEQgBgFAAgFQAAgEABgFIAFgHIAHgFQAFgCAEAAQAFAAAEACQAEACADADQADADABAEIABAHIAAAEIglAAIAAAFIADAFQACADAEACQADACAEAAQAFAAAEgCQAEgCADgEIAEAEQgDAFgGACQgFACgGAAQgEAAgFgBgAAQgDIgBgGIgDgEIgFgEIgHgBQgDAAgEACIgFAFIgDAFIAAADIAfAAIAAAAg");
	this.shape_402.setTransform(153.2,556.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#FFFFFF").s().p("AgJAlIgIgFIgFgIQgCgFAAgFQAAgFACgFQACgEADgCQADgEAFgBQAFgCAEAAIAFAAIAFACIAFADQACACABACIAAAAIAAglIAHAAIAABKIgHAAIAAgIIAAAAQgBADgCABIgFADIgFACIgFAAQgEAAgFgBgAgHgCQgDABgCACIgFAGIgBAHIABAHIAFAGQACADADACQAEABADAAQAEAAAEgBQADgCADgDIADgGQACgDAAgEQAAgEgCgDIgDgGIgGgDQgEgCgEAAQgDAAgEACg");
	this.shape_403.setTransform(147.3,555);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#FFFFFF").s().p("AgIAYIgGgDIgDgEQgCgDABgDQgBgGADgDQADgCAEgBIAIgCIAHgBIAHAAIAAgDIgBgFIgDgDQgDgDgGAAQgDAAgEACQgDABgDACIgEgEQAEgDAFgCIAIgBIAIABIAFADQAGAEAAAJIAAAKIAAAGIAAAFIAAAEIAAAEIgGAAIAAgHQgCAEgEACQgFACgEAAIgGAAgAAAABIgHABIgEADQgCACAAADIACAEIACADIADACIAEAAQADAAAEgBIAFgEIACgFIABgGIAAgDIgGAAg");
	this.shape_404.setTransform(141.7,556.4);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFFFFF").s().p("AgdAkIAAhGIAWAAQAIgBAHADQAGACAEAEQAEADACAFIAEAIIABAGIABAEIgBAEIgBAHIgEAIQgCAFgEAEIgKAGQgHACgIAAgAgXAdIAOAAQAHAAAFgBIAGgCIAEgEIAFgDIADgGQACgGAAgHIAAgGIgCgGIgDgFIgFgEIgEgEIgGgBIgMgCIgOAAg");
	this.shape_405.setTransform(135.7,555.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#FFFFFF").s().p("AgCAjIAAgtIAFAAIAAAtgAgCgaQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_406.setTransform(128,555.3);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#FFFFFF").s().p("AAdAYIAAgaIgBgGIgBgFIgEgDIgGgBQgEAAgDABIgEAEIgCAFIgBAGIAAAZIgFAAIAAgbIAAgGIgCgEQgCgEgFAAIgHABIgFADIgDAGIgBAIIAAAXIgGAAIAAggIAAgEIAAgDIgBgEIAAgCIAGAAIAAAFIABADQACgEAEgDIAFgCIAFgBQAEAAAEADQADACACAFIACgEIAEgDQAFgDAEAAQAGAAADACQAEACABACIADAHIABAHIAAAbg");
	this.shape_407.setTransform(122.5,556.3);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#FFFFFF").s().p("AgIAYIgFgDIgEgEQgCgDAAgDQAAgGADgDQADgCADgBIAJgCIAHgBIAHAAIAAgDIgBgFIgCgDQgFgDgFAAQgDAAgDACQgEABgDACIgDgEQADgDAEgCIAJgBIAHABIAGADQAFAEABAJIAAAKIAAAGIAAAFIAAAEIABAEIgHAAIAAgHQgCAEgFACQgDACgGAAIgFAAgAAAABIgGABIgFADQgBACgBADIABAEIADADIADACIAEAAQADAAAEgBIAFgEIADgFIAAgGIAAgDIgHAAg");
	this.shape_408.setTransform(115.7,556.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#FFFFFF").s().p("AgCAjIAAgtIAFAAIAAAtgAgCgaQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_409.setTransform(111.9,555.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFFFFF").s().p("AAdAkIAAg+IAAAAIgbA+IgDAAIgbg+IAAAAIAAA+IgGAAIAAhGIAKAAIAYA6IAag6IAKAAIAABGg");
	this.shape_410.setTransform(106.3,555.2);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#FFFFFF").s().p("AACAdQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIgCgEIgBgEIAAgeIgKAAIAAgFIAKAAIAAgNIAFAAIAAANIANAAIAAAFIgNAAIAAAeQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQACACADAAIADAAIADgCIABAGIgEABIgEAAIgFgBg");
	this.shape_411.setTransform(97.6,555.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#FFFFFF").s().p("AAOAmIAAgbIgBgGIgBgFIgEgCIgGgBIgFABIgFACIgEAGIgBAJIAAAXIgGAAIAAhLIAGAAIAAAlQACgDAEgDIAFgCIAEgBQAGAAADACIAFAEIADAGIABAHIAAAcg");
	this.shape_412.setTransform(93.2,554.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#FFFFFF").s().p("AgGAjIgHgCIgFgDIgEgEIAEgEQAEAEAEACQAFACAFAAIAHgBIAGgDIADgEIABgFIABgEIAAgEIAAgGIAAAAQgDAEgEACQgFADgGAAQgEAAgEgCQgFgCgDgDQgDgDgCgEQgCgEAAgFQAAgFACgEIAFgIIAIgFQAEgCAEAAQAGAAAFADQAEACADAEIAAAAIAAgHIAGAAIAAAqIAAAIIgCAGQgDAFgEADQgDADgFABIgHABIgGgBgAgGgcIgGAEIgEAGQgBADAAAEIABAHIAEAFIAGAEQADABADAAIAHgBIAGgEIAEgFIABgHQAAgEgBgDIgEgGIgGgEIgHgBQgDAAgDABg");
	this.shape_413.setTransform(87.3,557.5);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FFFFFF").s().p("AgCAjIAAgtIAFAAIAAAtgAgCgaQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAABABQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBgBAAAAg");
	this.shape_414.setTransform(83.1,555.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FFFFFF").s().p("AgLAYIAAggIAAgEIAAgDIAAgEIAAgCIAGAAIAAAFIAAADQACgEADgDQAEgDAFAAIACAAIABABIAAAGIgDgBQgEAAgCACQgDABgBACIgDAFIgBAHIAAAYg");
	this.shape_415.setTransform(80.6,556.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#FFFFFF").s().p("AgRAjIgDgBIABgGIACABIADAAIADAAIACgCIACgCIABgDIAEgLIgTgtIAHAAIAOAlIAPglIAHAAIgXA8QgCAEgDADQgDACgFAAg");
	this.shape_416.setTransform(76.3,557.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#FFFFFF").s().p("AgXAjIAAhEIAFAAIAAAIIABAAIAEgEIAEgDIAFgCIAEAAQAGAAAEACQAFABADAEQADADACAEQACAFgBAFQABAFgCAFIgFAHIgIAFQgEABgGAAIgEAAIgFgCIgEgDIgEgEIgBAAIAAAfgAgGgbIgGAEIgFAGQgBADAAAEQAAAEABADIAFAFQADADADACQADABADAAQAFAAADgBQADgCADgDIADgFIABgHIgBgHIgDgGIgGgEQgDgCgFAAQgDAAgDACg");
	this.shape_417.setTransform(71,557.5);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#FFFFFF").s().p("AgJAXIgIgFIgFgIQgBgFAAgFQAAgEABgFQACgEADgDQAEgEAEgBQAFgCAEAAQAFAAAFACQAEABADAEQAEADABAEQACAFAAAEQAAAFgCAFQgBAEgEAEQgDADgEACQgFABgFAAQgEAAgFgBgAgHgQQgDABgCADIgEAGIgBAGIABAHIAEAGQACADADACQAEABADAAQAEAAAEgBIAFgFQADgCABgEQABgDAAgEQAAgDgBgDQgBgEgDgCIgFgEQgEgCgEAAQgDAAgEACg");
	this.shape_418.setTransform(65,556.4);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AgJAiQgGgCgFgFQgFgFgDgHIgBgHIgBgIIABgHIABgHQADgHAFgFQAFgFAGgDIAIgCIAGAAQAIAAAFACQAHADAEAGIgFAEQgDgFgFgCIgGgCIgFAAQgFAAgHACQgFACgEAFQgDAEgCAGQgDAFAAAGQAAAGADAGQACAGADAEQAEAEAFADQAHACAFAAIAGgBIAFgCIAGgDIAEgFIAGAEIgGAGIgHAEQgGADgIAAQgHAAgHgDg");
	this.shape_419.setTransform(58.7,555.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AgHAkIgGgCIgHgDIgFgFIgFgFIgDgHIgDgHIAAgHQAAgHADgHQACgGAGgFIAFgFIAHgDIAGgDIAHAAIAHAAIAIADQAGADAFAFQAGAFACAGIACAHIABAHIgBAHIgCAHIgDAHIgFAFQgFAFgGADIgIACIgHABIgHgBgAgFgeIgGACQgGACgEAEQgFAFgCAFQgDAGAAAGIABAGIACAGQACAGAFAEQAEAFAGACIAGACIAFABQAGAAAHgDQAFgCAFgFQAEgEADgGIABgGIABgGIgBgGIgBgGQgDgFgEgFQgFgEgFgCIgHgCIgGgBIgFABgAgHAVIgHgFQgCgDgCgEQgBgEgBgFQABgEABgEIAEgIQADgDAEgBQAEgCAEAAIAGABIAGADIAEAFIACAGIgFAAQgBgEgDgDIgEgCIgFgBQgDAAgDABIgFAEIgDAGIgBAGIABAHIADAGIAFAEIAGABIAFgBIAEgCIADgDIABgEIAFAAIgCAGIgEAFIgGADIgGABQgEAAgEgCg");
	this.shape_420.setTransform(48.4,555.2);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AgOAkIAchBIghAAIAAgFIAnAAIAAAFIgbBBg");
	this.shape_421.setTransform(39,555.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AAFAkIAAg+IgMAKIgDgEIAQgOIAFAAIAABGg");
	this.shape_422.setTransform(33.5,555.2);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgHAjQgEgCgDgDQgDgCgBgEIgDgHIgBgJIAAgIIAAgHIABgIIADgIIAEgHIAHgEQADgCAEABQAFgBADACIAHAEIAEAHIADAIIABAIIAAAHIAAAIIgBAJIgDAHQgBAEgDACQgDADgEACQgDABgFABQgEgBgDgBgAgFgcIgFADIgDAHIgCAGIAAAHIgBAFIABAHIAAAGIACAHIADAGIAFADQACACADAAQADAAADgCIAFgDIADgGIACgHIAAgGIABgHIgBgFIAAgHIgCgGIgDgHIgFgDQgDgCgDAAQgCAAgDACg");
	this.shape_423.setTransform(28.8,555.2);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgVAkIAAgHIAZgcIAFgDIACgFIADgEIABgGIgBgFIgDgEQgEgDgGAAQgFAAgDACQgFAEgBAFIgHgBIADgHIAFgFQAGgEAHAAIAIABIAGAEIAFAFQACAEgBAEQABAEgCADIgDAIIgFAFIgFAFIgWAXIAlAAIAAAFg");
	this.shape_424.setTransform(23.6,555.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#176B8D").s().p("EhK/AD6IAAnzMCV/AAAIAAHzg");
	this.shape_425.setTransform(480,555);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#176B8D").s().p("EhK/AH0IAAvnMCV/AAAIAAPng");
	this.shape_426.setTransform(480,50);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#499ACF").s().p("EhK/AtUMAAAhanMCV/AAAMAAABang");
	this.shape_427.setTransform(480,290);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_284},{t:this.instance_6}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,290,960,580);
// library properties:
lib.properties = {
	id: '7B54DDB6F3F842918D8C63013E1A278F',
	width: 960,
	height: 580,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"sounds/beep.mp3", id:"beep"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7B54DDB6F3F842918D8C63013E1A278F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;