import { NextPage } from 'next'

import PageWrapper from '../../components/page-wrapper'
import InnerHeading from '../../components/inner-heading'
import WorkSection from '../../components/work-section'

const Work: NextPage = () => {
  return (
    <PageWrapper>
      <InnerHeading text={`My work`} />
      <WorkSection />
    </PageWrapper>
  )
}

export default Work
