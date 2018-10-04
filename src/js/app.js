(function(win, doc) {

  'use strict';

  var $tab = doc.getElementById('tabs');
  var $code = doc.getElementById('code');
  var INTERVAL;

  var props = {
    rx: 5,
    ry: 340,
    rz: 0,
    tz: 0,
    tx: 0,
    ty: 0,
    sx: 1.30,
    sy: 1.30,
    perspective: 0
  };

  function init() {
    bindEvent();
    applyStyles();
  }

  function bindEvent() {
    var els = doc.querySelectorAll('.ctrls');
    els.forEach(function(el) {
      el.addEventListener('input', change, false);
    });
  }

  function change(e) {
    e.preventDefault();

    var el = e.target;
    var type = el.getAttribute('data-type');
    var rule = el.getAttribute('data-rule');
    var n = el.value;

    if(rule) {
      n = new Function(`return ${rule}`).call(el, []);
    }

    props[type] = n;

    applyStyles();
  };

  function applyStyles() {
    clearInterval(INTERVAL);
    INTERVAL = setTimeout(function() {
      var str = 
        `
        transform: 
          perspective(${props.perspective}px) 
          rotateX(${props.rx}deg) 
          rotateY(${props.ry}deg) 
          rotateZ(${props.rz}deg)
          translateZ(${props.tz}px)
          translateX(${props.tx}px)
          translateY(${props.ty}px)
          scaleX(${props.sx})
          scaleY(${props.sy})
        `;
      $code.innerHTML = str;
      $tab.setAttribute('style', str);
    }, 10);
  };

  init();
}(window, document))
