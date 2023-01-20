import PropTypes from 'prop-types'
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({
    options,
    onLeaveFeedback
}) => {
    return (
        <>
            <ul className={css.controls}>
                { options.map((element)=>{
                    return (
                    <li key= { element } className={css.controlsItem}>
                        <button 
                            className={css.controlsButton}
                            name = { element } 
                            onClick={ onLeaveFeedback }>{ element }
                        </button>
                    </li>)
                })}
            </ul>
        </>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ),
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;