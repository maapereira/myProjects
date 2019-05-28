/*
Num site com paginação queremos incluir um footer a partir do qual poderemos navegar pelas diversas páginas

•Para o efeitos há algumas variáveis disponíveis:
◦$current_page - página atual
◦$total_pages - total de páginas
◦$boundaries - quantas páginas queremos linkar no início e no fim (ou seja,
quantas a partir da página 1 e quantas antes da última página - inclusive)
◦$around - quantas páginas queremos linkar antes e depois da página atual

•Para as páginas que não decidirmos linkar
deveremos apenas mostrar reticências (uma só vez por cada conjunto de páginas a omitir) 

Alguns exemplos:
•$current_page = 4; $total_pages = 5; $boundaries = 1; $around = 0
•Resultado esperado: 1 ... 4 5
•$current_page = 4; $total_pages = 10; $boundaries = 2; $around = 2
•Resultado esperado: 1 2 3 4 5 6 ... 9 10
*/

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