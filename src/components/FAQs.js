// Imports
import { useState } from 'react'
import Questions from './data/faqs.json'

// Component Function
function FAQs() {
    // States
    const [enteredKeywords, setEnteredKeywords] = useState(0);

    // Data
    let id = 0

    // Functions and methods
    const searchFAQs = (keyword, questionList) => {
        {/* Return all questions if no keyword has been entered */}
        if (keyword === '') {
            return questionList
        }

        {/* Return all questions where the question or answer contains the keyword */}
        let filteredQuestions = questionList.filter( (question) => 
            (question.question.toLowerCase().includes(keyword) || question.answer.toLowerCase().includes(keyword)))
        
        return filteredQuestions
    }

    // UI
    return (
    <>
        <div style={{minHeight: '60vh'}}>
            <h1 className='p-3'>Frequently Asked Questions</h1>
            <div className='d-flex flex-row'>
                <input 
                    className="m-2 col-11 form-control" 
                    type="text" name="faq-search-input" 
                    id="faq-search-input"
                    onChange={((event) => setEnteredKeywords(event.target.value))}/>
            </div>
            { searchFAQs(enteredKeywords, Questions).map( (question) => {
                return (
                <div className='bg-warning p-3 m-2' key={id++}>
                    <h2>{question.question}</h2>
                    <p>{question.answer}</p>
                </div>)
            })}
        </div>
    </>
    )
}

export default FAQs