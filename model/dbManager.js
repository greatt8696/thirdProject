class DbManager {
  data = [];
  column = [];

  /**
   * @param {Array} datas
   * @return {null}
   */

  setData = (datas) => {
    this.data = datas;
    this.columns = Object.keys(datas[0]);
    console.log(this.data, this.columns);
  };


  /**
   * @param {Element} tableElement
   * @param {Array} columnList
   * @param {Boolean} viewRowNum
   * @return {Element}
   */
  
  createTableEl = (tableElement, columnList, viewRowNum = false) => {
    const columns = [...this.columns];
    const datas = [...this.data];

    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const trs = [];
    const ths = [];

    //
    columns.map((column) => {
      const th = document.createElement("th");
      th.setAttribute("scope", "col");
      th.innerHTML = column;
      thead.appendChild(th);
      ths.push(th);
    });

    datas.map((rowData, row) => {
      const tr = document.createElement("tr");

      if (viewRowNum) {
        const th = document.createElement("th");
        th.setAttribute("scope", row);
        th.innerHTML = row + 1;
        tr.appendChild(th);
      }

      for (const key in rowData) {
        const val = rowData[key];
        const td = document.createElement("td");
        td.innerHTML = val;
        tr.appendChild(td);
      }
      // const td = document.createElement("td");
      // tbody.appendChild(th);

      tbody.appendChild(tr);
    });
    tableElement.appendChild(thead);
    tableElement.appendChild(tbody);
  };
}

// module.exports = DbManager;
