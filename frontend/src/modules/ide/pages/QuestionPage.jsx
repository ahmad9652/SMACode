import Container from '@mui/material/Container';
import { Header } from '../../../shared/components/Header';
import { Grid } from '@mui/material';
import {Ide} from "../components/Ide"
export const QuestionPage = () => {
    return (<Container maxWidth="xl" disableGutters={true}>
        <Header></Header>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                Question - Problem Statement
            </Grid>
            <Grid item xs={6}>
                <Ide/>
            </Grid>
        </Grid>
    </Container>)
}