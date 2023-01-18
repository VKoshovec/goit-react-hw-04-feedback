import PropTypes from 'prop-types';
import css from './statistics.module.css';
import Notification from '../Notification/Notification';

const Statistics = ({
    good, 
    neutral, 
    bad, 
    total,
    positivePercentage
}) => {
    return (
    total > 0 ? (
        <>
            <ul className={css.statistics}>
                <li className={css.statisticsItem}>Good: { good } </li>
                <li className={css.statisticsItem}>Neutral: { neutral } </li>
                <li className={css.statisticsItem}>Bad: { bad } </li>
                <li className={css.statisticsItem}>Total: { total } </li>
                <li className={css.statisticsItem}>PositiveFeedback: { positivePercentage + "%"} </li>
            </ul>
        </>
    ) : (
        <Notification message='There is no feedback'/>
    )
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;