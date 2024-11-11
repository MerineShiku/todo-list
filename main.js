document.getElementById('add-task-btn').addEventListener('click', function () {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      addTaskToList(taskText);
      taskInput.value = "";
    }
  });
  
  document.getElementById('task-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const taskInput = document.getElementById('task-input');
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        addTaskToList(taskText);
        taskInput.value = "";
      }
    }
  });
  
  function addTaskToList(taskText) {
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
  
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
  
    const taskDate = document.createElement('span');
    const currentDate = new Date();
    taskDate.textContent = `Added on: ${currentDate.toLocaleDateString()} at ${currentDate.toLocaleTimeString()}`;
    taskDate.classList.add('date');
  
    const statusLabel = document.createElement('span');
    statusLabel.textContent = 'Not Done';
    statusLabel.classList.add('status', 'not-done');
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
  
    taskItem.appendChild(taskContent);
    taskItem.appendChild(taskDate);
    taskItem.appendChild(statusLabel);
    taskItem.appendChild(deleteButton);
  
    taskList.appendChild(taskItem);
  
    // Toggle task completion
    taskItem.addEventListener('click', function () {
      taskItem.classList.toggle('completed');
      if (taskItem.classList.contains('completed')) {
        statusLabel.textContent = 'Done';
        statusLabel.classList.remove('not-done');
        statusLabel.classList.add('done');
      } else {
        statusLabel.textContent = 'Not Done';
        statusLabel.classList.remove('done');
        statusLabel.classList.add('not-done');
      }
    });
  
    // Delete task
    deleteButton.addEventListener('click', function () {
      taskItem.remove();
    });
  }
  