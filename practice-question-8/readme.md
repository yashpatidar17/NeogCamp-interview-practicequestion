Create 2 buttons with text YJHD and ZNMD. At the click of a button, call the given API with the query as same as the button text, and display the message you get on the screen. 
Followup: Instead of using calling the fetch function twice in both events(clicking of buttons), enclose it in a different function so that it can be used accordingly in both areas.

The trick in the follow-up: addEventListerner methods do not require any additional parameter to be attached in the function that is passed as 2nd parameter otherwise that function gets called there itself on the spot instead of executing the function on the event. Solved by using arrow Function

API -

[https://mock-practice.prakhar10v.repl.co/bollywood?name=](https://mock-practice.prakhar10v.repl.co/bollywood?name=)

Eg - Clicking on the button YJHD will make a call to

[https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD](https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD)