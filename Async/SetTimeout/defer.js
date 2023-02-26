'use strict'

function defer(f, ms) {
    return function() {
        let args = arguments;
        let context = this;
        
        setTimeout(function() {
            return f.apply(context, args);
        }, ms);
    }    
} 