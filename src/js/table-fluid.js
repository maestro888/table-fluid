/**
 * --------------------------------------------------------------------------
 * Responsive Table (v1.0.0): table-fluid.js
 * Copyright (c) 2021 maestro888
 * Licensed under MIT (https://github.com/maestro888/table-fluid/LICENSE.txt)
 * --------------------------------------------------------------------------
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
