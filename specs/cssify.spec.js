/*
 * imacss
 *
 * Copyright(c) 2014 André König <andre.koenig@posteo.de>
 * MIT Licensed
 *
 */

/**
 * @author André König <andre.koenig@posteo.de>
 *
 */

'use strict';

var helper  = require('./helper'),
    cssify  = require('../lib/cssify')

describe('The "cssification" stream', function () {

    it('should generate a CSS selector based on the image data', function (done) {
        var image  = helper.createImage(),
            prefix = 'imacss',
            stream = cssify(prefix);

        stream.on('data', function (selector) {
            expect(selector).toBeDefined();

            expect(selector.substring(1, prefix.length + 1)).toBe(prefix);

            done();
        });

        stream.write(image);
        stream.end();
    });
});