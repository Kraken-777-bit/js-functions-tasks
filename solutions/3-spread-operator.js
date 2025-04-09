// BEGIN
const convert = (...dates) => {
    if (dates.length === 0) {
        return [];
    }

    const result = [];
    for (const date of dates) {
        const [year, month, day] = date; 
        const formattedDate = new Date(year, month, day).toDateString();
        result.push(formattedDate);
    }

    return result;
};

export default convert;
// END
