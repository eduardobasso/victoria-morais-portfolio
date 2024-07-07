import { NextPage } from 'next';
import PageWrapper from '../components/page-wrapper';
import ProfileSection from '../components/profile-section';
import WorkSection from '../components/work-section';

const Index: NextPage = () => {
    return (
        <PageWrapper>
            <ProfileSection />
            <WorkSection />
        </PageWrapper>
    );
};

export default Index;
