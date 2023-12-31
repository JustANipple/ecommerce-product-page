import styles from "./Vote.module.css"

// eslint-disable-next-line react/prop-types
const Vote = ({ vote, setVote }) => {

    function handlePlusClick() {
        setVote(vote + 1);
    }

    function handleMinusClick() {
        if(vote > 0) {
            setVote(vote - 1);
        }
    }

    return (
        <div className={styles.container_vote}> 
            <button 
                className={styles.vote_plus}
                onClick={handleMinusClick}
            >
                <img 
                    src="icon-minus.svg" 
                    alt="downvote"
                />
            </button>
            <p className={styles.vote_score}>{vote}</p>
            <button 
                className={styles.vote_minus}
                onClick={handlePlusClick}
            >
                <img 
                    src="icon-plus.svg" 
                    alt="vote"
                />
            </button>
        </div>
    )
}

export default Vote