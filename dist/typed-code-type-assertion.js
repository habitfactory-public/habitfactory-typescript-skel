"use strict";
function getString() {
    if (Math.random() > 0) {
        return 'string';
    }
    else {
        return 1;
    }
}
const something = getString();
