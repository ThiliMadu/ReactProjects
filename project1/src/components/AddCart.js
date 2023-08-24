import React from 'react'

export default function AddCart() {
  return (
    <section className='addCart'>
        <form>
            <input type='text'name='task' placeholder='Add Task'/>
            <button>Submit</button>
        </form>
    </section>
  )
}
