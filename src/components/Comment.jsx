import { ThumbsUp } from 'phosphor-react'
import { Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment}) {
 
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Adria199.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Adrian Guilherme</strong>
                            <time title="15 february 23:34h" dateTime="2023-02-15 23:34">About an hour ago</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Delete Commentary'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Applaud <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}