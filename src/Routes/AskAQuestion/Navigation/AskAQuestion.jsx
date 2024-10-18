import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box, List, ListItem } from '@mui/material';
import { LangContext } from '../../../Contexts/LangContext';
import ThemeModes from '../../../Components/Shared/ThemeModes';

import './Responsive.css';

const AskAQuestion = () => {
  const { t } = useContext(LangContext);
  const prefix = "Ask a question";

  const sections = useMemo(() => [
    {
      id: 1,
      title: t(`${prefix}.askAQuestion`),
      content: (
        <ThemeModes className='ask-h3' tagName="gn-p">
          {t(`${prefix}.askAQuestion text`)}
        </ThemeModes>
      ),
    },
    {
      id: 2,
      title: t(`${prefix}.search`),
      content: (
        <>
          <ThemeModes className='ask-h3' tagName="gn-p">
            {t(`${prefix}.search text`)}
          </ThemeModes>
          <ul style={{ padding: 16 }}>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.search option1`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.search option2`)}</ThemeModes></li>
          </ul>
        </>
      ),
    },
    {
      id: 3,
      title: t(`${prefix}.signup`),
      content: (
        <>
          <ThemeModes tagName="gn-p" style={{ fontSize: '24px', padding: '10px 0' }}>
            {t(`${prefix}.signup text`)}
          </ThemeModes>
          <ul style={{ padding: 16 }}>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.signup step1`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.signup step2`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.signup step3`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.signup step4`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.signup step5`)}</ThemeModes></li>
          </ul>
        </>
      ),
    },
    {
      id: 4,
      title: t(`${prefix}.order`),
      content: (
        <>
          <ThemeModes tagName="gn-p" style={{ fontSize: '24px', padding: '10px 0' }}>
            {t(`${prefix}.order text`)}
          </ThemeModes>
          <ul style={{ padding: 16 }}>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.order step1`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.order step2`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.order step3`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.order step4`)}</ThemeModes></li>
          </ul>
        </>
      ),
    },
    {
      id: 5,
      title: t(`${prefix}.cancel`),
      content: (
        <>
          <ThemeModes tagName="gn-p" style={{ fontSize: '24px', padding: '10px 0' }}>
            {t(`${prefix}.cancel text`)}
          </ThemeModes>
          <ul style={{ padding: 16 }}>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.cancel step1`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.cancel step2`)}</ThemeModes></li>
            <li><ThemeModes className='ask-p' tagName="gn-p">{t(`${prefix}.cancel step3`)}</ThemeModes></li>
          </ul>
        </>
      ),
    },
  ], [t]);

  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const sectionRefs = useRef(sections.reduce((acc, section) => {
    acc[section.id] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    const currentRef = sectionRefs.current[selectedSection.id]?.current;
    console.log(currentRef);

    if (currentRef) {
      requestAnimationFrame(() => {
        currentRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [selectedSection]);

  const selectedRef = useRef(selectedSection);
  useEffect(() => {
    const translatedSection = sections.find(section => section.id === selectedRef.current.id);
    setSelectedSection(translatedSection)
  }, [sections]);

  const handleSectionClick = (id) => {
    setSelectedSection(sections.find(section => section.id === id));
  };

  return (
    <ThemeModes tagName="simpleDiv" className='ask-header-div'>
      <ThemeModes tagName="div" className='left-div'>
        <List>
          {sections.map(({ id, title }) => (
            <ListItem
              key={id}
              onClick={() => handleSectionClick(id)}
              sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
            >
              <ThemeModes tagName="h3" className="ask-h3">{title}</ThemeModes>
            </ListItem>
          ))}
        </List>
      </ThemeModes>

      <Box className='right-div' width="70%" p={2}>
        <ThemeModes tagName="h3" className="ask-h3">{selectedSection.title}</ThemeModes>
        <Box mt={2} ref={sectionRefs.current[selectedSection.id]}>
          {selectedSection.content}
        </Box>
      </Box>
    </ThemeModes>
  );
};

export default AskAQuestion;