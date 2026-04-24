import SectionAbout from './SectionAbout';

function About() {
  const data = { user: 50, download: 1.8, daily: 144, week: 20, currentscore: 15000 };

  return (
    <div>
      <SectionAbout datamem={data} />
    </div>
  )
}

export default About