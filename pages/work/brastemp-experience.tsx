import type { NextPage } from 'next'
import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

import PageWrapper from '../../components/page-wrapper'
import ProjectCover from '../../components/project-cover'
import ContentNavbar from '../../components/content-navbar'

import theme from '../../theme/brastemp'

let brastempTheme = createTheme(theme)
brastempTheme = responsiveFontSizes(brastempTheme)

const BrastempExperience: NextPage = () => {
  return (
    <PageWrapper>
      <h2 hidden>Work</h2>
      <ThemeProvider theme={brastempTheme}>
        <ProjectCover
          title="Technical assistance location"
          description="How we improved the service and make the searching process of a technical assistance more efficient"
          image="/images/projects/brastemp-experience/cover.png"
        />
        <Box zIndex={1} bgcolor="background.default">
          <ContentNavbar items={[{
            label: 'Overview',
            anchorId: 'overview',
          }, {
            label: 'Discovery',
            anchorId: 'discovery',
          }, {
            label: 'Validation and Ideate',
            anchorId: 'validationAndIdeate',
          }, {
            label: 'Results and Learnings',
            anchorId: 'resultsAndLearnings',
          }]} />
          <Container>
            <Box component="section" mb={10} id="overview">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>Overview</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>I was responsible for the product discovery process and when it had been concluded the team choosed the next squad&apos;s mission: to improve the location service of the technical assistants. This service shows the closest assistance in the user region, it helps users when they have a problem with their home appliance and need to repair it.
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
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>Estimated time: 4 months</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>My role: Product designer</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>KPI goal: <Typography component="span" color="primary" fontWeight={400}>+5%</Typography> of online shedule</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box component="section" mb={10} id="discovery">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>Discovery</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>Before beggining the mission, I needed to understand and collect all the information about the service. The CSD matrix was the perfect tool to discover our certainties, suppositions and doubts about this service and direct the research and improvements.</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>After a critical analysis on the information, some questions were raised and it had been discovered during the project and in the end, we must get the answers about it.</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{
                    borderRadius: 0,
                    pt: 3,
                    pb: 1,
                    px: 1,
                    textAlign: 'center',
                  }}>
                    <Box component="figure">
                      <Box component="img" src="/images/projects/brastemp-experience/csd-matrix.png" sx={{
                        width: '100%',
                        maxWidth: 482,
                        height: 'auto',
                        maxHeight: 158,
                        mb: 1,
                      }} />
                      <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>CSD matrix participants: Product Designers, CRO, PO, SEO, Developers, QA, Tech Lead and Stakeholders.</Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
              <Box component="article" my={6}>
                <Grid container spacing={6} alignItems="stretch">
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} variant="outlined" sx={(theme) => ({
                      height: '100%',
                      borderRadius: 0,
                      bgcolor: theme.palette.background.default,
                      p: 6,
                      color: 'text.secondary',
                    })}>
                      <Stack spacing={2}>
                        <Typography component="h6" variant="body1" fontWeight={500}>Suppositions</Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>&ldquo;Users don&apos;t know which services a technical visit attends&rdquo;</Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>&ldquo;Users maybe schedule a visit to solve the problem using an online service&rdquo;</Typography>
                        <Typography component="p" variant="body1" fontWeight={300}>&ldquo;Users are searching more informations of the tecnhical assistant on this page&rdquo;</Typography>
                      </Stack>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={0} variant="outlined" sx={(theme) => ({
                      height: '100%',
                      borderRadius: 0,
                      bgcolor: theme.palette.background.default,
                      p: 6,
                      color: 'text.secondary',
                    })}>
                      <Stack spacing={2}>
                        <Typography component="h6" variant="body1" fontWeight={500}>Questions/Doubts</Typography>
                        <Stack component="ol" spacing={2} pl={2.25}>
                          <Typography component="li" variant="body1" fontWeight={300}>Which moment users have been using it (scenario)?</Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>What do they need for this service?</Typography>
                          <Typography component="li" variant="body1" fontWeight={300}>What&apos;s the channel preference for looking for information?</Typography>
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box component="article" my={6}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h5" variant="h5" color="text.primary" fontWeight={500}>Analytics</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>In this moment I searched the information based on CSD matrix to validate all de certainties presented. The challenged was to sorting throught the data and made meaningfull informations  about the supositions and doubts to do the survey.</Typography>
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
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>+60% of organic acess</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>3th page with more visits per month</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>16% of total online services representation</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box component="article" my={6}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h5" variant="h5" color="text.primary" fontWeight={500}>Hotjar surveys and Clarity heatmaps</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>I used heatmaps to understand the user&apos;s interaction on the site and their engajament and identified areas of opportunity in the web page.</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>The survey was made to discovered the principal questions about the user when them interact with the page.</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{
                    borderRadius: 0,
                    pt: 3,
                    pb: 1,
                    px: 1,
                    textAlign: 'center',
                  }}>
                    <Box component="figure">
                      <Box component="img" src="/images/projects/brastemp-experience/heatmap.png" sx={{
                        width: '100%',
                        maxWidth: 256,
                        height: 'auto',
                        maxHeight: 188,
                        mb: 1,
                      }} />
                      <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>Clarity heatmap.</Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box my={6}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={7}>
                  <Paper elevation={0} sx={(theme) => ({
                    borderRadius: 0,
                    py: 4,
                    px: 2,
                    textAlign: 'center',
                  })}>
                    <Stack spacing={2}>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={500}>What&apos;s the channel preference for looking information?</Typography>
                      <Box component="p" display="flex" alignItems="center" justifyContent="center">
                        <Typography component="span" variant="h4" color="primary" fontWeight={600} pr={1.5}>58%</Typography>
                        <Typography component="span" variant="body1" color="text.secondary" fontWeight={300}>Prefers chat or WhatsApp</Typography>
                      </Box>
                      <Box component="p" display="flex" alignItems="center" justifyContent="center">
                        <Typography component="span" variant="h4" color="primary" fontWeight={600} pr={1.5}>45-54</Typography>
                        <Typography component="span" variant="body1" color="text.secondary" fontWeight={300}>This age uses WhatsApp</Typography>
                      </Box>
                      <Box component="p" display="flex" alignItems="center" justifyContent="center">
                        <Typography component="span" variant="h4" color="primary" fontWeight={600} pr={1.5}>+55</Typography>
                        <Typography component="span" variant="body1" color="text.secondary" fontWeight={300}>Use telephone only</Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Paper elevation={0} sx={(theme) => ({
                    borderRadius: 0,
                    py: 4,
                    px: 2,
                    textAlign: 'center',
                  })}>
                    <Stack spacing={2}>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={500}>What do they need for this service?</Typography>
                      <Box component="p" display="flex" alignItems="center" justifyContent="center">
                        <Typography component="span" variant="h4" color="primary" fontWeight={600} pr={1.5}>28%</Typography>
                        <Typography component="span" variant="body1" color="text.secondary" fontWeight={300}>Information about service</Typography>
                      </Box>
                      <Box component="p" display="flex" alignItems="center" justifyContent="center">
                        <Typography component="span" variant="h4" color="primary" fontWeight={600} pr={1.5}>33%</Typography>
                        <Typography component="span" variant="body1" color="text.secondary" fontWeight={300}>Wants to schedule a visit</Typography>
                      </Box>
                      <Box component="p" display="flex" alignItems="center" justifyContent="center">
                        <Typography component="span" variant="h4" color="primary" fontWeight={600} pr={1.5}>32%</Typography>
                        <Typography component="span" variant="body1" color="text.secondary" fontWeight={300}>Technical telephone</Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box component="article" mt={6} mb={10}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h5" variant="h5" color="text.primary" fontWeight={500}>Benchmark: How is the competition?</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>This stage I focused to analyze four strategic topics: access (which ways their users access the service?), service&apos;s features (what users can do in the service?), usability and security (How much difficulty is it to use the service?).</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={{
                    borderRadius: 0,
                    pt: 3,
                    pb: 1,
                    px: 1,
                    textAlign: 'center',
                  }}>
                    <Box component="figure">
                      <Box component="img" src="/images/projects/brastemp-experience/benchmark.png" sx={{
                        width: '100%',
                        maxWidth: 460,
                        height: 'auto',
                        maxHeight: 210,
                        mb: 1,
                      }} />
                      <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>Benchmarking analysis.</Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>
            <Box component="section" mb={10} id="validationAndIdeate">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>Validation and Ideate</Typography>
                    <Typography component="h5" variant="h5" color="text.primary" fontWeight={500}>Heuristic Analysis</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>To brought better improvements in the page, I conducted an Heuristic analysis to got insights and opportunities for improvements:</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={(theme) => ({
                    borderRadius: 0,
                    py: 2,
                    px: 3,
                  })}>
                    <Stack spacing={2}>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}><Typography component="span" color="text.primary" fontWeight={500}>Findability</Typography> Organization and prioritization of the information</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}><Typography component="span" color="text.primary" fontWeight={500}>Accessibility</Typography> This service page is not accessible at all</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}><Typography component="span" color="text.primary" fontWeight={500}>Desirability</Typography> Organization and prioritization of the information</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}><Typography component="span" color="text.primary" fontWeight={500}>Usability</Typography> Bugs and absence of returning error messages</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}><Typography component="span" color="text.primary" fontWeight={500}>Storytelling</Typography> Doesn&apos;t explain or shares what users can do</Typography>
                    </Stack>
                  </Paper>
                </Grid>
              </Grid>
              <Box my={6}>
                <Paper elevation={0} sx={{
                  borderRadius: 0,
                  pt: 3,
                  pb: 1,
                  px: 1,
                  textAlign: 'center',
                }}>
                  <Box display="flex" alignItems="flex-end" justifyContent="space-around">
                    <Box component="figure">
                      <Box component="img" src="/images/projects/brastemp-experience/heuristic-radar.png" sx={{
                        width: '100%',
                        maxWidth: 376,
                        height: 'auto',
                        maxHeight: 256,
                        mb: 1,
                      }} />
                      <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>Heuristic Analysis. Participants: Product Designers.</Typography>
                    </Box>
                    <Box component="figure">
                      <Box component="img" src="/images/projects/brastemp-experience/heuristic-bars.png" sx={{
                        width: '100%',
                        maxWidth: 412,
                        height: 'auto',
                        maxHeight: 256,
                        mb: 1,
                      }} />
                      <Typography component="figcaption" variant="caption" color="text.secondary" fontWeight={300}>Heuristic comparison with other service pages. Participants: Product Designers.</Typography>
                    </Box>
                  </Box>
                </Paper>
              </Box>
            </Box>
            <Box component="section" mb={10} id="resultsAndLearnings">
              <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                  <Stack spacing={2}>
                    <Typography component="h4" variant="h4" color="primary" fontWeight={600}>Results and Learnings</Typography>
                    <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>In this project, I had the opportunity to use design methods of learning about our user. The biggest challenge was to adapt the process to our deadline and the user&apos;s low engagement turned difficult to interview to get more details of the user&apos;s need. Perhaps it&apos;s because at the moment of the user journey, they come to us already with a problem and then try to use our services to solve making our contact more difficult to make (they just want their problem to be solved!).</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper elevation={0} sx={(theme) => ({
                    borderRadius: 0,
                    pt: 4,
                    px: 3,
                    pb: 6,
                    textAlign: 'center',
                  })}>
                    <Stack spacing={1.5}>
                      <Box component="p" display="flex" alignItems="center" justifyContent="center">
                        <Typography component="span" variant="h4" color="primary" fontWeight={600} pr={1.5}>+25%</Typography>
                        <Typography component="span" variant="body1" color="primary" fontWeight={500}>of the user schedule their visit online!</Typography>
                      </Box>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>Strategic goal achieved!&nbsp;&nbsp;🎉&nbsp;🎉</Typography>
                      <Typography component="p" variant="body1" color="text.secondary" fontWeight={300}>-11% on telephone calls reduction!</Typography>
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

export default BrastempExperience
