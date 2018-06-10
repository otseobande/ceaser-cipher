const encrypt = (shift, text) => {
  if(typeof shift !== 'number'){
    throw TypeError('Shift should be a number');
  }
  if(typeof text !== 'string'){
    throw TypeError('Text should be string');
  }
  
  if(!text.match(/^[a-zA-z]+$/)){
    throw Error('text must contain only alphabets');
  }

  const encryptedText = text.toUpperCase()
    .split('')
    .map((_, index) => {
      const charCode = text.charCodeAt(index);

      const shiftSequence = charCode - shift - 65;
      const modded = shiftSequence < 0 
        ? 26 - Math.abs(shiftSequence) % 26 
        : shiftSequence % 26;
      const shiftedCharCode = modded + 65;

      return String.fromCharCode(shiftedCharCode);
    })
    .join('');

  return encryptedText
};

const decrypt = (shift, text) => {
  const rightShift = shift * -1;

  return encrypt(rightShift, text);
};

export {
  encrypt,
  decrypt
}
