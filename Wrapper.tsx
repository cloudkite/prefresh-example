import React,  { Fragment } from 'react'
import Frame from './Frame'

export default function Test() {
    return (
        <Fragment>
            <div>thing</div>
            <Frame title="Test">
                <div>CHANGE ME!</div>
            </Frame>
        </Fragment>
    )
}