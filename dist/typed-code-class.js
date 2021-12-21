"use strict";
class Message {
    constructor(to) {
        this.from = 'jhlee@habitfactory.co';
        this.message = '';
        this.to = to;
    }
    send() {
        console.log(`send message to ${this.to} from ${this.from}`);
    }
    setMessage(message) {
        this.message = message;
    }
}
