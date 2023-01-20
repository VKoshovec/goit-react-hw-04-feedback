import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';


class FeedbackBoard extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    updStatistics = (e) => {
        const { name } = e.currentTarget;
        this.setState (prevstate => {
            return { [name]: prevstate[name] + 1 }
        });
    };

    countTotalFeedback = () => {
        const values = Object.values(this.state);
        return values.reduce((acc, item)=>{ return acc + item }, 0); 
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        const good = this.state.good;
        const value = Math.round(good/(total/100));
        return total ? value: 0; 
    }


    render () {

        const controls = Object.keys (this.state);
        const { good, neutral, bad } = this.state;
        const countTotalFeedback = this.countTotalFeedback();
        const countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title={ "Please leave feedback" }> 
                   <FeedbackOptions 
                       options = { controls }   
                       onLeaveFeedback= { this.updStatistics }
                   />
                </Section>   
                
                <Section title={ "Statistics" }>
                   { countTotalFeedback > 0 ? 
                        <Statistics 
                            good = { good } 
                            neutral = { neutral }
                            bad = { bad }
                            total = { countTotalFeedback }
                            positivePercentage = { countPositiveFeedbackPercentage }
                        /> :
                        <Notification message='There is no feedback'/> }   
                </Section>
            </>
        )
    }
}

export default FeedbackBoard;