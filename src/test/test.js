import 'mocha/mocha.css'; 
import mocha from "mocha/mocha-es2018"; 
import chai from 'chai';
import {comprobarString} from '../index.js';

// Ejemplo de funcionamiento de TEST mocha y chai
var assert = chai.assert;
mocha.setup('bdd');
it ('Funciona lo de string', ()=> {
    assert.isString(comprobarString())
});