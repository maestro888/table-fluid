/**
 * --------------------------------------------------------------------------
 * Responsive Table (v1.2.4): table-fluid.js
 * Copyright (c) 2021 maestro888
 * Licensed under MIT (https://github.com/maestro888/table-fluid/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

globalThis.tableFluid = (selector) => {
  document.querySelectorAll(selector).forEach((table) => {
    let headers = [];
    table.querySelectorAll('tr').forEach((tr) => {
      tr.querySelectorAll('th').forEach((th) => {
        headers.push(th.innerText);
      });
      tr.querySelectorAll('td').forEach((td, index) => {
        td.setAttribute('data-th', headers[index]);
        td.innerHTML = `<div class="table-cell">${td.innerHTML}</div>`;
      });
    });
  });
};
