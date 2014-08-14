'use strict';

// =====================================================
// CONFIGURATION
// =====================================================

var browser = require('open'),
    logger  = require('simlog'),
    term    = process.argv[4],
    query   = 'search/?query=' + process.argv.slice(5).join('+');


// =====================================================
// SEARCH
// =====================================================

var getType = function(t) {
    if (t !== undefined) {
        switch (t) {
        case 'page':
            logger.info('Searching for ' + term + ' page.');
            return '';
        case 'group':
            logger.info('Searching for content in ' + term + '.');
            return '/groups';
        case 'hash':
            logger.info('Searching for ' + term + ' hashtags.');
            return '/hashtag';
        default:
            logger.error('Invalid option! Please, try again.');
            process.exit(1);
        }
    }
};

exports.search = function(opts) {

    var qstr = (opts.type === 'group') ? query : '',
        url  = 'https://www.facebook.com' + getType(opts.type) + '/' + term + '/' + qstr;

    browser(url);

};

