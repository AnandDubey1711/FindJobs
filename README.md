# FindJobs
This is an android application using Job search API to provide the user with relevant jobs and also a search option to find jobs according to his/her requirements as well as a link to apply

For using the application on your mobile:

- Download Expo app on your device.
- Now visit the link in the about section of the repository from your browser.
- Scan the QR code using the Expo app.

For the issue where it sometimes shows popular jobs and sometimes nearby jobs, I made slight changes.
I created another hook named "useFetcher" and made a second account on rapid api.
The key I recieved from the second account I used it for useFetcher hook.
Now I used useFetcher hook for fetching popular jobs and search functionality and useFetch hook for nearbyjobs.

