import { useState } from "react";
import { Notification, NotificationProps } from "./1_Notification";

/*
  Now build on the Notification component by creating a Confirmation component. 
  This Confirmation component should return a Notification with two additional buttons
  to get the user's response accept and decline.

  When accept or decline are clicked, the Confirmation should no longer render. 
  Instead it should render null.

  PS: The buttons should be rendered by the Confirmation component, 
  not the Notification component (think React composition).
 */

type ConfirmationProps = NotificationProps & {
  accept: () => void;
  decline: () => void;
};


export function Confirmation({
  message,
  type = "message",
  accept,
  decline
}: ConfirmationProps) {

  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    accept();
    setIsVisible(false);
  }

  const handleDecline = () => {
    decline();
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return <Notification type={type} message={message}>

    <button className="btn" onClick={handleAccept}>Accept</button>
    <button className="btn" onClick={handleDecline}>Decline</button>
  </Notification>;
}
