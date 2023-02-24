import {format, formatDistanceToNow} from 'date-fns'

import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Post({author, publishedAt, content}) {
   const [comments, setComments] = useState ([
      'Very good, Congratulations!! 👏👏'
   ])

   const [newCommentText, SetNewCommentText] = useState('')
   
    const publishedDateFormatted = format(publishedAt, "LLLL d 'at' HH:mm")

    const publishedDateRelativeTonow = formatDistanceToNow(publishedAt, {
      addSuffix: true
    })

    function handleCreateNewComment() {
       event.preventDefault()

       setComments([...comments, newCommentText])
       SetNewCommentText('');
    }

    function handleTextAreaChange() {
      SetNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
       const commentsWithoutDeletedOne = comments.filter(comment => {
          return comment !== commentToDelete;
       })

       setComments(commentsWithoutDeletedOne);
    }
    
     const isNewCommentEmpty = newCommentText.length == 0;
     
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeTonow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type == 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave a feedback</strong>

        <textarea
          name='comment'
          placeholder='Leave a comment'
          value={newCommentText}
          onChange={handleTextAreaChange}
          required
        />
        
        <footer>
          <button disabled={isNewCommentEmpty} type='submit'>Publish</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return ( 
           <Comment 
             key={comment} 
             content={comment} 
             onDeleteComment={deleteComment} 
           />
          )
        })}
      </div>

    </article>
  )
}