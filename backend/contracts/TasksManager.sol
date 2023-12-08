// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TasksManager {
    struct Task {
        uint256 id;
        string title;
        string description;
        bool isCompleted;
    }

    uint256 public tasksCount = 0;
    mapping(uint256 => Task) public tasks;

    event TaskCreated(uint256 id, string title, string description);
    event TaskCompleted(uint256 id, bool isCompleted);

    function createTask(string memory _title, string memory _description)
        public
    {
        tasksCount++;
        tasks[tasksCount] = Task(tasksCount, _title, _description, false);
        emit TaskCreated(tasksCount, _title, _description);
    }

    function toggleCompleted(uint256 _id) public {
        Task memory _task = tasks[_id];
        _task.isCompleted = !_task.isCompleted;
        tasks[_id] = _task;
        emit TaskCompleted(_id, _task.isCompleted);
    }
}