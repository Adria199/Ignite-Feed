import styles from './Post.module.css';

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
                </div>
             </div>
          </header>
      </article>
    )
  }