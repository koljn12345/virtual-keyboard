const KEYS = [
  [
    ['Backquote', '`', '~', 'ё', 'Ё'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '@', '2', '"'],
    ['Digit3', '3', '#', '3', '№'],
    ['Digit4', '4', '$', '4', ';'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', '^', '6', ':'],
    ['Digit7', '7', '&', '7', '?'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '-', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'system']
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'system'],
    ['KeyQ', 'q', 'Q', 'й', 'Й'],
    ['KeyW', 'w', 'W', 'ц', 'Ц'],
    ['KeyE', 'e', 'E', 'у', 'У'],
    ['KeyR', 'r', 'R', 'к', 'К'],
    ['KeyT', 't', 'T', 'е', 'Е'],
    ['KeyY', 'y', 'Y', 'н', 'Н'],
    ['KeyU', 'u', 'U', 'г', 'Г'],
    ['KeyI', 'i', 'I', 'ш', 'Ш'],
    ['KeyO', 'o', 'O', 'щ', 'Щ'],
    ['KeyP', 'p', 'P', 'з', 'З'],
    ['BracketLeft', '[', '{', 'х', 'Х'],
    ['BracketRight', ']', '}', 'ъ', 'Ъ'],
    ['Backslash', '\\', '|', '\\', '/'],
    ['Delete', 'Delete', 'Delete', 'Delete', 'Delete', 'system']
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'system'],
    ['KeyA', 'a', 'A', 'ф', 'Ф'],
    ['KeyS', 's', 'S', 'ы', 'Ы'],
    ['KeyD', 'd', 'D', 'в', 'В'],
    ['KeyF', 'f', 'F', 'а', 'А'],
    ['KeyG', 'g', 'G', 'п', 'П'],
    ['KeyH', 'h', 'H', 'р', 'Р'],
    ['KeyJ', 'j', 'J', 'о', 'О'],
    ['KeyK', 'k', 'K', 'л', 'Л'],
    ['KeyL', 'l', 'L', 'д', 'Д'],
    ['Semicolon', ';', ':', 'ж', 'Ж'],
    ['Quote', '\'', '\'', 'э', 'Э'],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter', 'system']
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift', 'system'],
    ['KeyZ', 'z', 'Z', 'я', 'Я'],
    ['KeyX', 'x', 'X', 'ч', 'Ч'],
    ['KeyC', 'c', 'C', 'с', 'С'],
    ['KeyV', 'v', 'V', 'м', 'М'],
    ['KeyB', 'b', 'B', 'и', 'И'],
    ['KeyN', 'n', 'N', 'т', 'Т'],
    ['KeyM', 'm', 'M', 'ь', 'Ь'],
    ['Comma', ',', '<', 'б', 'Б'],
    ['Period', '.', '>', 'ю', 'Ю'],
    ['Slash', '/', '?', '.', ','],
    ['ArrowUp', '↑', '↑', '↑', '↑'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift', 'system']
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'system'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win', 'system'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt', 'system'],
    ['Space', 'Space', 'Space', 'Space', 'Space', 'system'],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt', 'system'],
    ['ArrowLeft', '←', '←', '←', '←'],
    ['ArrowDown', '↓', '↓', '↓', '↓'],
    ['ArrowRight', '→', '→', '→', '→'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'system']
  ]
];
window.onload = () => {
  let capsStatus = 0;
  let lang = 0;
  let col;
  if (localStorage.lang) lang = Number(localStorage.lang);
  const textarea = document.createElement('textarea');
  document.body.append(textarea);
  textarea.focus();
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  document.body.append(keyboard);
  const text = document.createElement('p');
  text.innerText = 'Для переключения языка комбинация: левыe shift + alt';
  document.body.append(text);
  if (lang === 0) col = 1;
  else col = 3;
  for (let i = 0; i < KEYS.length; i += 1) {
    let row = document.createElement('div');
    row.className = 'row';
    keyboard.append(row);
    for (let j = 0; j < KEYS[i].length; j += 1) {
      let key = document.createElement('div');
      key.className = 'key ' + KEYS[i][j][0] + ' ' + (KEYS[i][j][5] ? KEYS[i][j][5] : '');
      key.innerHTML = KEYS[i][j][col];
      row.append(key);
    }
  }
  const printKey = () => {
    let rowList = document.querySelectorAll('.row');
    for (let i = 0; i < rowList.length; i += 1) {
      let keyList = rowList[i].querySelectorAll('.key');
      for (let j = 0; j < keyList.length; j += 1) {
        keyList[j].innerHTML = KEYS[i][j][col];
      }
    }
  };

  function ShiftInsert(flag) {
    if (lang === 0) {
      if (capsStatus === 0 && flag === 'down') col = 2;
      else if (capsStatus === 1 && flag === 'up') col = 2;
      else col = 1;
    } else if (capsStatus === 0 && flag === 'down') col = 4;
    else if (capsStatus === 1 && flag === 'up') col = 4;
    else col = 3;
    printKey();
  }

  function CapsLockToggle() {
    if (lang === 0) {
      if (capsStatus === 0) col = 2;
      else col = 1;
    } else if (capsStatus === 0) col = 4;
    else col = 3;
    capsStatus = (capsStatus + 1) % 2;
    printKey();
  }

  function ChangeLang() {
    if (lang === 1) {
      lang = 0;
      localStorage.lang = 0;
    } else {
      lang = 1;
      localStorage.lang = 1;
    }
    if (lang === 0) {
      if (capsStatus === 0) col = 2;
      else col = 1;
    } else if (capsStatus === 0) col = 4;
    else col = 3;
    printKey();
  }
  const Delete = () => {
    if (textarea.value) {
      if (textarea.selectionStart === textarea.selectionEnd) textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1);
      else textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd);
    }
  };
  const Backspace = () => {
    if (textarea.selectionStart) {
      if (textarea.selectionStart === textarea.selectionEnd) textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd);
      else textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd);
    }
  };
  const Space = () => {
    if (textarea.selectionStart === textarea.selectionEnd) {
      textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd);
      textarea.selectionStart += 1;
    } else textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd);
  };
  const Enter = () => {
    if (textarea.selectionStart === textarea.selectionEnd) {
      textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd);
    } else textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd);
    textarea.selectionStart += 1;
  };
  const Tab = () => {
    if (textarea.selectionStart === textarea.selectionEnd) {
      textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd);
      textarea.selectionStart += 1;
    }
  };
  const addSymbol = (symbol) => {
    if (textarea.selectionStart === textarea.selectionEnd) {
      textarea.setRangeText(symbol, textarea.selectionStart, textarea.selectionEnd);
    } else textarea.setRangeText(symbol, textarea.selectionStart, textarea.selectionEnd);
    textarea.selectionStart += 1;
  };
  document.body.addEventListener('keydown', (event)=> {
    event.preventDefault();

    if (keyboard.querySelector('.' + event.code)) {
      keyboard.querySelector('.' + event.code).classList.add('active');
      if (!keyboard.querySelector('.' + event.code).classList.contains('system')) { addSymbol(keyboard.querySelector('.' + event.code).innerHTML); }
    }

    if (event.code === 'CapsLock') CapsLockToggle();
    if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') ShiftInsert('down');
    if (event.code === 'Backspace') Backspace();
    if (event.code === 'Enter') Enter();
    if (event.code === 'Tab') Tab();
    if (event.code === 'Delete') Delete();
    if (event.code === 'Space') Space();
    if (event.shiftKey && event.altKey) ChangeLang();
  });

  document.body.addEventListener('keyup', (event)=> {
    if (keyboard.querySelector('.' + event.code)) {
      keyboard.querySelector('.' + event.code).classList.remove('active');
    }
    if (event.code === 'ShiftRight' || event.code === 'ShiftLeft') ShiftInsert('up');
  });
  textarea.addEventListener('blur', ()=> {
    textarea.focus();
  });
  keyboard.addEventListener('click', (event) => {
    if (event.target.classList.contains('key')) {
      event.target.classList.add('active');

      if (event.target.classList.contains('ShiftRight')
        || event.target.classList.contains('ShiftLeft')) {
        ShiftInsert('down');
      }

      if (event.target.classList.contains('CapsLock')) {
        CapsLockToggle();
      }

      if (event.target.classList.contains('Backspace')) Backspace();
      if (event.target.classList.contains('Enter')) Enter();
      if (event.target.classList.contains('Tab')) Tab();
      if (event.target.classList.contains('Delete')) Delete();
      if (event.target.classList.contains('Space')) Space();
      setTimeout(() => {
        event.target.classList.remove('active');
        if (event.target.classList.contains('ShiftRight')
            || event.target.classList.contains('ShiftLeft')) {
          ShiftInsert('up');
        }
      }, 200);
      if (!event.target.classList.contains('system')) { addSymbol(event.target.innerHTML); }
    }
  });
};
