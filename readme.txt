Ombori react-code-test solution entry February 2020 by Julian Meinold


Objectives

-Display a custom loading component for 3 seconds.
-Retrieve user data from the Reqres.in API
-Display the retrieved user data in a scrollable view that lazy loads more users when the bottom of the list is reached and indicate when there are no more users.
-Good looking, responsive design, compatible with mobile devices.


Implementations

-The loader is implemented using CSS animations. For a maximum of design freedom and an economical development time, the loader is injected as inner HTML code using dangerouslySetInnerHTML. It is encoded as Base64 to prevent the need for escaping.
-The retrieval of user data is implemented using the Fetch API.
-The user list is implemented using the component react-infinite-scroll-component.


Testing

-Tested on Safari 13.0.3, Firefox 73 and mobile Safari 12.1.2


Known bugs and limitations

-Limited responsiveness of the design.
-Initially the list of users is too short for a browser with a maximized window in common desktop resolutions to show a scroll bar. In Safari 13.0.3 using touch pad gestures or a mouse wheel will cause the browser to generate a scroll event, so more users are loaded. In Firefox this behaviour is not present and only the reduction of the window size enables the possibility of scrolling.
-There is no indicator for the user to know that he or she has the ability to scroll down to load more users.
-Details in the design should be improved.


Warnings

-No ESLint warnings
-No Safari 13.0.3 warnings
-No Firefox 73 warnings
