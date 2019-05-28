const FIRST_PAGE = 1;
var current_page = 4; 
var total_pages = 5; 
var boundaries = 1; 
var around = 0;
var ellipsis = false;
var finalString = '';

footer(current_page, total_pages, boundaries, around);

function footer(current_page, total_pages, boundaries, around) {
    ellipsis = false;
    
    for (i = FIRST_PAGE; i <= total_pages; i++) {

        if (currentPage(current_page, i)
          || inBoundaries(i, boundaries, total_pages)
          || aroundCurrent(i, around, current_page)) {
            showPage(i);
        } else {
            ellipsis = true;
        }
    }

    console.log(finalString);
}

function inBoundaries(index, boundaries, total_pages) {
    return index < boundaries + FIRST_PAGE
        || index > total_pages - boundaries;
}

function aroundCurrent(index, around, current_page) {
    return index >= current_page - around 
        && index <= current_page + around;
}

function currentPage(currentPage, index) {
    return currentPage == index;
}

function showPage(i) {
    if (ellipsis == true) {
        finalString += '... ';
        ellipsis = false;
    }
    finalString += i + ' ';
}

module.exports = {
    footer,
    inBoundaries,
    aroundCurrent,
    currentPage,
    showPage
}