import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    return (
        <ChatEngine
            height = '100vh'
            projectID = '5f5b8803-0e57-419c-912c-e57fc27793ad'
            userName = 'Andrew'
            userSecret = '123123'
            renderChatFeed = { (chatAppProps) => <ChatFeed {... chatAppProps} /> }
        />
    )
}

export default App;


//TODO: messages borked, figure out why