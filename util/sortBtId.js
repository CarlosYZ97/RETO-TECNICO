const sortBtId = (a, b) => {
    if (a.createdAt > b.createdAt) return -1;
    return 1;
}

module.exports = sortBtId;