import './Chat.css'
export default function Chat(){
    return <div className='chat-main'>
        <div className='chat-wrapper'>
            <div className='chat-content'></div>
            <div className='chat-input'>
                <input type='text' placeholder='send a message'></input><span><button>Send</button></span>
            </div>
        </div>
    </div>
}