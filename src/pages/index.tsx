import { NextPage } from 'next'

import PageWrapper from '../components/page-wrapper'
import ProfileSection from '../components/profile-section'
import InnerHeading from '../components/inner-heading'
import WorkSection from '../components/work-section'

const Index: NextPage = () => {
  return (
    <PageWrapper>
      <ProfileSection />
      <InnerHeading text={`My work`} />
      <WorkSection />
    </PageWrapper>
  )
}

export default Index
