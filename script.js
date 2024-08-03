document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');
    const themeSwitcher = document.getElementById('theme');

    // const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff', '#fffffc'];
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const task = document.createElement('li');
        task.className = 'task';
        task.style.backgroundColor = getRandomColor()

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = '✔️';
        completeButton.onclick = () => {
            task.classList.add('completed');
            task.removeChild(completeButton);
            task.removeChild(editButton);
            completedTaskList.appendChild(task);
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '☒';
        deleteButton.onclick = () => {
            task.remove();
        };

        const editButton = document.createElement('button');
        editButton.textContent = '✏️';
        editButton.onclick = () => {
            const newText = prompt('Edit your task:', taskContent.textContent);
            if (newText) taskContent.textContent = newText;
        };

        task.appendChild(taskContent);
        task.appendChild(editButton);
        task.appendChild(completeButton);
        task.appendChild(deleteButton);

        taskList.appendChild(task);
        taskInput.value = '';
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    themeSwitcher.addEventListener('change', (e) => {
        document.body.className = e.target.value;
    });
});