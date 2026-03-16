const wall = document.getElementById('wall');
const sendBtn = document.getElementById('sendBtn');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

// 讀取 LocalStorage 留言
let messages = JSON.parse(localStorage.getItem('messages') || '[]');
messages.forEach(msg => addCard(msg.name, msg.message));

sendBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  if (!name || !message) return alert('請填寫姓名與祝福內容');
  
  addCard(name, message);
  messages.push({name, message});
  localStorage.setItem('messages', JSON.stringify(messages));
  
  nameInput.value = '';
  messageInput.value = '';
});

function addCard(name, message) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<strong>${name}:</strong> <br>${message}`;
  wall.prepend(card); // 新留言置頂
  createBalloon();
}

// 生成小氣球動畫
function createBalloon() {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * window.innerWidth + 'px';
  balloon.style.animationDuration = 3 + Math.random() * 3 + 's';
  document.body.appendChild(balloon);
  setTimeout(() => balloon.remove(), 6000);
}
