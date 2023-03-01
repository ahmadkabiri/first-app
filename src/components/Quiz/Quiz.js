import React from 'react';
import './Quiz.css'

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    id:1,

                    questionText: 'What is the capital of France?',
                    answerOptions: [
                        { answerText: 'New York', isCorrect: false ,id:1},
                        { answerText: 'London', isCorrect: false ,id:2 },
                        { answerText: 'Paris', isCorrect: true , id:3},
                        { answerText: 'Dublin', isCorrect: false , id:4 },
                    ],
                },
                {
                    id:2,
                    questionText: 'Who is CEO of Tesla?',
                    answerOptions: [
                        { answerText: 'Jeff Bezos', isCorrect: false , id:5},
                        { answerText: 'Elon Musk', isCorrect: true , id:6},
                        { answerText: 'Bill Gates', isCorrect: false , id:7},
                        { answerText: 'Tony Stark', isCorrect: false , id:8},
                    ],
                },
                {
                    id:3,

                    questionText: 'The iPhone was created by which company?',
                    answerOptions: [
                        { answerText: 'Apple', isCorrect: true , id:9},
                        { answerText: 'Intel', isCorrect: false , id:10},
                        { answerText: 'Amazon', isCorrect: false , id:11},
                        { answerText: 'Microsoft', isCorrect: false , id:12},
                    ],
                },
                {
                    id:4,

                    questionText: 'How many Harry Potter books are there?',
                    answerOptions: [
                        { answerText: '1', isCorrect: false , id:13},
                        { answerText: '4', isCorrect: false , id:14},
                        { answerText: '6', isCorrect: false , id:15},
                        { answerText: '7', isCorrect: true , id:16},
                    ],
                },
            ],
            currentQuestion: 0,
            showScore: false,
            score: 0
        }

        this.clickHandler = this.clickHandler.bind(this)


    }

    clickHandler (event) {
        let answer =  event.nativeEvent.target.attributes[0].nodeValue

        let booleanAnswer = answer==="true" ? true : false ;

        this.setState((prevState) => {
            return {currentQuestion : prevState.currentQuestion+1}
        })

        booleanAnswer && this.setState((prevState)=>{
            return {score : prevState.score+1}
        })
    }

    render() {
        if(this.state.currentQuestion>=this.state.questions.length){
            return (
                <div className='app'>
                    <div className='score-section'>
                        You scored {this.state.score} out of {this.state.questions.length}
                    </div>
                </div>
            )
        }else {
            return (
                <div className='app'>
                    {/* {if(this.state.currentQuestion>this.state.question.l)} */}
                    {/* next div is for showing user score */}
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {this.state.currentQuestion + 1}</span>/ 4
                                </div>
                                <div className='question-text'>{this.state.questions[this.state.currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                            {this.state.questions[this.state.currentQuestion].answerOptions.map((question)=>(
                                // console.log(question)
                                
                                <div key={question.id}>
                                    <button iscorrect={question.isCorrect.toString()} onClick= {this.clickHandler}>{question.answerText}</button>
                                </div>
                            ))}
                                    {/* <button>Tehran</button>
                                    <button>Tabriz</button>
                                    <button>Gorgan</button>
                                    <button>Shiraz</button> */}
                            </div>
                </div>
            )
        }
    }
}
