# prodigy-server
The Node.JS and Express.JS based webserver host for my notification centralising project, Prodigy.

When developing Prodigyh, I had originally hoped that I would be able to directly communicate between my endpoint devices (phones, tablets, desktops etc) and the display panel - however, as the project developed it became clear that to avoid losing notifications if either were offline, I would need to implement some form of server to communicate this information - to keep track of the messaging ID for Firebase, as well as just allow for a wide array of devices to communicate with the system, even if they can't interact with Firebase-  while the plans for expansion didn't come to fruition, I still believe that this was a suitable solution to the problem.

As this code was only ever meant to be viewed or modified by myself it's undocumented, though I have reviewed it to remove my firebase details and server information. I hope it's informative/useful!
