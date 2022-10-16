import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';
import './TopicDetails.css'
import Swal from 'sweetalert2'

const TopicDetails = () => {
    const topicDetails = useLoaderData();
    //console.log(topicDetails.data);
    const { name, questions, logo, total } = topicDetails.data;
    //console.log(questions);

    const [count, setCount] = useState(0);
    const handleTotalCorrect = () => {
        //setCount(count + 1);
        console.log(count);
        Swal.fire(`Total Question: ${total}`, `You Got ${count}`, "success");
        return count;
    }


    

    return (
        <div>
            <div className='text-center mt-2'>
                <h2> Quiz of : <span className='text-primary'>{name} <img className='subject-logo rounded-3' src={logo} alt="" /></span></h2>
                <h4 className='text-primary fw-bold mb-5'>Total Question: {total}</h4>
            </div>

            <div className='mx-auto'>
                {
                    questions.map((EachQuestion, index) => <QuizQuestions handleTotalCorrect ={handleTotalCorrect} count={count} setCount = {setCount} EachQuestion={EachQuestion} key={EachQuestion.id} index={index}></QuizQuestions>)
                }
                <div className='text-center'>
                    <button onClick={handleTotalCorrect} className='btn btn-primary-new text-white px-5'>Finish Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default TopicDetails;