/**
 * Responsive table function tableFluid().
 * Adding data-th attributes and wrapping
 * table cell content in table.
 */
Object.prototype.tableFluid = function() {
  let _self = this;

  if (this.selector) {
    _self = document.querySelectorAll(this.selector);
  }

  _self.forEach((item) => {
    let headers = [];
    item.querySelectorAll('tr').forEach((item) => {
      item.querySelectorAll('th').forEach((item) => {
        headers.push(item.innerText);
      });
      item.querySelectorAll('td').forEach((item, index) => {
        item.setAttribute('data-th', headers[index]);
        item.innerHTML = '<div class="table-cell">' + item.innerHTML + '</div>';
      });
    });
  });
};
