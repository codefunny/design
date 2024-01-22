"use strict";
class Singleton {
    static instance;
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    someFnction() {
        return "do some thing";
    }
}
