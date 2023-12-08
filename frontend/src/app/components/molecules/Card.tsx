import React from 'react'

interface TasksProps {
    task: {
        id: number;
        title: string;
    }
}

const Card: React.FC<TasksProps> = ({ task }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ task.title }</h5>
                <p>{ task.id }</p>
            </div>
        </div>
    )
}

export default Card