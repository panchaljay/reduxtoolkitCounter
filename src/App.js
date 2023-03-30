import {
  Container,
  Paper,
  Box,
  Typography,
  CssBaseline,
  Button,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import {useSelector,useDispatch} from "react-redux"
import  {increment,decrement,incrementby,decrementby} from "./Redux/fetures/counterSlice"

function App() {

  const counter = useSelector((state)=>state.counter.counter)
  console.log(counter);

  const dispatch = useDispatch()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component={Box} py={4}>
        <Paper component={Box} p={3} align="center">
          <Typography align="center" variant="h1">
            {counter}
          </Typography>
          <Button onClick={()=>dispatch(increment())}>Increment</Button>
          <Button onClick={()=>dispatch(decrement())}>Decrement</Button>
          <Button onClick={()=>dispatch(incrementby(10))}>IncrementBY 10</Button>
          <Button onClick={()=>dispatch(decrementby(5))}>DecrementBY 5</Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
