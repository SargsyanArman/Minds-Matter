import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Box, List, ListItem } from '@mui/material';
import { LangContext } from '../../../Contexts/LangContext';
import ThemeModes from '../../../Components/Shared/ThemeModes';
import './responsive.css';
import { ASK_A_QUESTIONS_LIST_STYLES } from '../../../Constants/AskAQuestionsConstants';

const AskAQuestion = () => {
  const { t } = useContext(LangContext);
  const prefix = "Ask a question";

  const sections = useMemo(() => [
    { id: 1, title: t(`${prefix}.askAQuestion`), content: [t(`${prefix}.askAQuestion text`)] },
    { id: 2, title: t(`${prefix}.search`), content: [t(`${prefix}.search text`), t(`${prefix}.search option1`), t(`${prefix}.search option2`)] },
    { id: 3, title: t(`${prefix}.signup`), content: [t(`${prefix}.signup text`), t(`${prefix}.signup step1`), t(`${prefix}.signup step2`), t(`${prefix}.signup step3`), t(`${prefix}.signup step4`)] },
    { id: 4, title: t(`${prefix}.order`), content: [t(`${prefix}.order text`), t(`${prefix}.order step1`), t(`${prefix}.order step2`), t(`${prefix}.order step3`), t(`${prefix}.order step4`)] },
    { id: 5, title: t(`${prefix}.cancel`), content: [t(`${prefix}.cancel text`), t(`${prefix}.cancel step1`), t(`${prefix}.cancel step2`), t(`${prefix}.cancel step3`)] },
  ], [t]);

  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const sectionRefs = useRef(sections.reduce((acc, section) => {
    acc[section.id] = React.createRef();
    return acc;
  }, {}));

  useEffect(() => {
    const currentRef = sectionRefs.current[selectedSection.id]?.current;
    if (currentRef) {
      requestAnimationFrame(() => currentRef.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [selectedSection]);

  useEffect(() => {
    const updatedSection = sections.find(section => section.id === selectedSection.id);
    if (updatedSection) {
      setSelectedSection(updatedSection);
    }
  }, [sections]);

  const handleSectionClick = (id) => {
    const section = sections.find(s => s.id === id);
    if (section) setSelectedSection(section);
  };

  return (
    <ThemeModes tagName="simpleDiv" className="ask-header-div">
      <ThemeModes tagName="div" className="left-div">
        <List>
          {sections.map(({ id, title }) => (
            <ListItem key={id} onClick={() => handleSectionClick(id)} sx={ASK_A_QUESTIONS_LIST_STYLES} >
              <ThemeModes tagName="h3" className="ask-h3">{title}</ThemeModes>
            </ListItem>
          ))}
        </List>
      </ThemeModes>

      <Box className="right-div" width="70%" p={2}>
        <ThemeModes tagName="h3" className="ask-h3">{selectedSection.title}</ThemeModes>
        <Box mt={2} ref={sectionRefs.current[selectedSection.id]}>
          <ThemeModes className="ask-h3" tagName="gn-p">{selectedSection.content[0]}</ThemeModes>
          <ul style={{ padding: 16 }}>
            {selectedSection.content.slice(1).map((text, idx) => (
              <li key={idx}><ThemeModes className="ask-p" tagName="gn-p">{text}</ThemeModes></li>
            ))}
          </ul>
        </Box>
      </Box>
    </ThemeModes>
  );
};

export default AskAQuestion;
