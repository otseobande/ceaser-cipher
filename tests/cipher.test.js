import chai from 'chai';
import { encrypt, decrypt } from '../js/cipher';

chai.should();

describe('Ceaser cipher', () => {
  describe('encrypt method', () => {
    it('should raise an error if arguments are less than two', () => {
      (() => encrypt(3)).should.throw();
    });

    it('should throw an error if first argument is not a number', () => {
      (() => encrypt('3', 'andela')).should.throw(TypeError);
    });

    it('should throw an error if second argument is not a string', () => {
      (() => encrypt(3, 43)).should.throw(TypeError);
    });

    it('should encrypt a text properly', () => {
      encrypt(3, 'ANDELA').should.be.equal('VIYZGV');
    });
  });

  describe('decrypt method', () => {
    it('should raise an error if arguments are less than two', () => {
      (() => decrypt(3)).should.throw();
    });

    it('should throw an error if first argument is not a number', () => {
      (() => decrypt('3', 'andela')).should.throw(TypeError);
    });

    it('should throw an error if second argument is not a string', () => {
      (() => decrypt(3, 43)).should.throw(TypeError);
    });

    it('should encrypt a text properly', () => {
      decrypt(3, 'VIYZGV').should.be.equal('ANDELA');
    });
  })
})