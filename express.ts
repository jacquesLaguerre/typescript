import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express ()
app.use(express.json())
app.use(cors())


app.get("/", (req: Request,res: Response) => {
    res.send("Hello typescript")
}) //  displays the message sends the message with the callback function

app.listen(5005, ()=> {
    console.log("http://localhost:5005")
})

