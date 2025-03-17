import { render, screen, fireEvent } from '@testing-library/react';
import { Confirmation } from "../components/2_Confirmation";
import { vi } from 'vitest';

describe("Confirmation Component", () => {

    test("renders Notification with correct message and type", () => {
        render(
            <Confirmation
                message="Are you sure?"
                type="error"
                accept={vi.fn()}
                decline={vi.fn()}
            />
        );

        expect(screen.getByText("Are you sure?")).toBeInTheDocument();
    });

    test("renders Accept and Decline buttons", () => {
        render(
            <Confirmation
                message="Are you sure?"
                type="error"
                accept={vi.fn()}
                decline={vi.fn()}
            />
        );

        expect(screen.getByText("Accept")).toBeInTheDocument();
        expect(screen.getByText("Decline")).toBeInTheDocument();
    });

    test("calls accept function and hides Confirmation when Accept is clicked", () => {
        const acceptMock = vi.fn();
        const declineMock = vi.fn();

        render(
            <Confirmation
                message="Are you sure?"
                type="error"
                accept={acceptMock}
                decline={declineMock}
            />
        );

        const acceptButton = screen.getByText("Accept");
        fireEvent.click(acceptButton);

        expect(acceptMock).toHaveBeenCalledTimes(1);

        // hide confirmation component after clicking accept
        expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();
        expect(screen.queryByText("Accept")).not.toBeInTheDocument();
        expect(screen.queryByText("Decline")).not.toBeInTheDocument();
    });

    test("calls decline function and hides Confirmation when Decline is clicked", () => {
        const acceptMock = vi.fn(); 
        const declineMock = vi.fn(); 

        render(
            <Confirmation
                message="Are you sure?"
                type="error"
                accept={acceptMock}
                decline={declineMock}
            />
        );

        const declineButton = screen.getByText("Decline");
        fireEvent.click(declineButton);

        expect(declineMock).toHaveBeenCalledTimes(1);

        // hide confirmation component after clicking decline
        expect(screen.queryByText("Are you sure?")).not.toBeInTheDocument();
        expect(screen.queryByText("Accept")).not.toBeInTheDocument();
        expect(screen.queryByText("Decline")).not.toBeInTheDocument();
    });

});
