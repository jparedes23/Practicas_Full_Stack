import { Container, Card, CardContent, Typography} from "@mui/material"
function TodoApp(){

    return(
        <Container maxWidth="sm">
            <Card variant="outlined">
                <CardContent>
                <Typography variant="h4" component="h1">
                    TodoApp
                </Typography>;
                </CardContent>
            </Card>
        </Container>

    )
}

export default TodoApp