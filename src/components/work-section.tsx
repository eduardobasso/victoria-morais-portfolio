import { Box, Container, Stack } from '@mui/material';
import globalStyles from '../styles/global.module.css';
import ProjectCard from './project-card';

function WorkSection() {
  return (
    <Box component="section" my={6.5}>
      <h2 className={globalStyles.hidden}>{`My work`}</h2>
      <Container>
        <Stack spacing={8.5} mt={7.25}>
          <ProjectCard
            company={`ARTE (Agência para Reforma Tecnológica do Estado)`}
            title={`Accessibility audits`}
            description={`Auditing websites and applications to ensuring the standards for the Portugal Seal of Accessibility and Usability.`}
            role={`Accessibility Auditor`}
            imgSrc="/images/projects/accessibility-audits/thumb.png"
            imgAlt={`ARTE cover`}
            imgPos="left"
            route="/work/accessibility-audits"
            confidential
            workInProgress
          />
          <ProjectCard
            company={`Whirlpool`}
            title={`Brastemp Experience`}
            description={`Some of activities I participated working at Whirlpool's Brastemp brand improving the customer experience.`}
            role={`Product Designer`}
            imgSrc="/images/projects/brastemp-experience/thumb.png"
            imgAlt={`Brastemp cover`}
            imgPos="right"
            route="/work/brastemp-experience"
            confidential
          />
          <ProjectCard
            company={`Gama Academy`}
            title={`Skill Assessment`}
            description={`An auto evaluation service to understand the student's profile and offer the best solution: a preparatory study content, Experience program or Learning path.`}
            role={`Product Designer`}
            imgSrc="/images/projects/gama-leveling/thumb.png"
            imgAlt={`Gama leveling cover`}
            imgPos="left"
            route="/work/gama-leveling"
            confidential
          />
          <ProjectCard
            company={`Validation concept`}
            title={`Vupt`}
            description={`A new way of tracking orders in e-commerce experience. A solution which buyers can choose when will receive their orders.`}
            role={`Product Designer | UX Researcher`}
            imgSrc="/images/projects/vupt/cover.png"
            imgAlt={`Vupt cover`}
            imgPos="right"
            route="/documents/vupt-ux-trial-work.pdf"
            confidential
            hiddenAt
          />
        </Stack>
      </Container>
    </Box>
  );
}

export default WorkSection;
