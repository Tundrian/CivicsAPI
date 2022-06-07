const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8000
app.use(cors())

const data = {
    'environment': {
        'Goal': 'Reduce carbon emissions',
        'Method': 'Investing in clean energy and incentivising the purchase of clean products',
        'Specific Policies':{
                'Purchase of Electric Vehicles': 'Give a $15,000 CAD rebate for the purchase of any fully-electric vehicle and $10,000 for any hybrid-electric vehicle',
                'Eliminating Plastics': 'Banning all single-use plastics for purchase and production. Prohibiting the use of plastic as a food or product deliver method when an alternative method is viable.'
        }
    },
    'civil rights': {
        'Goal': 'Have an election system that properly represents all citizens fairly',
        'Method': 'Overhauling the First Past The Post election system, make it easier and mandatory to vote.',
        'Specific Policies':{
                'Eliminate First Past the Post': 'Get rid of the First Past The Post elections system and invest in educating citizens on the proportional representation system',
                'Make voting mandatory': 'Enforce a mandatory voting system with a fine of $50 for anyone who does not vote.',
                'Make is easier to vote': 'Establish a 2 day holiday for elections that allows people to access voting locations easily',
        }
    },
    'no record': {
        'Goal': 'No policy found',
        'Method': 'Please use one of the below options',
        'Specific Policies': {
            'environment': 'Environmental Policy Position',
            'civil rights': 'Civil rights related policies'
        }
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})

app.get('/api/:topic', (req, res) => {
    if(req.params.topic in data){
        // console.log('api request: ', data[req.params.topic.toLowerCase()])
        res.json(data[req.params.topic.toLowerCase()])
    }else{
        // console.log('api request: no record')
        res.json('no record')
    }
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})