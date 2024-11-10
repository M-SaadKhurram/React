import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Todos = () => {
    const [initial, setInitial] = useState('');
    const [data, setData] = useState([]);

    const getInput = (event) => {
        setInitial(event.target.value);
    };

    const getData = () => {
        if (initial.trim()) {
            let store = [...data, initial.trim()];
            setData(store);
            setInitial('');
        }
    };

    const deleteTask = (index) => {
        let filterData = data.filter((_, id) => id !== index);
        setData(filterData);
    };

    return (
        <>
            <div className='container'>
                <div className='inputTask'>
                    <input
                        type='text'
                        placeholder='Enter Your Task'
                        value={initial}
                        onChange={getInput}
                    />
                    <button onClick={getData}>Add</button>
                </div>
                {data.map((curVal, index) => (
                    <div key={index} className='taskData'>
                        <p>{curVal}</p>
                        <FontAwesomeIcon
                            icon={faTrash}
                            id='deleteIcon'
                            onClick={() => deleteTask(index)}
                            style={{ cursor: 'pointer', color: 'red' }}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Todos;
