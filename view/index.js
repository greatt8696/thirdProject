document.onload = () => {};
const dbManager = new DbManager();
$.getJSON("/getDatas", (datas) => {
  dbManager.setData(datas);
  dbManager.createTableEl(table);
});

$.getJSON("/getDatas2", (datas) => {
  dbManager.setData(datas);
  dbManager.createTableEl(table2);
});

$.getJSON("/getDatas3", (datas) => {
  dbManager.setData(datas);
  dbManager.createTableEl(table3);
});
