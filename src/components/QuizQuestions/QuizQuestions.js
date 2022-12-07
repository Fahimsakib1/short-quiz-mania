import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './QuizQuestions.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const QuizQuestions = ({ EachQuestion, index, setCount, count, handleTotalCorrect }) => {
    const { id, question, options, correctAnswer } = EachQuestion;

    //console.log(id, question, options, correctAnswer);
    //console.log(correctAnswer)
    //console.log(EachQuestion);

    //const [count, setCount] = useState(0);


    

    const handleCorrectAnswer = (e, value) => {
        //console.log(e.target.innerText);
        //const clickedAnswer = e.target.innerText;
        //console.log(value);
        //console.log(correctAnswer)
        if (value === correctAnswer) {
            // toast.success('Congratulations! Your Answer is Correct', {
            //     position: "top-center",
            //     autoClose: 1000,
            // });
            
            setCount(count + 1);
            //handleTotalCorrect()
            //console.log(count);
        }

        else {
            // toast.error('Opps!! Wrong Answer', {
            //     position: "top-center",
            //     autoClose: 1000,
            // });

        }
    }


    




    const [toggle, setToggle] = useState(false)
    const [correct, setCorrect] = useState('');
    const displayCorrectAnswer = () => {
        setCorrect(EachQuestion.correctAnswer);
        setToggle(!toggle);
        //Swal.fire("Correct Answer", `${EachQuestion.correctAnswer}`, "success");
        if (!toggle === true) {
            Swal.fire("Correct Answer", `${EachQuestion.correctAnswer}`, "success");
        }
        return EachQuestion.correctAnswer;
    }


    return (
        <div>
            <div className='question-parent-div  mt-4 mb-5 rounded-4  w-75 mx-auto quiz-div-bg-color'>
                <div className='each-question-div text-center mt-1 d-flex justify-content-center eye-icon mx-auto rounded-2'>
                    <h5 ><span className='text-dark fw-bold'>Quiz: {index + 1}</span> <span className='question-color'>{question}</span></h5>
                </div>

                <div className='d-flex justify-content-end eye-icon-div position-relative'>
                    {
                        toggle ?  
                        
                        <FontAwesomeIcon title='See Correct Answer' onClick={displayCorrectAnswer} className='fs-4 me-3 eye-icon' icon={faEye}></FontAwesomeIcon> 

                        :  

                        <FontAwesomeIcon title='See Correct Answer' onClick={displayCorrectAnswer} className='fs-4 me-3 eye-icon' icon={faEyeSlash}></FontAwesomeIcon>
                    }
                </div>

                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-4 mx-auto mt-2 mb-3 option-parent-div'>
                    {/* {
                    options.map((EachOption, index) => <div key={index} onClick={(e) => handleCorrectAnswer(e, EachOption)} className=''><strong className='option-div d-flex justify-content-start align-items-center border border-2 border-primary rounded-2 py-4 mx-4'><FontAwesomeIcon icon={faCircle} className='ms-3 me-2 text-white border border-2 border-dark rounded-4'></FontAwesomeIcon>{EachOption}</strong></div>)
                } */}


                    {
                        options.map((EachOption, index) => <div key={index} onClick={(e) => handleCorrectAnswer(e, EachOption)} className=''><strong className='option-div d-flex justify-content-start align-items-center border border-2 border-primary-new rounded-2 py-4  text-white'><input className='ms-3 me-2' type="radio" name={id} id='' />{EachOption}</strong></div>)
                    }

                    <div className=' mx-auto w-75 mb-4'>
                        {
                            toggle && (
                                <h6 className='fs-5 text-center correct-answer-div py-3 rounded-2 fw-semibold text-white'> Correct Answer: {correct}</h6>
                            )
                        }
                    </div>

                </div>
                <ToastContainer /> 
            </div>
        </div>
    );
};

export default QuizQuestions;
