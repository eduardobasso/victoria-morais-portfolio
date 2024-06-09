import { Box, Container, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Stack, ThemeOptions, Typography } from '@mui/material'

import { EmailOutlined, LinkedIn, WhatsAppOutlined } from './custom-icons'

function ContactSection() {
  return (
    <Box component="section" sx={{
      bgcolor: 'primary.main',
      pt: 6,
      pb: 8,
      color: 'primary.contrastText',
    }}>
      <h2 hidden>
        {`Contact`}
      </h2>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="space-between" minHeight="60vh">
          <Grid item xs={12} md="auto">
            <Stack flexGrow={1} spacing={.75} justifyContent="center">
              <Typography variant="h3" fontWeight={700}>
                {`Enjoy my work?`}
              </Typography>
              <Typography variant="h3" fontWeight={700}>
                {`Let's talk!`}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md="auto">
            <List>
              <ListItem>
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <EmailOutlined />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500,
                }}>
                  <Link color="inherit" href="mailto:victoria.morais.sa@gmail.com" underline="hover">
                    {`victoria.morais.sa@gmail.com`}
                  </Link>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ color: 'inherit' }}>
                  <LinkedIn />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{
                  variant: 'body2',
                  fontWeight: 500,
                }}>
                  <Link color="inherit" href="https://www.linkedin.com/in/victoria-morais/" target="_blank" underline="hover">
                    {`linkedin.com/in/victoria-morais`}
                  </Link>
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactSection
