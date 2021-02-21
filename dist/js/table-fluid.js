"use strict";

window.tableFluid = function (selector) {
  document.querySelectorAll(selector).forEach(function (table) {
    var headers = [];
    table.querySelectorAll('tr').forEach(function (tr) {
      tr.querySelectorAll('th').forEach(function (th) {
        headers.push(th.innerText);
      });
      tr.querySelectorAll('td').forEach(function (td, index) {
        td.setAttribute('data-th', headers[index]);
        td.innerHTML = "<div class=\"table-cell\">".concat(td.innerHTML, "</div>");
      });
    });
  });
};
//# sourceMappingURL=table-fluid.js.map
