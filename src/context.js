import axios from "axios";
import React, { useState, useContext } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = "https://opentdb.com/api.php?";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  const fetchQuestions = async (url) => {
    setWaiting(false);
    setLoading(true);
    const response = await axios(url).catch((e) => console.log(e));
    if (response) {
      const {
        data: { results },
      } = response;
      if (results.length > 0) {
        setQuestions(results);
        setWaiting(false);
        setLoading(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const newIndex = oldIndex + 1;
      if (newIndex > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return newIndex;
      }
    });
  };

  const checkAnswer = (value) => {
    if (value) setCorrect((oldState) => oldState + 1);
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setWaiting(true);
    setCorrect(0);
    setIsModalOpen(false);
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // My Approach
    // if (name === "amount") {
    //   setQuiz({ ...quiz, amount: value });
    // } else if (name === "category") {
    //   setQuiz({ ...quiz, category: value });
    // } else if (name === "difficulty") {
    //   setQuiz({ ...quiz, difficulty: value });
    // }
    setQuiz({ ...quiz, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${amount}&${table[category]}=21&difficulty=${difficulty}&type=multiple`;
    fetchQuestions(url);
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correct,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        changeHandler,
        submitHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
