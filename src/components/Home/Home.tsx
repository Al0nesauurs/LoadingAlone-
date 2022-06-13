import React, { ReactNode, useState } from 'react'
import LoadingComponent from '../LoadingComponent/LoadingComponent';
import ReadingBar from '../ReadingBar/ReadingBar';

const Home = (): ReactNode => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    return <>

        <div style={{ height: '1200px' }}>

            <ReadingBar color="red" parentHeight={1200}>
                Reading bar
            </ReadingBar>
            helpp
        </div>
        <button onClick={() => setIsLoading(true)}>Process</button>
        {
            isLoading && <LoadingComponent cancelLoad={() => setIsLoading(false)} />
        }
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
        <div> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, consequuntur unde obcaecati quasi totam quo consequatur omnis ad, non, provident eos nam nihil nulla quas ipsa neque. Ad, quos voluptatum.</div>
    </>
}

export default Home;