import styles from './Post.module.css';
import { Comment } from './Comment';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/Adria199.png"
          />
          <div className={styles.authorInfo}>
            <strong>Adrian Guilherme</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="15 february 23:34h" dateTime="2023-02-15 23:34">Published one hour ago</time>
      </header>



      <div className={styles.content}>
        <p>Hello guys 👋</p>
        <p>I have just uploaded a new project on my portifolio. It´s a project i did at NLW Return, a rocketseat event. The name of the project is DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href=""> #novoprojeto </a> {' '}
          <a href=""> #nlw </a> {' '}
          <a href="">#rocketseat </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave a feedback</strong>

        <textarea 
          placeholder='Leave a comment'
        />
        
        <footer>
          <button type='submit'>Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}