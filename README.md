Goal: Channel-based tool for programming issues

● Design and implement a tool that allows users to
	○ Post programming questions
	○ Provide answers/responses

● Your tool must allow users to
	○ create channels
	○ view all channel
	○ select a channel and to post messages in that channel
	○ post replies to existing messages

● The user interface must be implemented in Reactjs and all text data must be stored in a mysql and/or CouchDB database.

PART 1: BASIC SYSTEM

● Design and implement the database tables
	○ Expose the mysql and/or CouchDB databases using separate nodejs servers

● Design and implement the user interface using Reactjs
	○ Your application should use react-dom-router and provide at least
		■ Landing page that offers a brief description/intro into your system
		■ Page that allows users to see/create/select channel and see/create new messages or replies
		■ Enable users to post screenshots as part of a question or reply

PART 2: ADDING USER ACCOUNTS

● Extend part 1 to enable users of your system to have accounts and enforce that only registered users can use
your system.

● An account should consist of at least:
○ ID
○ Password
○ Name that is displayed in messages/replies/channels
You can add additional elements e.g. avatar/image for the user

● Make sure that users can create an account & that users must always first sign in before using your system
● Create one special account for a system administrator (can be hardcoded) that has the power to remove users,
channels, posts and replies.

PART 3: NESTED REPLIES AND RATINGS

● Expand/change your database and your Reactjs app to
○ Allow your users to reply to replies
○ Visualize the nested replies
● Allow users to approve or disapprove a post or reply
○ Use a thumbs-up/down with counter

PART 4: SEARCH FEATURE

● Allow your users to search the data in your system to answer questions like
○ content that contain specific strings e.g. list all content that contains the string “arrow function”.
○ content created by a specific user
○ User with the most/least posts
○ User with the highest/lowest ranking of messages/replies
○ ...

PART 5: USEFUL EXTRA FEATURES

● Add features you consider useful in the context of dealing with programming
issues
○ E.g.
■ classifications of users e.g. beginner .. expert
■ Hosting system in the cloud
■ Design user interface that supports mobile clients
■ ...
