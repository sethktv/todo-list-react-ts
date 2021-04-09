import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '1px'
    },
    input: {
        marginRight: '15px'
    }
}

function TodoItem({ todo, i, onChangeTodo }) {
    const {removeTodo} = useContext(Context)
    const classes = []
    

    if(todo.completed) {
        classes.push('done')
    }

    return (

        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input type='checkbox' style={styles.input} onChange={() => onChangeTodo(todo.id)}/>
                <strong>{i + 1}</strong>
            &emsp;
            {todo.title}
            </span>
            <button onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    i: PropTypes.number,
    onChangeTodo: PropTypes.func.isRequired
}
export default TodoItem