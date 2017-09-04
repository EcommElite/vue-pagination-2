"use strict";

module.exports = function () {
  return function (h) {

    var items = [];

    this.pages.map(function (page) {
      items.push(h(
        "li",
        { "class": "VuePagination__pagination-item page-item " + this.activeClass(page) },
        [h(
          "a",
          { "class": "page-link", attrs: { role: "button"
            },
            on: {
              click: this.setPage.bind(this, page)
            }
          },
          [page]
        )]
      ));
    }.bind(this));

    return h(
      "div",
      { "class": "VuePagination" },
      [h(
        "ul",
        {
          directives: [{
            name: "show",
            value: this.totalPages > 1
          }],

          "class": "pagination VuePagination__pagination" },
        [h(
          "li",
          { "class": "VuePagination__pagination-item page-item VuePagination__pagination-item-prev-page " + this.allowedPageClass(this.page - 1) },
          [h(
            "a",
            { "class": "page-link", attrs: { href: "javascript:void(0);"
              },
              on: {
                click: this.prev.bind(this)
              }
            },
            ["<"]
          )]
        ), h(
            "li",
            { "class": "active" },
            [h(
                "span",
                [this.count]
            )]
        ), h(
          "li",
          { "class": "VuePagination__pagination-item page-item VuePagination__pagination-item-next-page " + this.allowedPageClass(this.page + 1) },
          [h(
            "a",
            { "class": "page-link", attrs: { href: "javascript:void(0);"
              },
              on: {
                click: this.next.bind(this)
              }
            },
            [">"]
          )]
        )]
      )]
    );
  };
};
