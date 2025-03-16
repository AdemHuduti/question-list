import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders App component with questions', () => {
        render(<App />);
    });

    test('renders the first question text', () => {
        render(<App />);
        expect(screen.getByText(/What are the first 10 digits of PI?/i)).toBeInTheDocument();
    });

    test('renders the second question text', () => {
        render(<App />);
        expect(screen.getByText(/What is the average the airspeed velocity of a \(European\) unladen swallow?/i)).toBeInTheDocument();
    });

    test('renders the third question text', () => {
        render(<App />);
        expect(screen.getByText(/What is the answer to life the universe and everything?/i)).toBeInTheDocument();
    });
});
