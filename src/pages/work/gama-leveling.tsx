import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Box, Container, Grid, Link, Paper, Stack, Typography } from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import PageWrapper from '../../components/page-wrapper'
import ProjectCover from '../../components/project-cover'
import ContentNavbar from '../../components/content-navbar'

import theme from '../../theme/gama-academy'

const SkillAssessment: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (sessionStorage.getItem('password.victoriamorais.design') === null) {
      router.push('/work')
    }
  })

  const gamaAcademyTheme = responsiveFontSizes(createTheme(theme))

  return (
    <PageWrapper>
      <h2 hidden>
        {`Work`}
      </h2>
      <ThemeProvider theme={gamaAcademyTheme}>
        <ProjectCover
          title={`Gama leveling`}
          description={`An auto evaluation service to understand the student's profile and offer the best solution: a preparatory study content, an experience program or a learning path`}
          image="/images/projects/gama-leveling/cover.jpg"
          presentationUrl="/documents/gama-leveling.pdf"
        />
        <Box bgcolor="background.default">
          <ContentNavbar items={[{
            label: `Overview`,
            anchorId: 'overview',
          }, {
            label: `Discovery`,
            anchorId: 'discovery',
          }, {
            label: `Validation and ideation`,
            anchorId: 'validationAndIdeation',
          }, {
            label: `Results and learnings`,
            anchorId: 'resultsAndLearnings',
          }]} />
          <Container>
            <Box component="section" mb={10} id="overview">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                      {`Overview`}
                    </Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                      {`My challenge was to study an opportunity to evaluate the proficiency levels of the students and recommend the best service for them (beginning, intermediate or advanced).`}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{
                    borderRadius: 0,
                    px: 4,
                    py: 6,
                    textAlign: 'center',
                  }}>
                    <Stack spacing={1}>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                        {`Estimated time: 1 month`}
                      </Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                        {`My role: UX/UI Designer`}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box component="section" mb={10} id="discovery">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                      {`Discovery`}
                    </Typography>
                    <Typography component="p" variant="body1">
                      <Typography component="span" color="text.secondary" fontWeight={300}>
                        {`During this phase, my greatest challenge was understanding what kind of product we were presenting to the market and if it attended to the pains and needs of our public. I needed to study and analyze the profile mapping, including their demographic information, behaviors, needs and new opportunities based on the market outside. For this stage, I brought a study made for `}
                      </Typography>
                      <Typography component="strong" color="primary" fontWeight={500}>
                        {`personas`}
                      </Typography>
                      <Typography component="span" color="text.secondary" fontWeight={300}>
                        {`.`}
                      </Typography>
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{
                    borderRadius: 0,
                    px: 1,
                    pt: 3,
                    pb: 1,
                    textAlign: 'center',
                  }}>
                    <Box component="figure">
                      <Box component="img" src="/images/projects/gama-leveling/mapping-personas.png" sx={{
                        mb: 1,
                        width: '100%',
                        maxWidth: 401,
                        height: 'auto',
                        maxHeight: 361,
                      }} />
                      <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>
                        {`Mapping personas.`}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              <Box component="article" my={6}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                      <Typography component="h5" variant="h5" color="text.secondary" fontWeight={500}>
                        {`Analytics`}
                      </Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                        {`A map of each student's profile was made to identify their pains and needs. What are their motivations? What was interesting about the program? My challenge was to determine whether the business model would meet the public's expectations.`}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} variant="outlined" sx={(theme) => ({
                      height: '100%',
                      borderRadius: 0,
                      bgcolor: theme.palette.background.default,
                      px: 6,
                      py: 3,
                      color: 'text.secondary',
                    })}>
                      <Stack spacing={2}>
                        <Typography component="p" variant="body1">
                          <Typography component="strong" fontWeight={500}>
                            {`38%`}
                          </Typography>
                          <Typography component="span" fontWeight={300}>
                            {` of user interviews want to get knowledge for professional growth`}
                          </Typography>
                        </Typography>
                        <Typography component="p" variant="body1">
                          <Typography component="strong" fontWeight={500}>
                            {`28%`}
                          </Typography>
                          <Typography component="span" fontWeight={300}>
                            {` want to change their jobs`}
                          </Typography>
                        </Typography>
                        <Typography component="p" variant="body1">
                          <Typography component="strong" fontWeight={500}>
                            {`16%`}
                          </Typography>
                          <Typography component="span" fontWeight={300}>
                            {` were motivated to change jobs after our training program`}
                          </Typography>
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Box my={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <Paper elevation={0} sx={{
                      borderRadius: 0,
                      p: 6,
                      textAlign: 'center',
                    }}>
                      <Typography component="p" variant="h5" color="primary" fontWeight={500} mx="auto" maxWidth={922}>
                        {`Most of the students have been motivated to start our courses because of the opportunity to get knowledge and find a new job!`}
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Box component="article" my={6}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                      <Typography component="h5" variant="h5" color="text.secondary" fontWeight={500}>
                        {`Benchmark: how is the competition?`}
                      </Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                        {`This is an important stage to identify other players with similar solutions and their own strengths and weaknesses.`}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{
                      borderRadius: 0,
                      px: 1,
                      pt: 3,
                      pb: 1,
                      textAlign: 'center',
                    }}>
                      <Box component="figure">
                        <Box component="img" src="/images/projects/gama-leveling/benchmarking-analysis.png" sx={{
                          mb: 1,
                          width: '100%',
                          maxWidth: 256,
                          height: 'auto',
                          maxHeight: 154,
                        }} />
                        <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>
                          {`Benchmarking analysis.`}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Box my={6}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} variant="outlined" sx={(theme) => ({
                      height: '100%',
                      borderRadius: 0,
                      bgcolor: theme.palette.background.default,
                      px: 6,
                      py: 3,
                      color: 'text.secondary',
                    })}>
                      <Stack spacing={2}>
                        <Typography component="h6" variant="body1" fontWeight={500}>
                          {`Strengths`}
                        </Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>
                          {`Research component that allows users to research the content they want to learn`}
                        </Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>
                          {`Content is separated according to knowledge and all courses available`}
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} variant="outlined" sx={(theme) => ({
                      height: '100%',
                      borderRadius: 0,
                      bgcolor: theme.palette.background.default,
                      px: 6,
                      py: 3,
                      color: 'text.secondary',
                    })}>
                      <Stack spacing={2}>
                        <Typography component="h6" variant="body1" fontWeight={500}>
                          {`Weaknesses`}
                        </Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>
                          {`The evaluation tool (IQ) is not visible`}
                        </Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>
                          {`There were too many steps to find the tool`}
                        </Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box component="section" mb={10} id="validationAndIdeation">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                      {`Validation and ideation`}
                    </Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                      {`After the data analysis, I had information to use during the creation of a solution. I made an align diagram to identify the value with the business and user needs.`}
                    </Typography>
                    <Stack spacing={2} pt={1}>
                      <Typography component="h6" variant="body1" fontWeight={500}>
                        {`Business requirements`}
                      </Typography>
                      <Stack component="ol" spacing={1} pl={2.25}>
                        <Typography component="li" variant="body1" fontWeight={300}>
                          {`Responsible website;`}
                        </Typography>
                        <Typography component="li" variant="body1" fontWeight={300}>
                          {`Timer count for each question (evaluate);`}
                        </Typography>
                        <Typography component="li" variant="body1" fontWeight={300}>
                          {`Share on social media platforms such as LinkedIn, WhatsApp, and Instagram;`}
                        </Typography>
                        <Typography component="li" variant="body1" fontWeight={300}>
                          {`Website page for marketing share.`}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{
                    borderRadius: 0,
                    px: 2,
                    pt: 4,
                    pb: 1,
                    textAlign: 'center',
                  }}>
                    <Box component="figure">
                      <Box component="img" src="/images/projects/gama-leveling/alignment-diagram.png" sx={{
                        mb: 1,
                        width: '100%',
                        maxWidth: 332,
                        height: 'auto',
                        maxHeight: 324,
                      }} />
                      <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>
                        {`Alignment diagram. Participants: Stakeholders, Tech Lead and Product Designer.`}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              <Box component="article" my={6}>
                <Grid container spacing={6}>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                      <Typography component="h5" variant="h5" color="text.secondary" fontWeight={500}>
                        {`Information architecture`}
                      </Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                        {`At this moment, we created a temporary page on Unbounce to start improvements to the service. Unbounce allowed us to create a fast, independent page without developers, but in contrast, we lost the design brand along the way. A website creation was in progress to develop all the pages and maintain them under the same brand.`}
                      </Typography>
                      <Stack spacing={2} pt={1}>
                        <Typography component="p" variant="body1" fontWeight={300}>
                          {`The Gama leveling page was based on answering the following questions:`}
                        </Typography>
                        <Stack component="ol" spacing={1} pl={2.25}>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`What is that about?`}
                          </Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`What can I do on the page?`}
                          </Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`In which areas of knowledge can I take the test?`}
                          </Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`How does it work?`}
                          </Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`How do I login and manage my subscription?`}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} sx={{
                      borderRadius: 0,
                      px: 2,
                      pt: 4,
                      pb: 1,
                      textAlign: 'center',
                    }}>
                      <Box component="figure">
                        <Box component="img" src="/images/projects/gama-leveling/inverted-pyramid.png" sx={{
                          mb: 1,
                          width: '100%',
                          maxWidth: 474,
                          height: 'auto',
                          maxHeight: 300,
                        }} />
                        <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>
                          {`The Inverted pyramid methodology was used to create better communication. Participants: marketing and content teams.`}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Box component="article" my={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={2}>
                      <Typography component="h5" variant="h5" color="text.secondary" fontWeight={500}>
                        {`Landing page design`}
                      </Typography>
                      <Typography component="p" variant="body1">
                        <Typography component="span" color="text.secondary" fontWeight={300}>
                          {`The challenge was to create a page fast and improve the user's interaction with the service. Even if it didn't follow the brand's design patterns, we created an intermediate `}
                        </Typography>
                        <Typography component="strong" color="primary" fontWeight={500}>{`style guide`}</Typography>
                        <Typography component="span" color="text.secondary" fontWeight={300}>
                          {` to follow on Unbouce. The learnings and information collected would help to improve the website (brand project).`}
                        </Typography>
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={0} sx={{
                      borderRadius: 0,
                      pt: 4,
                      pb: 2,
                      px: 2,
                      textAlign: 'center',
                    }}>
                      <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={4}>
                          <Box component="figure">
                            <Box component="img" src="/images/projects/gama-leveling/landing-page-mid-fidelity.png" sx={{
                              mb: 1,
                              width: '100%',
                              maxWidth: 272,
                              height: 'auto',
                              maxHeight: 434,
                            }} />
                            <Typography component="figcaption" variant="body1" color="text.secondary" fontWeight={400}>
                              {`Landing page - mid-fidelity`}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box component="figure">
                            <Box component="img" src="/images/projects/gama-leveling/landing-page-high-fidelity.png" sx={{
                              mb: 1,
                              width: '100%',
                              maxWidth: 266,
                              height: 'auto',
                              maxHeight: 446,
                            }} />
                            <Typography component="figcaption" variant="body1" color="text.secondary" fontWeight={400}>
                              {`Landing page - high fidelity`}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box component="figure">
                            <Box component="img" src="/images/projects/gama-leveling/landing-page-high-fidelity-w-adjustments.png" sx={{
                              mb: 1,
                              width: '100%',
                              maxWidth: 268,
                              height: 'auto',
                              maxHeight: 606,
                            }} />
                            <Typography component="figcaption" variant="body1" color="text.secondary" fontWeight={400}>
                              {`Landing page - high fidelity with adjustments`}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Box component="article" my={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography component="h5" variant="h5" color="text.secondary" fontWeight={500}>
                      {`Gama leveling design - mid-fidelity`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={0} sx={{
                      borderRadius: 0,
                      pt: 4,
                      pb: 2,
                      px: 1,
                      textAlign: 'center',
                    }}>
                      <Grid container spacing={1} justifyContent="center">
                        <Grid item xs={12} md={4}>
                          <Box component="figure">
                            <Box component="img" src="/images/projects/gama-leveling/choose-stack.png" sx={{
                              mb: 1,
                              width: '100%',
                              maxWidth: 326,
                              height: 'auto',
                              maxHeight: 230,
                            }} />
                            <Typography component="figcaption" variant="body1" color="text.secondary" fontWeight={400}>
                              {`Stack selection`}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box component="figure">
                            <Box component="img" src="/images/projects/gama-leveling/instructions.png" sx={{
                              mb: 1,
                              width: '100%',
                              maxWidth: 326,
                              height: 'auto',
                              maxHeight: 230,
                            }} />
                            <Typography component="figcaption" variant="body1" color="text.secondary" fontWeight={400}>
                              {`Instructions`}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box component="figure">
                            <Box component="img" src="/images/projects/gama-leveling/test.png" sx={{
                              mb: 1,
                              width: '100%',
                              maxWidth: 326,
                              height: 'auto',
                              maxHeight: 230,
                            }} />
                            <Typography component="figcaption" variant="body1" color="text.secondary" fontWeight={400}>
                              {`Test`}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box component="figure">
                            <Box component="img" src="/images/projects/gama-leveling/test-results.png" sx={{
                              mb: 1,
                              width: '100%',
                              maxWidth: 326,
                              height: 'auto',
                              maxHeight: 230,
                            }} />
                            <Typography component="figcaption" variant="body1" color="text.secondary" fontWeight={400}>
                              {`Test results`}
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <Box component="figure">
                            <Box component="img" src="/images/projects/gama-leveling/activity-panel.png" sx={{
                              mb: 1,
                              width: '100%',
                              maxWidth: 326,
                              height: 'auto',
                              maxHeight: 230,
                            }} />
                            <Typography component="figcaption" variant="body1" color="text.secondary" fontWeight={400}>
                              {`Activity panel`}
                            </Typography>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
              <Box component="article" my={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <Stack spacing={2}>
                      <Typography component="h5" variant="h5" color="text.secondary" fontWeight={500}>
                        {`Usability test`}
                      </Typography>
                      <Stack spacing={2}>
                        <Typography component="p" variant="body1" fontWeight={300}>
                          {`It was a remote-moderated test with 5 users. Each participant had 4 tasks to complete:`}
                        </Typography>
                        <Stack component="ol" spacing={1} pl={2.25}>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`Finish a test;`}
                          </Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`Provide feedback on a question;`}
                          </Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`See the most recent/finished tests;`}
                          </Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>
                            {`Try to take another test.`}
                          </Typography>
                        </Stack>
                        <Link display="inline-block" variant="body1" fontWeight={500} href="/documents/usability-test-feedbacks.pdf" target="_blank" underline="hover">
                          {`You can see the anotations of the usability test here`}
                        </Link>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box component="section" mb={10} id="resultsAndLearnings">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>
                      {`Results and learnings`}
                    </Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>
                      {`The task success rate was 80%. 4/5 users could complete all the tasks except one, in which case the user's internet wasn't good and made the test difficult to perform. Even if all of them completed the test, most users needed more time to find specific features, like providing feedback for questions, for example.`}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{
                    borderRadius: 0,
                    px: 5,
                    py: 4,
                    textAlign: 'center',
                  }}>
                    <Stack spacing={4}>
                      <Typography component="p" variant="body1" color="primary" fontWeight={500}>
                        {`The timer on each question made users anxious to answer within the time limit`}
                      </Typography>
                      <Typography component="p" variant="body1" color="primary" fontWeight={500}>
                        {`The design of the page wasn’t helping users with long questions (difficult to read)`}
                      </Typography>
                      <Typography component="p" variant="body1" color="primary" fontWeight={500}>
                        {`Users weren't sure if they could retake the test`}
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
