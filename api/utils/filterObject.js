const filterObject = (obj, ...allowedFields) => {
    const newObj = {};

    // Get the obj propierties
    Object.keys(obj).forEach((element) => {
        if (allowedFields.includes(element)) {
            newObj[element] = obj[element];
        }
    });

    return newObj;
};

module.exports = { filterObject: filterObject };
