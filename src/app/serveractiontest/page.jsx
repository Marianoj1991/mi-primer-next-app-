import { addPost, deletePost } from '@/lib/actions'

const ServerActionTest = () => {
  return (
    <form action={deletePost}>
      <input
        type='text'
        placeholder='Title Post'
        name='title'
      />
      <input
        type='text'
        placeholder='Add a description'
        name='desc'
      />
      <input
        type='text'
        placeholder='SLug'
        name='slug'
      />
      <input
        type='text'
        placeholder='UserId'
        name='userId'
      />

      <div>
        <input
          type='text'
          name='id'
        />
      </div>

      <button>Click Me</button>
    </form>
  )
}

export default ServerActionTest
