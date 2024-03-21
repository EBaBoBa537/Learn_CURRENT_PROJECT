var elements_p = document.querySelectorAll(".p");
var elements_image = document.querySelectorAll(".image");
var elements_block = document.querySelectorAll(".block");
var elements_spisok = document.querySelectorAll(".spisok");
var elements_zagolovok = document.querySelectorAll(".zagolovok");
var elements_podzagolovok = document.querySelectorAll(".podzagolovok");



var redact_text_block = document.createElement("div");
redact_text_block.id = "redact_text_block";
redact_text_block.className = "redact_elements";
redact_text_block.innerHTML = `
    <div id="redact_izmenit_text">Изменить текст</div>
    <div id="redact_formatirovanie" class="redact_in_in">Форматирование</div>
    <div id="redact_text_up" class="redact_up" style="margin-right: 0px;"><img src="materials/images/redact_1.png"></div>
    <div id="redact_text_down" class="redact_down" style="margin-right: 0px;"><img src="materials/images/redact_2.png"></div>
    <div id="redact_text_delete" class="redact_delete" style="margin-right: 0px;"><img src="materials/images/redact_3.png"></div>
`;
var redact_izmenit_text = redact_text_block.querySelector("#redact_izmenit_text");
var redact_formatirovanie = redact_text_block.querySelector("#redact_formatirovanie");
var redact_text_up = redact_text_block.querySelector("#redact_text_up");
var redact_text_down = redact_text_block.querySelector("#redact_text_down");
var redact_text_delete = redact_text_block.querySelector("#redact_text_delete");



var redact_image_block = document.createElement("div");
redact_image_block.id = "redact_image_block";
redact_image_block.className = "redact_elements";
redact_image_block.innerHTML = `
    <div id="redact_zamenit_foto">Заменить</div>
    <div id="redact_razmer_foto"><span>Ширина:</span><input type="range" min="20" max="100" step="1" value="50"></div>
    <div id="redact_image_up" class="redact_up" style="margin-right: 0px;"><img src="materials/images/redact_1.png"></div>
    <div id="redact_image_down" class="redact_down" style="margin-right: 0px;"><img src="materials/images/redact_2.png"></div>
    <div id="redact_image_delete" class="redact_delete" style="margin-right: 0px;"><img src="materials/images/redact_3.png"></div>
`;
var redact_zamenit_foto = redact_image_block.querySelector("#redact_zamenit_foto");
var redact_image_up = redact_image_block.querySelector("#redact_image_up");
var redact_image_down = redact_image_block.querySelector("#redact_image_down");
var redact_image_delete = redact_image_block.querySelector("#redact_image_delete");



var redact_block_block = document.createElement("div");
redact_block_block.id = "redact_block_block";
redact_block_block.className = "redact_elements";
redact_block_block.innerHTML = `
    <div id="redact_izmenit_block">Изменить текст</div>
    <div id="redact_colors"><span>Цвета:</span><div id="redact_color_zalivka" class="redact_in_in"></div><b style="font-weight: normal; cursor: default;">/</b><div id="redact_color_kontur" class="redact_in_in"></div></div>
    <div id="redact_block_up" class="redact_up" style="margin-right: 0px;"><img src="materials/images/redact_1.png"></div>
    <div id="redact_block_down" class="redact_down" style="margin-right: 0px;"><img src="materials/images/redact_2.png"></div>
    <div id="redact_block_delete" class="redact_delete" style="margin-right: 0px;"><img src="materials/images/redact_3.png"></div>
`;
var redact_izmenit_block = redact_block_block.querySelector("#redact_izmenit_block");
var redact_color_zalivka = redact_block_block.querySelector("#redact_color_zalivka");
var redact_color_kontur = redact_block_block.querySelector("#redact_color_kontur");
var redact_block_up = redact_block_block.querySelector("#redact_block_up");
var redact_block_down = redact_block_block.querySelector("#redact_block_down");
var redact_block_delete = redact_block_block.querySelector("#redact_block_delete");



var redact_spisok_block = document.createElement("div");
redact_spisok_block.id = "redact_spisok_block";
redact_spisok_block.className = "redact_elements";
redact_spisok_block.innerHTML = `
    <div id="redact_add_element">Добавить пункт</div>
    <div id="redact_delete_element">Удалить пункт</div>
    <div id="redact_znachok"><span>Значок:</span> <div id="redact_znachok_znachok" class="redact_in_in"><li>Текст</li></div> </div>
    <div id="redact_spisok_up" class="redact_up" style="margin-right: 0px;"><img src="materials/images/redact_1.png"></div>
    <div id="redact_spisok_down" class="redact_down" style="margin-right: 0px;"><img src="materials/images/redact_2.png"></div>
    <div id="redact_spisok_delete" class="redact_delete" style="margin-right: 0px;"><img src="materials/images/redact_3.png"></div>
`;
var redact_add_element = redact_spisok_block.querySelector("#redact_add_element");
var redact_delete_element = redact_spisok_block.querySelector("#redact_delete_element");
var redact_znachok_znachok = redact_spisok_block.querySelector("#redact_znachok_znachok");
var redact_spisok_up = redact_spisok_block.querySelector("#redact_spisok_up");
var redact_spisok_down = redact_spisok_block.querySelector("#redact_spisok_down");
var redact_spisok_delete = redact_spisok_block.querySelector("#redact_spisok_delete");



var redact_zagolovok_block = document.createElement("div");
redact_zagolovok_block.id = "redact_zagolovok_block";
redact_zagolovok_block.className = "redact_elements";
redact_zagolovok_block.innerHTML = `
    <div id="redact_izmenit_zagolovok">Изменить текст</div>
    <div id="redact_zagolovok_up" class="redact_up" style="margin-right: 0px;"><img src="materials/images/redact_1.png"></div>
    <div id="redact_zagolovok_down" class="redact_down" style="margin-right: 0px;"><img src="materials/images/redact_2.png"></div>
    <div id="redact_zagolovok_delete" class="redact_delete" style="margin-right: 0px;"><img src="materials/images/redact_3.png"></div>
`;
var redact_izmenit_zagolovok = redact_zagolovok_block.querySelector("#redact_izmenit_zagolovok");
var redact_zagolovok_up = redact_zagolovok_block.querySelector("#redact_zagolovok_up");
var redact_zagolovok_down = redact_zagolovok_block.querySelector("#redact_zagolovok_down");
var redact_zagolovok_delete = redact_zagolovok_block.querySelector("#redact_zagolovok_delete");



var redact_podzagolovok_block = document.createElement("div");
redact_podzagolovok_block.id = "redact_podzagolovok_block";
redact_podzagolovok_block.className = "redact_elements";
redact_podzagolovok_block.innerHTML = `
    <div id="redact_izmenit_podzagolovok">Изменить текст</div>
    <div id="redact_podzagolovok_up" class="redact_up" style="margin-right: 0px;"><img src="materials/images/redact_1.png"></div>
    <div id="redact_podzagolovok_down" class="redact_down" style="margin-right: 0px;"><img src="materials/images/redact_2.png"></div>
    <div id="redact_podzagolovok_delete" class="redact_delete" style="margin-right: 0px;"><img src="materials/images/redact_3.png"></div>
`;
var redact_izmenit_podzagolovok = redact_podzagolovok_block.querySelector("#redact_izmenit_podzagolovok");
var redact_podzagolovok_up = redact_podzagolovok_block.querySelector("#redact_podzagolovok_up");
var redact_podzagolovok_down = redact_podzagolovok_block.querySelector("#redact_podzagolovok_down");
var redact_podzagolovok_delete = redact_podzagolovok_block.querySelector("#redact_podzagolovok_delete");



var redact_formatirovanie_block = document.createElement("div");
redact_formatirovanie_block.id = "redact_formatirovanie_block";
redact_formatirovanie_block.className = "extra_redact_elements";
redact_formatirovanie_block.innerHTML = `
    <span>Форматирование текста</span>
    <div class="in_extra">
        <div class="in_extra_line">
            <div id="redact_text_bold">Жирный</div>
            <div id="redact_text_italic">Курсив</div>
            <div id="redact_text_underlined">Подчеркнутый</div>
            <div id="redact_text_font">Шрифт</div>
        </div>
        <div class="in_extra_line">
            <div id="redact_text_crossed">Зачеркнутый</div>
            <div id="redact_text_highlighted">
                <span>Выделение:</span>
                <div id="redact_text_highlight_yellow"></div>
                <div id="redact_text_highlight_green"></div>
                <div id="redact_text_highlight_blue"></div>
                <div id="redact_text_highlight_red"></div>
            </div>
        </div>
        <div class="in_extra_line">
            <div id="redact_text_color">
                <span>Цвет:</span> 
                <div id="redact_text_color_red"></div>
                <div id="redact_text_color_purple"></div>
                <div id="redact_text_color_orange"></div>
                <div id="redact_text_color_darkblue"></div>
                <div id="redact_text_color_green"></div>
                <div id="redact_text_color_yellow"></div>
                <div id="redact_text_color_lightgrey"></div>
                <div id="redact_text_color_darkgreen"></div>
                <div id="redact_text_color_blue"></div>
                <div id="redact_text_color_lightgreen"></div>
            </div>
        </div>
    </div>
    <img src="materials/images/redact_4.png">
`;
var redact_text_bold = redact_formatirovanie_block.querySelector("#redact_text_bold");
var redact_text_italic = redact_formatirovanie_block.querySelector("#redact_text_italic");
var redact_text_underlined = redact_formatirovanie_block.querySelector("#redact_text_underlined");
var redact_text_font = redact_formatirovanie_block.querySelector("#redact_text_font");
var redact_text_crossed = redact_formatirovanie_block.querySelector("#redact_text_crossed");
var redact_text_highlight_yellow = redact_formatirovanie_block.querySelector("#redact_text_highlight_yellow");
var redact_text_highlight_green = redact_formatirovanie_block.querySelector("#redact_text_highlight_green");
var redact_text_highlight_blue = redact_formatirovanie_block.querySelector("#redact_text_highlight_blue");
var redact_text_highlight_red = redact_formatirovanie_block.querySelector("#redact_text_highlight_red");
var redact_text_color_red = redact_formatirovanie_block.querySelector("#redact_text_color_red");
var redact_text_color_purple = redact_formatirovanie_block.querySelector("#redact_text_color_purple");
var redact_text_color_orange = redact_formatirovanie_block.querySelector("#redact_text_color_orange");
var redact_text_color_darkblue = redact_formatirovanie_block.querySelector("#redact_text_color_darkblue");
var redact_text_color_green = redact_formatirovanie_block.querySelector("#redact_text_color_green");
var redact_text_color_yellow = redact_formatirovanie_block.querySelector("#redact_text_color_yellow");
var redact_text_color_lightgrey = redact_formatirovanie_block.querySelector("#redact_text_color_lightgrey");
var redact_text_color_darkgreen = redact_formatirovanie_block.querySelector("#redact_text_color_darkgreen");
var redact_text_color_blue = redact_formatirovanie_block.querySelector("#redact_text_color_blue");
var redact_text_color_lightgreen = redact_formatirovanie_block.querySelector("#redact_text_color_lightgreen");



var redact_dobavlenie_block = document.createElement("div");
redact_dobavlenie_block.id = "redact_dobavlenie_block";
redact_dobavlenie_block.className = "extra_redact_elements";
redact_dobavlenie_block.innerHTML = `
    <span>Добавление элемента</span>
    <div class="in_extra">
        <div id="redact_elem_text">Текст … … … … … … …</div>
        <div id="redact_elem_image">Изображение<img src="materials/images/redact_dobavlenie_1.png"></div>
        <div id="redact_elem_block">Блок … … … … … … … … …</div>
        <div id="redact_elem_spisok"><ul><li>Список</li><li>...</li><li>...</li></ul></div>
        <div id="redact_elem_razdel">Раздел</div>
        <div id="redact_elem_podrazdel"><b>#</b>Подраздел</div>
    </div>
    <img src="materials/images/redact_4.png">
`;
var redact_elem_text = redact_dobavlenie_block.querySelector("#redact_elem_text");
var redact_elem_image = redact_dobavlenie_block.querySelector("#redact_elem_image");
var redact_elem_block = redact_dobavlenie_block.querySelector("#redact_elem_block");
var redact_elem_spisok = redact_dobavlenie_block.querySelector("#redact_elem_spisok");
var redact_elem_razdel = redact_dobavlenie_block.querySelector("#redact_elem_razdel");
var redact_elem_podrazdel = redact_dobavlenie_block.querySelector("#redact_elem_podrazdel");



var redact_zalivka_block = document.createElement("div");
redact_zalivka_block.id = "redact_zalivka_block";
redact_zalivka_block.className = "extra_redact_elements";
redact_zalivka_block.innerHTML = `
    <span>Цвет заливки</span>
    <div class="in_extra">
        <div id="redact_text_zalivka_none"></div>
        <div id="redact_text_zalivka_red"></div>
        <div id="redact_text_zalivka_green"></div>
        <div id="redact_text_zalivka_blue"></div>
        <div id="redact_text_zalivka_yellow"></div>
        <div id="redact_text_zalivka_purple"></div>
        <div id="redact_text_zalivka_grey"></div>
        <div id="redact_text_zalivka_darkred"></div>
        <div id="redact_text_zalivka_darkgreen"></div>
        <div id="redact_text_zalivka_darkblue"></div>
        <div id="redact_text_zalivka_darkyellow"></div>
        <div id="redact_text_zalivka_darkpurple"></div>
        <div id="redact_text_zalivka_darkgrey"></div>
        <div id="redact_text_zalivka_black"></div>
        <div id="redact_text_zalivka_cream"></div>
    </div>
    <img src="materials/images/redact_4.png">
`;
var redact_text_zalivka_none = redact_zalivka_block.querySelector("#redact_text_zalivka_none");
var redact_text_zalivka_red = redact_zalivka_block.querySelector("#redact_text_zalivka_red");
var redact_text_zalivka_green = redact_zalivka_block.querySelector("#redact_text_zalivka_green");
var redact_text_zalivka_blue = redact_zalivka_block.querySelector("#redact_text_zalivka_blue");
var redact_text_zalivka_yellow = redact_zalivka_block.querySelector("#redact_text_zalivka_yellow");
var redact_text_zalivka_purple = redact_zalivka_block.querySelector("#redact_text_zalivka_purple");
var redact_text_zalivka_grey = redact_zalivka_block.querySelector("#redact_text_zalivka_grey");
var redact_text_zalivka_darkred = redact_zalivka_block.querySelector("#redact_text_zalivka_darkred");
var redact_text_zalivka_darkgreen = redact_zalivka_block.querySelector("#redact_text_zalivka_darkgreen");
var redact_text_zalivka_darkblue = redact_zalivka_block.querySelector("#redact_text_zalivka_darkblue");
var redact_text_zalivka_darkyellow = redact_zalivka_block.querySelector("#redact_text_zalivka_darkyellow");
var redact_text_zalivka_darkpurple = redact_zalivka_block.querySelector("#redact_text_zalivka_darkpurple");
var redact_text_zalivka_darkgrey = redact_zalivka_block.querySelector("#redact_text_zalivka_darkgrey");
var redact_text_zalivka_black = redact_zalivka_block.querySelector("#redact_text_zalivka_black");
var redact_text_zalivka_cream = redact_zalivka_block.querySelector("#redact_text_zalivka_cream");



var redact_kontur_block = document.createElement("div");
redact_kontur_block.id = "redact_kontur_block";
redact_kontur_block.className = "extra_redact_elements";
redact_kontur_block.innerHTML = `
    <span>Цвет контура</span>
    <div class="in_extra">
        <div id="redact_text_kontur_none"></div>
        <div id="redact_text_kontur_red"></div>
        <div id="redact_text_kontur_green"></div>
        <div id="redact_text_kontur_blue"></div>
        <div id="redact_text_kontur_yellow"></div>
        <div id="redact_text_kontur_purple"></div>
        <div id="redact_text_kontur_grey"></div>
        <div id="redact_text_kontur_darkred"></div>
        <div id="redact_text_kontur_darkgreen"></div>
        <div id="redact_text_kontur_darkblue"></div>
        <div id="redact_text_kontur_darkyellow"></div>
        <div id="redact_text_kontur_darkpurple"></div>
        <div id="redact_text_kontur_darkgrey"></div>
        <div id="redact_text_kontur_black"></div>
        <div id="redact_text_kontur_cream"></div>
    </div>
    <img src="materials/images/redact_4.png">
`;
var redact_text_kontur_none = redact_kontur_block.querySelector("#redact_text_kontur_none");
var redact_text_kontur_red = redact_kontur_block.querySelector("#redact_text_kontur_red");
var redact_text_kontur_green = redact_kontur_block.querySelector("#redact_text_kontur_green");
var redact_text_kontur_blue = redact_kontur_block.querySelector("#redact_text_kontur_blue");
var redact_text_kontur_yellow = redact_kontur_block.querySelector("#redact_text_kontur_yellow");
var redact_text_kontur_purple = redact_kontur_block.querySelector("#redact_text_kontur_purple");
var redact_text_kontur_grey = redact_kontur_block.querySelector("#redact_text_kontur_grey");
var redact_text_kontur_darkred = redact_kontur_block.querySelector("#redact_text_kontur_darkred");
var redact_text_kontur_darkgreen = redact_kontur_block.querySelector("#redact_text_kontur_darkgreen");
var redact_text_kontur_darkblue = redact_kontur_block.querySelector("#redact_text_kontur_darkblue");
var redact_text_kontur_darkyellow = redact_kontur_block.querySelector("#redact_text_kontur_darkyellow");
var redact_text_kontur_darkpurple = redact_kontur_block.querySelector("#redact_text_kontur_darkpurple");
var redact_text_kontur_darkgrey = redact_kontur_block.querySelector("#redact_text_kontur_darkgrey");
var redact_text_kontur_black = redact_kontur_block.querySelector("#redact_text_kontur_black");
var redact_text_kontur_cream = redact_kontur_block.querySelector("#redact_text_kontur_cream");



var redact_znachok_block = document.createElement("div");
redact_znachok_block.id = "redact_znachok_block";
redact_znachok_block.className = "extra_redact_elements";
redact_znachok_block.innerHTML = `
    <span>Выбрать значок</span>
    <div class="in_extra">
        <img id="redact_znachok_type_1" src="materials/images/type_1.png">
        <img id="redact_znachok_type_2" src="materials/images/type_2.png">
        <img id="redact_znachok_type_3" src="materials/images/type_3.png">
    </div>
    <img src="materials/images/redact_4.png">
`;
var redact_znachok_type_1 = redact_znachok_block.querySelector("#redact_znachok_type_1");
var redact_znachok_type_2 = redact_znachok_block.querySelector("#redact_znachok_type_2");
var redact_znachok_type_3 = redact_znachok_block.querySelector("#redact_znachok_type_3");



var delete_yes_no = document.createElement("div");
delete_yes_no.id = "delete_yes_no";
delete_yes_no.className = "extra_redact_elements";
delete_yes_no.innerHTML = `
    <span>Удалить?</span>
    <div class="over_yes_no">
        <div id="delete_yes">Да</div>
        <div id="delete_no">Нет</div>
    </div>
`;
var delete_yes = delete_yes_no.querySelector("#delete_yes");
var delete_no = delete_yes_no.querySelector("#delete_no");



var delete_page_yes_no = document.createElement("div");
delete_page_yes_no.id = "delete_page_yes_no";
delete_page_yes_no.className = "extra_redact_elements";
delete_page_yes_no.innerHTML = `
    <span>Удалить?</span>
    <div class="over_yes_no">
        <div id="delete_page_yes">Да</div>
        <div id="delete_page_no">Нет</div>
    </div>
`;
var delete_page_yes = delete_page_yes_no.querySelector("#delete_page_yes");
var delete_page_no = delete_page_yes_no.querySelector("#delete_page_no");



/* ----------------- redact_elements ------------------------------------------------------------------------------------------- */


let activeBlock = null;

function handleHoverEvents(element, redactBlock) {
    element.addEventListener("mouseover", function() {
        if (!activeBlock || activeBlock !== element) {
            element.querySelector(".in_element").className = "in_element hovered";
        }
    });
    element.addEventListener("mouseout", function() {
        if (!activeBlock || activeBlock !== element) {
            element.querySelector(".in_element").className = "in_element none";
        }
    });
    element.addEventListener("click", function(event) {
        event.stopPropagation();
        if (activeBlock !== element) {
            if (activeBlock) {
                deactivateActiveBlock();
            }
            element.querySelector(".in_element").className = "in_element clicked";
            element.appendChild(redactBlock);
            activeBlock = element;
        }
        else {
            if (!event.target.closest('.redact_in_in')) {
                if(activeBlock.querySelector(".extra_redact_elements")) {
                    activeBlock.removeChild(activeBlock.querySelector(".extra_redact_elements"));
                }
            }
        }
    });
}

function deactivateActiveBlock() {
    if (activeBlock) {
        activeBlock.querySelector(".in_element").className = "in_element none";
        activeBlock.removeChild(activeBlock.querySelector(".redact_elements"));
        if(activeBlock.querySelector(".extra_redact_elements")) {
            activeBlock.removeChild(activeBlock.querySelector(".extra_redact_elements"));
        }
        activeBlock = null;
    }
}

document.addEventListener("click", function(event) {
    const clickedElement = event.target;
    if (activeBlock && (clickedElement !== activeBlock && !activeBlock.contains(clickedElement))) {
        deactivateActiveBlock();
    }
});

elements_p.forEach(p => { handleHoverEvents(p, redact_text_block); });
elements_image.forEach(image => { handleHoverEvents(image, redact_image_block); });
elements_block.forEach(block => { handleHoverEvents(block, redact_block_block); });
elements_spisok.forEach(spisok => { handleHoverEvents(spisok, redact_spisok_block); });
elements_zagolovok.forEach(zagolovok => { handleHoverEvents(zagolovok, redact_zagolovok_block); });
elements_podzagolovok.forEach(podzagolovok => { handleHoverEvents(podzagolovok, redact_podzagolovok_block); });



/* ----------------- extra_redact_elements ------------------------------------------------------------------------------------ */


function removeAllExtraRedactElements(parent) {
    var elements = parent.querySelectorAll(".extra_redact_elements");
    if (elements.length > 0) {
        elements.forEach(function(element) {
            parent.removeChild(element);
        });
    }
}

redact_formatirovanie.addEventListener('click', function() {
    var parent = redact_formatirovanie.parentNode.parentNode;
    removeAllExtraRedactElements(parent);
    parent.appendChild(redact_formatirovanie_block);
});
redact_color_zalivka.addEventListener('click', function() {
    var parent = redact_color_zalivka.parentNode.parentNode.parentNode;
    removeAllExtraRedactElements(parent);
    parent.appendChild(redact_zalivka_block);
});
redact_color_kontur.addEventListener('click', function() {
    var parent = redact_color_kontur.parentNode.parentNode.parentNode;
    removeAllExtraRedactElements(parent);
    parent.appendChild(redact_kontur_block);
});
redact_znachok_znachok.addEventListener('click', function() {
    var parent = redact_znachok_znachok.parentNode.parentNode.parentNode;
    removeAllExtraRedactElements(parent);
    parent.appendChild(redact_znachok_block);
});


redact_text_delete.addEventListener('click', function() {
    var parent = redact_text_delete.parentNode.parentNode;
    // removeAllExtraRedactElements(parent);
    parent.appendChild(delete_yes_no);
});
redact_image_delete.addEventListener('click', function() {
    var parent = redact_image_delete.parentNode.parentNode;
    // removeAllExtraRedactElements(parent);
    parent.appendChild(delete_yes_no);
});
redact_block_delete.addEventListener('click', function() {
    var parent = redact_block_delete.parentNode.parentNode;
    // removeAllExtraRedactElements(parent);
    parent.appendChild(delete_yes_no);
});
redact_spisok_delete.addEventListener('click', function() {
    var parent = redact_spisok_delete.parentNode.parentNode;
    // removeAllExtraRedactElements(parent);
    parent.appendChild(delete_yes_no);
});
redact_zagolovok_delete.addEventListener('click', function() {
    var parent = redact_zagolovok_delete.parentNode.parentNode;
    // removeAllExtraRedactElements(parent);
    parent.appendChild(delete_yes_no);
});
redact_podzagolovok_delete.addEventListener('click', function() {
    var parent = redact_podzagolovok_delete.parentNode.parentNode;
    // removeAllExtraRedactElements(parent);
    parent.appendChild(delete_yes_no);
});