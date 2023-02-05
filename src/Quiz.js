import {useState} from 'react';
//start date, how long
//optional: pain level
//how often excersise, how intense
//do you have a routine???
export const Quiz = () => {
    const quizQuestions = [
        {
            quest: 'What day does your period start?'
        },
        {
            quest: 'How long does your average period last?',
            options: [
                {opt: '1 - 2 days'},
                {opt: '3 - 4 days'},
                {opt: '5 - 7 days'},
                {opt: '1+ weeks'}
            ]
        },
        {
            quest: 'How often do you exercise?',
            options: [
                {opt: 'Never'},
                {opt: '1 - 2 days a week'},
                {opt: '3 - 5 days a week'},
                {opt: '6 - 7 days a week'}
            ]
        },
        {
            quest: 'What intensity do you exercise?',
            options: [
                {opt: 'I don\'t exercise'},
                {opt: 'Low'},
                {opt: 'Medium'},
                {opt: 'High'}
            ]
        }
    ]
}

