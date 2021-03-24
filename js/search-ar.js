$(document).ready(function () {
    $(".table").fancyTable({
        sortColumn: 0, // column number for initial sorting
        sortOrder: "descending", // 'desc', 'descending', 'asc', 'ascending', -1 (descending) and 1 (ascending)
        sortable: true,
        pagination: true,
        paginationClass: "btn btn-light",
        paginationClassActive: "active",
        inputStyle: "",
        inputPlaceholder: "بحث...",
        pagClosest: 4,
        perPage: 4,
        searchable: true,
        globalSearch: true,
        globalSearchExcludeColumns: [2, 5], // exclude column 2 & 5
    });

    $("tr.fancySearchRow th").attr("colspan", 3);
});
