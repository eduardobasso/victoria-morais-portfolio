import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import ProjectCard from './project-card';

function WorkSection() {
    return (
        <Box
            component="section"
            sx={{
                bgcolor: 'primary.main',
                pt: 6.5,
                pb: 19.5,
                color: 'primary.contrastText',
            }}
        >
            <h2 hidden>{`My work`}</h2>
            <Container>
                <Grid container alignItems="center" justifyContent="center">
                    <Grid item xs={12} sm={11} md={10} lg={9} xl={8}>
                        <Typography component="p" variant="h2" mb={4.5}>{`Here are my favorite projects`}</Typography>
                    </Grid>
                </Grid>
                <Stack spacing={8.5} mt={7.25}>
                    <ProjectCard
                        company={`AMA (Agência Modernizadora Administrativa)`}
                        title={`Accessibility validatons`}
                        description={`Auditing websites and applications to ensuring the standards for the Portugal Seal of Accessibility and Usability`}
                        role={`Accessibility and Usability Auditor`}
                        imgSrc="/images/projects/accessibility-validations/thumb.png"
                        imgAlt={`AMA cover`}
                        imgPos="left"
                        confidential
                    />
                    <ProjectCard
                        company={`Whirlpool`}
                        title={`Brastemp Experience`}
                        description={`How we improved the service and made the searching process for technical assistance more efficient`}
                        role={`Product Designer`}
                        imgSrc="/images/projects/brastemp-experience/thumb.png"
                        imgAlt={`Brastemp cover`}
                        imgPos="right"
                        route="/work/brastemp-experience"
                        confidential
                    />
                    <ProjectCard
                        company={`Gama Academy`}
                        title={`Gama leveling`}
                        description={`An auto evaluation service to understand the student's profile and offer the best solution: a preparatory study content, an experience program or a learning path`}
                        role={`UX/UI Designer`}
                        imgSrc="/images/projects/gama-leveling/thumb.png"
                        imgAlt={`Gama leveling cover`}
                        imgPos="left"
                        route="/work/gama-leveling"
                        confidential
                    />
                    <ProjectCard
                        company={`UX/UI trial work`}
                        title={`Vupt`}
                        description={`A new way of tracking orders in an e-commerce experience. A solution where buyers can choose when they will receive their orders`}
                        role={`Product Designer | UX Researcher`}
                        imgSrc="/images/projects/vupt/cover.png"
                        imgAlt={`Vupt cover`}
                        imgPos="right"
                        route="/documents/vupt-ux-trial-work.pdf"
                    />
                </Stack>
            </Container>
        </Box>
    );
}

export default WorkSection;
