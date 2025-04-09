import _ from 'lodash';

// BEGIN
const average = (...arr) => {
    if(arr.length === 0){
        return null;
    }else{
        let result = _.sum(arr)/arr.length;
        return result;
    }
};

export default average;
// END