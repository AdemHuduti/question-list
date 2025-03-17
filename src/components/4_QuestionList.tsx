import { Question as QuestionComponent } from "./3_Question";

interface Question {
    id: number;
    question: string;
    answer: string;
}

interface Props {
    questions: Question[];
}

export function QuestionList({ questions }: Props) {
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
                        />

                    );
                })
            }
        </div>
    );
}
