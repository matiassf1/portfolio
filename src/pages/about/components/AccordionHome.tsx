import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

export const AccordionHome = () => {
  return (
    <Accordion defaultIndex={[0]}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              About code.
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Speaking of coding, I've been diving deep into the tech world lately.
          I've been honing my skills in React.js, Javascript, Css, Html,
          Tailwindcss, TypeScript, Redux, MySQL and Firebase. I'm already pretty
          good at handling API services and their data, and I'm currently
          learning how to build them myself with node.js and express.js. I'm
          excited about the possibilities that the tech industry holds, and I'm
          ready to make a big impact. I'm always open to working with others and
          contributing to projects in any way I can. I'm a dedicated learner and
          problem-solver, and I know that these traits will serve me well in
          whatever I tackle next.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              What i want to my future.
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          As a developer, the type of company or organization I want to work for
          is one that aligns with my personal values and offers opportunities
          for growth and advancement. Ideally, I would like to work for a
          company that values innovation and creativity, and encourages
          employees to experiment with new technologies and ideas. I am also
          interested in working for a company that is committed to creating a
          positive impact on society and the environment. This could include
          companies that focus on sustainability, social justice, or community
          development. In terms of the company culture, I would like to work for
          an organization that values collaboration, open communication, and
          work-life balance. I believe that a supportive and inclusive work
          environment is key to fostering creativity and productivity. Overall,
          I am looking for a company that values its employees, fosters a
          culture of innovation and collaboration, and has a positive impact on
          society and the environment.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
