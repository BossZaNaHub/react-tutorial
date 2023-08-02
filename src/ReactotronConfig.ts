'use client'

import Reactotron from 'reactotron-react-js'
import { reactotronRedux } from 'reactotron-redux'

console.log('start reactotron...')
const reactotron = Reactotron.configure({
    name: 'react-tutorial',
    environment: process.env.NODE_ENV,
}).use(reactotronRedux()).connect()

export default reactotron