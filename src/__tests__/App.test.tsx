import App from "../App";
import { render } from '@testing-library/react';

describe('App Component', () => {
    test('renders App component with questions', () => {
        render(<App />);
    });
});