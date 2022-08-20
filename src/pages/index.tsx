import { NextPage } from 'next'

import PageWrapper from '../components/page-wrapper'
import ProfileSection from '../components/profile-section'
import InnerHeading from '../components/inner-heading'
import WorkSection from '../components/work-section'

const Index: NextPage = () => {
  console.log(process.env.NEXT_PUBLIC_DEFAULT_PASSWORD_KEY)

  return (
    <PageWrapper>
      <ProfileSection />
      <InnerHeading text={`My work`} />
      <WorkSection />
    </PageWrapper>
  )
}

export default Index
