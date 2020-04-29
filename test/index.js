const log = require('./../index');

var chai = require('chai'),
    expect = chai.expect,
    sinonChai = require('sinon-chai'),
    sinon = require('sinon');

chai.use(sinonChai);

const mensaje = 'hola';

describe('test funciones console log', () => {
    beforeEach(function () {
        sinon.spy(console, 'log');

    });
    afterEach(function(){
         console.log.restore();
     });

    it('test ok', () => {
        log.ok(mensaje);
        expect(console.log).to.be.called;
    });
    it('test info', () => {
        log.info(mensaje);
        expect(console.log).to.be.called;

    });
    it('test aviso', () => {
        log.aviso(mensaje);
        expect(console.log).to.be.called;

    });
    it('test error', () => {
        log.error(mensaje);
        expect(console.log).to.be.called;

    });
    it('no llama a console log',()=>{
        log.prueba();
        expect(console.log).to.be.not.called;
    })
});