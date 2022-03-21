import type { NextPage } from 'next'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import PageWrapper from '../../components/page-wrapper'
import ProjectCover from '../../components/project-cover'
import ContentNavbar from '../../components/content-navbar'

import theme from '../../theme/gama-academy'

let gamaAcademyTheme = createTheme(theme)
gamaAcademyTheme = responsiveFontSizes(gamaAcademyTheme)

const SkillAssessment: NextPage = () => {
  return (
    <PageWrapper>
      <h2 hidden>Work</h2>
      <ThemeProvider theme={gamaAcademyTheme}>
        <ProjectCover
          title="Skill Assessment"
          description="An auto evaluation service to understand the student&apos;s profile and offer the best solution: a preparatory study content, an experience program or a learning path"
          image="/images/projects/skill-assessment/cover.jpg"
        />
        <Box bgcolor="background.default">
          <ContentNavbar items={[{
            label: 'Overview',
            anchorId: 'overview',
          }, {
            label: 'Discovery',
            anchorId: 'discovery',
          }, {
            label: 'Validation and ideation',
            anchorId: 'validationAndIdeation',
          }, {
            label: 'Results and learnings',
            anchorId: 'resultsAndLearnings',
          }]} />
          <Container>
            <Box component="section" mb={10} id="overview">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                      Overview
                    </Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                      Gama Academy is a company that innovates the education model, it offers training in the most demanding areas of technology. Gama experience is a program that trains soft skills to be successful in students careers. My challenge was to study an opportunity to evaluate the proficiency levels of the students and recommend the best service for them (basic, intermediate or advanced).
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={(theme) => ({
                    borderRadius: 0,
                    py: 6,
                    px: 4,
                    textAlign: 'center',
                  })}>
                    <Stack spacing={1}>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                        Estimated time: 4 months
                      </Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                        My role: UX/UI Designer
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </PageWrapper>
  )
}

export default SkillAssessment
