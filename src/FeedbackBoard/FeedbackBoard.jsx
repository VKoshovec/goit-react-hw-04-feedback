import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';


class FeedbackBoard extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    updStatistics = (e) => {
        const { name } = e.currentTarget;
        this.setState (
         (prevstate) => {
            return { [name]: prevstate[name] + 1 }
        });
    };


    render () {

        const controls = Object.keys (this.state);

        const { good, neutral, bad } = this.state;

        const countTotalFeedback = () => {
            let values = [];
            values = Object.values(this.state);
            return values.reduce((acc, item)=>{ return acc + item }, 0 ); 
        }

        const countPositiveFeedbackPercentage = () => {
            let value = Math.round(good/(countTotalFeedback()/100));
            return countTotalFeedback() ? value: 0; 
        }

        return (
            <>
                <Section title={ "Please leave feedback" }> 
                   <FeedbackOptions 
                       options = { controls }   
                       onLeaveFeedback= { this.updStatistics }
                   />
                </Section>   
                <Section title={ "Statistics" }>  
                   <Statistics 
                       good = { good } 
                       neutral = { neutral }
                       bad = { bad }
                       total = { countTotalFeedback() }
                       positivePercentage = { countPositiveFeedbackPercentage() }
                    />
                </Section>
            </>
        )
    }
}

export default FeedbackBoard;