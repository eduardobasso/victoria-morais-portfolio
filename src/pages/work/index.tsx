import type { NextPage } from 'next';
import PageWrapper from '../../components/page-wrapper';
import WorkSection from '../../components/work-section';

const Work: NextPage = () => {
    return (
        <PageWrapper title={`My work`}>
            <WorkSection />
        </PageWrapper>
    );
};

export default Work;
