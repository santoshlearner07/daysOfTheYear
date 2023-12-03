import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Game() {
    const [dayMonth, setDayMonth] = useState("")
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"]
    const [storeDayOrMonth, setStoreDayOrMonth] = useState(0);
    const [currentDate, setCurrentDay] = useState(1);
    const [currentMonth, setCurrentMonth] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const selectDayOrMonth = (event) => {
        setDayMonth(event.target.value);
    }

    const handleDayOrMonth = (event) => {
        setStoreDayOrMonth(event.target.value)
        console.log(storeDayOrMonth);
        let num = +storeDayOrMonth;
        {
            (dayMonth === 'Day') ? setCurrentDay(num) : setCurrentMonth(num)
        }
        console.log(storeDayOrMonth);
    }

    useEffect(() => {
        if (currentPlayer % 2 == 0) {
            setCurrentPlayer(2);
        } else {
            setCurrentPlayer(1);
        }
    }, [])

    return (
        <div>
            <Container>
                <h1>Temproray Setup</h1>
                It is Player {currentPlayer}'s Turn!
                <br></br>
                You Selected {dayMonth}<br></br>
                Value stored {storeDayOrMonth}<br></br>
                <Form onSubmit={handleSubmit}>
                    <h3>Do you want to increase the day or the month? (day or month): </h3>
                    <Form.Control type="text" value={dayMonth} onChange={selectDayOrMonth} />
                    {dayMonth && <Form.Control type='number' placeholder={(dayMonth === 'Day') ? "Enter Day" : "Enter Month"} value={storeDayOrMonth} onChange={handleDayOrMonth} />}
                    <Button variant="outline-success">Submit Date</Button>
                </Form>
                The current date is: {currentDate} of {allMonth[currentMonth]} {currentMonth}
            </Container>
        </div>
    )
}

export default Game