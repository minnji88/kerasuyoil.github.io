(function (window, document){
    'use strict';
    const $toggles = document.querySelectorAll('.toggle'); /* 선택자로 찾는 개념 */ // NodeList
    const $toggleBtn = document.getElementById('toggle-btn'); /* ID 로 찾는 개념 */
    $toggleBtn.addEventListener('click', function(){
        toggleElements();
    });
    window.addEventListener('resize', function(){
        offElements();
    });
    function toggleElements(){ // 보이고 사라지는 개념
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on'); // 토글이란 클래스 선택자를 on 이란 클래스를 지속적으로 토글
        });
    }
    
    function offElements(){ // 사라지는 개념
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on'); // 토글이란 클래스 선택자를 on 이란 클래스를 지속적으로 토글
        });
    }
})(window, document)