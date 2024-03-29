import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/seo';
import Heading from '../components/Heading';
import Text from '../components/Text';

const WebsiteProjText =
    'This project was made to experiment more with React. All of the elements were made using plain HTML, styled with styled-components (and css), on the Gatsby framework so that serving it on AWS S3 using Cloudfront will be as simple as a single command. Custom-made components, UX, ESLinting, and css are some things that I wanted to improve on for my professional career, and this makes for a more fun resume!';
const ClinicCRMText =
    'A freelance project made during the 2020 COVID pandemic. React, Spring-Boot Java, and SQL. A wonderful combination that is simple, quick, and efficient to set up. Hosted entirely on AWS, it is ensured to always be up when the user required it. Static S3 website hosting and JWT security for a low-cost, highly-available secure application.';
const CrossPathText =
    "A windows application game, created with the Processing IDE. This game was inspired by Linedoku's CrossPath, where you have to expand nodes on a grid orthogonally by the number indicated on them. This was purely for fun, as it was developed on a 12-hour roadtrip.";
const ChessText =
    "One of Carleton's assignments was to program a text-based Chess for one of our classes. I was bored after completing it, so I decided to go a step further and use the implementation of the logic and the classes to make it visual, with the Swing Java library.";
const ProjectsPage = () => (
    <Layout>
        <Seo title={'Projects'} />
        <Heading as={'h2'} label={'This website'} />
        <Text>{WebsiteProjText}</Text>
        <Heading as={'h2'} label={'Clinic CRM'} />
        <Text>{ClinicCRMText}</Text>
        <Heading as={'h2'} label={'CrossPath'} />
        <Text>{CrossPathText}</Text>
        <Heading as={'h2'} label={'GUI Chess'} />
        <Text>{ChessText}</Text>
    </Layout>
);

export default ProjectsPage;
