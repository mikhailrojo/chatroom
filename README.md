# Chat room

My idea was to create a chat which feels like a terminal or old style chat room (from 90s). User can send messages to peers and see his previous history.

Implemented with TS, parcel, styled-component, only client side logic and interfaces (thus using mocks).

On first render - ChatRoom components queries the server(mocked) and gets a list of available for chat users and message history for the selected user.

On user change - we query history for the anew selected user.
