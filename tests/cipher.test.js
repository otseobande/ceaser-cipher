import chai from 'chai';
import { encrypt, decrypt } from '../src/cipher';

chai.should();

describe('Ceaser cipher', () => {
  describe('encrypt method', () => {
    it('should throw an error if first argument is not a number', () => {
      (() => encrypt('5', 'andela')).should.throw(TypeError);
    });

    it('should throw an error if second argument is not a string', () => {
      (() => encrypt(5, 43)).should.throw(TypeError);
    });

    it('should throw an error if text contains non-alphabet', () => {
      (() => encrypt(5, 'sdf,sdf')).should.throw();
    })

    it('should encrypt a text properly', () => {
      encrypt(5, 'ANDELA').should.be.equal('VIYZGV');
    });
  });

  describe('decrypt method', () => {
    it('should decrypt a text properly', () => {
      decrypt(5, 'VIYZGV').should.be.equal('ANDELA');
    });
  })
})