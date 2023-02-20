import './global.css';

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

const posts = [
  {
    Id: 1,
    
    author: {
      avatarUrl : 'https://github.com/Adria199.png',
      name: 'Adrian Guilherme',
      role: 'Web Developer'
    },

   content: [
     {type: 'paragraph', content:'Hello guys 👋'},
     {type: 'paragraph', content:'I have just uploaded a new project on my portifolio. It´s a project i did at NLW Return, a rocketseat event. The name of the project is DoctorCare 🚀'},
     {type: 'Link', content:'jane.design/doctorcare'}
   ],

   publishedAt: new Date('2023-02-20 14:01:00')
  },

  {
    Id: 2,
    
    author: {
      avatarUrl : 'https://github.com/Adria199.png',
      name: 'Adrian Guilherme',
      role: 'Web Developer'
    },

   content: [
     {type: 'paragraph', content:'Hello guys 👋'},
     {type: 'paragraph', content:'I have just uploaded a new project on my portifolio. It´s a project i did at NLW Return, a rocketseat event. The name of the project is DoctorCare 🚀'},
     {type: 'Link', content:'jane.design/doctorcare'}
   ],

   publishedAt: new Date('2023-02-20 14:30:00')
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                 author={post.author}
                 content={post.content}
                 publishedAt={post.publishedAt} 
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

export default App
