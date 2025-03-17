import { render, screen } from '@testing-library/react';

import { Notification } from "../components/1_Notification";

describe('Notification Component', () => {

    test('renders the message and type for success type', () => {
        render(<Notification message="Success!" type="success" />);

        const notificationElement = screen.getByText("Success!");
        expect(notificationElement).toBeInTheDocument();
    });

    test('renders the message and type for message type', () => {
        render(<Notification message="Informational message" type="message" />);

        const notificationElement = screen.getByText("Informational message");
        expect(notificationElement).toBeInTheDocument();
    });

    test('renders the message and type for caution type', () => {
        render(<Notification message="Warning!" type="caution" />);

        const notificationElement = screen.getByText("Warning!");
        expect(notificationElement).toBeInTheDocument();
    });

    test('renders the message and type for error type', () => {
        render(<Notification message="Error occurred" type="error" />);

        const notificationElement = screen.getByText("Error occurred");
        expect(notificationElement).toBeInTheDocument();
    });

    test('renders children content when passed', () => {
        render(
            <Notification message="Success!" type="success">
                <div>Additional Info</div>
            </Notification>
        );

        const additionalInfo = screen.getByText("Additional Info");
        expect(additionalInfo).toBeInTheDocument();
    });

    test('does not render children if not passed', () => {
        render(<Notification message="Success!" type="success" />);

        const childrenContent = screen.queryByText("Additional Info");
        expect(childrenContent).toBeNull();
    });
});
