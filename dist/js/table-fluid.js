"use strict";

Object.prototype.tableFluid = function () {
  var _self = this;

  if (this.selector) {
    _self = document.querySelectorAll(this.selector);
  }

  _self.forEach(function (item) {
    var headers = [];
    item.querySelectorAll('tr').forEach(function (item) {
      item.querySelectorAll('th').forEach(function (item) {
        headers.push(item.innerText);
      });
      item.querySelectorAll('td').forEach(function (item, index) {
        item.setAttribute('data-th', headers[index]);
        item.innerHTML = '<div class="table-cell">' + item.innerHTML + '</div>';
      });
    });
  });
};