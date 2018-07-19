module.exports = (data) => {
    return `
    <h2>${data.name}</h2>
    <div>${data.desc ? data.desc : ""}</div>
    <div>${data.markup}</div>
  `
};