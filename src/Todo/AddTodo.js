import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHendler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form style={{ marginBottom: '10px' }} onSubmit={submitHendler}>
            <input value={value} onChange={event => setValue(event.target.value)} />
            <button type='submit'>Добавить</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo