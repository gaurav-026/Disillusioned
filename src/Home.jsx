import React, { useEffect, useState } from 'react'
import "./index.css"
import Progress from './components/Progress'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import DiscreteSliderMarks from './components/Slider';
import Spinner from './components/Spinner';


const questions = [
  "I have ambitious aims of making a difference.",
  "I often set high standards for myself.",
  "I am confident in my abilities.",
  "I am confident but have doubt on myself",
];

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [progress, setProgress] = useState(0);
  const [sliderValues, setSliderValues] = useState(Array(questions.length).fill(0));
  const [isChanging, setIsChanging] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSliderChange = (value) => {
    if (isChanging) return;
    setSliderValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[currentQuestion] = value;
      return newValues;
    });
    console.log("Slider input value are:", sliderValues);
    setIsChanging(true);
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        // setProgress((prevProgress) => prevProgress + 100 / questions.length);
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }
      setIsChanging(false);
    }, 500);
    
    // console.log("Progress is:",progress);
  };

  const handlePrevClick = () => {
    if (isChanging) return;
    if (currentQuestion > 0) {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion - 1);
        // setProgress((prevProgress) => prevProgress - (100 / questions.length));
        setIsChanging(false);
      }, 500);

    };
  }

  const handleNextClick = () => {
    if (isChanging) return;
    if (currentQuestion < questions.length - 1) {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        // setProgress((prevProgress) => prevProgress + (100 / questions.length));
        setIsChanging(false);
      }, 500);
    }
  };

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {

        loading ? (<Spinner />) : (
          <>
            <h1>Are You Disillusioned?</h1>

            <section className='section'>
              <p>Please answer the following questions to provide us with information about yourself-</p>

              <Progress currentQuestion={currentQuestion} totalQuestions={questions.length} />

              <p className='questions'>{questions[currentQuestion]}</p>
              <DiscreteSliderMarks onChange={handleSliderChange} value={sliderValues[currentQuestion]} />

              <div className="buttons">
                <button onClick={handlePrevClick}><GrFormPrevious /> &nbsp;Prev</button>
                <p>{currentQuestion + 1}/{questions.length}</p>
                <button onClick={handleNextClick} disabled={currentQuestion === questions.length - 1}
                >Next &nbsp;<GrFormNext /></button>
              </div>
            </section>
          </>
        )


      }


    </>
  )
}

export default Home;
