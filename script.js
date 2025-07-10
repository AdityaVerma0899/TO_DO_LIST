let taskCount = 0;

function updateEmptyState() {
  const list = document.getElementById('todo-list');
  const empty = document.getElementById('empty-message');
  empty.style.display = list.children.length === 0 ? 'block' : 'none';
}

function addTask() {
  const input = document.getElementById('todo-input');
  const taskText = input.value.trim();
  if (taskText === '') return;

  taskCount++;

  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

  const li = document.createElement('li');
  li.innerHTML = `
    <div class="todo-content" onclick="toggleDone(this)">
      <span class="serial">${taskCount}.</span>
      <span class="task">${taskText}</span>
      <span class="date-text">🗓 ${formattedDate}</span>
    </div>
    <button class="remove-btn" onclick="removeTask(this)">&times;</button>
  `;
  document.getElementById('todo-list').appendChild(li);
  input.value = '';
  updateEmptyState();
}

function toggleDone(el) {
  el.parentElement.classList.toggle('done');
}

function removeTask(button) {
  const li = button.parentElement;
  li.style.animation = 'fadeOut 0.4s forwards';
  setTimeout(() => {
    li.remove();
    updateEmptyState();
  }, 400);
}

updateEmptyState();
