import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const FeedbackBoard = () => {

    const [ votes, setVotes] = useState ({ good: 0, neutral: 0, bad: 0});

    const updStatistics = (e) => {
        const { name } = e.currentTarget;
        setVotes(prevVotes => ({...prevVotes , [name]: + prevVotes[name] + 1 }));
    };

    const countTotalFeedback = () => {
        const values = Object.values(votes);
        return values.reduce((acc, item)=>{ return acc + item }, 0); 
    }

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        const good =  votes.good;
        const value = Math.round(good/(total/100));
        return total ? value: 0; 
    }

    const controls = Object.keys (votes); 

    return (
        <>
            <Section title={ "Please leave feedback" }> 
               <FeedbackOptions 
                    options = { controls }   
                    onLeaveFeedback= { updStatistics }
                />
            </Section>   
                
            <Section title={ "Statistics" }>
                { countTotalFeedback() > 0 ? 
                <Statistics 
                    good = { votes.good } 
                    neutral = { votes.neutral }
                    bad = { votes.bad }
                    total = { countTotalFeedback() }
                    positivePercentage = { countPositiveFeedbackPercentage() }
                /> :
                <Notification message='There is no feedback'/> }   
            </Section>
        </>
    );
}

export default FeedbackBoard;