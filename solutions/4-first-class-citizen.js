const run = (text) => {
    // BEGIN
    const takeLast = (str, n) => {
      if (str === '' || str.length < n) {
        return null;
      }
      const result = [];
      for (let i = str.length - 1; i >= str.length - n; i--) {
        result.push(str[i]); 
      }
      return result.join('');
    };
    // END
  
    return takeLast(text, 4);
  };
  
export default run;