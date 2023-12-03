import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'

function Game() {

    const [dayMonth, setDayMonth] = useState("")
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"]
    const [currentDate, setCurrentDay] = useState(1);
    const [currentMonth, setCurrentMonth] = useState(0);

    useEffect(() => {
        if (currentPlayer % 2 == 0) {
            setCurrentPlayer(2);
        } else {
            setCurrentPlayer(1);
        }
    }, [dayMonth])


    return (
        <div>
            <Container>
                <h1>Temproray Setup</h1>
                It is Player {currentPlayer}'s Turn!
                <br></br>
                You Selected {dayMonth}
                <Form.Select aria-label="Do you want to increase the day or the month? (day or month):" onChange={(e) => setDayMonth(e.target.value)}  >
                    <option>Do you want to increase the day or the month? (day or month): </option>
                    <option value={"Day"} >Day</option>
                    <option value={"Month"}>Month</option>
                </Form.Select>
                {dayMonth && <Form>
                    <Form.Control type="text" placeholder={(dayMonth === 'Day') ? "Enter Day" : "Enter Month"} />
                </Form>}
                The current date is: {currentDate} of {allMonth[currentMonth]}
            </Container>
        </div>
    )
}

export default Game