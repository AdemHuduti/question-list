import { useState } from "react";
import { Question as QuestionComponent } from "./3_Question";
import { Confirmation } from "./2_Confirmation";

interface Question {
    id: number;
    question: string;
    answer: string;
}

interface Props {
    questions: Question[];
}

export function QuestionList({ questions }: Props) {

    const [showAllAnswers, setShowAllAnswers] = useState(false);
    const [showConfirmation, setShowConfirmation ] = useState(false);

    const handleShowAllAnswers = () => {
        setShowAllAnswers(true);
    }

    const handleConfirmation = () => {
        setShowConfirmation(true);
    }

    return (
        <div className="question-list">
            {
                // render questions here
                questions.map(item => {
                    return (
                        <QuestionComponent
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            num={item.id}
                            showAllAnswers={showAllAnswers}
                        />

                    );
                })
            }
            <button className="btn" onClick={handleConfirmation}>Show all answers</button>

            {
                showConfirmation && <Confirmation type="caution" message={"Do you want to show all answers ?"} accept={handleShowAllAnswers} decline={() => setShowConfirmation(false)} />
            }

        </div>
    );
}
