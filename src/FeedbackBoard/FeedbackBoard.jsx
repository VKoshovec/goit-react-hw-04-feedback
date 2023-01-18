import { Component } from 'react';
import css from './FeedbackBoard.module.css';

class FeedbackBoard extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    total = 0;

    updStatistics = (e) => {
        const { name } = e.currentTarget;
        this.setState (
         (prevstate) => {
            return { [name]: prevstate[name] + 1 }
        });

        this.countTotalFeedback();
    };

    countTotalFeedback = () => {
        let values = [];
        values = Object.values(this.state);
        this.total = values.reduce((acc, item)=>{ return acc+ item }, 1 ); 
    }

    render () {

        const { good, neutral, bad} = this.state;

        return (
            <section className={css.board}>
                <h2 className={css.title}>Please leave feedback</h2>
                <ul className={css.controls}>
                    <li className={css.controlsItem}>
                        <button className={css.controlsButton}
                        name = "good" 
                        onClick={ this.updStatistics }>Good</button>
                    </li>
                    <li className={css.controlsItem}>
                        <button className={css.controlsButton} 
                        name = "neutral"
                        onClick={ this.updStatistics }>Neutral</button>
                    </li>
                    <li className={css.controlsItem}>
                        <button className={css.controlsButton} 
                         name = "bad"
                        onClick={ this.updStatistics }>Bad</button>
                    </li>            
                </ul>
                <h2 className={css.statisticsTitle}>Statistics</h2>
                <ul className={css.statistics}>
                    <li className={css.statisticsItem}>Good: { good } </li>
                    <li className={css.statisticsItem}>Neutral: { neutral } </li>
                    <li className={css.statisticsItem}>Bad: { bad } </li>
                    <li className={css.statisticsItem}>Total: { this.total } </li>
                </ul>
            </section>
        )
    }
}

export default FeedbackBoard;